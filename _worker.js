import { connect } from "cloudflare:sockets";

let password = '';
let proxyIP = '';
let sub = ''; 
let subConverter = 'SUBAPI.fxxk.dedyn.io';// clash订阅转换后端，目前使用CM的订阅转换功能。自带虚假节点信息防泄露
let subConfig = "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"; //订阅配置文件
let subProtocol = 'https';
let subEmoji = 'true';
let socks5Address = '';
let parsedSocks5Address = {}; 
let enableSocks = false;
let fakeUserID ;
let fakeHostName ;
const expire = 4102329600;//2099-12-31
let proxyIPs ;
let socks5s;
let go2Socks5s = [
	'*ttvnw.net',
	'*tapecontent.net',
	'*cloudatacdn.com',
	'*.loadshare.org',
];
let addresses = [];
let addressesapi = [];
let addressescsv = [];
let DLS = 8;
let remarkIndex = 1;//CSV备注所在列偏移量
let FileName = 'epeius';
let BotToken ='';
let ChatID =''; 
let proxyhosts = [];
let proxyhostsURL = '';
let RproxyIP = 'false';
let httpsPorts = ["2053","2083","2087","2096","8443"];
let sha224Password ;
const regex = /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[.*\]):?(\d+)?#?(.*)?$/;
let proxyIPPool = [];
let path = '/?ed=2560';

export default {
    async fetch(request, env, ctx) {
        try {
            // 获取User-Agent并转换为小写
            const UA = request.headers.get('User-Agent') || 'null';
            const userAgent = UA.toLowerCase();

            // 确定密码
            let password = env.PASSWORD || env.pswd || env.UUID || env.uuid || password;
            if (!password) {
                return new Response('请设置你的PASSWORD变量，或尝试重试部署，检查变量是否生效？', { 
                    status: 404,
                    headers: {
                        "Content-Type": "text/plain;charset=utf-8",
                    }
                });
            }

            // 计算SHA-224哈希值
            const sha224Password = env.SHA224 || env.SHA224PASS || sha224(password);

            // 获取当前日期的时间戳
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0); // 设置时间为当天
            const timestamp = Math.ceil(currentDate.getTime() / 1000);

            // 生成fakeUserIDMD5
            const fakeUserIDMD5 = await MD5MD5(`${password}${timestamp}`);
            const fakeUserID = [
                fakeUserIDMD5.slice(0, 8),
                fakeUserIDMD5.slice(8, 12),
                fakeUserIDMD5.slice(12, 16),
                fakeUserIDMD5.slice(16, 20),
                fakeUserIDMD5.slice(20)
            ].join('-');

            // 生成fakeHostName
            const fakeHostName = `${fakeUserIDMD5.slice(6, 9)}.${fakeUserIDMD5.slice(13, 19)}`;

            // 处理代理IP
            let proxyIP = env.PROXYIP || env.proxyip || proxyIP;
            const proxyIPs = await ADD(proxyIP);
            proxyIP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];

            // 处理SOCKS5地址
            let socks5Address = env.SOCKS5 || socks5Address;
            const socks5s = await ADD(socks5Address);
            socks5Address = socks5s[Math.floor(Math.random() * socks5s.length)];
            socks5Address = socks5Address.split('//')[1] || socks5Address;

            // 处理GO2SOCKS5和CFPORTS
            if (env.GO2SOCKS5) go2Socks5s = await ADD(env.GO2SOCKS5);
            if (env.CFPORTS) httpsPorts = await ADD(env.CFPORTS);

            // 解析SOCKS5地址
            let parsedSocks5Address, enableSocks, RproxyIP;
            if (socks5Address) {
                try {
                    parsedSocks5Address = socks5AddressParser(socks5Address);
                    RproxyIP = env.RPROXYIP || 'false';
                    enableSocks = true;
                } catch (err) {
                    console.log(err.toString());
                    RproxyIP = env.RPROXYIP || !proxyIP ? 'true' : 'false';
                    enableSocks = false;
                }
            } else {
                RproxyIP = env.RPROXYIP || !proxyIP ? 'true' : 'false';
            }

            // 处理WebSocket升级请求
            const upgradeHeader = request.headers.get("Upgrade");
            const url = new URL(request.url);
            if (!upgradeHeader || upgradeHeader !== "websocket") {
                // 处理非WebSocket请求
                if (env.ADD) addresses = await ADD(env.ADD);
                if (env.ADDAPI) addressesapi = await ADD(env.ADDAPI);
                if (env.ADDCSV) addressescsv = await ADD(env.ADDCSV);
                DLS = Number(env.DLS) || DLS;
                remarkIndex = Number(env.CSVREMARK) || remarkIndex;
                BotToken = env.TGTOKEN || BotToken;
                ChatID = env.TGID || ChatID; 
                FileName = env.SUBNAME || FileName;
                subEmoji = env.SUBEMOJI || env.EMOJI || subEmoji;
                if(subEmoji == '0') subEmoji = 'false';

                sub = env.SUB || sub;
                subConverter = env.SUBAPI || subConverter;
                if (subConverter.includes("http://")) {
                    subConverter = subConverter.split("//")[1];
                    subProtocol = 'http';
                } else {
                    subConverter = subConverter.split("//")[1] || subConverter;
                }
                subConfig = env.SUBCONFIG || subConfig;
                if (url.searchParams.has('sub') && url.searchParams.get('sub') !== '') sub = url.searchParams.get('sub');

                if (url.searchParams.has('proxyip')) {
                    path = `/?ed=2560&proxyip=${url.searchParams.get('proxyip')}`;
                    RproxyIP = 'false';
                } else if (url.searchParams.has('socks5')) {
                    path = `/?ed=2560&socks5=${url.searchParams.get('socks5')}`;
                    RproxyIP = 'false';
                } else if (url.searchParams.has('socks')) {
                    path = `/?ed=2560&socks5=${url.searchParams.get('socks')}`;
                    RproxyIP = 'false';
                }

                switch (url.pathname) {
                    case '/':
                        if (env.URL302) return Response.redirect(env.URL302, 302);
                        else if (env.URL) return await proxyURL(env.URL, url);
                        else return new Response(JSON.stringify(request.cf, null, 4), {
                            status: 200,
                            headers: {
                                'content-type': 'application/json',
                            },
                        });
                    case `/${fakeUserID}`:
                        const fakeConfig = await get特洛伊Config(password, request.headers.get('Host'), sub, 'CF-Workers-SUB', RproxyIP, url);
                        return new Response(fakeConfig, { status: 200 });
                    case `/${password}`:
                        await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${UA}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
                        const 特洛伊Config = await get特洛伊Config(password, request.headers.get('Host'), sub, UA, RproxyIP, url);
                        const now = Date.now();
                        const today = new Date(now);
                        today.setHours(0, 0, 0, 0);
                        const UD = Math.floor(((now - today.getTime()) / 86400000) * 24 * 1099511627776 / 2);
                        let pagesSum = UD;
                        let workersSum = UD;
                        let total = 24 * 1099511627776;

                        if (userAgent && (userAgent.includes('mozilla') || userAgent.includes('subconverter'))) {
                            return new Response(特洛伊Config, {
                                status: 200,
                                headers: {
                                    "Content-Type": "text/plain;charset=utf-8",
                                    "Profile-Update-Interval": "6",
                                    "Subscription-Userinfo": `upload=${pagesSum}; download=${workersSum}; total=${total}; expire=${expire}`,
                                }
                            });
                        } else {
                            return new Response(特洛伊Config, {
                                status: 200,
                                headers: {
                                    "Content-Disposition": `attachment; filename=${FileName}; filename*=utf-8''${encodeURIComponent(FileName)}`,
                                    "Content-Type": "text/plain;charset=utf-8",
                                    "Profile-Update-Interval": "6",
                                    "Subscription-Userinfo": `upload=${pagesSum}; download=${workersSum}; total=${total}; expire=${expire}`,
                                }
                            });
                        }
                    default:
                        if (env.URL302) return Response.redirect(env.URL302, 302);
                        else if (env.URL) return await proxyURL(env.URL, url);
                        else return new Response('不用怀疑！你PASSWORD就是错的！！！', { status: 404 });
                }
            } else {
                // 处理WebSocket请求
                socks5Address = url.searchParams.get('socks5') || socks5Address;
                if (new RegExp('/socks5=', 'i').test(url.pathname)) socks5Address = url.pathname.split('5=')[1];
                else if (new RegExp('/socks://', 'i').test(url.pathname) || new RegExp('/socks5://', 'i').test(url.pathname)) {
                    socks5Address = url.pathname.split('://')[1].split('#')[0];
                    if (socks5Address.includes('@')) {
                        let userPassword = socks5Address.split('@')[0];
                        const base64Regex = /^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i;
                        if (base64Regex.test(userPassword) && !userPassword.includes(':')) userPassword = atob(userPassword);
                        socks5Address = `${userPassword}@${socks5Address.split('@')[1]}`;
                    }
                }

                if (socks5Address) {
                    try {
                        parsedSocks5Address = socks5AddressParser(socks5Address);
                        enableSocks = true;
                    } catch (err) {
                        console.log(err.toString());
                        enableSocks = false;
                    }
                } else {
                    enableSocks = false;
                }

                if (url.searchParams.has('proxyip')) {
                    proxyIP = url.searchParams.get('proxyip');
                    enableSocks = false;
                } else if (new RegExp('/proxyip=', 'i').test(url.pathname)) {
                    proxyIP = url.pathname.toLowerCase().split('/proxyip=')[1];
                    enableSocks = false;
                } else if (new RegExp('/proxyip.', 'i').test(url.pathname)) {
                    proxyIP = `proxyip.${url.pathname.toLowerCase().split("/proxyip.")[1]}`;
                    enableSocks = false;
                }

                return await 特洛伊OverWSHandler(request);
            }
        } catch (err) {
            console.error(err.toString());
            return new Response(err.toString(), { status: 500 });
        }
    }
};

// 特洛伊OverWSHandler 函数处理 WebSocket 请求
async function 特洛伊OverWSHandler(request) {
    // 创建一个 WebSocket 对，包含客户端和服务器端的 WebSocket 实例
    const webSocketPair = new WebSocketPair();
    const [client, webSocket] = Object.values(webSocketPair);
    // 服务器端的 WebSocket 接受连接
    webSocket.accept();

    // 存储地址和端口信息，初始化为空
    let address = "";
    let portWithRandomLog = "";

    // 日志记录函数，打印带有地址和端口信息的日志
    const log = (info, event) => {
        console.log(`[${address}:${portWithRandomLog}] ${info}`, event || "");
    };

    // 从请求头中获取 sec-websocket-protocol 的值作为早期数据头
    const earlyDataHeader = request.headers.get("sec-websocket-protocol") || "";
    // 创建一个可读的 WebSocket 流
    const readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log);

    // 存储远程套接字的包装对象和 UDP 流的写入函数
    let remoteSocketWrapper = { value: null };
    let udpStreamWrite = null;

    // 将可读的 WebSocket 流传输到可写流中
    readableWebSocketStream.pipeTo(new WritableStream({
        // 写入数据的处理函数
        async write(chunk, controller) {
            if (udpStreamWrite) return udpStreamWrite(chunk);

            if (remoteSocketWrapper.value) {
                await writeToRemoteSocket(remoteSocketWrapper.value, chunk);
                return;
            }

            // 解析特洛伊头信息
            const parsedHeader = await parse特洛伊Header(chunk);
            if (parsedHeader.hasError) throw new Error(parsedHeader.message);

            // 设置连接参数
            ({ address, portWithRandomLog } = setupConnectionParameters(parsedHeader));
            // 处理 TCP 出站连接
            handleTCPOutBound(remoteSocketWrapper, parsedHeader, rawClientData, webSocket, log, parsedHeader.addressType);
        },
        // 关闭流时的处理函数
        close() {
            log("readableWebSocketStream is closed");
        },
        // 终止流时的处理函数
        abort(reason) {
            log("readableWebSocketStream is aborted", JSON.stringify(reason));
        }
    })).catch((err) => {
        log("readableWebSocketStream pipeTo error", err);
    });

    // 返回一个 HTTP 101 响应，建立 WebSocket 连接
    return new Response(null, {
        status: 101,
        // @ts-ignore
        webSocket: client
    });
}

// 解析特洛伊头信息的函数
async function parse特洛伊Header(buffer) {
    // 检查缓冲区长度是否足够
    if (buffer.byteLength < 56) return { hasError: true, message: "invalid data" };

    // 查找 CR LF 标记的索引
    const crLfIndex = findCrLfIndex(buffer);
    if (crLfIndex === -1) return { hasError: true, message: "invalid header format (missing CR LF)" };

    // 提取密码
    const password = new TextDecoder().decode(buffer.slice(0, crLfIndex));
    if (password!== sha224Password) return { hasError: true, message: "invalid password" };

    // 提取 SOCKS5 数据缓冲区
    const socks5DataBuffer = buffer.slice(crLfIndex + 2);
    if (socks5DataBuffer.byteLength < 6) return { hasError: true, message: "invalid SOCKS5 request data" };

    // 从视图中读取命令和地址类型等信息
    const view = new DataView(socks5DataBuffer);
    const cmd = view.getUint8(0);
    if (cmd!== 1) return { hasError: true, message: "unsupported command, only TCP (CONNECT) is allowed" };

    const atype = view.getUint8(1);
    const addressInfo = getAddressFromAtype(atype, socks5DataBuffer);
    if (!addressInfo.success) return addressInfo;

    const portIndex = addressInfo.index + addressInfo.length;
    const portRemote = view.getUint16(portIndex);

    // 返回解析结果
    return {
        hasError: false,
        addressRemote: addressInfo.address,
        portRemote,
        rawClientData: socks5DataBuffer.slice(portIndex + 2),
        addressType: atype
    };
}

// 设置连接参数的函数
function setupConnectionParameters(parsedHeader) {
    // 生成带有随机后缀的端口日志信息
    const portWithRandomLog = `${parsedHeader.portRemote}--${Math.random()} tcp`;
    return { address: parsedHeader.addressRemote, portWithRandomLog };
}

// 处理 TCP 出站连接的函数
async function handleTCPOutBound(remoteSocket, parsedHeader, rawClientData, webSocket, log, addressType) {
    // 判断是否使用 SOCKS5 协议
    const useSocks = await shouldUseSocks5(parsedHeader.addressRemote);
    // 建立并写入连接
    const tcpSocket = await connectAndWrite(parsedHeader.addressRemote, parsedHeader.portRemote, rawClientData, useSocks, log, addressType);

    remoteSocket.value = tcpSocket;
    // 将远程套接字连接到 WebSocket
    remoteSocketToWS(tcpSocket, webSocket, retryConnection.bind(null, remoteSocket, parsedHeader, rawClientData, webSocket, log, addressType), log);
}

// 判断是否使用 SOCKS5 协议的函数
async function shouldUseSocks5(address) {
    if (go2Socks5s.includes('all in') || go2Socks5s.includes('*')) return true;
    return go2Socks5s.some(pattern => new RegExp(`^${pattern.replace(/\*/g, '.*')}$`, 'i').test(address));
}

// 建立并写入连接的函数
async function connectAndWrite(address, port, rawClientData, useSocks, log, addressType) {
    log(`connected to ${address}:${port}`);
    // 建立 TCP 连接，根据是否使用 SOCKS5 协议选择不同的连接方式
    const tcpSocket = useSocks? await socks5Connect(addressType, address, port, log) : connect({ hostname: address, port });
    const writer = tcpSocket.writable.getWriter();
    // 写入原始客户端数据
    await writer.write(rawClientData);
    writer.releaseLock();
    return tcpSocket;
}

// 重试连接的函数
async function retryConnection(remoteSocket, parsedHeader, rawClientData, webSocket, log, addressType) {
    try {
        // 重新判断是否使用 SOCKS5 协议
        const useSocks = await shouldUseSocks5(parsedHeader.addressRemote);
        // 重新建立并写入连接
        const tcpSocket = await connectAndWrite(parsedHeader.addressRemote, parsedHeader.portRemote, rawClientData, useSocks, log, addressType);
        remoteSocket.value = tcpSocket;
        // 将远程套接字连接到 WebSocket
        remoteSocketToWS(tcpSocket, webSocket, null, log);
    } catch (error) {
        // 关闭 WebSocket 并打印错误
        safeCloseWebSocket(webSocket);
        console.error("retry tcpSocket closed error", error);
    }
}

// 将远程套接字连接到 WebSocket 的函数
async function remoteSocketToWS(remoteSocket, webSocket, retry, log) {
    let hasIncomingData = false;

    // 将远程套接字的可读流传输到可写流中
    await remoteSocket.readable.pipeTo(new WritableStream({
        start() {},
        async write(chunk, controller) {
            hasIncomingData = true;
            if (webSocket.readyState!== WS_READY_STATE_OPEN) {
                controller.error("webSocket connection is not open");
            }
            // 将数据发送到 WebSocket
            webSocket.send(chunk);
        },
        close() {
            log(`remoteSocket.readable is closed, hasIncomingData: ${hasIncomingData}`);
        },
        abort(reason) {
            console.error("remoteSocket.readable abort", reason);
        }
    })).catch((error) => {
        console.error(`remoteSocketToWS error:`, error.stack || error);
        safeCloseWebSocket(webSocket);
    });

    if (!hasIncomingData && retry) {
        log(`retry`);
        retry();
    }
}

// 创建可读的 WebSocket 流的函数
function makeReadableWebSocketStream(webSocketServer, earlyDataHeader, log) {
    let readableStreamCancel = false;

    const stream = new ReadableStream({
        start(controller) {
            // 监听 WebSocket 的消息事件，将数据添加到控制器队列
            webSocketServer.addEventListener("message", (event) => {
                if (readableStreamCancel) return;
                controller.enqueue(event.data);
            });

            // 监听 WebSocket 的关闭事件
            webSocketServer.addEventListener("close", () => {
                safeCloseWebSocket(webSocketServer);
                if (readableStreamCancel) return;
                controller.close();
            });

            // 监听 WebSocket 的错误事件
            webSocketServer.addEventListener("error", (err) => {
                log("webSocketServer error");
                controller.error(err);
            });

            // 处理早期数据
            const { earlyData, error } = base64ToArrayBuffer(earlyDataHeader);
            if (error) controller.error(error);
            else if (earlyData) controller.enqueue(earlyData);
        },
        pull(controller) {},
        // 取消流的处理函数
        cancel(reason) {
            if (readableStreamCancel) return;
            log(`readableStream was canceled, due to ${reason}`);
            readableStreamCancel = true;
            safeCloseWebSocket(webSocketServer);
        }
    });

    return stream;
}

// 查找 CR LF 标记索引的函数
function findCrLfIndex(buffer) {
    for (let i = 56; i < buffer.byteLength - 1; i++) {
        if (new Uint8Array(buffer.slice(i, i + 2)).every(byte => byte === 0x0d || byte === 0x0a)) return i;
    }
    return -1;
}

// 根据地址类型获取地址信息的函数
function getAddressFromAtype(atype, buffer) {
    const view = new DataView(buffer);
    switch (atype) {
        // IPv4 地址
        case 1:
            return getIPv4Address(view, 2);
        // 域名
        case 3:
            return getDomainName(view, 2);
        // IPv6 地址
        case 4:
            return getIPv6Address(view, 2);
        default:
            return { success: false, message: `invalid addressType is ${atype}` };
    }
}

// 获取 IPv4 地址的函数
function getIPv4Address(view, index) {
    const addressBytes = Array.from({ length: 4 }, (_, i) => view.getUint8(index + i)).join('.');
    return { success: true, address: addressBytes, index, length: 4 };
}

// 获取域名的函数
function getDomainName(view, index) {
    const domainLength = view.getUint8(index);
    const domain = new TextDecoder().decode(buffer.slice(index + 1, index + 1 + domainLength));
    return { success: true, address: domain, index: index + 1, length: domainLength };
}

// 获取 IPv6 地址的函数
function getIPv6Address(view, index) {
    const ipv6Parts = Array.from({ length: 8 }, (_, i) => view.getUint16(index + i * 2).toString(16)).join(':');
    return { success: true, address: ipv6Parts, index, length: 16 };
}

// 将 Base64 字符串转换为 ArrayBuffer 的函数
function base64ToArrayBuffer(base64Str) {
    if (!base64Str) return { error: null };

    try {
        base64Str = base64Str.replace(/-/g, '+').replace(/_/g, '/');
        const decodedString = atob(base64Str);
        const arrayBuffer = Uint8Array.from(decodedString, char => char.charCodeAt(0)).buffer;
        return { earlyData: arrayBuffer, error: null };
    } catch (error) {
        return { error };
    }
}

// 向远程套接字写入数据的函数
async function writeToRemoteSocket(socket, chunk) {
    const writer = socket.writable.getWriter();
    await writer.write(chunk);
    writer.releaseLock();
}

// WebSocket 的打开状态常量
let WS_READY_STATE_OPEN = 1;
// WebSocket 的关闭状态常量
let WS_READY_STATE_CLOSING = 2;

function safeCloseWebSocket(socket) {
    try {
        // 检查WebSocket是否处于打开或正在关闭的状态
        if (socket.readyState === WS_READY_STATE_OPEN || socket.readyState === WS_READY_STATE_CLOSING) {
            socket.close(); // 关闭WebSocket
        }
    } catch (error) {
        console.error("safeCloseWebSocket error", error); // 记录关闭错误
    }
}

// 函数用于还原假信息
function revertFakeInfo(content, userID, hostName, isBase64) {
    if (isBase64) content = atob(content); // 如果内容是Base64编码，则解码
    // 替换假用户ID和主机名为真实值
    content = content.replace(new RegExp(fakeUserID, 'g'), userID).replace(new RegExp(fakeHostName, 'g'), hostName);
    if (isBase64) content = btoa(content); // 如果需要，重新编码为Base64
    return content; // 返回处理后的内容
}

// 函数用于计算两次MD5哈希值
async function MD5MD5(text) {
    const encoder = new TextEncoder(); // 创建TextEncoder实例

    // 第一次MD5哈希
    const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
    const firstPassArray = Array.from(new Uint8Array(firstPass)); // 将结果转换为数组
    const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join(''); // 转换为十六进制字符串

    // 第二次MD5哈希
    const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27))); // 使用第一次哈希的一部分作为输入
    const secondPassArray = Array.from(new Uint8Array(secondPass)); // 将结果转换为数组
    const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join(''); // 转换为十六进制字符串

    return secondHex.toLowerCase(); // 返回最终的十六进制字符串并转为小写
}

// 函数用于处理和格式化输入内容
async function ADD(内容) {
    // 将制表符、双引号、单引号和换行符替换为逗号
    let 替换后的内容 = 内容.replace(/[	|"'\r\n]+/g, ',').replace(/,+/g, ',');
    
    // 删除开头和结尾的逗号（如果有的话）
    if (替换后的内容.charAt(0) === ',') 替换后的内容 = 替换后的内容.slice(1);
    if (替换后的内容.charAt(替换后的内容.length - 1) === ',') 替换后的内容 = 替换后的内容.slice(0, 替换后的内容.length - 1);
    
    // 使用逗号分割字符串，得到地址数组
    const 地址数组 = 替换后的内容.split(',');
    
    return 地址数组;
}

// 函数用于代理URL请求
async function proxyURL(proxyURL, url) {
    const URLs = await ADD(proxyURL); // 处理代理URL列表
    const fullURL = URLs[Math.floor(Math.random() * URLs.length)]; // 随机选择一个代理URL
    
    // 解析目标URL
    let parsedURL = new URL(fullURL);
    console.log(parsedURL);
    
    // 提取并可能修改URL组件
    let URLProtocol = parsedURL.protocol.slice(0, -1) || 'https'; // 获取协议类型
    let URLHostname = parsedURL.hostname; // 获取主机名
    let URLPathname = parsedURL.pathname; // 获取路径
    let URLSearch = parsedURL.search; // 获取查询参数
    
    // 处理路径
    if (URLPathname.charAt(URLPathname.length - 1) === '/') {
        URLPathname = URLPathname.slice(0, -1); // 去掉末尾的斜杠
    }
    URLPathname += url.pathname; // 追加原始URL的路径
    
    // 构建新的URL
    let newURL = `${URLProtocol}://${URLHostname}${URLPathname}${URLSearch}`;
    
    // 反向代理请求
    let response = await fetch(newURL);
    
    // 创建新的响应
    let newResponse = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers
    });
    
    // 添加自定义头部，包含URL信息
    newResponse.headers.set('X-New-URL', newURL);
    
    return newResponse;
}

// 函数用于生成配置信息
function 配置信息(密码, 域名地址) {
    const 啥啥啥_写的这是啥啊 = 'dHJvamFu';
    const 协议类型 = atob(啥啥啥_写的这是啥あ); // 解码协议类型
    
    const 别名 = FileName; // 获取别名
    let 地址 = 域名地址; // 设置域名地址
    let 端口 = 443; // 默认端口
    
    const 传输层协议 = 'ws'; // 传输层协议
    const 伪装域名 = 域名地址; // 伪装域名
    const 路径 = path; // 获取路径
    
    let 传输层安全 = ['tls', true]; // 传输层安全性设置
    const SNI = 域名地址; // SNI设置
    const 指纹 = 'randomized'; // 客户端指纹
    
    // 构建V2Ray配置字符串
    const v2ray = `${协议类型}://${encodeURIComponent(密码)}@${地址}:${端口}?security=${传输层安全[0]}&sni=${SNI}&alpn=h3&fp=${指纹}&allowInsecure=1&type=${传输层协议}&host=${伪装域名}&path=${encodeURIComponent(路径)}#${encodeURIComponent(别名)}`;
    
    // 构建Clash配置字符串
    const clash = `- {name: ${别名}, server: ${地址}, port: ${端口}, udp: false, client-fingerprint: ${指纹}, type: ${协议类型}, password: ${密码}, sni: ${SNI}, alpn: [h3], skip-cert-verify: true, network: ${传输层协议}, ws-opts: {path: "${路径}", headers: {Host: ${伪装域名}}}}`;

    return [v2ray, clash]; // 返回V2Ray和Clash配置字符串
}

let subParams = ['sub', 'base64', 'b64', 'clash', 'singbox', 'sb', 'surge'];

async function get特洛伊Config(password, hostName, sub, UA, RproxyIP, _url) {
    if (sub) {
        const match = sub.match(/^(?:https?:\/\/)?([^\/]+)/);
        if (match) {
            sub = match[1];
        }
        const subs = await ADD(sub);
        if (subs.length > 1) sub = subs[0];
    } else if ((addresses.length + addressesapi.length + addressescsv.length) === 0) {
        // 定义 Cloudflare IP 范围的 CIDR 列表
        let cfips = [
            '103.21.244.0/23',
            '104.16.0.0/13',
            '104.24.0.0/14',
            '172.64.0.0/14',
            '188.114.96.0/21',
            '190.93.240.0/21',
        ];

        // 生成符合给定 CIDR 范围的随机 IP 地址
        function generateRandomIPFromCIDR(cidr) {
            const [base, mask] = cidr.split('/');
            const baseIP = base.split('.').map(Number);
            const subnetMask = 32 - parseInt(mask, 10);
            const maxHosts = Math.pow(2, subnetMask) - 1;
            const randomHost = Math.floor(Math.random() * maxHosts);

            const randomIP = baseIP.map((octet, index) => {
                if (index < 2) return octet;
                if (index === 2) return (octet & (255 << (subnetMask - 8))) + ((randomHost >> 8) & 255);
                return (octet & (255 << subnetMask)) + (randomHost & 255);
            });

            return randomIP.join('.');
        }

        addresses = addresses.concat('127.0.0.1:1234#CFnat');
        addresses = addresses.concat(cfips.map(cidr => generateRandomIPFromCIDR(cidr) + '#CF随机节点'));
    }

    const userAgent = UA.toLowerCase();
    const Config = 配置信息(password, hostName);
    const v2ray = Config[0];
    const clash = Config[1];
    let proxyhost = "";

    if (hostName.includes(".workers.dev")) {
        if (proxyhostsURL && (!proxyhosts || proxyhosts.length === 0)) {
            try {
                const response = await fetch(proxyhostsURL);

                if (!response.ok) {
                    console.error('获取地址时出错:', response.status, response.statusText);
                    return; // 如果有错误，直接返回
                }

                const text = await response.text();
                const lines = text.split('\n');
                // 过滤掉空行或只包含空白字符的行
                const nonEmptyLines = lines.filter(line => line.trim() !== '');

                proxyhosts = proxyhosts.concat(nonEmptyLines);
            } catch (error) {
                console.error('获取地址时出错:', error);
            }
        }
        if (proxyhosts.length !== 0) proxyhost = proxyhosts[Math.floor(Math.random() * proxyhosts.length)] + "/";
    }

    if (userAgent.includes('mozilla') && !subParams.some(_searchParams => _url.searchParams.has(_searchParams))) {
        let surge = `Surge订阅地址:\nhttps://${proxyhost}${hostName}/${password}?surge`;
        if (hostName.includes(".workers.dev")) surge = "Surge订阅必须绑定自定义域";

        const newSocks5s = socks5s.map(socks5Address => {
            if (socks5Address.includes('@')) return socks5Address.split('@')[1];
            else if (socks5Address.includes('//')) return socks5Address.split('//')[1];
            else return socks5Address;
        });

        let socks5List = '';
        if (go2Socks5s.length > 0 && enableSocks) {
            socks5List = `${decodeURIComponent('SOCKS5%EF%BC%88%E7%99%BD%E5%90%8D%E5%8D%95%EF%BC%89%3A%20')}`;
            if (go2Socks5s.includes(atob('YWxsIGlu')) || go2Socks5s.includes(atob('Kg=='))) socks5List += `${decodeURIComponent('%E6%89%80%E6%9C%89%E6%B5%81%E9%87%8F')}\n`;
            else socks5List += `\n  ${go2Socks5s.join('\n  ')}\n`;
        }

        let 订阅器 = '';
        if (sub) {
            if (enableSocks) 订阅器 += `CFCDN（访问方式）: Socks5\n  ${newSocks5s.join('\n  ')}\n${socks5List}`;
            else if (proxyIP && proxyIP !== '') 订阅器 += `CFCDN（访问方式）: ProxyIP\n  ${proxyIPs.join('\n  ')}\n`;
            else if (RproxyIP === 'true') 订阅器 += `CFCDN（访问方式）: 自动获取ProxyIP\n`;
            else 订阅器 += `CFCDN（访问方式）: 无法访问, 需要您设置 proxyIP/PROXYIP ！！！\n`;
            订阅器 += `\nSUB（优选订阅生成器）: ${sub}`;
        } else {
            if (enableSocks) 订阅器 += `CFCDN（访问方式）: Socks5\n  ${newSocks5s.join('\n  ')}\n${socks5List}`;
            else if (proxyIP && proxyIP !== '') 订阅器 += `CFCDN（访问方式）: ProxyIP\n  ${proxyIPs.join('\n  ')}\n`;
            else 订阅器 += `CFCDN（访问方式）: 无法访问, 需要您设置 proxyIP/PROXYIP ！！！\n`;
            订阅器 += `\n您的订阅内容由 内置 addresses/ADD* 参数变量提供\n`;
            if (addresses.length > 0) 订阅器 += `ADD（TLS优选域名&IP）: \n  ${addresses.join('\n  ')}\n`;
            if (addressesapi.length > 0) 订阅器 += `ADDAPI（TLS优选域名&IP 的 API）: \n  ${addressesapi.join('\n  ')}\n`;
            if (addressescsv.length > 0) 订阅器 += `ADDCSV（IPTest测速csv文件 限速 ${DLS} ）: \n  ${addressescsv.join('\n  ')}\n`;
        }

        return `
################################################################
Subscribe / sub 订阅地址, 支持 Base64、clash-meta、sing-box 订阅格式
---------------------------------------------------------------
快速自适应订阅地址:
https://${proxyhost}${hostName}/${password}
https://${proxyhost}${hostName}/${password}?sub

Base64订阅地址:
https://${proxyhost}${hostName}/${password}?b64
https://${proxyhost}${hostName}/${password}?base64

clash订阅地址:
https://${proxyhost}${hostName}/${password}?clash

singbox订阅地址:
https://${proxyhost}${hostName}/${password}?sb
https://${proxyhost}${hostName}/${password}?singbox

${surge}
---------------------------------------------------------------
################################################################
${FileName} 配置信息
---------------------------------------------------------------
HOST: ${hostName}
PASSWORD: ${password}
SHA224: ${sha224Password}
FAKEPASS: ${fakeUserID}
UA: ${UA}

${订阅器}
SUBAPI（订阅转换后端）: ${subProtocol}://${subConverter}
SUBCONFIG（订阅转换配置文件）: ${subConfig}
---------------------------------------------------------------
################################################################
v2ray
---------------------------------------------------------------
${v2ray}
---------------------------------------------------------------
################################################################
clash-meta
---------------------------------------------------------------
${clash}
---------------------------------------------------------------
################################################################
${decodeURIComponent(atob(`JTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTIzJTBBdGVsZWdyYW0lRUYlQkMlOUElNDB0ZyVFNyU5QiU5NyVFNSU5QyVBMyUwQSUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMw==`))}
`;
    } else {
        if (typeof fetch !== 'function') {
            return 'Error: fetch is not available in this environment.';
        }

        // 如果是使用默认域名，则改成一个workers的域名，订阅器会加上代理
        if (hostName.includes(".workers.dev")) {
            fakeHostName = `${fakeHostName}.workers.dev`;
        } else {
            fakeHostName = `${fakeHostName}.xyz`;
        }

        let url = `https://${sub}/sub?host=${fakeHostName}&pw=${fakeUserID}&password=${fakeUserID + atob('JmVwZWl1cz1jbWxpdSZwcm94eWlwPQ==') + RproxyIP}&path=${encodeURIComponent(path)}`;
        let isBase64 = true;
        let newAddressesapi = [];
        let newAddressescsv = [];

        if (!sub || sub === "") {
            if (hostName.includes('workers.dev')) {
                if (proxyhostsURL && (!proxyhosts || proxyhosts.length === 0)) {
                    try {
                        const response = await fetch(proxyhostsURL);

                        if (!response.ok) {
                            console.error('获取地址时出错:', response.status, response.statusText);
                            return; // 如果有错误，直接返回
                        }

                        const text = await response.text();
                        const lines = text.split('\n');
                        // 过滤掉空行或只包含空白字符的行
                        const nonEmptyLines = lines.filter(line => line.trim() !== '');

                        proxyhosts = proxyhosts.concat(nonEmptyLines);
                    } catch (error) {
                        console.error('获取地址时出错:', error);
                    }
                }
                // 使用Set对象去重
                proxyhosts = [...new Set(proxyhosts)];
            }

            newAddressesapi = await getAddressesapi(addressesapi);
            newAddressescsv = await getAddressescsv('TRUE');
            url = `https://${hostName}/${fakeUserID + _url.search}`;
        }

        if (!userAgent.includes(('CF-Workers-SUB').toLowerCase())) {
            if ((userAgent.includes('clash') && !userAgent.includes('nekobox')) || (_url.searchParams.has('clash'))) {
                url = `${subProtocol}://${subConverter}/sub?target=clash&url=${encodeURIComponent(url)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=${subEmoji}&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
                isBase64 = false;
            } else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || _url.searchParams.has('singbox') || _url.searchParams.has('sb')) {
                url = `${subProtocol}://${subConverter}/sub?target=singbox&url=${encodeURIComponent(url)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=${subEmoji}&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
                isBase64 = false;
            } else if (userAgent.includes('surge') || _url.searchParams.has('surge')) {
                url = `${subProtocol}://${subConverter}/sub?target=surge&ver=4&url=${encodeURIComponent(url)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=${subEmoji}&list=false&xudp=false&udp=false&tfo=false&expand=true&scv=true&fdn=false`;
                isBase64 = false;
            }
        }

        try {
            let content;
            if ((!sub || sub === "") && isBase64 === true) {
                content = await subAddresses(fakeHostName, fakeUserID, userAgent, newAddressesapi, newAddressescsv);
            } else {
                const response = await fetch(url, {
                    headers: {
                        'User-Agent': atob('Q0YtV29ya2Vycy1lcGVpdXMvY21saXU='),
                    }
                });
                content = await response.text();
            }

            if (_url.pathname === `/${fakeUserID}`) return content;

            content = revertFakeInfo(content, password, hostName, isBase64);
            if (userAgent.includes('surge') || _url.searchParams.has('surge')) content = surge(content, `https://${hostName}/${password}?surge`);
            return content;
        } catch (error) {
            console.error('Error fetching content:', error);
            return `Error fetching content: ${error.message}`;
        }
    }
}

async function sendMessage(type, ip, add_data = "") {
    if (BotToken !== '' && ChatID !== '') {
        let msg = "";
        try {
            const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
            if (response.status === 200) {
                const ipInfo = await response.json();
                msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
            } else {
                msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
            }
        } catch (error) {
            console.error('获取IP信息时出错:', error);
            msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
        }

        const url = `https://api.telegram.org/bot${BotToken}/sendMessage?chat_id=${ChatID}&parse_mode=HTML&text=${encodeURIComponent(msg)}`;
        return fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;',
                'Accept-Encoding': 'gzip, deflate, br',
                'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
            }
        });
    }
}

/**
 * 
 * @param {number} addressType - 地址类型 (1: IPv4, 3: Domain name, 4: IPv6)
 * @param {string} addressRemote - 远程地址
 * @param {number} portRemote - 远程端口
 * @param {function} log - 日志记录函数
 */
async function socks5Connect(addressType, addressRemote, portRemote, log) {
    const { username, password, hostname, port } = parsedSocks5Address;
    // 连接到SOCKS服务器
    const socket = connect({
        hostname,
        port,
    });

    // SOCKS5握手请求头格式 (Worker -> Socks Server):
    // +----+----------+----------+
    // |VER | NMETHODS | METHODS  |
    // +----+----------+----------+
    // | 1  |	1	 | 1 to 255 |
    // +----+----------+----------+

    // 方法:
    // 0x00 NO AUTHENTICATION REQUIRED
    // 0x02 USERNAME/PASSWORD https://datatracker.ietf.org/doc/html/rfc1929
    const socksGreeting = new Uint8Array([5, 2, 0, 2]);

    const writer = socket.writable.getWriter();

    await writer.write(socksGreeting);
    log('sent socks greeting');

    const reader = socket.readable.getReader();
    const encoder = new TextEncoder();
    let res = (await reader.read()).value;

    // SOCKS5握手响应格式 (Socks Server -> Worker):
    // +----+--------+
    // |VER | METHOD |
    // +----+--------+
    // | 1  |   1	|
    // +----+--------+
    if (res[0] !== 0x05) {
        log(`socks server version error: ${res[0]} expected: 5`);
        return;
    }
    if (res[1] === 0xff) {
        log("no acceptable methods");
        return;
    }

    // 如果返回 0x0502
    if (res[1] === 0x02) {
        log("socks server needs auth");
        if (!username || !password) {
            log("please provide username/password");
            return;
        }
        // 认证请求格式:
        // +----+------+----------+------+----------+
        // |VER | ULEN |  UNAME   | PLEN |  PASSWD  |
        // +----+------+----------+------+----------+
        // | 1  |  1   | 1 to 255 |  1   | 1 to 255 |
        // +----+------+----------+------+----------+
        const authRequest = new Uint8Array([
            1,
            username.length,
            ...encoder.encode(username),
            password.length,
            ...encoder.encode(password)
        ]);
        await writer.write(authRequest);
        res = (await reader.read()).value;
        // 预期 0x0100
        if (res[0] !== 0x01 || res[1] !== 0x00) {
            log("fail to auth socks server");
            return;
        }
    }

    // 请求数据格式 (Worker -> Socks Server):
    // +----+-----+-------+------+----------+----------+
    // |VER | CMD |  RSV  | ATYP | DST.ADDR | DST.PORT |
    // +----+-----+-------+------+----------+----------+
    // | 1  |  1  | X'00' |  1   | Variable |	2	 |
    // +----+-----+-------+------+----------+----------+
    // ATYP: 地址类型
    // 0x01: IPv4 地址
    // 0x03: 域名
    // 0x04: IPv6 地址
    // DST.ADDR: 目标地址
    // DST.PORT: 目标端口（网络字节顺序）

    // addressType
    // 0x01: IPv4 地址
    // 0x03: 域名
    // 0x04: IPv6 地址
    let DSTADDR; // DSTADDR = ATYP + DST.ADDR
    switch (addressType) {
        case 1:
            DSTADDR = new Uint8Array(
                [1, ...addressRemote.split('.').map(Number)]
            );
            break;
        case 3:
            DSTADDR = new Uint8Array(
                [3, addressRemote.length, ...encoder.encode(addressRemote)]
            );
            break;
        case 4:
            DSTADDR = new Uint8Array(
                [4, ...addressRemote.split(':').flatMap(x => [parseInt(x.slice(0, 2), 16), parseInt(x.slice(2), 16)])]
            );
            break;
        default:
            log(`无效的 addressType: ${addressType}`);
            return;
    }
    const socksRequest = new Uint8Array([5, 1, 0, ...DSTADDR, portRemote >> 8, portRemote & 0xff]);
    await writer.write(socksRequest);
    log('sent socks request');

    res = (await reader.read()).value;
    // 响应格式 (Socks Server -> Worker):
    //  +----+-----+-------+------+----------+----------+
    // |VER | REP |  RSV  | ATYP | BND.ADDR | BND.PORT |
    // +----+-----+-------+------+----------+----------+
    // | 1  |  1  | X'00' |  1   | Variable |	2	 |
    // +----+-----+-------+------+----------+----------+
    if (res[1] === 0x00) {
        log("socks连接已打开");
    } else {
        log("无法打开socks连接");
        return;
    }
    writer.releaseLock();
    reader.releaseLock();
    return socket;
}

/**
 * 解析SOCKS5地址
 * @param {string} address - SOCKS5地址字符串
 */
function socks5AddressParser(address) {
    let [latter, former] = address.split("@").reverse();
    let username, password, hostname, port;
    if (former) {
        const formers = former.split(":");
        if (formers.length !== 2) {
            throw new Error('Invalid SOCKS address format');
        }
        [username, password] = formers;
    }
    const latters = latter.split(":");
    port = Number(latters.pop());
    if (isNaN(port)) {
        throw new Error('Invalid SOCKS address format');
    }
    hostname = latters.join(":");
    const regex = /^\[.*\]$/;
    if (hostname.includes(":") && !regex.test(hostname)) {
        throw new Error('Invalid SOCKS address format');
    }
    return {
        username,
        password,
        hostname,
        port,
    };
}

/**
 * 检查是否为有效的IPv4地址
 * @param {string} address - 地址字符串
 * @returns {boolean} 是否为有效的IPv4地址
 */
function isValidIPv4(address) {
    const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipv4Regex.test(address);
}

/**
 * 处理子地址
 * @param {string} host - 主机名
 * @param {string} pw - 密码
 * @param {string} userAgent - 用户代理
 * @param {Array<string>} newAddressesapi - 新的API地址数组
 * @param {Array<string>} newAddressescsv - 新的CSV地址数组
 * @returns {string} 处理后的Base64编码字符串
 */
function subAddresses(host, pw, userAgent, newAddressesapi, newAddressescsv) {
    let addresses = [];
    addresses = addresses.concat(newAddressesapi);
    addresses = addresses.concat(newAddressescsv);

    // 使用Set对象去重
    const uniqueAddresses = [...new Set(addresses)];

    const httpsPorts = ["2053", "2083", "2087", "2096", "8443"];

    const responseBody = uniqueAddresses.map(address => {
        let port = "-1";
        let addressid = address;

        const match = address.match(/^(.+):(\d+)#(.+)$/);
        if (!match) {
            if (address.includes(':') && address.includes('#')) {
                const parts = address.split(':');
                address = parts[0];
                const subParts = parts[1].split('#');
                port = subParts[0];
                addressid = subParts[1];
            } else if (address.includes(':')) {
                const parts = address.split(':');
                address = parts[0];
                port = parts[1];
            } else if (address.includes('#')) {
                const parts = address.split('#');
                address = parts[0];
                addressid = parts[1];
            }

            if (addressid.includes(':')) {
                addressid = addressid.split(':')[0];
            }
        } else {
            address = match[1];
            port = match[2] || port;
            addressid = match[3] || address;
        }

        if (!isValidIPv4(address) && port == "-1") {
            for (let httpsPort of httpsPorts) {
                if (address.includes(httpsPort)) {
                    port = httpsPort;
                    break;
                }
            }
        }
        if (port == "-1") port = "443";

        let 伪装域名 = host;
        let 最终路径 = path;
        let 节点备注 = '';

        if (proxyhosts.length > 0 && (伪装域名.includes('.workers.dev'))) {
            最终路径 = `/${伪装域名}${最终路径}`;
            伪装域名 = proxyhosts[Math.floor(Math.random() * proxyhosts.length)];
            节点备注 = ` 已启用临时域名中转服务，请尽快绑定自定义域！`;
        }

        const matchingProxyIP = proxyIPPool.find(proxyIP => proxyIP.includes(address));
        if (matchingProxyIP) 最终路径 += `&proxyip=${matchingProxyIP}`;

        let 密码 = pw;
        if (!userAgent.includes('subconverter')) 密码 = encodeURIComponent(pw);

        const 协议类型 = atob('dHJvamFu'); // 'trojan'
        const 特洛伊Link = `${协议类型}://${密码}@${address}:${port}?security=tls&sni=${伪装域名}&fp=randomized&type=ws&host=${伪装域名}&path=${encodeURIComponent(最终路径)}#${encodeURIComponent(addressid + 节点备注)}`;

        return 特洛伊Link;
    }).join('\n');

    const base64Response = btoa(responseBody); // 重新进行 Base64 编码

    return base64Response;
}

/**
 * 从API获取地址
 * @param {Array<string>} api - API地址数组
 * @returns {Promise<Array<string>>} 处理后的地址数组
 */
async function getAddressesapi(api) {
    if (!api || api.length === 0) return [];

    let newapi = "";

    // 创建一个AbortController对象，用于控制fetch请求的取消
    const controller = new AbortController();

    const timeout = setTimeout(() => {
        controller.abort(); // 取消所有请求
    }, 2000); // 2秒后触发

    try {
        // 使用Promise.allSettled等待所有API请求完成，无论成功或失败
        const responses = await Promise.allSettled(api.map(apiUrl => fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;',
                'User-Agent': atob('Q0YtV29ya2Vycy1lcGVpdXMvY21saXU=') // 'CF-Workers-epeius/cmlu'
            },
            signal: controller.signal // 将AbortController的信号量添加到fetch请求中
        }).then(response => response.ok ? response.text() : Promise.reject())));

        for (const [index, response] of responses.entries()) {
            if (response.status === 'fulfilled') {
                const content = response.value;
                const lines = content.split(/\r?\n/);
                let 节点备注 = '';
                let 测速端口 = '443';

                if (lines[0].split(',').length > 3) {
                    const idMatch = api[index].match(/id=([^&]*)/);
                    if (idMatch) 节点备注 = idMatch[1];
                    const portMatch = api[index].match(/port=([^&]*)/);
                    if (portMatch) 测速端口 = portMatch[1];

                    for (let i = 1; i < lines.length; i++) {
                        const columns = lines[i].split(',')[0];
                        if (columns) {
                            newapi += `${columns}:${测速端口}${节点备注 ? `#${节点备注}` : ''}\n`;
                            if (api[index].includes('proxyip=true')) proxyIPPool.push(`${columns}:${测속端口}`);
                        }
                    }
                } else {
                    if (api[index].includes('proxyip=true')) {
                        proxyIPPool = proxyIPPool.concat((await ADD(content)).map(item => {
                            const baseItem = item.split('#')[0] || item;
                            if (baseItem.includes(':')) {
                                const port = baseItem.split(':')[1];
                                if (!httpsPorts.includes(port)) {
                                    return baseItem;
                                }
                            } else {
                                return `${baseItem}:443`;
                            }
                            return null; // 不符合条件时返回 null
                        }).filter(Boolean)); // 过滤掉 null 值
                    }
                    newapi += content + '\n';
                }
            }
        }
    } catch (error) {
        console.error(error);
    } finally {
        clearTimeout(timeout);
    }

    const newAddressesapi = await ADD(newapi);

    return newAddressesapi;
}

/**
 * 从CSV文件获取地址
 * @param {string} tls - TLS值
 * @returns {Promise<Array<string>>} 处理后的地址数组
 */
async function getAddressescsv(tls) {
    if (!addressescsv || addressescsv.length === 0) {
        return [];
    }

    let newAddressescsv = [];

    for (const csvUrl of addressescsv) {
        try {
            const response = await fetch(csvUrl);

            if (!response.ok) {
                console.error('获取CSV地址时出错:', response.status, response.statusText);
                continue;
            }

            const text = await response.text();
            let lines;
            if (text.includes('\r\n')) {
                lines = text.split('\r\n');
            } else {
                lines = text.split('\n');
            }

            const header = lines[0].split(',');
            const tlsIndex = header.indexOf('TLS');
            const ipAddressIndex = 0; // IP地址在 CSV 头部的位置
            const portIndex = 1; // 端口在 CSV 头部的位置
            const remarkIndex = 2; // 备注字段索引（假设备注是第三个字段）
            const dataCenterIndex = tlsIndex + remarkIndex; // 数据中心是 TLS 的后一个字段

            if (tlsIndex === -1) {
                console.error('CSV文件缺少必需的字段');
                continue;
            }

            for (let i = 1; i < lines.length; i++) {
                const columns = lines[i].split(',');
                const speedIndex = columns.length - 1; // 最后一个字段

                if (columns[tlsIndex].toUpperCase() === tls && parseFloat(columns[speedIndex]) > DLS) {
                    const ipAddress = columns[ipAddressIndex];
                    const port = columns[portIndex];
                    const dataCenter = columns[dataCenterIndex];

                    const formattedAddress = `${ipAddress}:${port}#${dataCenter}`;
                    newAddressescsv.push(formattedAddress);

                    if (csvUrl.includes('proxyip=true') && columns[tlsIndex].toUpperCase() === 'TRUE' && !httpsPorts.includes(port)) {
                        proxyIPPool.push(`${ipAddress}:${port}`);
                    }
                }
            }
        } catch (error) {
            console.error('获取CSV地址时出错:', error);
            continue;
        }
    }

    return newAddressescsv;
}

/**
 * 处理Surge配置
 * @param {string} content - 内容字符串
 * @param {string} url - URL字符串
 * @returns {string} 处理后的Surge配置字符串
 */
function surge(content, url) {
    let 每行内容;
    if (content.includes('\r\n')) {
        每行内容 = content.split('\r\n');
    } else {
        每行内容 = content.split('\n');
    }

    let 输出内容 = "";
    for (let x of 每行内容) {
        if (x.includes(atob('PSB0cm9qYW4s'))) {
            const host = x.split("sni=")[1].split(",")[0];
            const 备改内容 = `skip-cert-verify=true, tfo=false, udp-relay=false`;
            const 正确内容 = `skip-cert-verify=true, ws=true, ws-path=${path}, ws-headers=Host:"${host}", tfo=false, udp-relay=false`;
            输出内容 += x.replace(new RegExp(备改内容, 'g'), 正确内容).replace("[", "").replace("]", "") + '\n';
        } else {
            输出内容 += x + '\n';
        }
    }

    输出内容 = `#!MANAGED-CONFIG ${url} interval=86400 strict=false` + 输出内容.substring(输出内容.indexOf('\n'));
    return 输出内容;
}

/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 * 
 * @version 0.11.0 (modified by cmliu)
 * @description 本代码基于 js-sha256 项目改编，添加了 SHA-224 哈希算法的实现。
 * @modifications 重写并实现了 sha224 函数，引用请注明出处。
 */
function sha224(输入字符串) {
    // 内部常量K
    const K = [
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
        0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
        0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
        0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
        0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
        0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
        0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
        0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
    ];

    /**
     * 将字符串转换为UTF-8编码的字符串
     * @param {string} 字符串 - 输入字符串
     * @returns {string} UTF-8编码的字符串
     */
    function utf8编码(字符串) {
        return unescape(encodeURIComponent(字符串));
    }

    /**
     * 将字节数组转换为十六进制字符串
     * @param {Array<number>} 字节数组 - 字节数组
     * @returns {string} 十六进制字符串
     */
    function 字节转十六进制(字节数组) {
        let 十六进制 = '';
        for (let i = 0; i < 字节数组.length; i++) {
            十六进制 += ((字节数组[i] >>> 4) & 0x0F).toString(16).padStart(2, '0');
            十六进制 += (字节数组[i] & 0x0F).toString(16).padStart(2, '0');
        }
        return 十六进制;
    }

    /**
     * 计算SHA-224哈希值的核心逻辑
     * @param {string} 输入字符串 - 输入字符串
     * @returns {Array<number>} SHA-224哈希值数组
     */
    function sha224核心(输入字符串) {
        // SHA-224的初始哈希值
        let H = [
            0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
            0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
        ];

        // 预处理
        const 消息长度 = 输入字符串.length * 8;
        输入字符串 += String.fromCharCode(0x80);
        while ((输入字符串.length * 8) % 512 !== 448) {
            输入字符串 += String.fromCharCode(0);
        }

        // 添加64位消息长度
        const 消息长度高位 = Math.floor(消息长度 / 0x100000000);
        const 消息长度低位 = 消息长度 & 0xFFFFFFFF;
        输入字符串 += String.fromCharCode(
            (消息长度高位 >>> 24) & 0xFF, (消息长度高位 >>> 16) & 0xFF,
            (消息长度高位 >>> 8) & 0xFF, 消息长度高位 & 0xFF,
            (消息长度低位 >>> 24) & 0xFF, (消息长度低位 >>> 16) & 0xFF,
            (消息长度低位 >>> 8) & 0xFF, 消息长度低位 & 0xFF
        );

        const 字数组 = [];
        for (let i = 0; i < 输入字符串.length; i += 4) {
            字数组.push(
                (输入字符串.charCodeAt(i) << 24) |
                (输入字符串.charCodeAt(i + 1) << 16) |
                (输入字符串.charCodeAt(i + 2) << 8) |
                输入字符串.charCodeAt(i + 3)
            );
        }

        // 主要压缩循环
        for (let i = 0; i < 字数组.length; i += 16) {
            const w = new Array(64).fill(0);
            for (let j = 0; j < 16; j++) {
                w[j] = 字数组[i + j];
            }

            for (let j = 16; j < 64; j++) {
                const s0 = 右旋转(w[j - 15], 7) ^ 右旋转(w[j - 15], 18) ^ (w[j - 15] >>> 3);
                const s1 = 右旋转(w[j - 2], 17) ^ 右旋转(w[j - 2], 19) ^ (w[j - 2] >>> 10);
                w[j] = (w[j - 16] + s0 + w[j - 7] + s1) >>> 0;
            }

            let [a, b, c, d, e, f, g, h] = H;

            for (let j = 0; j < 64; j++) {
                const S1 = 右旋转(e, 6) ^ 右旋转(e, 11) ^ 右旋转(e, 25);
                const ch = (e & f) ^ (~e & g);
                const temp1 = (h + S1 + ch + K[j] + w[j]) >>> 0;
                const S0 = 右旋转(a, 2) ^ 右旋转(a, 13) ^ 右旋转(a, 22);
                const maj = (a & b) ^ (a & c) ^ (b & c);
                const temp2 = (S0 + maj) >>> 0;

                h = g;
                g = f;
                f = e;
                e = (d + temp1) >>> 0;
                d = c;
                c = b;
                b = a;
                a = (temp1 + temp2) >>> 0;
            }

            H[0] = (H[0] + a) >>> 0;
            H[1] = (H[1] + b) >>> 0;
            H[2] = (H[2] + c) >>> 0;
            H[3] = (H[3] + d) >>> 0;
            H[4] = (H[4] + e) >>> 0;
            H[5] = (H[5] + f) >>> 0;
            H[6] = (H[6] + g) >>> 0;
            H[7] = (H[7] + h) >>> 0;
        }

        // 截断到224位
        return H.slice(0, 7);
    }

    /**
     * 右旋转操作
     * @param {number} 数值 - 输入数值
     * @param {number} 位数 - 旋转位数
     * @returns {number} 右旋后的数值
     */
    function 右旋转(数值, 位数) {
        return ((数值 >>> 位数) | (数值 << (32 - 位数))) >>> 0;
    }

    // 主函数逻辑
    const 编码输入 = utf8编码(输入字符串);
    const 哈希结果 = sha224核心(编码输入);

    // 转换为十六进制字符串
    return 字节转十六进制(
        哈希结果.flatMap(h => [
            (h >>> 24) & 0xFF,
            (h >>> 16) & 0xFF,
            (h >>> 8) & 0xFF,
            h & 0xFF
        ])
    );
}
