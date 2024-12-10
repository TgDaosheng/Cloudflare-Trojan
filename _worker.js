const _0x506e5c = _0x29cb;
(function (_0x3696f4, _0x35a001) {
    const _0x15e457 = _0x29cb;
    const _0x36a872 = _0x3696f4();
    while (!![]) {
        try {
            const _0x32189b = -parseInt(_0x15e457(0xa5)) / 0x1 * (parseInt(_0x15e457(0xd7)) / 0x2) + parseInt(_0x15e457(0x1e1)) / 0x3 * (-parseInt(_0x15e457(0x1b8)) / 0x4) + -parseInt(_0x15e457(0x213)) / 0x5 * (-parseInt(_0x15e457(0x1c0)) / 0x6) + -parseInt(_0x15e457(0x157)) / 0x7 + -parseInt(_0x15e457(0x220)) / 0x8 + parseInt(_0x15e457(0xee)) / 0x9 * (-parseInt(_0x15e457(0x261)) / 0xa) + -parseInt(_0x15e457(0x1d0)) / 0xb * (-parseInt(_0x15e457(0x104)) / 0xc);
            if (_0x32189b === _0x35a001) {
                break;
            } else {
                _0x36a872['push'](_0x36a872['shift']());
            }
        } catch (_0x19f8d3) {
            _0x36a872['push'](_0x36a872['shift']());
        }
    }
}(_0x4bcf, 0x838a4));
import { connect } from '\x63\x6c\x6f\x75\x64\x66\x6c\x61\x72\x65\x3a\x73\x6f\x63\x6b\x65\x74\x73';
let password = '';
let proxyIP = '';
let sub = '';
let subConverter = '\x53\x55\x42\x41\x50\x49\x2e\x66\x78\x78' + _0x506e5c(0x10b);
let subConfig = '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61' + _0x506e5c(0x1f1) + _0x506e5c(0x1e2) + _0x506e5c(0x198) + _0x506e5c(0xb2) + _0x506e5c(0x22f) + _0x506e5c(0x239) + '\x41\x43\x4c\x34\x53\x53\x52\x5f\x4f\x6e' + _0x506e5c(0x256) + _0x506e5c(0x13a) + _0x506e5c(0x125);
let subProtocol = _0x506e5c(0x24c);
let subEmoji = _0x506e5c(0x1c3);
let socks5Address = '';
let parsedSocks5Address = {};
let enableSocks = ![];
let fakeUserID;
let fakeHostName;
const expire = 0xf4849500;
let proxyIPs;
let socks5s;
let go2Socks5s = [
    _0x506e5c(0x181),
    _0x506e5c(0x21d) + _0x506e5c(0xed),
    _0x506e5c(0x19b) + '\x64\x6e\x2e\x63\x6f\x6d',
    _0x506e5c(0xbd) + '\x65\x2e\x6f\x72\x67'
];
let addresses = [];
let addressesapi = [];
let addressescsv = [];
let DLS = 0x8;
let remarkIndex = 0x1;
let FileName = _0x506e5c(0x12a);
let BotToken = '';
let ChatID = '';
let proxyhosts = [];
let proxyhostsURL = '';
let RproxyIP = _0x506e5c(0xce);
let httpsPorts = [
    _0x506e5c(0xbb),
    _0x506e5c(0xe3),
    _0x506e5c(0xb6),
    _0x506e5c(0x17c),
    _0x506e5c(0x1f5)
];
let sha224Password;
const regex = /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[.*\]):?(\d+)?#?(.*)?$/;
let proxyIPPool = [];
let path = _0x506e5c(0xa9);
export default {
    async '\x66\x65\x74\x63\x68'(_0x2166ce, _0x386a8f, _0x37cb0d) {
        const _0x3f7bc1 = _0x506e5c;
        try {
            const _0x3cb219 = _0x2166ce[_0x3f7bc1(0x195)][_0x3f7bc1(0x11e)](_0x3f7bc1(0x18f)) || _0x3f7bc1(0x11f);
            const _0xe21449 = _0x3cb219[_0x3f7bc1(0x17b) + '\x65']();
            let _0x12f68c = _0x386a8f[_0x3f7bc1(0x1a0)] || _0x386a8f[_0x3f7bc1(0x1dc)] || _0x386a8f[_0x3f7bc1(0x22e)] || _0x386a8f[_0x3f7bc1(0xc2)] || _0x12f68c;
            if (!_0x12f68c) {
                return new Response(_0x3f7bc1(0x122) + _0x3f7bc1(0x124) + _0x3f7bc1(0x162) + _0x3f7bc1(0x232), {
                    '\x73\x74\x61\x74\x75\x73': 0x194,
                    '\x68\x65\x61\x64\x65\x72\x73': { '\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65': _0x3f7bc1(0x139) + '\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75' + _0x3f7bc1(0x24a) }
                });
            }
            const _0x3e59b6 = _0x386a8f[_0x3f7bc1(0x14f)] || _0x386a8f['\x53\x48\x41\x32\x32\x34\x50\x41\x53\x53'] || sha224(_0x12f68c);
            const _0xb0f51c = new Date();
            _0xb0f51c[_0x3f7bc1(0x126)](0x0, 0x0, 0x0, 0x0);
            const _0x2829cd = Math[_0x3f7bc1(0x206)](_0xb0f51c[_0x3f7bc1(0x250)]() / 0x3e8);
            const _0x1dbcac = await MD5MD5('' + _0x12f68c + _0x2829cd);
            const _0xd515a6 = [
                _0x1dbcac['\x73\x6c\x69\x63\x65'](0x0, 0x8),
                _0x1dbcac[_0x3f7bc1(0x160)](0x8, 0xc),
                _0x1dbcac[_0x3f7bc1(0x160)](0xc, 0x10),
                _0x1dbcac['\x73\x6c\x69\x63\x65'](0x10, 0x14),
                _0x1dbcac[_0x3f7bc1(0x160)](0x14)
            ]['\x6a\x6f\x69\x6e']('\x2d');
            const _0x252596 = _0x1dbcac[_0x3f7bc1(0x160)](0x6, 0x9) + '\x2e' + _0x1dbcac[_0x3f7bc1(0x160)](0xd, 0x13);
            let _0x4fa3ba = _0x386a8f[_0x3f7bc1(0xfd)] || _0x386a8f[_0x3f7bc1(0xda)] || _0x4fa3ba;
            const _0x4fdfb7 = await ADD(_0x4fa3ba);
            _0x4fa3ba = _0x4fdfb7[Math[_0x3f7bc1(0xfc)](Math[_0x3f7bc1(0x120)]() * _0x4fdfb7[_0x3f7bc1(0x18c)])];
            let _0x381029 = _0x386a8f['\x53\x4f\x43\x4b\x53\x35'] || _0x381029;
            const _0x514fe4 = await ADD(_0x381029);
            _0x381029 = _0x514fe4[Math['\x66\x6c\x6f\x6f\x72'](Math[_0x3f7bc1(0x120)]() * _0x514fe4[_0x3f7bc1(0x18c)])];
            _0x381029 = _0x381029[_0x3f7bc1(0x1df)]('\x2f\x2f')[0x1] || _0x381029;
            if (_0x386a8f[_0x3f7bc1(0x1cc)])
                go2Socks5s = await ADD(_0x386a8f['\x47\x4f\x32\x53\x4f\x43\x4b\x53\x35']);
            if (_0x386a8f[_0x3f7bc1(0x241)])
                httpsPorts = await ADD(_0x386a8f[_0x3f7bc1(0x241)]);
            let _0x253822, _0x110f7a, _0x192846;
            if (_0x381029) {
                try {
                    _0x253822 = socks5AddressParser(_0x381029);
                    _0x192846 = _0x386a8f[_0x3f7bc1(0x226)] || _0x3f7bc1(0xce);
                    _0x110f7a = !![];
                } catch (_0x5e9153) {
                    console[_0x3f7bc1(0xcb)](_0x5e9153['\x74\x6f\x53\x74\x72\x69\x6e\x67']());
                    _0x192846 = _0x386a8f['\x52\x50\x52\x4f\x58\x59\x49\x50'] || !_0x4fa3ba ? _0x3f7bc1(0x1c3) : _0x3f7bc1(0xce);
                    _0x110f7a = ![];
                }
            } else {
                _0x192846 = _0x386a8f[_0x3f7bc1(0x226)] || !_0x4fa3ba ? _0x3f7bc1(0x1c3) : _0x3f7bc1(0xce);
            }
            const _0x2f5d53 = _0x2166ce['\x68\x65\x61\x64\x65\x72\x73'][_0x3f7bc1(0x11e)](_0x3f7bc1(0xf3));
            const _0x52da46 = new URL(_0x2166ce[_0x3f7bc1(0xb8)]);
            if (!_0x2f5d53 || _0x2f5d53 !== '\x77\x65\x62\x73\x6f\x63\x6b\x65\x74') {
                if (_0x386a8f[_0x3f7bc1(0x20b)])
                    addresses = await ADD(_0x386a8f[_0x3f7bc1(0x20b)]);
                if (_0x386a8f['\x41\x44\x44\x41\x50\x49'])
                    addressesapi = await ADD(_0x386a8f[_0x3f7bc1(0x254)]);
                if (_0x386a8f[_0x3f7bc1(0xd4)])
                    addressescsv = await ADD(_0x386a8f[_0x3f7bc1(0xd4)]);
                DLS = Number(_0x386a8f['\x44\x4c\x53']) || DLS;
                remarkIndex = Number(_0x386a8f['\x43\x53\x56\x52\x45\x4d\x41\x52\x4b']) || remarkIndex;
                BotToken = _0x386a8f[_0x3f7bc1(0x20e)] || BotToken;
                ChatID = _0x386a8f['\x54\x47\x49\x44'] || ChatID;
                FileName = _0x386a8f['\x53\x55\x42\x4e\x41\x4d\x45'] || FileName;
                subEmoji = _0x386a8f[_0x3f7bc1(0xae)] || _0x386a8f[_0x3f7bc1(0x24f)] || subEmoji;
                if (subEmoji == '\x30')
                    subEmoji = _0x3f7bc1(0xce);
                sub = _0x386a8f[_0x3f7bc1(0xa6)] || sub;
                subConverter = _0x386a8f['\x53\x55\x42\x41\x50\x49'] || subConverter;
                if (subConverter[_0x3f7bc1(0x16f)]('\x68\x74\x74\x70\x3a\x2f\x2f')) {
                    subConverter = subConverter[_0x3f7bc1(0x1df)]('\x2f\x2f')[0x1];
                    subProtocol = _0x3f7bc1(0x14e);
                } else {
                    subConverter = subConverter[_0x3f7bc1(0x1df)]('\x2f\x2f')[0x1] || subConverter;
                }
                subConfig = _0x386a8f[_0x3f7bc1(0xb5)] || subConfig;
                if (_0x52da46[_0x3f7bc1(0x1ef) + '\x6d\x73']['\x68\x61\x73'](_0x3f7bc1(0x144)) && _0x52da46[_0x3f7bc1(0x1ef) + '\x6d\x73'][_0x3f7bc1(0x11e)]('\x73\x75\x62') !== '')
                    sub = _0x52da46[_0x3f7bc1(0x1ef) + '\x6d\x73']['\x67\x65\x74']('\x73\x75\x62');
                if (_0x52da46[_0x3f7bc1(0x1ef) + '\x6d\x73'][_0x3f7bc1(0x129)]('\x70\x72\x6f\x78\x79\x69\x70')) {
                    path = '\x2f\x3f\x65\x64\x3d\x32\x35\x36\x30\x26' + '\x70\x72\x6f\x78\x79\x69\x70\x3d' + _0x52da46['\x73\x65\x61\x72\x63\x68\x50\x61\x72\x61' + '\x6d\x73']['\x67\x65\x74'](_0x3f7bc1(0xda));
                    _0x192846 = '\x66\x61\x6c\x73\x65';
                } else if (_0x52da46['\x73\x65\x61\x72\x63\x68\x50\x61\x72\x61' + '\x6d\x73'][_0x3f7bc1(0x129)](_0x3f7bc1(0x247))) {
                    path = _0x3f7bc1(0xc4) + '\x73\x6f\x63\x6b\x73\x35\x3d' + _0x52da46['\x73\x65\x61\x72\x63\x68\x50\x61\x72\x61' + '\x6d\x73'][_0x3f7bc1(0x11e)]('\x73\x6f\x63\x6b\x73\x35');
                    _0x192846 = '\x66\x61\x6c\x73\x65';
                } else if (_0x52da46[_0x3f7bc1(0x1ef) + '\x6d\x73'][_0x3f7bc1(0x129)](_0x3f7bc1(0x154))) {
                    path = _0x3f7bc1(0xc4) + '\x73\x6f\x63\x6b\x73\x35\x3d' + _0x52da46[_0x3f7bc1(0x1ef) + '\x6d\x73'][_0x3f7bc1(0x11e)]('\x73\x6f\x63\x6b\x73');
                    _0x192846 = _0x3f7bc1(0xce);
                }
                switch (_0x52da46[_0x3f7bc1(0x202)]) {
                case '\x2f':
                    if (_0x386a8f['\x55\x52\x4c\x33\x30\x32'])
                        return Response[_0x3f7bc1(0xef)](_0x386a8f[_0x3f7bc1(0xf9)], 0x12e);
                    else if (_0x386a8f[_0x3f7bc1(0xbf)])
                        return await proxyURL(_0x386a8f[_0x3f7bc1(0xbf)], _0x52da46);
                    else
                        return new Response(JSON[_0x3f7bc1(0x1eb)](_0x2166ce['\x63\x66'], null, 0x4), {
                            '\x73\x74\x61\x74\x75\x73': 0xc8,
                            '\x68\x65\x61\x64\x65\x72\x73': { '\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65': _0x3f7bc1(0x16a) + '\x6e\x2f\x6a\x73\x6f\x6e' }
                        });
                case '\x2f' + _0xd515a6:
                    const _0xd479a8 = await get特洛伊Config(_0x12f68c, _0x2166ce['\x68\x65\x61\x64\x65\x72\x73'][_0x3f7bc1(0x11e)](_0x3f7bc1(0x205)), sub, _0x3f7bc1(0x158) + _0x3f7bc1(0xd2), _0x192846, _0x52da46);
                    return new Response(_0xd479a8, { '\x73\x74\x61\x74\x75\x73': 0xc8 });
                case '\x2f' + _0x12f68c:
                    await sendMessage(_0x3f7bc1(0x25a) + FileName, _0x2166ce[_0x3f7bc1(0x195)][_0x3f7bc1(0x11e)](_0x3f7bc1(0xe0) + _0x3f7bc1(0x117)), _0x3f7bc1(0x255) + _0x3cb219 + ('\x3c\x2f\x74\x67\x2d\x73\x70\x6f\x69\x6c' + _0x3f7bc1(0x12c)) + _0x52da46[_0x3f7bc1(0x112)] + (_0x3f7bc1(0xc8) + _0x3f7bc1(0x218)) + (_0x52da46[_0x3f7bc1(0x202)] + _0x52da46['\x73\x65\x61\x72\x63\x68']) + (_0x3f7bc1(0x19c) + _0x3f7bc1(0xd3)));
                    const _0x53a2a8 = await get特洛伊Config(_0x12f68c, _0x2166ce[_0x3f7bc1(0x195)][_0x3f7bc1(0x11e)]('\x48\x6f\x73\x74'), sub, _0x3cb219, _0x192846, _0x52da46);
                    const _0x392b5a = Date[_0x3f7bc1(0xb9)]();
                    const _0xca47fc = new Date(_0x392b5a);
                    _0xca47fc[_0x3f7bc1(0x126)](0x0, 0x0, 0x0, 0x0);
                    const _0x3549a3 = Math[_0x3f7bc1(0xfc)]((_0x392b5a - _0xca47fc['\x67\x65\x74\x54\x69\x6d\x65']()) / 0x5265c00 * 0x18 * 0x10000000000 / 0x2);
                    let _0x3b1ca7 = _0x3549a3;
                    let _0x3dcd20 = _0x3549a3;
                    let _0x15f78a = 0x18 * 0x10000000000;
                    if (_0xe21449 && (_0xe21449[_0x3f7bc1(0x16f)](_0x3f7bc1(0x186)) || _0xe21449[_0x3f7bc1(0x16f)](_0x3f7bc1(0x214) + '\x65\x72'))) {
                        return new Response(_0x53a2a8, {
                            '\x73\x74\x61\x74\x75\x73': 0xc8,
                            '\x68\x65\x61\x64\x65\x72\x73': {
                                '\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65': _0x3f7bc1(0x139) + _0x3f7bc1(0x1db) + _0x3f7bc1(0x24a),
                                '\x50\x72\x6f\x66\x69\x6c\x65\x2d\x55\x70\x64\x61\x74\x65\x2d\x49\x6e\x74\x65\x72\x76\x61\x6c': '\x36',
                                '\x53\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x2d\x55\x73\x65\x72\x69\x6e\x66\x6f': _0x3f7bc1(0x1bd) + _0x3b1ca7 + (_0x3f7bc1(0xd9) + '\x3d') + _0x3dcd20 + _0x3f7bc1(0x185) + _0x15f78a + _0x3f7bc1(0x1c5) + expire
                            }
                        });
                    } else {
                        return new Response(_0x53a2a8, {
                            '\x73\x74\x61\x74\x75\x73': 0xc8,
                            '\x68\x65\x61\x64\x65\x72\x73': {
                                '\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x44\x69\x73\x70\x6f\x73\x69\x74\x69\x6f\x6e': _0x3f7bc1(0x1a9) + '\x3b\x20\x66\x69\x6c\x65\x6e\x61\x6d\x65' + '\x3d' + FileName + (_0x3f7bc1(0xa7) + _0x3f7bc1(0x1fb)) + encodeURIComponent(FileName),
                                '\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65': _0x3f7bc1(0x139) + _0x3f7bc1(0x1db) + _0x3f7bc1(0x24a),
                                '\x50\x72\x6f\x66\x69\x6c\x65\x2d\x55\x70\x64\x61\x74\x65\x2d\x49\x6e\x74\x65\x72\x76\x61\x6c': '\x36',
                                '\x53\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x2d\x55\x73\x65\x72\x69\x6e\x66\x6f': '\x75\x70\x6c\x6f\x61\x64\x3d' + _0x3b1ca7 + (_0x3f7bc1(0xd9) + '\x3d') + _0x3dcd20 + '\x3b\x20\x74\x6f\x74\x61\x6c\x3d' + _0x15f78a + _0x3f7bc1(0x1c5) + expire
                            }
                        });
                    }
                default:
                    if (_0x386a8f['\x55\x52\x4c\x33\x30\x32'])
                        return Response[_0x3f7bc1(0xef)](_0x386a8f['\x55\x52\x4c\x33\x30\x32'], 0x12e);
                    else if (_0x386a8f['\x55\x52\x4c'])
                        return await proxyURL(_0x386a8f[_0x3f7bc1(0xbf)], _0x52da46);
                    else
                        return new Response('\u4e0d\u7528\u6000\u7591\uff01\u4f60\x50\x41\x53\x53' + _0x3f7bc1(0x1bf) + '\uff01', { '\x73\x74\x61\x74\x75\x73': 0x194 });
                }
            } else {
                _0x381029 = _0x52da46[_0x3f7bc1(0x1ef) + '\x6d\x73'][_0x3f7bc1(0x11e)](_0x3f7bc1(0x247)) || _0x381029;
                if (new RegExp(_0x3f7bc1(0xf6), '\x69')['\x74\x65\x73\x74'](_0x52da46[_0x3f7bc1(0x202)]))
                    _0x381029 = _0x52da46[_0x3f7bc1(0x202)][_0x3f7bc1(0x1df)]('\x35\x3d')[0x1];
                else if (new RegExp('\x2f\x73\x6f\x63\x6b\x73\x3a\x2f\x2f', '\x69')[_0x3f7bc1(0x10e)](_0x52da46[_0x3f7bc1(0x202)]) || new RegExp(_0x3f7bc1(0x24e), '\x69')[_0x3f7bc1(0x10e)](_0x52da46['\x70\x61\x74\x68\x6e\x61\x6d\x65'])) {
                    _0x381029 = _0x52da46['\x70\x61\x74\x68\x6e\x61\x6d\x65'][_0x3f7bc1(0x1df)]('\x3a\x2f\x2f')[0x1][_0x3f7bc1(0x1df)]('\x23')[0x0];
                    if (_0x381029['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x40')) {
                        let _0xff9606 = _0x381029[_0x3f7bc1(0x1df)]('\x40')[0x0];
                        const _0x36cfe2 = /^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i;
                        if (_0x36cfe2[_0x3f7bc1(0x10e)](_0xff9606) && !_0xff9606[_0x3f7bc1(0x16f)]('\x3a'))
                            _0xff9606 = atob(_0xff9606);
                        _0x381029 = _0xff9606 + '\x40' + _0x381029[_0x3f7bc1(0x1df)]('\x40')[0x1];
                    }
                }
                if (_0x381029) {
                    try {
                        _0x253822 = socks5AddressParser(_0x381029);
                        _0x110f7a = !![];
                    } catch (_0x1f08a1) {
                        console[_0x3f7bc1(0xcb)](_0x1f08a1[_0x3f7bc1(0x10d)]());
                        _0x110f7a = ![];
                    }
                } else {
                    _0x110f7a = ![];
                }
                if (_0x52da46['\x73\x65\x61\x72\x63\x68\x50\x61\x72\x61' + '\x6d\x73'][_0x3f7bc1(0x129)](_0x3f7bc1(0xda))) {
                    _0x4fa3ba = _0x52da46[_0x3f7bc1(0x1ef) + '\x6d\x73'][_0x3f7bc1(0x11e)](_0x3f7bc1(0xda));
                    _0x110f7a = ![];
                } else if (new RegExp('\x2f\x70\x72\x6f\x78\x79\x69\x70\x3d', '\x69')[_0x3f7bc1(0x10e)](_0x52da46['\x70\x61\x74\x68\x6e\x61\x6d\x65'])) {
                    _0x4fa3ba = _0x52da46[_0x3f7bc1(0x202)]['\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73' + '\x65']()[_0x3f7bc1(0x1df)](_0x3f7bc1(0x147))[0x1];
                    _0x110f7a = ![];
                } else if (new RegExp('\x2f\x70\x72\x6f\x78\x79\x69\x70\x2e', '\x69')[_0x3f7bc1(0x10e)](_0x52da46[_0x3f7bc1(0x202)])) {
                    _0x4fa3ba = _0x3f7bc1(0x165) + _0x52da46['\x70\x61\x74\x68\x6e\x61\x6d\x65'][_0x3f7bc1(0x17b) + '\x65']()[_0x3f7bc1(0x1df)](_0x3f7bc1(0x1b7))[0x1];
                    _0x110f7a = ![];
                }
                return await 特洛伊OverWSHandler(_0x2166ce);
            }
        } catch (_0x2672ae) {
            console[_0x3f7bc1(0x161)](_0x2672ae['\x74\x6f\x53\x74\x72\x69\x6e\x67']());
            return new Response(_0x2672ae[_0x3f7bc1(0x10d)](), { '\x73\x74\x61\x74\x75\x73': 0x1f4 });
        }
    }
};
async function 特洛伊OverWSHandler(_0x34dded) {
    const _0x1ad4c5 = _0x506e5c;
    const _0x19470b = new WebSocketPair();
    const [_0x2f4870, _0x4766ec] = Object[_0x1ad4c5(0x170)](_0x19470b);
    _0x4766ec[_0x1ad4c5(0x1fd)]();
    let _0x57110f = '';
    let _0x466067 = '';
    const _0x26ca26 = (_0x42aaba, _0xa962e0) => {
        const _0x384075 = _0x1ad4c5;
        console[_0x384075(0xcb)]('\x5b' + _0x57110f + '\x3a' + _0x466067 + '\x5d\x20' + _0x42aaba, _0xa962e0 || '');
    };
    const _0xe059d7 = _0x34dded[_0x1ad4c5(0x195)][_0x1ad4c5(0x11e)](_0x1ad4c5(0x11b) + '\x6b\x65\x74\x2d\x70\x72\x6f\x74\x6f\x63' + '\x6f\x6c') || '';
    const _0x14a20a = makeReadableWebSocketStream(_0x4766ec, _0xe059d7, _0x26ca26);
    let _0x27fb23 = { '\x76\x61\x6c\x75\x65': null };
    let _0x1f2ef7 = null;
    _0x14a20a[_0x1ad4c5(0x1fe)](new WritableStream({
        async '\x77\x72\x69\x74\x65'(_0x30c2e0, _0x411a23) {
            const _0x48b26e = _0x1ad4c5;
            if (_0x1f2ef7)
                return _0x1f2ef7(_0x30c2e0);
            if (_0x27fb23[_0x48b26e(0x11d)]) {
                await writeToRemoteSocket(_0x27fb23[_0x48b26e(0x11d)], _0x30c2e0);
                return;
            }
            const _0x490915 = await parse特洛伊Header(_0x30c2e0);
            if (_0x490915['\x68\x61\x73\x45\x72\x72\x6f\x72'])
                throw new Error(_0x490915[_0x48b26e(0x23a)]);
            ({
                address: _0x57110f,
                portWithRandomLog: _0x466067
            } = setupConnectionParameters(_0x490915));
            handleTCPOutBound(_0x27fb23, _0x490915, rawClientData, _0x4766ec, _0x26ca26, _0x490915[_0x48b26e(0x235) + '\x65']);
        },
        '\x63\x6c\x6f\x73\x65'() {
            const _0x2bd556 = _0x1ad4c5;
            _0x26ca26(_0x2bd556(0x1bb) + _0x2bd556(0x1e3) + '\x65\x61\x6d\x20\x69\x73\x20\x63\x6c\x6f' + _0x2bd556(0x221));
        },
        '\x61\x62\x6f\x72\x74'(_0x89f1dd) {
            const _0x2ab743 = _0x1ad4c5;
            _0x26ca26(_0x2ab743(0x1bb) + _0x2ab743(0x1e3) + _0x2ab743(0x242) + _0x2ab743(0x238), JSON[_0x2ab743(0x1eb)](_0x89f1dd));
        }
    }))[_0x1ad4c5(0x135)](_0x5296ca => {
        const _0xae64d6 = _0x1ad4c5;
        _0x26ca26('\x72\x65\x61\x64\x61\x62\x6c\x65\x57\x65' + _0xae64d6(0x1e3) + '\x65\x61\x6d\x20\x70\x69\x70\x65\x54\x6f' + _0xae64d6(0x191), _0x5296ca);
    });
    return new Response(null, {
        '\x73\x74\x61\x74\x75\x73': 0x65,
        '\x77\x65\x62\x53\x6f\x63\x6b\x65\x74': _0x2f4870
    });
}
async function parse特洛伊Header(_0x1ed339) {
    const _0x14c167 = _0x506e5c;
    if (_0x1ed339['\x62\x79\x74\x65\x4c\x65\x6e\x67\x74\x68'] < 0x38)
        return {
            '\x68\x61\x73\x45\x72\x72\x6f\x72': !![],
            '\x6d\x65\x73\x73\x61\x67\x65': _0x14c167(0x172) + '\x74\x61'
        };
    const _0x5ac07a = findCrLfIndex(_0x1ed339);
    if (_0x5ac07a === -0x1)
        return {
            '\x68\x61\x73\x45\x72\x72\x6f\x72': !![],
            '\x6d\x65\x73\x73\x61\x67\x65': _0x14c167(0xbe) + '\x61\x64\x65\x72\x20\x66\x6f\x72\x6d\x61' + _0x14c167(0x13c) + '\x20\x43\x52\x20\x4c\x46\x29'
        };
    const _0x3ece2d = new TextDecoder()['\x64\x65\x63\x6f\x64\x65'](_0x1ed339['\x73\x6c\x69\x63\x65'](0x0, _0x5ac07a));
    if (_0x3ece2d !== sha224Password)
        return {
            '\x68\x61\x73\x45\x72\x72\x6f\x72': !![],
            '\x6d\x65\x73\x73\x61\x67\x65': '\x69\x6e\x76\x61\x6c\x69\x64\x20\x70\x61' + _0x14c167(0xac)
        };
    const _0x263318 = _0x1ed339[_0x14c167(0x160)](_0x5ac07a + 0x2);
    if (_0x263318[_0x14c167(0x251)] < 0x6)
        return {
            '\x68\x61\x73\x45\x72\x72\x6f\x72': !![],
            '\x6d\x65\x73\x73\x61\x67\x65': _0x14c167(0x109) + _0x14c167(0x1b3) + '\x73\x74\x20\x64\x61\x74\x61'
        };
    const _0x1fa958 = new DataView(_0x263318);
    const _0x2e0a69 = _0x1fa958[_0x14c167(0xb7)](0x0);
    if (_0x2e0a69 !== 0x1)
        return {
            '\x68\x61\x73\x45\x72\x72\x6f\x72': !![],
            '\x6d\x65\x73\x73\x61\x67\x65': _0x14c167(0x130) + _0x14c167(0x196) + _0x14c167(0x1aa) + _0x14c167(0x1f7) + _0x14c167(0x13b)
        };
    const _0x389cdc = _0x1fa958[_0x14c167(0xb7)](0x1);
    const _0x2f2443 = getAddressFromAtype(_0x389cdc, _0x263318);
    if (!_0x2f2443[_0x14c167(0x1d7)])
        return _0x2f2443;
    const _0x5b8eb8 = _0x2f2443['\x69\x6e\x64\x65\x78'] + _0x2f2443[_0x14c167(0x18c)];
    const _0x5d9515 = _0x1fa958[_0x14c167(0xb3)](_0x5b8eb8);
    return {
        '\x68\x61\x73\x45\x72\x72\x6f\x72': ![],
        '\x61\x64\x64\x72\x65\x73\x73\x52\x65\x6d\x6f\x74\x65': _0x2f2443['\x61\x64\x64\x72\x65\x73\x73'],
        '\x70\x6f\x72\x74\x52\x65\x6d\x6f\x74\x65': _0x5d9515,
        '\x72\x61\x77\x43\x6c\x69\x65\x6e\x74\x44\x61\x74\x61': _0x263318[_0x14c167(0x160)](_0x5b8eb8 + 0x2),
        '\x61\x64\x64\x72\x65\x73\x73\x54\x79\x70\x65': _0x389cdc
    };
}
function setupConnectionParameters(_0x5ac2a9) {
    const _0x25ad26 = _0x506e5c;
    const _0xdb268b = _0x5ac2a9[_0x25ad26(0xd5)] + '\x2d\x2d' + Math[_0x25ad26(0x120)]() + _0x25ad26(0xde);
    return {
        '\x61\x64\x64\x72\x65\x73\x73': _0x5ac2a9['\x61\x64\x64\x72\x65\x73\x73\x52\x65\x6d' + _0x25ad26(0x115)],
        '\x70\x6f\x72\x74\x57\x69\x74\x68\x52\x61\x6e\x64\x6f\x6d\x4c\x6f\x67': _0xdb268b
    };
}
async function handleTCPOutBound(_0x3e1828, _0x36768e, _0x52dae1, _0x433eaf, _0x12ad4b, _0x395835) {
    const _0x54e8ae = _0x506e5c;
    const _0x5792e5 = await shouldUseSocks5(_0x36768e[_0x54e8ae(0xe2) + _0x54e8ae(0x115)]);
    const _0x1ffb8c = await connectAndWrite(_0x36768e[_0x54e8ae(0xe2) + '\x6f\x74\x65'], _0x36768e[_0x54e8ae(0xd5)], _0x52dae1, _0x5792e5, _0x12ad4b, _0x395835);
    _0x3e1828[_0x54e8ae(0x11d)] = _0x1ffb8c;
    remoteSocketToWS(_0x1ffb8c, _0x433eaf, retryConnection[_0x54e8ae(0x20a)](null, _0x3e1828, _0x36768e, _0x52dae1, _0x433eaf, _0x12ad4b, _0x395835), _0x12ad4b);
}
async function shouldUseSocks5(_0x3a862b) {
    const _0x2fc8d2 = _0x506e5c;
    if (go2Socks5s['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x2fc8d2(0x1f4)) || go2Socks5s[_0x2fc8d2(0x16f)]('\x2a'))
        return !![];
    return go2Socks5s[_0x2fc8d2(0x229)](_0x3b2878 => new RegExp('\x5e' + _0x3b2878['\x72\x65\x70\x6c\x61\x63\x65'](/\*/g, '\x2e\x2a') + '\x24', '\x69')[_0x2fc8d2(0x10e)](_0x3a862b));
}
async function connectAndWrite(_0x41e8f9, _0x6d9776, _0x5b0043, _0x7cefd3, _0x27d58f, _0x200013) {
    const _0x5a598e = _0x506e5c;
    _0x27d58f(_0x5a598e(0x1a6) + _0x5a598e(0x20d) + _0x41e8f9 + '\x3a' + _0x6d9776);
    const _0x23a76f = _0x7cefd3 ? await socks5Connect(_0x200013, _0x41e8f9, _0x6d9776, _0x27d58f) : connect({
        '\x68\x6f\x73\x74\x6e\x61\x6d\x65': _0x41e8f9,
        '\x70\x6f\x72\x74': _0x6d9776
    });
    const _0x26559d = _0x23a76f[_0x5a598e(0x16b)][_0x5a598e(0x25e)]();
    await _0x26559d['\x77\x72\x69\x74\x65'](_0x5b0043);
    _0x26559d[_0x5a598e(0x141) + '\x6b']();
    return _0x23a76f;
}
async function retryConnection(_0x15480c, _0x2f39e5, _0x542f6a, _0x498acf, _0x4f4d5a, _0x41d78f) {
    const _0x925c4f = _0x506e5c;
    try {
        const _0x5e14a4 = await shouldUseSocks5(_0x2f39e5[_0x925c4f(0xe2) + _0x925c4f(0x115)]);
        const _0x4c03df = await connectAndWrite(_0x2f39e5[_0x925c4f(0xe2) + _0x925c4f(0x115)], _0x2f39e5[_0x925c4f(0xd5)], _0x542f6a, _0x5e14a4, _0x4f4d5a, _0x41d78f);
        _0x15480c['\x76\x61\x6c\x75\x65'] = _0x4c03df;
        remoteSocketToWS(_0x4c03df, _0x498acf, null, _0x4f4d5a);
    } catch (_0x17f050) {
        safeCloseWebSocket(_0x498acf);
        console[_0x925c4f(0x161)]('\x72\x65\x74\x72\x79\x20\x74\x63\x70\x53' + _0x925c4f(0x252) + _0x925c4f(0x103), _0x17f050);
    }
}
async function remoteSocketToWS(_0x3c5527, _0x20fa69, _0x427a5f, _0x3e2576) {
    const _0x4dc139 = _0x506e5c;
    let _0x3b0650 = ![];
    await _0x3c5527[_0x4dc139(0x183)][_0x4dc139(0x1fe)](new WritableStream({
        '\x73\x74\x61\x72\x74'() {
        },
        async '\x77\x72\x69\x74\x65'(_0x385b3f, _0x571b30) {
            const _0xc3ec73 = _0x4dc139;
            _0x3b0650 = !![];
            if (_0x20fa69[_0xc3ec73(0x176)] !== WS_READY_STATE_OPEN) {
                _0x571b30[_0xc3ec73(0x161)](_0xc3ec73(0x1a8) + '\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e' + _0xc3ec73(0xcd) + '\x65\x6e');
            }
            _0x20fa69[_0xc3ec73(0x192)](_0x385b3f);
        },
        '\x63\x6c\x6f\x73\x65'() {
            const _0x3b6c49 = _0x4dc139;
            _0x3e2576(_0x3b6c49(0x21a) + '\x65\x74\x2e\x72\x65\x61\x64\x61\x62\x6c' + _0x3b6c49(0x167) + _0x3b6c49(0x23e) + _0x3b6c49(0xea) + _0x3b0650);
        },
        '\x61\x62\x6f\x72\x74'(_0x4856c4) {
            const _0x492c2e = _0x4dc139;
            console[_0x492c2e(0x161)]('\x72\x65\x6d\x6f\x74\x65\x53\x6f\x63\x6b' + '\x65\x74\x2e\x72\x65\x61\x64\x61\x62\x6c' + _0x492c2e(0x119), _0x4856c4);
        }
    }))[_0x4dc139(0x135)](_0x4240e7 => {
        const _0x51a147 = _0x4dc139;
        console[_0x51a147(0x161)]('\x72\x65\x6d\x6f\x74\x65\x53\x6f\x63\x6b' + '\x65\x74\x54\x6f\x57\x53\x20\x65\x72\x72' + '\x6f\x72\x3a', _0x4240e7[_0x51a147(0x262)] || _0x4240e7);
        safeCloseWebSocket(_0x20fa69);
    });
    if (!_0x3b0650 && _0x427a5f) {
        _0x3e2576('\x72\x65\x74\x72\x79');
        _0x427a5f();
    }
}
function makeReadableWebSocketStream(_0x237025, _0x2abf95, _0x350b46) {
    let _0x5b4c39 = ![];
    const _0x2fb6be = new ReadableStream({
        '\x73\x74\x61\x72\x74'(_0x2daf7b) {
            const _0x3b48ad = _0x29cb;
            _0x237025['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69' + '\x73\x74\x65\x6e\x65\x72']('\x6d\x65\x73\x73\x61\x67\x65', _0x34fe74 => {
                const _0x45ffce = _0x29cb;
                if (_0x5b4c39)
                    return;
                _0x2daf7b[_0x45ffce(0xb0)](_0x34fe74['\x64\x61\x74\x61']);
            });
            _0x237025[_0x3b48ad(0x153) + _0x3b48ad(0xb1)](_0x3b48ad(0x240), () => {
                const _0x536c0e = _0x3b48ad;
                safeCloseWebSocket(_0x237025);
                if (_0x5b4c39)
                    return;
                _0x2daf7b[_0x536c0e(0x240)]();
            });
            _0x237025['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69' + _0x3b48ad(0xb1)](_0x3b48ad(0x161), _0x2630d1 => {
                const _0x6e2929 = _0x3b48ad;
                _0x350b46(_0x6e2929(0x25b) + _0x6e2929(0x21e) + '\x72');
                _0x2daf7b[_0x6e2929(0x161)](_0x2630d1);
            });
            const {
                earlyData: _0x50255f,
                error: _0xb0e2e4
            } = base64ToArrayBuffer(_0x2abf95);
            if (_0xb0e2e4)
                _0x2daf7b[_0x3b48ad(0x161)](_0xb0e2e4);
            else if (_0x50255f)
                _0x2daf7b[_0x3b48ad(0xb0)](_0x50255f);
        },
        '\x70\x75\x6c\x6c'(_0x4086b4) {
        },
        '\x63\x61\x6e\x63\x65\x6c'(_0x172116) {
            const _0x581686 = _0x29cb;
            if (_0x5b4c39)
                return;
            _0x350b46(_0x581686(0xfe) + _0x581686(0x200) + '\x61\x6e\x63\x65\x6c\x65\x64\x2c\x20\x64' + _0x581686(0x179) + _0x172116);
            _0x5b4c39 = !![];
            safeCloseWebSocket(_0x237025);
        }
    });
    return _0x2fb6be;
}
function findCrLfIndex(_0x58a488) {
    const _0x523932 = _0x506e5c;
    for (let _0xe96ebf = 0x38; _0xe96ebf < _0x58a488[_0x523932(0x251)] - 0x1; _0xe96ebf++) {
        if (new Uint8Array(_0x58a488['\x73\x6c\x69\x63\x65'](_0xe96ebf, _0xe96ebf + 0x2))[_0x523932(0x245)](_0x2531f9 => _0x2531f9 === 0xd || _0x2531f9 === 0xa))
            return _0xe96ebf;
    }
    return -0x1;
}
function getAddressFromAtype(_0x54b6dd, _0x5a00fe) {
    const _0x18ac79 = _0x506e5c;
    const _0x1450bf = new DataView(_0x5a00fe);
    switch (_0x54b6dd) {
    case 0x1:
        return getIPv4Address(_0x1450bf, 0x2);
    case 0x3:
        return getDomainName(_0x1450bf, 0x2);
    case 0x4:
        return getIPv6Address(_0x1450bf, 0x2);
    default:
        return {
            '\x73\x75\x63\x63\x65\x73\x73': ![],
            '\x6d\x65\x73\x73\x61\x67\x65': _0x18ac79(0x225) + _0x18ac79(0x138) + _0x18ac79(0x25f) + _0x54b6dd
        };
    }
}
function getIPv4Address(_0x101392, _0x3d7a89) {
    const _0x3a9d32 = _0x506e5c;
    const _0x4b6f72 = Array['\x66\x72\x6f\x6d']({ '\x6c\x65\x6e\x67\x74\x68': 0x4 }, (_0x3fc09f, _0x4bf7b8) => _0x101392[_0x3a9d32(0xb7)](_0x3d7a89 + _0x4bf7b8))[_0x3a9d32(0x15a)]('\x2e');
    return {
        '\x73\x75\x63\x63\x65\x73\x73': !![],
        '\x61\x64\x64\x72\x65\x73\x73': _0x4b6f72,
        '\x69\x6e\x64\x65\x78': _0x3d7a89,
        '\x6c\x65\x6e\x67\x74\x68': 0x4
    };
}
function getDomainName(_0x126ac6, _0x1519d7) {
    const _0x135027 = _0x506e5c;
    const _0x1feff6 = _0x126ac6[_0x135027(0xb7)](_0x1519d7);
    const _0x29f196 = new TextDecoder()[_0x135027(0x1f6)](buffer[_0x135027(0x160)](_0x1519d7 + 0x1, _0x1519d7 + 0x1 + _0x1feff6));
    return {
        '\x73\x75\x63\x63\x65\x73\x73': !![],
        '\x61\x64\x64\x72\x65\x73\x73': _0x29f196,
        '\x69\x6e\x64\x65\x78': _0x1519d7 + 0x1,
        '\x6c\x65\x6e\x67\x74\x68': _0x1feff6
    };
}
function getIPv6Address(_0x417156, _0x5d4270) {
    const _0xfc48b1 = _0x506e5c;
    const _0x57dda9 = Array[_0xfc48b1(0x18e)]({ '\x6c\x65\x6e\x67\x74\x68': 0x8 }, (_0x3fff56, _0x67cb43) => _0x417156['\x67\x65\x74\x55\x69\x6e\x74\x31\x36'](_0x5d4270 + _0x67cb43 * 0x2)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))[_0xfc48b1(0x15a)]('\x3a');
    return {
        '\x73\x75\x63\x63\x65\x73\x73': !![],
        '\x61\x64\x64\x72\x65\x73\x73': _0x57dda9,
        '\x69\x6e\x64\x65\x78': _0x5d4270,
        '\x6c\x65\x6e\x67\x74\x68': 0x10
    };
}
function _0x4bcf() {
    const _0x89f192 = [
        '\x2c\x20\x73\x65\x72\x76\x65\x72\x3a\x20',
        '\x73\x75\x63\x63\x65\x73\x73',
        '\x61\x73\x68\x2d\x6d\x65\x74\x61\u3001\x73',
        '\x43\x53\x56\u6587\u4ef6\u7f3a\u5c11\u5fc5\u9700\u7684',
        '\x31\x37\x32\x2e\x36\x34\x2e\x30\x2e\x30',
        '\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75',
        '\x70\x73\x77\x64',
        '\x38\x36\x34\x30\x30\x20\x73\x74\x72\x69',
        '\x20\u9650\u901f\x20',
        '\x73\x70\x6c\x69\x74',
        '\x26\x73\x6f\x72\x74\x3d\x66\x61\x6c\x73',
        '\x33\x7a\x66\x64\x57\x4d\x74',
        '\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e',
        '\x62\x53\x6f\x63\x6b\x65\x74\x53\x74\x72',
        '\x43\x4b\x53\x20\x61\x64\x64\x72\x65\x73',
        '\x2e\x30\x2f\x32\x33',
        '\x4a\x54\x49\x7a\x4a\x54\x49\x7a\x4a\x54',
        '\x72\x65\x61\x64',
        '\x66\x6c\x61\x74\x4d\x61\x70',
        '\x56\x79\x63\x79\x31\x6c\x63\x47\x56\x70',
        '\x2d\x2d\x2d\x2d\x0a\x23\x23\x23\x23\x23',
        '\x73\x74\x72\x69\x6e\x67\x69\x66\x79',
        '\x50\x53\x42\x30\x63\x6d\x39\x71\x59\x57',
        '\x31\x38\x38\x2e\x31\x31\x34\x2e\x39\x36',
        '\x55\x79\x4d\x79\x55\x79\x4d\x79\x55\x79',
        '\x73\x65\x61\x72\x63\x68\x50\x61\x72\x61',
        '\x26\x66\x64\x6e\x3d\x66\x61\x6c\x73\x65',
        '\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73',
        '\u7f6e\x20\x61\x64\x64\x72\x65\x73\x73\x65',
        '\x64\x48\x4a\x76\x61\x6d\x46\x75',
        '\x61\x6c\x6c\x20\x69\x6e',
        '\x38\x34\x34\x33',
        '\x64\x65\x63\x6f\x64\x65',
        '\x28\x43\x4f\x4e\x4e\x45\x43\x54\x29\x20',
        '\x77\x6f\x72\x6b\x65\x72\x73\x2e\x64\x65',
        '\x65\x26\x78\x75\x64\x70\x3d\x66\x61\x6c',
        '\x4d\x44\x35',
        '\x2a\x3d\x75\x74\x66\x2d\x38\x27\x27',
        '\x2e\x6f\x72\x67\x2f\x62\x6f\x74',
        '\x61\x63\x63\x65\x70\x74',
        '\x70\x69\x70\x65\x54\x6f',
        '\x63\x6f\x75\x6e\x74\x72\x79',
        '\x72\x65\x61\x6d\x20\x77\x61\x73\x20\x63',
        '\x31\x6a\x62\x57\x78\x70\x64\x53\x5a\x77',
        '\x70\x61\x74\x68\x6e\x61\x6d\x65',
        '\x6e\x6f\x20\x61\x63\x63\x65\x70\x74\x61',
        '\x26\x70\x61\x74\x68\x3d',
        '\x48\x6f\x73\x74',
        '\x63\x65\x69\x6c',
        '\u4f18\u9009\u57df\u540d\x26\x49\x50\x20\u7684\x20',
        '\x3f\x6c\x61\x6e\x67\x3d\x7a\x68\x2d\x43',
        '\x3a\x2f\x2f',
        '\x62\x69\x6e\x64',
        '\x41\x44\x44',
        '\x6a\x73\x6f\x6e',
        '\x74\x6f\x20',
        '\x54\x47\x54\x4f\x4b\x45\x4e',
        '\x6c\x73\x65',
        '\x53\x75\x72\x67\x65\u8ba2\u9605\u5fc5\u987b\u7ed1',
        '\x73\x6e\x69\x3d',
        '\x41\x44\x44\x41\x50\x49\uff08\x54\x4c\x53',
        '\x35\x58\x71\x50\x51\x4e\x76',
        '\x73\x75\x62\x63\x6f\x6e\x76\x65\x72\x74',
        '\x65\x6e\x74\x72\x69\x65\x73',
        '\u65e0\u6cd5\u6253\u5f00\x73\x6f\x63\x6b\x73\u8fde',
        '\uff08\u8ba2\u9605\u8f6c\u6362\u914d\u7f6e\u6587\u4ef6\uff09',
        '\x65\x72\x3e\u5165\u53e3\x3a\x20',
        '\x20\x65\x78\x70\x65\x63\x74\x65\x64\x3a',
        '\x72\x65\x6d\x6f\x74\x65\x53\x6f\x63\x6b',
        '\x73\x6f\x63\x6b\x73\u8fde\u63a5\u5df2\u6253\u5f00',
        '\x65\x72\x74\x2d\x76\x65\x72\x69\x66\x79',
        '\x2a\x74\x61\x70\x65\x63\x6f\x6e\x74\x65',
        '\x65\x72\x76\x65\x72\x20\x65\x72\x72\x6f',
        '\x66\x75\x6e\x63\x74\x69\x6f\x6e',
        '\x32\x37\x37\x30\x34\x33\x32\x7a\x78\x68\x59\x4a\x51',
        '\x73\x65\x64',
        '\x72\x75\x65\x26\x66\x64\x6e\x3d\x66\x61',
        '\x66\x75\x6c\x66\x69\x6c\x6c\x65\x64',
        '\x65\x73\x74\u6d4b\u901f\x63\x73\x76\u6587\u4ef6',
        '\x69\x6e\x76\x61\x6c\x69\x64\x20\x61\x64',
        '\x52\x50\x52\x4f\x58\x59\x49\x50',
        '\x2c\x20\x74\x79\x70\x65\x3a\x20',
        '\x20\x65\x72\x72\x6f\x72\x3a\x20',
        '\x73\x6f\x6d\x65',
        '\x43\x46\x43\x44\x4e\uff08\u8bbf\u95ee\u65b9\u5f0f',
        '\x0a\u60a8\u7684\u8ba2\u9605\u5185\u5bb9\u7531\x20\u5185',
        '\x34\x34\x33',
        '\x0a\x41\x53\x4e\x3a\x20',
        '\x55\x55\x49\x44',
        '\x6d\x61\x73\x74\x65\x72\x2f\x43\x6c\x61',
        '\x65\x26\x74\x66\x6f\x3d\x66\x61\x6c\x73',
        '\x0a\x50\x41\x53\x53\x57\x4f\x52\x44\x3a',
        '\u751f\u6548\uff1f',
        '\x6d\x61\x74\x63\x68',
        '\x61\x74\x65\x2c\x20\x62\x72',
        '\x61\x64\x64\x72\x65\x73\x73\x54\x79\x70',
        '\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f',
        '\x74\x3d\x73\x75\x72\x67\x65\x26\x76\x65',
        '\x72\x74\x65\x64',
        '\x73\x68\x2f\x63\x6f\x6e\x66\x69\x67\x2f',
        '\x6d\x65\x73\x73\x61\x67\x65',
        '\x0a\x49\x50\x3a\x20',
        '\x69\x7a\x65\x64\x26\x74\x79\x70\x65\x3d',
        '\x26\x70\x61\x73\x73\x77\x6f\x72\x64\x3d',
        '\x64\x2c\x20\x68\x61\x73\x49\x6e\x63\x6f',
        '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x0a',
        '\x63\x6c\x6f\x73\x65',
        '\x43\x46\x50\x4f\x52\x54\x53',
        '\x65\x61\x6d\x20\x69\x73\x20\x61\x62\x6f',
        '\x20\x7b\x70\x61\x74\x68\x3a\x20\x22',
        '\x63\x72\x69\x62\x65\x20\x2f\x20\x73\x75',
        '\x65\x76\x65\x72\x79',
        '\x20\uff01\uff01\uff01\x0a',
        '\x73\x6f\x63\x6b\x73\x35',
        '\x2c\x20\x73\x6e\x69\x3a\x20',
        '\x72\x72\x6f\x72',
        '\x74\x66\x2d\x38',
        '\u8981\u60a8\u8bbe\u7f6e\x20\x70\x72\x6f\x78\x79',
        '\x68\x74\x74\x70\x73',
        '\x2c\x20\x70\x6f\x72\x74\x3a\x20',
        '\x2f\x73\x6f\x63\x6b\x73\x35\x3a\x2f\x2f',
        '\x45\x4d\x4f\x4a\x49',
        '\x67\x65\x74\x54\x69\x6d\x65',
        '\x62\x79\x74\x65\x4c\x65\x6e\x67\x74\x68',
        '\x6f\x63\x6b\x65\x74\x20\x63\x6c\x6f\x73',
        '\x65\x2c\x20\x74\x66\x6f\x3d\x66\x61\x6c',
        '\x41\x44\x44\x41\x50\x49',
        '\x55\x41\x3a\x20',
        '\x6c\x69\x6e\x65\x5f\x4d\x69\x6e\x69\x5f',
        '\x65\x26\x6e\x65\x77\x5f\x6e\x61\x6d\x65',
        '\x69\x6e\x64\x65\x78\x4f\x66',
        '\x56\x73\x5a\x57\x64\x79\x59\x57\x30\x6c',
        '\x23\u83b7\u53d6\u8ba2\u9605\x20',
        '\x77\x65\x62\x53\x6f\x63\x6b\x65\x74\x53',
        '\x73\x65\x61\x72\x63\x68',
        '\x73\x75\x72\x67\x65',
        '\x67\x65\x74\x57\x72\x69\x74\x65\x72',
        '\x69\x73\x20',
        '\x41\x44\x44\uff08\x54\x4c\x53\u4f18\u9009\u57df',
        '\x36\x33\x39\x35\x30\x44\x69\x42\x4c\x61\x46',
        '\x73\x74\x61\x63\x6b',
        '\x0a\u7ec4\u7ec7\x3a\x20',
        '\x2f\x73\x75\x62\x3f\x68\x6f\x73\x74\x3d',
        '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70',
        '\x74\x65\x78\x74',
        '\x37\x70\x73\x4f\x66\x74\x54',
        '\x53\x55\x42',
        '\x3b\x20\x66\x69\x6c\x65\x6e\x61\x6d\x65',
        '\x47\x45\x54',
        '\x2f\x3f\x65\x64\x3d\x32\x35\x36\x30',
        '\x66\x69\x6c\x74\x65\x72',
        '\x2e\x77\x6f\x72\x6b\x65\x72\x73\x2e\x64',
        '\x73\x73\x77\x6f\x72\x64',
        '\x73\x65\x26\x65\x78\x70\x61\x6e\x64\x3d',
        '\x53\x55\x42\x45\x4d\x4f\x4a\x49',
        '\x74\x6c\x73\x26\x73\x6e\x69\x3d',
        '\x65\x6e\x71\x75\x65\x75\x65',
        '\x73\x74\x65\x6e\x65\x72',
        '\x52\x2f\x41\x43\x4c\x34\x53\x53\x52\x2f',
        '\x67\x65\x74\x55\x69\x6e\x74\x31\x36',
        '\x3a\x20\x74\x72\x75\x65\x2c\x20\x6e\x65',
        '\x53\x55\x42\x43\x4f\x4e\x46\x49\x47',
        '\x32\x30\x38\x37',
        '\x67\x65\x74\x55\x69\x6e\x74\x38',
        '\x75\x72\x6c',
        '\x6e\x6f\x77',
        '\x2e\x78\x79\x7a',
        '\x32\x30\x35\x33',
        '\x6e\x65\x6b\x6f\x62\x6f\x78',
        '\x2a\x2e\x6c\x6f\x61\x64\x73\x68\x61\x72',
        '\x69\x6e\x76\x61\x6c\x69\x64\x20\x68\x65',
        '\x55\x52\x4c',
        '\x63\x68\x61\x72\x41\x74',
        '\x25\x38\x44\x25\x45\x35\x25\x38\x44\x25',
        '\x75\x75\x69\x64',
        '\x20\x42\x61\x73\x65\x36\x34\u3001\x63\x6c',
        '\x2f\x3f\x65\x64\x3d\x32\x35\x36\x30\x26',
        '\x73\x69\x6e\x67\x62\x6f\x78',
        '\x3f\x73\x65\x63\x75\x72\x69\x74\x79\x3d',
        '\x70\x75\x73\x68',
        '\x0a\x3c\x74\x67\x2d\x73\x70\x6f\x69\x6c',
        '\x6c\x61\x73\x68\u8ba2\u9605\u5730\u5740\x3a\x0a',
        '\x69\x6e\x67\x2d\x62\x6f\x78\x20\u8ba2\u9605',
        '\x6c\x6f\x67',
        '\uff09\x3a\x20\u65e0\u6cd5\u8bbf\u95ee\x2c\x20\u9700',
        '\x20\x69\x73\x20\x6e\x6f\x74\x20\x6f\x70',
        '\x66\x61\x6c\x73\x65',
        '\x39\x35\x25\x45\x46\x25\x42\x43\x25\x38',
        '\x0a\x53\x55\x42\x41\x50\x49\uff08\u8ba2\u9605',
        '\x26\x65\x6d\x6f\x6a\x69\x3d',
        '\x2d\x53\x55\x42',
        '\x65\x72\x3e',
        '\x41\x44\x44\x43\x53\x56',
        '\x70\x6f\x72\x74\x52\x65\x6d\x6f\x74\x65',
        '\x65\x6e\x63\x6f\x64\x65',
        '\x32\x34\x34\x30\x36\x77\x6c\x6a\x76\x53\x49',
        '\x65\x72\x20\x76\x65\x72\x73\x69\x6f\x6e',
        '\x3b\x20\x64\x6f\x77\x6e\x6c\x6f\x61\x64',
        '\x70\x72\x6f\x78\x79\x69\x70',
        '\x0a\x53\x48\x41\x32\x32\x34\x3a\x20',
        '\x49\x7a\x4a\x54\x49\x7a\x4a\x54\x49\x7a',
        '\x75\x74\x68',
        '\x20\x74\x63\x70',
        '\x65\x72\x3e\u57ce\u5e02\x3a\x20',
        '\x43\x46\x2d\x43\x6f\x6e\x6e\x65\x63\x74',
        '\x2f\x31\x33',
        '\x61\x64\x64\x72\x65\x73\x73\x52\x65\x6d',
        '\x32\x30\x38\x33',
        '\x62\x75\x66\x66\x65\x72',
        '\x6e\x74\x3a\x20',
        '\x70\x72\x6f\x78\x79\x69\x70\x3d\x74\x72',
        '\x74\x72\x69\x6d',
        '\x65\x3d\x48\x54\x4d\x4c\x26\x74\x65\x78',
        '\x36\x34\u8ba2\u9605\u5730\u5740\x3a\x0a\x68\x74',
        '\x6d\x69\x6e\x67\x44\x61\x74\x61\x3a\x20',
        '\x53\x4f\x43\x4b\x53\x35\x25\x45\x46\x25',
        '\x6c\x61\x79\x3d\x66\x61\x6c\x73\x65',
        '\x6e\x74\x2e\x6e\x65\x74',
        '\x32\x32\x35\x70\x7a\x66\x47\x7a\x6f',
        '\x72\x65\x64\x69\x72\x65\x63\x74',
        '\x76\x65\x72\x69\x66\x79\x3d\x74\x72\x75',
        '\x3a\x20\x7b\x48\x6f\x73\x74\x3a\x20',
        '\x45\x72\x72\x6f\x72\x3a\x20\x66\x65\x74',
        '\x55\x70\x67\x72\x61\x64\x65',
        '\x25\x38\x37\x25\x38\x46',
        '\x76\x69\x72\x6f\x6e\x6d\x65\x6e\x74\x2e',
        '\x2f\x73\x6f\x63\x6b\x73\x35\x3d',
        '\x36\x25\x42\x35\x25\x38\x31\x25\x45\x39',
        '\x4d\x79\x55\x79\x4d\x79\x55\x79\x4d\x79',
        '\x55\x52\x4c\x33\x30\x32',
        '\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74',
        '\x26\x70\x77\x3d',
        '\x66\x6c\x6f\x6f\x72',
        '\x50\x52\x4f\x58\x59\x49\x50',
        '\x72\x65\x61\x64\x61\x62\x6c\x65\x53\x74',
        '\x20\uff09\x3a\x20\x0a\x20\x20',
        '\u83b7\u53d6\x43\x53\x56\u5730\u5740\u65f6\u51fa\u9519',
        '\x43\x4f\x4e\x46\x49\x47\x20',
        '\x61\x62\x6f\x72\x74',
        '\x65\x64\x20\x65\x72\x72\x6f\x72',
        '\x36\x35\x34\x30\x33\x36\x7a\x48\x68\x6d\x75\x67',
        '\x74\x3d\x73\x69\x6e\x67\x62\x6f\x78\x26',
        '\x22\x2c\x20\x68\x65\x61\x64\x65\x72\x73',
        '\x73\x75\x62\x74\x6c\x65',
        '\x45\x6c\x4e\x44\x42\x30\x5a\x79\x56\x46',
        '\x69\x6e\x76\x61\x6c\x69\x64\x20\x53\x4f',
        '\x70\x61\x64\x53\x74\x61\x72\x74',
        '\x6b\x2e\x64\x65\x64\x79\x6e\x2e\x69\x6f',
        '\x65\x26\x73\x63\x76\x3d\x74\x72\x75\x65',
        '\x74\x6f\x53\x74\x72\x69\x6e\x67',
        '\x74\x65\x73\x74',
        '\x70\x72\x6f\x74\x6f\x63\x6f\x6c',
        '\x74\x68\x65\x6e',
        '\x23\x43\x46\u968f\u673a\u8282\u70b9',
        '\x68\x6f\x73\x74\x6e\x61\x6d\x65',
        '\x26\x70\x61\x72\x73\x65\x5f\x6d\x6f\x64',
        '\x26\x6c\x69\x73\x74\x3d\x66\x61\x6c\x73',
        '\x6f\x74\x65',
        '\x62\x36\x34',
        '\x69\x6e\x67\x2d\x49\x50',
        '\x51\x30\x59\x74\x56\x32\x39\x79\x61\x32',
        '\x65\x20\x61\x62\x6f\x72\x74',
        '\x45\x36\x25\x39\x43\x25\x38\x39\x25\x45',
        '\x73\x65\x63\x2d\x77\x65\x62\x73\x6f\x63',
        '\x67\x65\x3f\x63\x68\x61\x74\x5f\x69\x64',
        '\x76\x61\x6c\x75\x65',
        '\x67\x65\x74',
        '\x6e\x75\x6c\x6c',
        '\x72\x61\x6e\x64\x6f\x6d',
        '\x78\x79\x49\x50\x0a',
        '\u8bf7\u8bbe\u7f6e\u4f60\u7684\x50\x41\x53\x53\x57',
        '\uff09\x3a\x20\x53\x6f\x63\x6b\x73\x35\x0a',
        '\x4f\x52\x44\u53d8\u91cf\uff0c\u6216\u5c1d\u8bd5\u91cd',
        '\x69\x6e\x69',
        '\x73\x65\x74\x48\x6f\x75\x72\x73',
        '\u6210\u5668\uff09\x3a\x20',
        '\x2c\x20\x61\x6c\x70\x6e\x3a\x20\x5b\x68',
        '\x68\x61\x73',
        '\x65\x70\x65\x69\x75\x73',
        '\x0a\x20\x20',
        '\x65\x72\x3e\x0a\u57df\u540d\x3a\x20',
        '\x42\x43\x25\x38\x38\x25\x45\x37\x25\x39',
        '\x23\x21\x4d\x41\x4e\x41\x47\x45\x44\x2d',
        '\x3f\x73\x69\x6e\x67\x62\x6f\x78\x0a\x0a',
        '\x75\x6e\x73\x75\x70\x70\x6f\x72\x74\x65',
        '\x6d\x61\x70',
        '\x73\x65\x2c\x20\x75\x64\x70\x2d\x72\x65',
        '\x75\x72\x6c\x3d',
        '\x45\x72\x72\x6f\x72\x20\x66\x65\x74\x63',
        '\x63\x61\x74\x63\x68',
        '\x62\x61\x73\x65\x36\x34',
        '\x2f\x31\x34',
        '\x64\x72\x65\x73\x73\x54\x79\x70\x65\x20',
        '\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e',
        '\x4d\x75\x6c\x74\x69\x4d\x6f\x64\x65\x2e',
        '\x69\x73\x20\x61\x6c\x6c\x6f\x77\x65\x64',
        '\x74\x20\x28\x6d\x69\x73\x73\x69\x6e\x67',
        '\x3f\x62\x36\x34\x0a\x68\x74\x74\x70\x73',
        '\x73\x6f\x63\x6b\x73\x20\x73\x65\x72\x76',
        '\x66\x61\x69\x6c\x20\x74\x6f\x20\x61\x75',
        '\x62\x6c\x65\x20\x6d\x65\x74\x68\x6f\x64',
        '\x72\x65\x6c\x65\x61\x73\x65\x4c\x6f\x63',
        '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d',
        '\x66\x69\x6c\x6c',
        '\x73\x75\x62',
        '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x0a',
        '\u83b7\u53d6\u5730\u5740\u65f6\u51fa\u9519\x3a',
        '\x2f\x70\x72\x6f\x78\x79\x69\x70\x3d',
        '\x49\x50\x2f\x50\x52\x4f\x58\x59\x49\x50',
        '\x7d\x7d\x7d',
        '\x3d\x74\x72\x75\x65',
        '\x6f\x6e\x2f',
        '\x2d\x2d\x2d\x2d\x0a',
        '\x68\x74\x74\x70\x73\x3a\x2f\x2f',
        '\x68\x74\x74\x70',
        '\x53\x48\x41\x32\x32\x34',
        '\x61\x70\x69\x2e\x63\x6f\x6d\x2f\x6a\x73',
        '\x68\x69\x6e\x67\x20\x63\x6f\x6e\x74\x65',
        '\x62\x20\u8ba2\u9605\u5730\u5740\x2c\x20\u652f\u6301',
        '\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69',
        '\x73\x6f\x63\x6b\x73',
        '\x6f\x72\x67',
        '\x76\x69\x64\x65\x20\x75\x73\x65\x72\x6e',
        '\x37\x32\x32\x35\x32\x37\x34\x71\x50\x4c\x70\x51\x4b',
        '\x43\x46\x2d\x57\x6f\x72\x6b\x65\x72\x73',
        '\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c',
        '\x6a\x6f\x69\x6e',
        '\x74\x77\x6f\x72\x6b\x3a\x20',
        '\x61\x6d\x65\x2f\x70\x61\x73\x73\x77\x6f',
        '\x26\x66\x70\x3d\x72\x61\x6e\x64\x6f\x6d',
        '\x73\x69\x6e\x67\x2d\x62\x6f\x78',
        '\u9002\u5e94\u8ba2\u9605\u5730\u5740\x3a\x0a\x68\x74',
        '\x73\x6c\x69\x63\x65',
        '\x65\x72\x72\x6f\x72',
        '\u8bd5\u90e8\u7f72\uff0c\u68c0\u67e5\u53d8\u91cf\u662f\u5426',
        '\x0a\x53\x55\x42\uff08\u4f18\u9009\u8ba2\u9605\u751f',
        '\x0a\u56fd\u5bb6\x3a\x20',
        '\x70\x72\x6f\x78\x79\x69\x70\x2e',
        '\x74\x70\x73\x3a\x2f\x2f',
        '\x65\x20\x69\x73\x20\x63\x6c\x6f\x73\x65',
        '\x31\x30\x34\x2e\x32\x34\x2e\x30\x2e\x30',
        '\x33\x5d\x2c\x20\x73\x6b\x69\x70\x2d\x63',
        '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f',
        '\x77\x72\x69\x74\x61\x62\x6c\x65',
        '\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73',
        '\x62\x6f\x64\x79',
        '\x31\x32\x37\x2e\x30\x2e\x30\x2e\x31\x3a',
        '\x69\x6e\x63\x6c\x75\x64\x65\x73',
        '\x76\x61\x6c\x75\x65\x73',
        '\x72\x65\x76\x65\x72\x73\x65',
        '\x69\x6e\x76\x61\x6c\x69\x64\x20\x64\x61',
        '\u683c\u5f0f\x0a\x2d\x2d\x2d\x2d\x2d\x2d\x2d',
        '\x52\x55\x59\x6c\x51\x6b\x4d\x6c\x4f\x55',
        '\x2e\x30\x2f\x32\x31',
        '\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65',
        '\uff09\x3a\x20\x50\x72\x6f\x78\x79\x49\x50',
        '\x26\x69\x6e\x73\x65\x72\x74\x3d\x66\x61',
        '\x75\x65\x20\x74\x6f\x20',
        '\x31\x30\x34\x2e\x31\x36\x2e\x30\x2e\x30',
        '\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73',
        '\x32\x30\x39\x36',
        '\x73\x6b\x69\x70\x2d\x63\x65\x72\x74\x2d',
        '\x53\x75\x72\x67\x65\u8ba2\u9605\u5730\u5740\x3a',
        '\x69\x6f\x6e\x2f\x78\x6d\x6c\x3b',
        '\x76\x32\x72\x61\x79\x0a\x2d\x2d\x2d\x2d',
        '\x2a\x74\x74\x76\x6e\x77\x2e\x6e\x65\x74',
        '\x70\x6f\x70',
        '\x72\x65\x61\x64\x61\x62\x6c\x65',
        '\x63\x68\x20\x69\x73\x20\x6e\x6f\x74\x20',
        '\x3b\x20\x74\x6f\x74\x61\x6c\x3d',
        '\x6d\x6f\x7a\x69\x6c\x6c\x61',
        '\x73\x75\x62\x73\x74\x72\x69\x6e\x67',
        '\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f',
        '\x73\x69\x67\x6e\x61\x6c',
        '\x74\x68\x20\x73\x6f\x63\x6b\x73\x20\x73',
        '\x2f\x73\x75\x62\x3f\x74\x61\x72\x67\x65',
        '\x6c\x65\x6e\x67\x74\x68',
        '\x0a\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d',
        '\x66\x72\x6f\x6d',
        '\x55\x73\x65\x72\x2d\x41\x67\x65\x6e\x74',
        '\x77\x72\x69\x74\x65',
        '\x20\x65\x72\x72\x6f\x72',
        '\x73\x65\x6e\x64',
        '\x2f\x73\x65\x6e\x64\x4d\x65\x73\x73\x61',
        '\x6e\x74\x3a',
        '\x68\x65\x61\x64\x65\x72\x73',
        '\x64\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x2c',
        '\x74\x3d\x63\x6c\x61\x73\x68\x26\x75\x72',
        '\x63\x6f\x6d\x2f\x41\x43\x4c\x34\x53\x53',
        '\x73\x65\x26\x74\x66\x6f\x3d\x66\x61\x6c',
        '\x2c\x20\x77\x73\x2d\x6f\x70\x74\x73\x3a',
        '\x2a\x63\x6c\x6f\x75\x64\x61\x74\x61\x63',
        '\x3c\x2f\x74\x67\x2d\x73\x70\x6f\x69\x6c',
        '\x65\x62\x53\x6f\x63\x6b\x65\x74\x20\x65',
        '\x49\x6e\x76\x61\x6c\x69\x64\x20\x53\x4f',
        '\x3f\x63\x6c\x61\x73\x68\x0a\x0a\x73\x69',
        '\x50\x41\x53\x53\x57\x4f\x52\x44',
        '\u670d\u52a1\uff0c\u8bf7\u5c3d\u5feb\u7ed1\u5b9a\u81ea\u5b9a',
        '\x6e\x2f\x78\x68\x74\x6d\x6c\x2b\x78\x6d',
        '\x72\x65\x70\x6c\x61\x63\x65',
        '\x77\x73\x26\x68\x6f\x73\x74\x3d',
        '\x74\x65\x78\x74\x2f\x68\x74\x6d\x6c\x2c',
        '\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64\x20',
        '\x23\x23\x23\x23\x23\x0a\x53\x75\x62\x73',
        '\x77\x65\x62\x53\x6f\x63\x6b\x65\x74\x20',
        '\x61\x74\x74\x61\x63\x68\x6d\x65\x6e\x74',
        '\x20\x6f\x6e\x6c\x79\x20\x54\x43\x50\x20',
        '\x26\x68\x6f\x73\x74\x3d',
        '\x66\x69\x6e\x64',
        '\x72\x3d\x34\x26\x75\x72\x6c\x3d',
        '\x4d\x79\x55\x77\x51\x53\x55\x79\x4d\x79',
        '\x6c\x73\x65\x26\x63\x6f\x6e\x66\x69\x67',
        '\x73\x74\x61\x74\x75\x73\x54\x65\x78\x74',
        '\x65\x72\x76\x65\x72',
        '\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20',
        '\x43\x4b\x53\x35\x20\x72\x65\x71\x75\x65',
        '\x3f\x73\x75\x72\x67\x65',
        '\u5b9a\u81ea\u5b9a\u4e49\u57df',
        '\x4d\x79\x55\x79\x4d\x79\x55\x79\x4d\x77',
        '\x2f\x70\x72\x6f\x78\x79\x69\x70\x2e',
        '\x33\x33\x30\x30\x34\x39\x32\x59\x58\x6c\x7a\x57\x44',
        '\x0a\x23\x23\x23\x23\x23\x23\x23\x23\x23',
        '\x4a\x6d\x56\x77\x5a\x57\x6c\x31\x63\x7a',
        '\x72\x65\x61\x64\x61\x62\x6c\x65\x57\x65',
        '\x65\x72\x20\x6e\x65\x65\x64\x73\x20\x61',
        '\x75\x70\x6c\x6f\x61\x64\x3d',
        '\x30\x2e\x30\x2e\x34\x34\x33\x30\x2e\x37',
        '\x57\x4f\x52\x44\u5c31\u662f\u9519\u7684\uff01\uff01',
        '\x34\x35\x31\x38\x34\x32\x30\x6a\x68\x78\x59\x47\x52',
        '\x2c\x20\x77\x73\x2d\x68\x65\x61\x64\x65',
        '\x63\x6c\x61\x73\x68',
        '\x74\x72\x75\x65',
        '\x2c\x20\x70\x61\x73\x73\x77\x6f\x72\x64',
        '\x3b\x20\x65\x78\x70\x69\x72\x65\x3d',
        '\x64\x58\x4d\x76\x59\x32\x31\x73\x61\x58',
        '\u4e49\u57df\uff01',
        '\x39\x25\x33\x41\x25\x32\x30',
        '\x73\x54\x79\x70\x65\x3a\x20',
        '\x68\x74\x74\x70\x3a\x2f\x2f\x69\x70\x2d',
        '\x73\x65\x26\x75\x64\x70\x3d\x66\x61\x6c',
        '\x47\x4f\x32\x53\x4f\x43\x4b\x53\x35',
        '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23',
        '\u8f6c\u6362\u540e\u7aef\uff09\x3a\x20',
        '\x73\x74\x61\x74\x75\x73',
        '\x34\x35\x31\x57\x71\x43\x72\x75\x47',
        '\x73\x20\x66\x6f\x72\x6d\x61\x74',
        '\x0a\x55\x41\x3a\x20',
        '\x63\x75\x72\x65\x3d\x31\x26\x74\x79\x70',
        '\x63\x6f\x6e\x63\x61\x74',
        '\x54\x52\x55\x45'
    ];
    _0x4bcf = function () {
        return _0x89f192;
    };
    return _0x4bcf();
}
function base64ToArrayBuffer(_0x1a0847) {
    const _0x451023 = _0x506e5c;
    if (!_0x1a0847)
        return { '\x65\x72\x72\x6f\x72': null };
    try {
        _0x1a0847 = _0x1a0847['\x72\x65\x70\x6c\x61\x63\x65'](/-/g, '\x2b')[_0x451023(0x1a3)](/_/g, '\x2f');
        const _0x2759e3 = atob(_0x1a0847);
        const _0x4d0392 = Uint8Array[_0x451023(0x18e)](_0x2759e3, _0x57901d => _0x57901d['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](0x0))[_0x451023(0xe4)];
        return {
            '\x65\x61\x72\x6c\x79\x44\x61\x74\x61': _0x4d0392,
            '\x65\x72\x72\x6f\x72': null
        };
    } catch (_0x3f8b55) {
        return { '\x65\x72\x72\x6f\x72': _0x3f8b55 };
    }
}
async function writeToRemoteSocket(_0x3b027c, _0x4084b8) {
    const _0x5219c6 = _0x506e5c;
    const _0x5434e8 = _0x3b027c[_0x5219c6(0x16b)][_0x5219c6(0x25e)]();
    await _0x5434e8['\x77\x72\x69\x74\x65'](_0x4084b8);
    _0x5434e8[_0x5219c6(0x141) + '\x6b']();
}
let WS_READY_STATE_OPEN = 0x1;
let WS_READY_STATE_CLOSING = 0x2;
function safeCloseWebSocket(_0x4d48fd) {
    const _0x34df11 = _0x506e5c;
    try {
        if (_0x4d48fd[_0x34df11(0x176)] === WS_READY_STATE_OPEN || _0x4d48fd[_0x34df11(0x176)] === WS_READY_STATE_CLOSING) {
            _0x4d48fd['\x63\x6c\x6f\x73\x65']();
        }
    } catch (_0x1accbc) {
        console['\x65\x72\x72\x6f\x72']('\x73\x61\x66\x65\x43\x6c\x6f\x73\x65\x57' + _0x34df11(0x19d) + _0x34df11(0x249), _0x1accbc);
    }
}
function revertFakeInfo(_0x4ca6de, _0x1e3b3a, _0x1aff35, _0x31a67d) {
    const _0x5b9549 = _0x506e5c;
    if (_0x31a67d)
        _0x4ca6de = atob(_0x4ca6de);
    _0x4ca6de = _0x4ca6de[_0x5b9549(0x1a3)](new RegExp(fakeUserID, '\x67'), _0x1e3b3a)[_0x5b9549(0x1a3)](new RegExp(fakeHostName, '\x67'), _0x1aff35);
    if (_0x31a67d)
        _0x4ca6de = btoa(_0x4ca6de);
    return _0x4ca6de;
}
async function MD5MD5(_0x31dfda) {
    const _0x134cc2 = _0x506e5c;
    const _0x45f146 = new TextEncoder();
    const _0x1d47ba = await crypto[_0x134cc2(0x107)]['\x64\x69\x67\x65\x73\x74'](_0x134cc2(0x1fa), _0x45f146['\x65\x6e\x63\x6f\x64\x65'](_0x31dfda));
    const _0x44f6b9 = Array[_0x134cc2(0x18e)](new Uint8Array(_0x1d47ba));
    const _0x297a24 = _0x44f6b9[_0x134cc2(0x131)](_0x52ee05 => _0x52ee05[_0x134cc2(0x10d)](0x10)[_0x134cc2(0x10a)](0x2, '\x30'))['\x6a\x6f\x69\x6e']('');
    const _0x25d035 = await crypto[_0x134cc2(0x107)]['\x64\x69\x67\x65\x73\x74']('\x4d\x44\x35', _0x45f146[_0x134cc2(0xd6)](_0x297a24[_0x134cc2(0x160)](0x7, 0x1b)));
    const _0x34148e = Array[_0x134cc2(0x18e)](new Uint8Array(_0x25d035));
    const _0xdb7b55 = _0x34148e[_0x134cc2(0x131)](_0x1f0967 => _0x1f0967[_0x134cc2(0x10d)](0x10)[_0x134cc2(0x10a)](0x2, '\x30'))[_0x134cc2(0x15a)]('');
    return _0xdb7b55[_0x134cc2(0x17b) + '\x65']();
}
async function ADD(_0x132a59) {
    const _0x24552a = _0x506e5c;
    let _0x3f1dbe = _0x132a59['\x72\x65\x70\x6c\x61\x63\x65'](/[	|"'\r\n]+/g, '\x2c')[_0x24552a(0x1a3)](/,+/g, '\x2c');
    if (_0x3f1dbe[_0x24552a(0xc0)](0x0) === '\x2c')
        _0x3f1dbe = _0x3f1dbe['\x73\x6c\x69\x63\x65'](0x1);
    if (_0x3f1dbe[_0x24552a(0xc0)](_0x3f1dbe[_0x24552a(0x18c)] - 0x1) === '\x2c')
        _0x3f1dbe = _0x3f1dbe[_0x24552a(0x160)](0x0, _0x3f1dbe['\x6c\x65\x6e\x67\x74\x68'] - 0x1);
    const _0x42d680 = _0x3f1dbe[_0x24552a(0x1df)]('\x2c');
    return _0x42d680;
}
async function proxyURL(_0x5a78f9, _0x45ab09) {
    const _0x3641dc = _0x506e5c;
    const _0x1a059a = await ADD(_0x5a78f9);
    const _0x55e984 = _0x1a059a[Math['\x66\x6c\x6f\x6f\x72'](Math[_0x3641dc(0x120)]() * _0x1a059a[_0x3641dc(0x18c)])];
    let _0x424787 = new URL(_0x55e984);
    console['\x6c\x6f\x67'](_0x424787);
    let _0x51ff47 = _0x424787[_0x3641dc(0x10f)]['\x73\x6c\x69\x63\x65'](0x0, -0x1) || '\x68\x74\x74\x70\x73';
    let _0x12aebe = _0x424787[_0x3641dc(0x112)];
    let _0x96af86 = _0x424787['\x70\x61\x74\x68\x6e\x61\x6d\x65'];
    let _0x31c319 = _0x424787[_0x3641dc(0x25c)];
    if (_0x96af86[_0x3641dc(0xc0)](_0x96af86[_0x3641dc(0x18c)] - 0x1) === '\x2f') {
        _0x96af86 = _0x96af86[_0x3641dc(0x160)](0x0, -0x1);
    }
    _0x96af86 += _0x45ab09[_0x3641dc(0x202)];
    let _0x13a21d = _0x51ff47 + _0x3641dc(0x209) + _0x12aebe + _0x96af86 + _0x31c319;
    let _0x26eb87 = await fetch(_0x13a21d);
    let _0x2930c3 = new Response(_0x26eb87[_0x3641dc(0x16d)], {
        '\x73\x74\x61\x74\x75\x73': _0x26eb87['\x73\x74\x61\x74\x75\x73'],
        '\x73\x74\x61\x74\x75\x73\x54\x65\x78\x74': _0x26eb87[_0x3641dc(0x1b0)],
        '\x68\x65\x61\x64\x65\x72\x73': _0x26eb87[_0x3641dc(0x195)]
    });
    _0x2930c3[_0x3641dc(0x195)]['\x73\x65\x74']('\x58\x2d\x4e\x65\x77\x2d\x55\x52\x4c', _0x13a21d);
    return _0x2930c3;
}
function 配置信息(_0x29b25a, _0x15ffbd) {
    const _0xd6d0fe = _0x506e5c;
    const _0x314b26 = _0xd6d0fe(0x1f3);
    const _0x2ef3d6 = atob(啥啥啥_写的这是啥あ);
    const _0x48e29b = FileName;
    let _0xe37485 = _0x15ffbd;
    let _0x4c35af = 0x1bb;
    const _0xe41bcb = '\x77\x73';
    const _0x3eead4 = _0x15ffbd;
    const _0x293d60 = path;
    let _0xb0556d = [
        '\x74\x6c\x73',
        !![]
    ];
    const _0x7344df = _0x15ffbd;
    const _0x223ed1 = '\x72\x61\x6e\x64\x6f\x6d\x69\x7a\x65\x64';
    const _0x17479b = _0x2ef3d6 + _0xd6d0fe(0x209) + encodeURIComponent(_0x29b25a) + '\x40' + _0xe37485 + '\x3a' + _0x4c35af + _0xd6d0fe(0xc6) + _0xb0556d[0x0] + '\x26\x73\x6e\x69\x3d' + _0x7344df + ('\x26\x61\x6c\x70\x6e\x3d\x68\x33\x26\x66' + '\x70\x3d') + _0x223ed1 + ('\x26\x61\x6c\x6c\x6f\x77\x49\x6e\x73\x65' + _0xd6d0fe(0x1d3) + '\x65\x3d') + _0xe41bcb + _0xd6d0fe(0x1ab) + _0x3eead4 + _0xd6d0fe(0x204) + encodeURIComponent(_0x293d60) + '\x23' + encodeURIComponent(_0x48e29b);
    const _0x5971d7 = '\x2d\x20\x7b\x6e\x61\x6d\x65\x3a\x20' + _0x48e29b + _0xd6d0fe(0x1d6) + _0xe37485 + _0xd6d0fe(0x24d) + _0x4c35af + ('\x2c\x20\x75\x64\x70\x3a\x20\x66\x61\x6c' + '\x73\x65\x2c\x20\x63\x6c\x69\x65\x6e\x74' + '\x2d\x66\x69\x6e\x67\x65\x72\x70\x72\x69' + _0xd6d0fe(0xe5)) + _0x223ed1 + _0xd6d0fe(0x227) + _0x2ef3d6 + (_0xd6d0fe(0x1c4) + '\x3a\x20') + _0x29b25a + _0xd6d0fe(0x248) + _0x7344df + (_0xd6d0fe(0x128) + _0xd6d0fe(0x169) + _0xd6d0fe(0x21c) + _0xd6d0fe(0xb4) + _0xd6d0fe(0x15b)) + _0xe41bcb + (_0xd6d0fe(0x19a) + _0xd6d0fe(0x243)) + _0x293d60 + (_0xd6d0fe(0x106) + _0xd6d0fe(0xf1)) + _0x3eead4 + _0xd6d0fe(0x149);
    return [
        _0x17479b,
        _0x5971d7
    ];
}
let subParams = [
    _0x506e5c(0x144),
    _0x506e5c(0x136),
    _0x506e5c(0x116),
    '\x63\x6c\x61\x73\x68',
    _0x506e5c(0xc5),
    '\x73\x62',
    _0x506e5c(0x25d)
];
async function get特洛伊Config(_0x19b7f4, _0x1655f5, _0xceedb9, _0x574544, _0x2cff1a, _0x1cdf34) {
    const _0x5b8d8a = _0x506e5c;
    if (_0xceedb9) {
        const _0x1b517d = _0xceedb9[_0x5b8d8a(0x233)](/^(?:https?:\/\/)?([^\/]+)/);
        if (_0x1b517d) {
            _0xceedb9 = _0x1b517d[0x1];
        }
        const _0x649859 = await ADD(_0xceedb9);
        if (_0x649859[_0x5b8d8a(0x18c)] > 0x1)
            _0xceedb9 = _0x649859[0x0];
    } else if (addresses[_0x5b8d8a(0x18c)] + addressesapi[_0x5b8d8a(0x18c)] + addressescsv[_0x5b8d8a(0x18c)] === 0x0) {
        let _0x642ec2 = [
            '\x31\x30\x33\x2e\x32\x31\x2e\x32\x34\x34' + _0x5b8d8a(0x1e5),
            _0x5b8d8a(0x17a) + _0x5b8d8a(0xe1),
            _0x5b8d8a(0x168) + _0x5b8d8a(0x137),
            _0x5b8d8a(0x1da) + _0x5b8d8a(0x137),
            _0x5b8d8a(0x1ed) + _0x5b8d8a(0x175),
            '\x31\x39\x30\x2e\x39\x33\x2e\x32\x34\x30' + _0x5b8d8a(0x175)
        ];
        function _0x338628(_0x5826d5) {
            const _0x120b29 = _0x5b8d8a;
            const [_0x505212, _0x18063d] = _0x5826d5[_0x120b29(0x1df)]('\x2f');
            const _0x47570b = _0x505212[_0x120b29(0x1df)]('\x2e')[_0x120b29(0x131)](Number);
            const _0x539d49 = 0x20 - parseInt(_0x18063d, 0xa);
            const _0x58277c = Math['\x70\x6f\x77'](0x2, _0x539d49) - 0x1;
            const _0x3694b1 = Math[_0x120b29(0xfc)](Math[_0x120b29(0x120)]() * _0x58277c);
            const _0xcaddc7 = _0x47570b['\x6d\x61\x70']((_0x541e7a, _0x5a506d) => {
                if (_0x5a506d < 0x2)
                    return _0x541e7a;
                if (_0x5a506d === 0x2)
                    return (_0x541e7a & 0xff << _0x539d49 - 0x8) + (_0x3694b1 >> 0x8 & 0xff);
                return (_0x541e7a & 0xff << _0x539d49) + (_0x3694b1 & 0xff);
            });
            return _0xcaddc7[_0x120b29(0x15a)]('\x2e');
        }
        addresses = addresses['\x63\x6f\x6e\x63\x61\x74'](_0x5b8d8a(0x16e) + '\x31\x32\x33\x34\x23\x43\x46\x6e\x61\x74');
        addresses = addresses[_0x5b8d8a(0x1d4)](_0x642ec2[_0x5b8d8a(0x131)](_0x5109bd => _0x338628(_0x5109bd) + _0x5b8d8a(0x111)));
    }
    const _0xf72746 = _0x574544[_0x5b8d8a(0x17b) + '\x65']();
    const _0x3c1f36 = 配置信息(_0x19b7f4, _0x1655f5);
    const _0x2e5a83 = _0x3c1f36[0x0];
    const _0x12575d = _0x3c1f36[0x1];
    let _0x409547 = '';
    if (_0x1655f5[_0x5b8d8a(0x16f)]('\x2e\x77\x6f\x72\x6b\x65\x72\x73\x2e\x64' + '\x65\x76')) {
        if (proxyhostsURL && (!proxyhosts || proxyhosts[_0x5b8d8a(0x18c)] === 0x0)) {
            try {
                const _0x3f9534 = await fetch(proxyhostsURL);
                if (!_0x3f9534['\x6f\x6b']) {
                    console[_0x5b8d8a(0x161)](_0x5b8d8a(0x146), _0x3f9534[_0x5b8d8a(0x1cf)], _0x3f9534['\x73\x74\x61\x74\x75\x73\x54\x65\x78\x74']);
                    return;
                }
                const _0x80bf3c = await _0x3f9534[_0x5b8d8a(0xa4)]();
                const _0x4e1cdb = _0x80bf3c[_0x5b8d8a(0x1df)]('\x0a');
                const _0x471a92 = _0x4e1cdb['\x66\x69\x6c\x74\x65\x72'](_0x49cbe2 => _0x49cbe2['\x74\x72\x69\x6d']() !== '');
                proxyhosts = proxyhosts[_0x5b8d8a(0x1d4)](_0x471a92);
            } catch (_0x2053c9) {
                console[_0x5b8d8a(0x161)](_0x5b8d8a(0x146), _0x2053c9);
            }
        }
        if (proxyhosts[_0x5b8d8a(0x18c)] !== 0x0)
            _0x409547 = proxyhosts[Math['\x66\x6c\x6f\x6f\x72'](Math[_0x5b8d8a(0x120)]() * proxyhosts['\x6c\x65\x6e\x67\x74\x68'])] + '\x2f';
    }
    if (_0xf72746[_0x5b8d8a(0x16f)](_0x5b8d8a(0x186)) && !subParams[_0x5b8d8a(0x229)](_0x2e1568 => _0x1cdf34[_0x5b8d8a(0x1ef) + '\x6d\x73']['\x68\x61\x73'](_0x2e1568))) {
        let _0xc48df9 = _0x5b8d8a(0x17e) + _0x5b8d8a(0x236) + _0x409547 + _0x1655f5 + '\x2f' + _0x19b7f4 + '\x3f\x73\x75\x72\x67\x65';
        if (_0x1655f5['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x5b8d8a(0xab) + '\x65\x76'))
            _0xc48df9 = _0x5b8d8a(0x210) + _0x5b8d8a(0x1b5);
        const _0x19d066 = socks5s['\x6d\x61\x70'](_0x264d49 => {
            const _0x2b88c = _0x5b8d8a;
            if (_0x264d49[_0x2b88c(0x16f)]('\x40'))
                return _0x264d49[_0x2b88c(0x1df)]('\x40')[0x1];
            else if (_0x264d49[_0x2b88c(0x16f)]('\x2f\x2f'))
                return _0x264d49['\x73\x70\x6c\x69\x74']('\x2f\x2f')[0x1];
            else
                return _0x264d49;
        });
        let _0x25a4ca = '';
        if (go2Socks5s[_0x5b8d8a(0x18c)] > 0x0 && enableSocks) {
            _0x25a4ca = '' + decodeURIComponent(_0x5b8d8a(0xeb) + _0x5b8d8a(0x12d) + '\x39\x25\x42\x44\x25\x45\x35\x25\x39\x30' + _0x5b8d8a(0xc1) + _0x5b8d8a(0xcf) + _0x5b8d8a(0x1c8));
            if (go2Socks5s[_0x5b8d8a(0x16f)](atob('\x59\x57\x78\x73\x49\x47\x6c\x75')) || go2Socks5s['\x69\x6e\x63\x6c\x75\x64\x65\x73'](atob('\x4b\x67\x3d\x3d')))
                _0x25a4ca += decodeURIComponent('\x25\x45\x36\x25\x38\x39\x25\x38\x30\x25' + _0x5b8d8a(0x11a) + _0x5b8d8a(0xf7) + _0x5b8d8a(0xf4)) + '\x0a';
            else
                _0x25a4ca += '\x0a\x20\x20' + go2Socks5s[_0x5b8d8a(0x15a)](_0x5b8d8a(0x12b)) + '\x0a';
        }
        let _0x3b6930 = '';
        if (_0xceedb9) {
            if (enableSocks)
                _0x3b6930 += '\x43\x46\x43\x44\x4e\uff08\u8bbf\u95ee\u65b9\u5f0f' + _0x5b8d8a(0x123) + '\x20\x20' + _0x19d066['\x6a\x6f\x69\x6e']('\x0a\x20\x20') + '\x0a' + _0x25a4ca;
            else if (proxyIP && proxyIP !== '')
                _0x3b6930 += _0x5b8d8a(0x22a) + _0x5b8d8a(0x177) + _0x5b8d8a(0x12b) + proxyIPs[_0x5b8d8a(0x15a)](_0x5b8d8a(0x12b)) + '\x0a';
            else if (_0x2cff1a === _0x5b8d8a(0x1c3))
                _0x3b6930 += '\x43\x46\x43\x44\x4e\uff08\u8bbf\u95ee\u65b9\u5f0f' + '\uff09\x3a\x20\u81ea\u52a8\u83b7\u53d6\x50\x72\x6f' + _0x5b8d8a(0x121);
            else
                _0x3b6930 += '\x43\x46\x43\x44\x4e\uff08\u8bbf\u95ee\u65b9\u5f0f' + _0x5b8d8a(0xcc) + _0x5b8d8a(0x24b) + _0x5b8d8a(0x148) + _0x5b8d8a(0x246);
            _0x3b6930 += _0x5b8d8a(0x163) + _0x5b8d8a(0x127) + _0xceedb9;
        } else {
            if (enableSocks)
                _0x3b6930 += '\x43\x46\x43\x44\x4e\uff08\u8bbf\u95ee\u65b9\u5f0f' + '\uff09\x3a\x20\x53\x6f\x63\x6b\x73\x35\x0a' + '\x20\x20' + _0x19d066[_0x5b8d8a(0x15a)](_0x5b8d8a(0x12b)) + '\x0a' + _0x25a4ca;
            else if (proxyIP && proxyIP !== '')
                _0x3b6930 += _0x5b8d8a(0x22a) + _0x5b8d8a(0x177) + _0x5b8d8a(0x12b) + proxyIPs['\x6a\x6f\x69\x6e']('\x0a\x20\x20') + '\x0a';
            else
                _0x3b6930 += '\x43\x46\x43\x44\x4e\uff08\u8bbf\u95ee\u65b9\u5f0f' + _0x5b8d8a(0xcc) + _0x5b8d8a(0x24b) + _0x5b8d8a(0x148) + _0x5b8d8a(0x246);
            _0x3b6930 += _0x5b8d8a(0x22b) + _0x5b8d8a(0x1f2) + '\x73\x2f\x41\x44\x44\x2a\x20\u53c2\u6570\u53d8' + '\u91cf\u63d0\u4f9b\x0a';
            if (addresses[_0x5b8d8a(0x18c)] > 0x0)
                _0x3b6930 += _0x5b8d8a(0x260) + '\u540d\x26\x49\x50\uff09\x3a\x20\x0a\x20\x20' + addresses['\x6a\x6f\x69\x6e'](_0x5b8d8a(0x12b)) + '\x0a';
            if (addressesapi[_0x5b8d8a(0x18c)] > 0x0)
                _0x3b6930 += _0x5b8d8a(0x212) + _0x5b8d8a(0x207) + '\x41\x50\x49\uff09\x3a\x20\x0a\x20\x20' + addressesapi['\x6a\x6f\x69\x6e'](_0x5b8d8a(0x12b)) + '\x0a';
            if (addressescsv['\x6c\x65\x6e\x67\x74\x68'] > 0x0)
                _0x3b6930 += '\x41\x44\x44\x43\x53\x56\uff08\x49\x50\x54' + _0x5b8d8a(0x224) + _0x5b8d8a(0x1de) + DLS + _0x5b8d8a(0xff) + addressescsv[_0x5b8d8a(0x15a)]('\x0a\x20\x20') + '\x0a';
        }
        return _0x5b8d8a(0x1b9) + _0x5b8d8a(0x1cd) + _0x5b8d8a(0x1cd) + _0x5b8d8a(0x1cd) + _0x5b8d8a(0x1cd) + _0x5b8d8a(0x1cd) + _0x5b8d8a(0x1a7) + _0x5b8d8a(0x244) + _0x5b8d8a(0x152) + _0x5b8d8a(0xc3) + _0x5b8d8a(0x1d8) + _0x5b8d8a(0xca) + _0x5b8d8a(0x173) + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + _0x5b8d8a(0x142) + _0x5b8d8a(0x142) + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + _0x5b8d8a(0x142) + '\x2d\x2d\x2d\x2d\x2d\x2d\x0a\u5feb\u901f\u81ea' + _0x5b8d8a(0x15f) + _0x5b8d8a(0x166) + _0x409547 + _0x1655f5 + '\x2f' + _0x19b7f4 + _0x5b8d8a(0x236) + _0x409547 + _0x1655f5 + '\x2f' + _0x19b7f4 + ('\x3f\x73\x75\x62\x0a\x0a\x42\x61\x73\x65' + _0x5b8d8a(0xe9) + _0x5b8d8a(0x166)) + _0x409547 + _0x1655f5 + '\x2f' + _0x19b7f4 + (_0x5b8d8a(0x13d) + _0x5b8d8a(0x209)) + _0x409547 + _0x1655f5 + '\x2f' + _0x19b7f4 + ('\x3f\x62\x61\x73\x65\x36\x34\x0a\x0a\x63' + _0x5b8d8a(0xc9) + _0x5b8d8a(0x14d)) + _0x409547 + _0x1655f5 + '\x2f' + _0x19b7f4 + (_0x5b8d8a(0x19f) + '\x6e\x67\x62\x6f\x78\u8ba2\u9605\u5730\u5740\x3a' + _0x5b8d8a(0x236)) + _0x409547 + _0x1655f5 + '\x2f' + _0x19b7f4 + ('\x3f\x73\x62\x0a\x68\x74\x74\x70\x73\x3a' + '\x2f\x2f') + _0x409547 + _0x1655f5 + '\x2f' + _0x19b7f4 + _0x5b8d8a(0x12f) + _0xc48df9 + (_0x5b8d8a(0x18d) + _0x5b8d8a(0x142) + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + _0x5b8d8a(0x142) + _0x5b8d8a(0x142) + _0x5b8d8a(0x142) + _0x5b8d8a(0x1ea) + '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23' + '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23' + _0x5b8d8a(0x1cd) + _0x5b8d8a(0x1cd) + '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23' + _0x5b8d8a(0x23f)) + FileName + ('\x20\u914d\u7f6e\u4fe1\u606f\x0a\x2d\x2d\x2d\x2d' + _0x5b8d8a(0x142) + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + _0x5b8d8a(0x142) + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + _0x5b8d8a(0x145) + '\x48\x4f\x53\x54\x3a\x20') + _0x1655f5 + (_0x5b8d8a(0x231) + '\x20') + _0x19b7f4 + _0x5b8d8a(0xdb) + sha224Password + ('\x0a\x46\x41\x4b\x45\x50\x41\x53\x53\x3a' + '\x20') + fakeUserID + _0x5b8d8a(0x1d2) + _0x574544 + '\x0a\x0a' + _0x3b6930 + (_0x5b8d8a(0xd0) + _0x5b8d8a(0x1ce)) + subProtocol + _0x5b8d8a(0x209) + subConverter + ('\x0a\x53\x55\x42\x43\x4f\x4e\x46\x49\x47' + _0x5b8d8a(0x217) + '\x3a\x20') + subConfig + (_0x5b8d8a(0x18d) + _0x5b8d8a(0x142) + _0x5b8d8a(0x142) + _0x5b8d8a(0x142) + _0x5b8d8a(0x142) + _0x5b8d8a(0x142) + _0x5b8d8a(0x1ea) + '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23' + _0x5b8d8a(0x1cd) + _0x5b8d8a(0x1cd) + _0x5b8d8a(0x1cd) + _0x5b8d8a(0x1cd) + _0x5b8d8a(0x23f) + _0x5b8d8a(0x180) + _0x5b8d8a(0x142) + _0x5b8d8a(0x142) + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + _0x5b8d8a(0x142) + _0x5b8d8a(0x142) + _0x5b8d8a(0x145)) + _0x2e5a83 + (_0x5b8d8a(0x18d) + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + _0x5b8d8a(0x142) + _0x5b8d8a(0x142) + _0x5b8d8a(0x142) + _0x5b8d8a(0x142) + _0x5b8d8a(0x1ea) + _0x5b8d8a(0x1cd) + _0x5b8d8a(0x1cd) + '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23' + '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x23' + _0x5b8d8a(0x1cd) + '\x23\x23\x23\x23\x23\x23\x23\x23\x23\x0a' + '\x63\x6c\x61\x73\x68\x2d\x6d\x65\x74\x61' + _0x5b8d8a(0x18d) + _0x5b8d8a(0x142) + _0x5b8d8a(0x142) + _0x5b8d8a(0x142) + _0x5b8d8a(0x142) + _0x5b8d8a(0x142) + _0x5b8d8a(0x14c)) + _0x12575d + (_0x5b8d8a(0x18d) + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + '\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d' + _0x5b8d8a(0x142) + _0x5b8d8a(0x142) + _0x5b8d8a(0x142) + _0x5b8d8a(0x1ea) + _0x5b8d8a(0x1cd) + _0x5b8d8a(0x1cd) + _0x5b8d8a(0x1cd) + _0x5b8d8a(0x1cd) + _0x5b8d8a(0x1cd) + _0x5b8d8a(0x23f)) + decodeURIComponent(atob(_0x5b8d8a(0x1e6) + _0x5b8d8a(0xdc) + _0x5b8d8a(0x1e6) + _0x5b8d8a(0xdc) + '\x4a\x54\x49\x7a\x4a\x54\x49\x7a\x4a\x54' + _0x5b8d8a(0xdc) + _0x5b8d8a(0x1e6) + _0x5b8d8a(0xdc) + '\x4a\x54\x49\x7a\x4a\x54\x49\x7a\x4a\x54' + '\x49\x7a\x4a\x54\x49\x7a\x4a\x54\x49\x7a' + _0x5b8d8a(0x1e6) + _0x5b8d8a(0xdc) + _0x5b8d8a(0x1e6) + _0x5b8d8a(0xdc) + '\x4a\x54\x49\x7a\x4a\x54\x42\x42\x64\x47' + _0x5b8d8a(0x259) + _0x5b8d8a(0x174) + _0x5b8d8a(0x108) + '\x4e\x79\x55\x35\x51\x69\x55\x35\x4e\x79' + '\x56\x46\x4e\x53\x55\x35\x51\x79\x56\x42' + _0x5b8d8a(0x1ae) + _0x5b8d8a(0x1ee) + _0x5b8d8a(0xf8) + _0x5b8d8a(0x1ee) + _0x5b8d8a(0xf8) + _0x5b8d8a(0x1ee) + _0x5b8d8a(0xf8) + _0x5b8d8a(0x1ee) + _0x5b8d8a(0xf8) + _0x5b8d8a(0x1ee) + _0x5b8d8a(0xf8) + '\x55\x79\x4d\x79\x55\x79\x4d\x79\x55\x79' + _0x5b8d8a(0xf8) + _0x5b8d8a(0x1ee) + _0x5b8d8a(0x1b6) + '\x3d\x3d')) + '\x0a';
    } else {
        if (typeof fetch !== _0x5b8d8a(0x21f)) {
            return _0x5b8d8a(0xf2) + _0x5b8d8a(0x184) + _0x5b8d8a(0x1b2) + '\x69\x6e\x20\x74\x68\x69\x73\x20\x65\x6e' + _0x5b8d8a(0xf5);
        }
        if (_0x1655f5[_0x5b8d8a(0x16f)](_0x5b8d8a(0xab) + '\x65\x76')) {
            fakeHostName = fakeHostName + (_0x5b8d8a(0xab) + '\x65\x76');
        } else {
            fakeHostName = fakeHostName + _0x5b8d8a(0xba);
        }
        let _0x4ce4a5 = '\x68\x74\x74\x70\x73\x3a\x2f\x2f' + _0xceedb9 + _0x5b8d8a(0xa2) + fakeHostName + _0x5b8d8a(0xfb) + fakeUserID + _0x5b8d8a(0x23d) + (fakeUserID + atob(_0x5b8d8a(0x1ba) + _0x5b8d8a(0x201) + '\x63\x6d\x39\x34\x65\x57\x6c\x77\x50\x51' + '\x3d\x3d') + _0x2cff1a) + _0x5b8d8a(0x204) + encodeURIComponent(path);
        let _0x22a91d = !![];
        let _0x54ae46 = [];
        let _0x2e41d3 = [];
        if (!_0xceedb9 || _0xceedb9 === '') {
            if (_0x1655f5[_0x5b8d8a(0x16f)](_0x5b8d8a(0x1f8) + '\x76')) {
                if (proxyhostsURL && (!proxyhosts || proxyhosts[_0x5b8d8a(0x18c)] === 0x0)) {
                    try {
                        const _0x2787c5 = await fetch(proxyhostsURL);
                        if (!_0x2787c5['\x6f\x6b']) {
                            console['\x65\x72\x72\x6f\x72']('\u83b7\u53d6\u5730\u5740\u65f6\u51fa\u9519\x3a', _0x2787c5[_0x5b8d8a(0x1cf)], _0x2787c5[_0x5b8d8a(0x1b0)]);
                            return;
                        }
                        const _0x28171e = await _0x2787c5[_0x5b8d8a(0xa4)]();
                        const _0x396fae = _0x28171e['\x73\x70\x6c\x69\x74']('\x0a');
                        const _0x54b129 = _0x396fae[_0x5b8d8a(0xaa)](_0x17e8d3 => _0x17e8d3[_0x5b8d8a(0xe7)]() !== '');
                        proxyhosts = proxyhosts['\x63\x6f\x6e\x63\x61\x74'](_0x54b129);
                    } catch (_0x1ca18a) {
                        console[_0x5b8d8a(0x161)](_0x5b8d8a(0x146), _0x1ca18a);
                    }
                }
                proxyhosts = [...new Set(proxyhosts)];
            }
            _0x54ae46 = await getAddressesapi(addressesapi);
            _0x2e41d3 = await getAddressescsv('\x54\x52\x55\x45');
            _0x4ce4a5 = _0x5b8d8a(0x14d) + _0x1655f5 + '\x2f' + (fakeUserID + _0x1cdf34[_0x5b8d8a(0x25c)]);
        }
        if (!_0xf72746[_0x5b8d8a(0x16f)]((_0x5b8d8a(0x158) + _0x5b8d8a(0xd2))[_0x5b8d8a(0x17b) + '\x65']())) {
            if (_0xf72746[_0x5b8d8a(0x16f)](_0x5b8d8a(0x1c2)) && !_0xf72746[_0x5b8d8a(0x16f)](_0x5b8d8a(0xbc)) || _0x1cdf34[_0x5b8d8a(0x1ef) + '\x6d\x73'][_0x5b8d8a(0x129)](_0x5b8d8a(0x1c2))) {
                _0x4ce4a5 = subProtocol + '\x3a\x2f\x2f' + subConverter + (_0x5b8d8a(0x18b) + _0x5b8d8a(0x197) + '\x6c\x3d') + encodeURIComponent(_0x4ce4a5) + ('\x26\x69\x6e\x73\x65\x72\x74\x3d\x66\x61' + _0x5b8d8a(0x1af) + '\x3d') + encodeURIComponent(subConfig) + _0x5b8d8a(0xd1) + subEmoji + ('\x26\x6c\x69\x73\x74\x3d\x66\x61\x6c\x73' + _0x5b8d8a(0x230) + '\x65\x26\x73\x63\x76\x3d\x74\x72\x75\x65' + '\x26\x66\x64\x6e\x3d\x66\x61\x6c\x73\x65' + _0x5b8d8a(0x1e0) + _0x5b8d8a(0x257) + _0x5b8d8a(0x14a));
                _0x22a91d = ![];
            } else if (_0xf72746['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x5b8d8a(0x15e)) || _0xf72746['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x5b8d8a(0xc5)) || _0x1cdf34['\x73\x65\x61\x72\x63\x68\x50\x61\x72\x61' + '\x6d\x73']['\x68\x61\x73'](_0x5b8d8a(0xc5)) || _0x1cdf34[_0x5b8d8a(0x1ef) + '\x6d\x73'][_0x5b8d8a(0x129)]('\x73\x62')) {
                _0x4ce4a5 = subProtocol + _0x5b8d8a(0x209) + subConverter + (_0x5b8d8a(0x18b) + _0x5b8d8a(0x105) + _0x5b8d8a(0x133)) + encodeURIComponent(_0x4ce4a5) + (_0x5b8d8a(0x178) + '\x6c\x73\x65\x26\x63\x6f\x6e\x66\x69\x67' + '\x3d') + encodeURIComponent(subConfig) + _0x5b8d8a(0xd1) + subEmoji + ('\x26\x6c\x69\x73\x74\x3d\x66\x61\x6c\x73' + _0x5b8d8a(0x230) + _0x5b8d8a(0x10c) + _0x5b8d8a(0x1f0) + _0x5b8d8a(0x1e0) + _0x5b8d8a(0x257) + _0x5b8d8a(0x14a));
                _0x22a91d = ![];
            } else if (_0xf72746[_0x5b8d8a(0x16f)]('\x73\x75\x72\x67\x65') || _0x1cdf34[_0x5b8d8a(0x1ef) + '\x6d\x73']['\x68\x61\x73'](_0x5b8d8a(0x25d))) {
                _0x4ce4a5 = subProtocol + _0x5b8d8a(0x209) + subConverter + (_0x5b8d8a(0x18b) + _0x5b8d8a(0x237) + _0x5b8d8a(0x1ad)) + encodeURIComponent(_0x4ce4a5) + ('\x26\x69\x6e\x73\x65\x72\x74\x3d\x66\x61' + _0x5b8d8a(0x1af) + '\x3d') + encodeURIComponent(subConfig) + _0x5b8d8a(0xd1) + subEmoji + (_0x5b8d8a(0x114) + _0x5b8d8a(0x1f9) + _0x5b8d8a(0x1cb) + _0x5b8d8a(0x199) + _0x5b8d8a(0xad) + '\x74\x72\x75\x65\x26\x73\x63\x76\x3d\x74' + _0x5b8d8a(0x222) + _0x5b8d8a(0x20f));
                _0x22a91d = ![];
            }
        }
        try {
            let _0x31748c;
            if ((!_0xceedb9 || _0xceedb9 === '') && _0x22a91d === !![]) {
                _0x31748c = await subAddresses(fakeHostName, fakeUserID, _0xf72746, _0x54ae46, _0x2e41d3);
            } else {
                const _0x1fd888 = await fetch(_0x4ce4a5, { '\x68\x65\x61\x64\x65\x72\x73': { '\x55\x73\x65\x72\x2d\x41\x67\x65\x6e\x74': atob(_0x5b8d8a(0x118) + _0x5b8d8a(0x1e9) + _0x5b8d8a(0x1c6) + '\x55\x3d') } });
                _0x31748c = await _0x1fd888[_0x5b8d8a(0xa4)]();
            }
            if (_0x1cdf34[_0x5b8d8a(0x202)] === '\x2f' + fakeUserID)
                return _0x31748c;
            _0x31748c = revertFakeInfo(_0x31748c, _0x19b7f4, _0x1655f5, _0x22a91d);
            if (_0xf72746[_0x5b8d8a(0x16f)]('\x73\x75\x72\x67\x65') || _0x1cdf34[_0x5b8d8a(0x1ef) + '\x6d\x73']['\x68\x61\x73'](_0x5b8d8a(0x25d)))
                _0x31748c = surge(_0x31748c, _0x5b8d8a(0x14d) + _0x1655f5 + '\x2f' + _0x19b7f4 + _0x5b8d8a(0x1b4));
            return _0x31748c;
        } catch (_0x77864b) {
            console[_0x5b8d8a(0x161)](_0x5b8d8a(0x134) + '\x68\x69\x6e\x67\x20\x63\x6f\x6e\x74\x65' + _0x5b8d8a(0x194), _0x77864b);
            return _0x5b8d8a(0x134) + _0x5b8d8a(0x151) + _0x5b8d8a(0xe5) + _0x77864b['\x6d\x65\x73\x73\x61\x67\x65'];
        }
    }
}
async function sendMessage(_0x5b5a16, _0x32dd42, _0x5123ca = '') {
    const _0x1726b1 = _0x506e5c;
    if (BotToken !== '' && ChatID !== '') {
        let _0x21b5e0 = '';
        try {
            const _0x48bf18 = await fetch(_0x1726b1(0x1ca) + _0x1726b1(0x150) + _0x1726b1(0x14b) + _0x32dd42 + (_0x1726b1(0x208) + '\x4e'));
            if (_0x48bf18['\x73\x74\x61\x74\x75\x73'] === 0xc8) {
                const _0x2c6f97 = await _0x48bf18[_0x1726b1(0x20c)]();
                _0x21b5e0 = _0x5b5a16 + '\x0a\x49\x50\x3a\x20' + _0x32dd42 + _0x1726b1(0x164) + _0x2c6f97[_0x1726b1(0x1ff)] + (_0x1726b1(0xc8) + _0x1726b1(0xdf)) + _0x2c6f97['\x63\x69\x74\x79'] + _0x1726b1(0xa1) + _0x2c6f97[_0x1726b1(0x155)] + _0x1726b1(0x22d) + _0x2c6f97['\x61\x73'] + '\x0a' + _0x5123ca;
            } else {
                _0x21b5e0 = _0x5b5a16 + _0x1726b1(0x23b) + _0x32dd42 + ('\x0a\x3c\x74\x67\x2d\x73\x70\x6f\x69\x6c' + '\x65\x72\x3e') + _0x5123ca;
            }
        } catch (_0x290cc7) {
            console[_0x1726b1(0x161)]('\u83b7\u53d6\x49\x50\u4fe1\u606f\u65f6\u51fa\u9519\x3a', _0x290cc7);
            _0x21b5e0 = _0x5b5a16 + _0x1726b1(0x23b) + _0x32dd42 + (_0x1726b1(0xc8) + '\x65\x72\x3e') + _0x5123ca;
        }
        const _0x37d095 = _0x1726b1(0xa3) + '\x69\x2e\x74\x65\x6c\x65\x67\x72\x61\x6d' + _0x1726b1(0x1fc) + BotToken + (_0x1726b1(0x193) + _0x1726b1(0x11c) + '\x3d') + ChatID + (_0x1726b1(0x113) + _0x1726b1(0xe8) + '\x74\x3d') + encodeURIComponent(_0x21b5e0);
        return fetch(_0x37d095, {
            '\x6d\x65\x74\x68\x6f\x64': _0x1726b1(0xa8),
            '\x68\x65\x61\x64\x65\x72\x73': {
                '\x41\x63\x63\x65\x70\x74': _0x1726b1(0x1a5) + '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f' + _0x1726b1(0x1a2) + '\x6c\x2c\x61\x70\x70\x6c\x69\x63\x61\x74' + _0x1726b1(0x17f),
                '\x41\x63\x63\x65\x70\x74\x2d\x45\x6e\x63\x6f\x64\x69\x6e\x67': _0x1726b1(0x159) + _0x1726b1(0x234),
                '\x55\x73\x65\x72\x2d\x41\x67\x65\x6e\x74': '\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e' + '\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x39' + _0x1726b1(0x1be) + '\x32'
            }
        });
    }
}
async function socks5Connect(_0x5a97e5, _0xa37478, _0x46e25e, _0x3f3e0d) {
    const _0x336f14 = _0x506e5c;
    const {
        username: _0x81bb8d,
        password: _0x44cafb,
        hostname: _0x5bca7b,
        port: _0x236113
    } = parsedSocks5Address;
    const _0x126820 = connect({
        '\x68\x6f\x73\x74\x6e\x61\x6d\x65': _0x5bca7b,
        '\x70\x6f\x72\x74': _0x236113
    });
    const _0x877f24 = new Uint8Array([
        0x5,
        0x2,
        0x0,
        0x2
    ]);
    const _0x542c4a = _0x126820['\x77\x72\x69\x74\x61\x62\x6c\x65']['\x67\x65\x74\x57\x72\x69\x74\x65\x72']();
    await _0x542c4a[_0x336f14(0x190)](_0x877f24);
    _0x3f3e0d('\x73\x65\x6e\x74\x20\x73\x6f\x63\x6b\x73' + '\x20\x67\x72\x65\x65\x74\x69\x6e\x67');
    const _0x2ec02d = _0x126820[_0x336f14(0x183)]['\x67\x65\x74\x52\x65\x61\x64\x65\x72']();
    const _0x40d0a2 = new TextEncoder();
    let _0x2f80d0 = (await _0x2ec02d[_0x336f14(0x1e7)]())[_0x336f14(0x11d)];
    if (_0x2f80d0[0x0] !== 0x5) {
        _0x3f3e0d(_0x336f14(0x13e) + _0x336f14(0xd8) + _0x336f14(0x228) + _0x2f80d0[0x0] + (_0x336f14(0x219) + '\x20\x35'));
        return;
    }
    if (_0x2f80d0[0x1] === 0xff) {
        _0x3f3e0d(_0x336f14(0x203) + _0x336f14(0x140) + '\x73');
        return;
    }
    if (_0x2f80d0[0x1] === 0x2) {
        _0x3f3e0d('\x73\x6f\x63\x6b\x73\x20\x73\x65\x72\x76' + _0x336f14(0x1bc) + _0x336f14(0xdd));
        if (!_0x81bb8d || !_0x44cafb) {
            _0x3f3e0d('\x70\x6c\x65\x61\x73\x65\x20\x70\x72\x6f' + _0x336f14(0x156) + _0x336f14(0x15c) + '\x72\x64');
            return;
        }
        const _0x40cd07 = new Uint8Array([
            0x1,
            _0x81bb8d[_0x336f14(0x18c)],
            ..._0x40d0a2[_0x336f14(0xd6)](_0x81bb8d),
            _0x44cafb[_0x336f14(0x18c)],
            ..._0x40d0a2['\x65\x6e\x63\x6f\x64\x65'](_0x44cafb)
        ]);
        await _0x542c4a[_0x336f14(0x190)](_0x40cd07);
        _0x2f80d0 = (await _0x2ec02d[_0x336f14(0x1e7)]())[_0x336f14(0x11d)];
        if (_0x2f80d0[0x0] !== 0x1 || _0x2f80d0[0x1] !== 0x0) {
            _0x3f3e0d(_0x336f14(0x13f) + _0x336f14(0x18a) + _0x336f14(0x1b1));
            return;
        }
    }
    let _0x1dc396;
    switch (_0x5a97e5) {
    case 0x1:
        _0x1dc396 = new Uint8Array([
            0x1,
            ..._0xa37478[_0x336f14(0x1df)]('\x2e')['\x6d\x61\x70'](Number)
        ]);
        break;
    case 0x3:
        _0x1dc396 = new Uint8Array([
            0x3,
            _0xa37478[_0x336f14(0x18c)],
            ..._0x40d0a2[_0x336f14(0xd6)](_0xa37478)
        ]);
        break;
    case 0x4:
        _0x1dc396 = new Uint8Array([
            0x4,
            ..._0xa37478[_0x336f14(0x1df)]('\x3a')['\x66\x6c\x61\x74\x4d\x61\x70'](_0x494e39 => [
                parseInt(_0x494e39[_0x336f14(0x160)](0x0, 0x2), 0x10),
                parseInt(_0x494e39[_0x336f14(0x160)](0x2), 0x10)
            ])
        ]);
        break;
    default:
        _0x3f3e0d('\u65e0\u6548\u7684\x20\x61\x64\x64\x72\x65\x73' + _0x336f14(0x1c9) + _0x5a97e5);
        return;
    }
    const _0x36562b = new Uint8Array([
        0x5,
        0x1,
        0x0,
        ..._0x1dc396,
        _0x46e25e >> 0x8,
        _0x46e25e & 0xff
    ]);
    await _0x542c4a[_0x336f14(0x190)](_0x36562b);
    _0x3f3e0d('\x73\x65\x6e\x74\x20\x73\x6f\x63\x6b\x73' + '\x20\x72\x65\x71\x75\x65\x73\x74');
    _0x2f80d0 = (await _0x2ec02d[_0x336f14(0x1e7)]())['\x76\x61\x6c\x75\x65'];
    if (_0x2f80d0[0x1] === 0x0) {
        _0x3f3e0d(_0x336f14(0x21b));
    } else {
        _0x3f3e0d(_0x336f14(0x216) + '\u63a5');
        return;
    }
    _0x542c4a[_0x336f14(0x141) + '\x6b']();
    _0x2ec02d[_0x336f14(0x141) + '\x6b']();
    return _0x126820;
}
function socks5AddressParser(_0x59cbf1) {
    const _0x53a8c2 = _0x506e5c;
    let [_0x2891c3, _0x18ab3b] = _0x59cbf1['\x73\x70\x6c\x69\x74']('\x40')[_0x53a8c2(0x171)]();
    let _0x456ada, _0x41f35c, _0x4490b2, _0x2fcbef;
    if (_0x18ab3b) {
        const _0x331e09 = _0x18ab3b['\x73\x70\x6c\x69\x74']('\x3a');
        if (_0x331e09[_0x53a8c2(0x18c)] !== 0x2) {
            throw new Error(_0x53a8c2(0x19e) + _0x53a8c2(0x1e4) + _0x53a8c2(0x1d1));
        }
        [_0x456ada, _0x41f35c] = _0x331e09;
    }
    const _0x443445 = _0x2891c3[_0x53a8c2(0x1df)]('\x3a');
    _0x2fcbef = Number(_0x443445[_0x53a8c2(0x182)]());
    if (isNaN(_0x2fcbef)) {
        throw new Error(_0x53a8c2(0x19e) + '\x43\x4b\x53\x20\x61\x64\x64\x72\x65\x73' + _0x53a8c2(0x1d1));
    }
    _0x4490b2 = _0x443445[_0x53a8c2(0x15a)]('\x3a');
    const _0x469b6f = /^\[.*\]$/;
    if (_0x4490b2['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x3a') && !_0x469b6f['\x74\x65\x73\x74'](_0x4490b2)) {
        throw new Error(_0x53a8c2(0x19e) + _0x53a8c2(0x1e4) + _0x53a8c2(0x1d1));
    }
    return {
        '\x75\x73\x65\x72\x6e\x61\x6d\x65': _0x456ada,
        '\x70\x61\x73\x73\x77\x6f\x72\x64': _0x41f35c,
        '\x68\x6f\x73\x74\x6e\x61\x6d\x65': _0x4490b2,
        '\x70\x6f\x72\x74': _0x2fcbef
    };
}
function isValidIPv4(_0x200756) {
    const _0x51bb32 = _0x506e5c;
    const _0x10422c = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return _0x10422c[_0x51bb32(0x10e)](_0x200756);
}
function subAddresses(_0x26d32b, _0x11de36, _0x4b8cec, _0x510116, _0x1afca4) {
    const _0x5ceb4d = _0x506e5c;
    let _0x1c93ea = [];
    _0x1c93ea = _0x1c93ea[_0x5ceb4d(0x1d4)](_0x510116);
    _0x1c93ea = _0x1c93ea[_0x5ceb4d(0x1d4)](_0x1afca4);
    const _0x3de181 = [...new Set(_0x1c93ea)];
    const _0x3360d3 = [
        _0x5ceb4d(0xbb),
        _0x5ceb4d(0xe3),
        _0x5ceb4d(0xb6),
        _0x5ceb4d(0x17c),
        _0x5ceb4d(0x1f5)
    ];
    const _0xdd5248 = _0x3de181[_0x5ceb4d(0x131)](_0x48ab9c => {
        const _0xb0c94f = _0x5ceb4d;
        let _0x31999e = '\x2d\x31';
        let _0x34f2bb = _0x48ab9c;
        const _0x7550ca = _0x48ab9c[_0xb0c94f(0x233)](/^(.+):(\d+)#(.+)$/);
        if (!_0x7550ca) {
            if (_0x48ab9c[_0xb0c94f(0x16f)]('\x3a') && _0x48ab9c[_0xb0c94f(0x16f)]('\x23')) {
                const _0x72770 = _0x48ab9c['\x73\x70\x6c\x69\x74']('\x3a');
                _0x48ab9c = _0x72770[0x0];
                const _0x353076 = _0x72770[0x1][_0xb0c94f(0x1df)]('\x23');
                _0x31999e = _0x353076[0x0];
                _0x34f2bb = _0x353076[0x1];
            } else if (_0x48ab9c[_0xb0c94f(0x16f)]('\x3a')) {
                const _0x5e7873 = _0x48ab9c[_0xb0c94f(0x1df)]('\x3a');
                _0x48ab9c = _0x5e7873[0x0];
                _0x31999e = _0x5e7873[0x1];
            } else if (_0x48ab9c[_0xb0c94f(0x16f)]('\x23')) {
                const _0x4f6801 = _0x48ab9c[_0xb0c94f(0x1df)]('\x23');
                _0x48ab9c = _0x4f6801[0x0];
                _0x34f2bb = _0x4f6801[0x1];
            }
            if (_0x34f2bb[_0xb0c94f(0x16f)]('\x3a')) {
                _0x34f2bb = _0x34f2bb[_0xb0c94f(0x1df)]('\x3a')[0x0];
            }
        } else {
            _0x48ab9c = _0x7550ca[0x1];
            _0x31999e = _0x7550ca[0x2] || _0x31999e;
            _0x34f2bb = _0x7550ca[0x3] || _0x48ab9c;
        }
        if (!isValidIPv4(_0x48ab9c) && _0x31999e == '\x2d\x31') {
            for (let _0x3c513f of _0x3360d3) {
                if (_0x48ab9c[_0xb0c94f(0x16f)](_0x3c513f)) {
                    _0x31999e = _0x3c513f;
                    break;
                }
            }
        }
        if (_0x31999e == '\x2d\x31')
            _0x31999e = _0xb0c94f(0x22c);
        let _0xef3873 = _0x26d32b;
        let _0x5ed064 = path;
        let _0x1bd7fa = '';
        if (proxyhosts[_0xb0c94f(0x18c)] > 0x0 && _0xef3873[_0xb0c94f(0x16f)]('\x2e\x77\x6f\x72\x6b\x65\x72\x73\x2e\x64' + '\x65\x76')) {
            _0x5ed064 = '\x2f' + _0xef3873 + _0x5ed064;
            _0xef3873 = proxyhosts[Math[_0xb0c94f(0xfc)](Math[_0xb0c94f(0x120)]() * proxyhosts[_0xb0c94f(0x18c)])];
            _0x1bd7fa = '\x20\u5df2\u542f\u7528\u4e34\u65f6\u57df\u540d\u4e2d\u8f6c' + _0xb0c94f(0x1a1) + _0xb0c94f(0x1c7);
        }
        const _0x1073cc = proxyIPPool[_0xb0c94f(0x1ac)](_0x50b4b7 => _0x50b4b7[_0xb0c94f(0x16f)](_0x48ab9c));
        if (_0x1073cc)
            _0x5ed064 += '\x26\x70\x72\x6f\x78\x79\x69\x70\x3d' + _0x1073cc;
        let _0x4baa47 = _0x11de36;
        if (!_0x4b8cec['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x73\x75\x62\x63\x6f\x6e\x76\x65\x72\x74' + '\x65\x72'))
            _0x4baa47 = encodeURIComponent(_0x11de36);
        const _0x3f1ea8 = atob(_0xb0c94f(0x1f3));
        const _0x1fcea5 = _0x3f1ea8 + _0xb0c94f(0x209) + _0x4baa47 + '\x40' + _0x48ab9c + '\x3a' + _0x31999e + (_0xb0c94f(0xc6) + _0xb0c94f(0xaf)) + _0xef3873 + (_0xb0c94f(0x15d) + _0xb0c94f(0x23c) + _0xb0c94f(0x1a4)) + _0xef3873 + _0xb0c94f(0x204) + encodeURIComponent(_0x5ed064) + '\x23' + encodeURIComponent(_0x34f2bb + _0x1bd7fa);
        return _0x1fcea5;
    })[_0x5ceb4d(0x15a)]('\x0a');
    const _0x4ce64c = btoa(_0xdd5248);
    return _0x4ce64c;
}
function _0x29cb(_0x5d77f6, _0x13796e) {
    const _0x4bcf77 = _0x4bcf();
    _0x29cb = function (_0x29cb5e, _0x2362e8) {
        _0x29cb5e = _0x29cb5e - 0xa1;
        let _0x12734e = _0x4bcf77[_0x29cb5e];
        return _0x12734e;
    };
    return _0x29cb(_0x5d77f6, _0x13796e);
}
async function getAddressesapi(_0x789dca) {
    const _0x56d7ab = _0x506e5c;
    if (!_0x789dca || _0x789dca[_0x56d7ab(0x18c)] === 0x0)
        return [];
    let _0x4c6cd1 = '';
    const _0x4bb2a0 = new AbortController();
    const _0x5e6fa5 = setTimeout(() => {
        const _0x6cacd2 = _0x56d7ab;
        _0x4bb2a0[_0x6cacd2(0x102)]();
    }, 0x7d0);
    try {
        const _0x13c371 = await Promise['\x61\x6c\x6c\x53\x65\x74\x74\x6c\x65\x64'](_0x789dca[_0x56d7ab(0x131)](_0x377f3f => fetch(_0x377f3f, {
            '\x6d\x65\x74\x68\x6f\x64': _0x56d7ab(0xa8),
            '\x68\x65\x61\x64\x65\x72\x73': {
                '\x41\x63\x63\x65\x70\x74': _0x56d7ab(0x1a5) + _0x56d7ab(0x16a) + _0x56d7ab(0x1a2) + '\x6c\x2c\x61\x70\x70\x6c\x69\x63\x61\x74' + _0x56d7ab(0x17f),
                '\x55\x73\x65\x72\x2d\x41\x67\x65\x6e\x74': atob(_0x56d7ab(0x118) + _0x56d7ab(0x1e9) + '\x64\x58\x4d\x76\x59\x32\x31\x73\x61\x58' + '\x55\x3d')
            },
            '\x73\x69\x67\x6e\x61\x6c': _0x4bb2a0[_0x56d7ab(0x189)]
        })[_0x56d7ab(0x110)](_0x34afbd => _0x34afbd['\x6f\x6b'] ? _0x34afbd[_0x56d7ab(0xa4)]() : Promise['\x72\x65\x6a\x65\x63\x74']())));
        for (const [_0x2f0160, _0x359bc8] of _0x13c371[_0x56d7ab(0x215)]()) {
            if (_0x359bc8[_0x56d7ab(0x1cf)] === _0x56d7ab(0x223)) {
                const _0x1a6648 = _0x359bc8[_0x56d7ab(0x11d)];
                const _0x33b8a2 = _0x1a6648['\x73\x70\x6c\x69\x74'](/\r?\n/);
                let _0x1bac9d = '';
                let _0x36f2f2 = '\x34\x34\x33';
                if (_0x33b8a2[0x0][_0x56d7ab(0x1df)]('\x2c')[_0x56d7ab(0x18c)] > 0x3) {
                    const _0x34d4b6 = _0x789dca[_0x2f0160][_0x56d7ab(0x233)](/id=([^&]*)/);
                    if (_0x34d4b6)
                        _0x1bac9d = _0x34d4b6[0x1];
                    const _0x3944a2 = _0x789dca[_0x2f0160][_0x56d7ab(0x233)](/port=([^&]*)/);
                    if (_0x3944a2)
                        _0x36f2f2 = _0x3944a2[0x1];
                    for (let _0x57baef = 0x1; _0x57baef < _0x33b8a2['\x6c\x65\x6e\x67\x74\x68']; _0x57baef++) {
                        const _0x2e7980 = _0x33b8a2[_0x57baef]['\x73\x70\x6c\x69\x74']('\x2c')[0x0];
                        if (_0x2e7980) {
                            _0x4c6cd1 += _0x2e7980 + '\x3a' + _0x36f2f2 + (_0x1bac9d ? '\x23' + _0x1bac9d : '') + '\x0a';
                            if (_0x789dca[_0x2f0160][_0x56d7ab(0x16f)]('\x70\x72\x6f\x78\x79\x69\x70\x3d\x74\x72' + '\x75\x65'))
                                proxyIPPool[_0x56d7ab(0xc7)](_0x2e7980 + '\x3a' + 测속端口);
                        }
                    }
                } else {
                    if (_0x789dca[_0x2f0160]['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x70\x72\x6f\x78\x79\x69\x70\x3d\x74\x72' + '\x75\x65')) {
                        proxyIPPool = proxyIPPool[_0x56d7ab(0x1d4)]((await ADD(_0x1a6648))[_0x56d7ab(0x131)](_0x19fbb4 => {
                            const _0x59be25 = _0x56d7ab;
                            const _0x49a19b = _0x19fbb4[_0x59be25(0x1df)]('\x23')[0x0] || _0x19fbb4;
                            if (_0x49a19b[_0x59be25(0x16f)]('\x3a')) {
                                const _0x2f6dac = _0x49a19b[_0x59be25(0x1df)]('\x3a')[0x1];
                                if (!httpsPorts[_0x59be25(0x16f)](_0x2f6dac)) {
                                    return _0x49a19b;
                                }
                            } else {
                                return _0x49a19b + '\x3a\x34\x34\x33';
                            }
                            return null;
                        })[_0x56d7ab(0xaa)](Boolean));
                    }
                    _0x4c6cd1 += _0x1a6648 + '\x0a';
                }
            }
        }
    } catch (_0x45866d) {
        console[_0x56d7ab(0x161)](_0x45866d);
    } finally {
        clearTimeout(_0x5e6fa5);
    }
    const _0x31ea1d = await ADD(_0x4c6cd1);
    return _0x31ea1d;
}
async function getAddressescsv(_0x218c24) {
    const _0x204248 = _0x506e5c;
    if (!addressescsv || addressescsv[_0x204248(0x18c)] === 0x0) {
        return [];
    }
    let _0x46d9de = [];
    for (const _0x1fb218 of addressescsv) {
        try {
            const _0x376d98 = await fetch(_0x1fb218);
            if (!_0x376d98['\x6f\x6b']) {
                console[_0x204248(0x161)](_0x204248(0x100) + '\x3a', _0x376d98[_0x204248(0x1cf)], _0x376d98[_0x204248(0x1b0)]);
                continue;
            }
            const _0x468f5f = await _0x376d98[_0x204248(0xa4)]();
            let _0x4fa214;
            if (_0x468f5f[_0x204248(0x16f)]('\x0d\x0a')) {
                _0x4fa214 = _0x468f5f[_0x204248(0x1df)]('\x0d\x0a');
            } else {
                _0x4fa214 = _0x468f5f['\x73\x70\x6c\x69\x74']('\x0a');
            }
            const _0x44315d = _0x4fa214[0x0][_0x204248(0x1df)]('\x2c');
            const _0x45f9e1 = _0x44315d[_0x204248(0x258)]('\x54\x4c\x53');
            const _0x51f523 = 0x0;
            const _0x1a41fd = 0x1;
            const _0x3da0f0 = 0x2;
            const _0x3fc4e1 = _0x45f9e1 + _0x3da0f0;
            if (_0x45f9e1 === -0x1) {
                console[_0x204248(0x161)](_0x204248(0x1d9) + '\u5b57\u6bb5');
                continue;
            }
            for (let _0x2a759f = 0x1; _0x2a759f < _0x4fa214['\x6c\x65\x6e\x67\x74\x68']; _0x2a759f++) {
                const _0x3649bd = _0x4fa214[_0x2a759f][_0x204248(0x1df)]('\x2c');
                const _0x1679da = _0x3649bd[_0x204248(0x18c)] - 0x1;
                if (_0x3649bd[_0x45f9e1]['\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73' + '\x65']() === _0x218c24 && parseFloat(_0x3649bd[_0x1679da]) > DLS) {
                    const _0x5c779c = _0x3649bd[_0x51f523];
                    const _0x1349c2 = _0x3649bd[_0x1a41fd];
                    const _0x9c09c9 = _0x3649bd[_0x3fc4e1];
                    const _0xd7d5d3 = _0x5c779c + '\x3a' + _0x1349c2 + '\x23' + _0x9c09c9;
                    _0x46d9de['\x70\x75\x73\x68'](_0xd7d5d3);
                    if (_0x1fb218[_0x204248(0x16f)](_0x204248(0xe6) + '\x75\x65') && _0x3649bd[_0x45f9e1][_0x204248(0x16c) + '\x65']() === _0x204248(0x1d5) && !httpsPorts[_0x204248(0x16f)](_0x1349c2)) {
                        proxyIPPool[_0x204248(0xc7)](_0x5c779c + '\x3a' + _0x1349c2);
                    }
                }
            }
        } catch (_0x2adbfb) {
            console['\x65\x72\x72\x6f\x72'](_0x204248(0x100) + '\x3a', _0x2adbfb);
            continue;
        }
    }
    return _0x46d9de;
}
function surge(_0x4483b3, _0x56a7ff) {
    const _0x58acbe = _0x506e5c;
    let _0x326f81;
    if (_0x4483b3[_0x58acbe(0x16f)]('\x0d\x0a')) {
        _0x326f81 = _0x4483b3['\x73\x70\x6c\x69\x74']('\x0d\x0a');
    } else {
        _0x326f81 = _0x4483b3[_0x58acbe(0x1df)]('\x0a');
    }
    let _0x53352e = '';
    for (let _0x88a72f of _0x326f81) {
        if (_0x88a72f[_0x58acbe(0x16f)](atob(_0x58acbe(0x1ec) + '\x34\x73'))) {
            const _0x3cbe9d = _0x88a72f[_0x58acbe(0x1df)](_0x58acbe(0x211))[0x1][_0x58acbe(0x1df)]('\x2c')[0x0];
            const _0x53281b = '\x73\x6b\x69\x70\x2d\x63\x65\x72\x74\x2d' + _0x58acbe(0xf0) + _0x58acbe(0x253) + _0x58acbe(0x132) + '\x6c\x61\x79\x3d\x66\x61\x6c\x73\x65';
            const _0x2f424e = _0x58acbe(0x17d) + _0x58acbe(0xf0) + '\x65\x2c\x20\x77\x73\x3d\x74\x72\x75\x65' + '\x2c\x20\x77\x73\x2d\x70\x61\x74\x68\x3d' + path + (_0x58acbe(0x1c1) + '\x72\x73\x3d\x48\x6f\x73\x74\x3a\x22') + _0x3cbe9d + ('\x22\x2c\x20\x74\x66\x6f\x3d\x66\x61\x6c' + _0x58acbe(0x132) + _0x58acbe(0xec));
            _0x53352e += _0x88a72f[_0x58acbe(0x1a3)](new RegExp(_0x53281b, '\x67'), _0x2f424e)[_0x58acbe(0x1a3)]('\x5b', '')[_0x58acbe(0x1a3)]('\x5d', '') + '\x0a';
        } else {
            _0x53352e += _0x88a72f + '\x0a';
        }
    }
    _0x53352e = _0x58acbe(0x12e) + _0x58acbe(0x101) + _0x56a7ff + ('\x20\x69\x6e\x74\x65\x72\x76\x61\x6c\x3d' + _0x58acbe(0x1dd) + '\x63\x74\x3d\x66\x61\x6c\x73\x65') + _0x53352e[_0x58acbe(0x187)](_0x53352e['\x69\x6e\x64\x65\x78\x4f\x66']('\x0a'));
    return _0x53352e;
}
function sha224(_0x32449b) {
    const _0x3f0faf = _0x506e5c;
    const _0x5bf3f7 = [
        0x428a2f98,
        0x71374491,
        0xb5c0fbcf,
        0xe9b5dba5,
        0x3956c25b,
        0x59f111f1,
        0x923f82a4,
        0xab1c5ed5,
        0xd807aa98,
        0x12835b01,
        0x243185be,
        0x550c7dc3,
        0x72be5d74,
        0x80deb1fe,
        0x9bdc06a7,
        0xc19bf174,
        0xe49b69c1,
        0xefbe4786,
        0xfc19dc6,
        0x240ca1cc,
        0x2de92c6f,
        0x4a7484aa,
        0x5cb0a9dc,
        0x76f988da,
        0x983e5152,
        0xa831c66d,
        0xb00327c8,
        0xbf597fc7,
        0xc6e00bf3,
        0xd5a79147,
        0x6ca6351,
        0x14292967,
        0x27b70a85,
        0x2e1b2138,
        0x4d2c6dfc,
        0x53380d13,
        0x650a7354,
        0x766a0abb,
        0x81c2c92e,
        0x92722c85,
        0xa2bfe8a1,
        0xa81a664b,
        0xc24b8b70,
        0xc76c51a3,
        0xd192e819,
        0xd6990624,
        0xf40e3585,
        0x106aa070,
        0x19a4c116,
        0x1e376c08,
        0x2748774c,
        0x34b0bcb5,
        0x391c0cb3,
        0x4ed8aa4a,
        0x5b9cca4f,
        0x682e6ff3,
        0x748f82ee,
        0x78a5636f,
        0x84c87814,
        0x8cc70208,
        0x90befffa,
        0xa4506ceb,
        0xbef9a3f7,
        0xc67178f2
    ];
    function _0x234403(_0x2d5e9a) {
        return unescape(encodeURIComponent(_0x2d5e9a));
    }
    function _0x1ac292(_0x5328fe) {
        const _0x18fde9 = _0x29cb;
        let _0x157247 = '';
        for (let _0x4891fc = 0x0; _0x4891fc < _0x5328fe[_0x18fde9(0x18c)]; _0x4891fc++) {
            _0x157247 += (_0x5328fe[_0x4891fc] >>> 0x4 & 0xf)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10)['\x70\x61\x64\x53\x74\x61\x72\x74'](0x2, '\x30');
            _0x157247 += (_0x5328fe[_0x4891fc] & 0xf)[_0x18fde9(0x10d)](0x10)[_0x18fde9(0x10a)](0x2, '\x30');
        }
        return _0x157247;
    }
    function _0x12b5d8(_0x1e12d9) {
        const _0xa565a2 = _0x29cb;
        let _0x2f73f6 = [
            0xc1059ed8,
            0x367cd507,
            0x3070dd17,
            0xf70e5939,
            0xffc00b31,
            0x68581511,
            0x64f98fa7,
            0xbefa4fa4
        ];
        const _0x4ea9e8 = _0x1e12d9[_0xa565a2(0x18c)] * 0x8;
        _0x1e12d9 += String[_0xa565a2(0x188) + '\x64\x65'](0x80);
        while (_0x1e12d9['\x6c\x65\x6e\x67\x74\x68'] * 0x8 % 0x200 !== 0x1c0) {
            _0x1e12d9 += String[_0xa565a2(0x188) + '\x64\x65'](0x0);
        }
        const _0x4dc49a = Math[_0xa565a2(0xfc)](_0x4ea9e8 / 0x100000000);
        const _0x1f88c0 = _0x4ea9e8 & 0xffffffff;
        _0x1e12d9 += String[_0xa565a2(0x188) + '\x64\x65'](_0x4dc49a >>> 0x18 & 0xff, _0x4dc49a >>> 0x10 & 0xff, _0x4dc49a >>> 0x8 & 0xff, _0x4dc49a & 0xff, _0x1f88c0 >>> 0x18 & 0xff, _0x1f88c0 >>> 0x10 & 0xff, _0x1f88c0 >>> 0x8 & 0xff, _0x1f88c0 & 0xff);
        const _0x3576df = [];
        for (let _0x5e852c = 0x0; _0x5e852c < _0x1e12d9[_0xa565a2(0x18c)]; _0x5e852c += 0x4) {
            _0x3576df[_0xa565a2(0xc7)](_0x1e12d9[_0xa565a2(0xfa)](_0x5e852c) << 0x18 | _0x1e12d9[_0xa565a2(0xfa)](_0x5e852c + 0x1) << 0x10 | _0x1e12d9[_0xa565a2(0xfa)](_0x5e852c + 0x2) << 0x8 | _0x1e12d9['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x5e852c + 0x3));
        }
        for (let _0x10affb = 0x0; _0x10affb < _0x3576df['\x6c\x65\x6e\x67\x74\x68']; _0x10affb += 0x10) {
            const _0x42a504 = new Array(0x40)[_0xa565a2(0x143)](0x0);
            for (let _0x4da588 = 0x0; _0x4da588 < 0x10; _0x4da588++) {
                _0x42a504[_0x4da588] = _0x3576df[_0x10affb + _0x4da588];
            }
            for (let _0x2641d8 = 0x10; _0x2641d8 < 0x40; _0x2641d8++) {
                const _0x41ca6d = _0xb739e3(_0x42a504[_0x2641d8 - 0xf], 0x7) ^ _0xb739e3(_0x42a504[_0x2641d8 - 0xf], 0x12) ^ _0x42a504[_0x2641d8 - 0xf] >>> 0x3;
                const _0x20dd45 = _0xb739e3(_0x42a504[_0x2641d8 - 0x2], 0x11) ^ _0xb739e3(_0x42a504[_0x2641d8 - 0x2], 0x13) ^ _0x42a504[_0x2641d8 - 0x2] >>> 0xa;
                _0x42a504[_0x2641d8] = _0x42a504[_0x2641d8 - 0x10] + _0x41ca6d + _0x42a504[_0x2641d8 - 0x7] + _0x20dd45 >>> 0x0;
            }
            let [_0x57c8b0, _0x404f25, _0x35e92c, _0x216c65, _0x210a35, _0x30af0f, _0x1045f5, _0x40749f] = _0x2f73f6;
            for (let _0x2bbab3 = 0x0; _0x2bbab3 < 0x40; _0x2bbab3++) {
                const _0x1de816 = _0xb739e3(_0x210a35, 0x6) ^ _0xb739e3(_0x210a35, 0xb) ^ _0xb739e3(_0x210a35, 0x19);
                const _0x43a8a8 = _0x210a35 & _0x30af0f ^ ~_0x210a35 & _0x1045f5;
                const _0x4f150d = _0x40749f + _0x1de816 + _0x43a8a8 + _0x5bf3f7[_0x2bbab3] + _0x42a504[_0x2bbab3] >>> 0x0;
                const _0x20ec08 = _0xb739e3(_0x57c8b0, 0x2) ^ _0xb739e3(_0x57c8b0, 0xd) ^ _0xb739e3(_0x57c8b0, 0x16);
                const _0x242c19 = _0x57c8b0 & _0x404f25 ^ _0x57c8b0 & _0x35e92c ^ _0x404f25 & _0x35e92c;
                const _0x15f01c = _0x20ec08 + _0x242c19 >>> 0x0;
                _0x40749f = _0x1045f5;
                _0x1045f5 = _0x30af0f;
                _0x30af0f = _0x210a35;
                _0x210a35 = _0x216c65 + _0x4f150d >>> 0x0;
                _0x216c65 = _0x35e92c;
                _0x35e92c = _0x404f25;
                _0x404f25 = _0x57c8b0;
                _0x57c8b0 = _0x4f150d + _0x15f01c >>> 0x0;
            }
            _0x2f73f6[0x0] = _0x2f73f6[0x0] + _0x57c8b0 >>> 0x0;
            _0x2f73f6[0x1] = _0x2f73f6[0x1] + _0x404f25 >>> 0x0;
            _0x2f73f6[0x2] = _0x2f73f6[0x2] + _0x35e92c >>> 0x0;
            _0x2f73f6[0x3] = _0x2f73f6[0x3] + _0x216c65 >>> 0x0;
            _0x2f73f6[0x4] = _0x2f73f6[0x4] + _0x210a35 >>> 0x0;
            _0x2f73f6[0x5] = _0x2f73f6[0x5] + _0x30af0f >>> 0x0;
            _0x2f73f6[0x6] = _0x2f73f6[0x6] + _0x1045f5 >>> 0x0;
            _0x2f73f6[0x7] = _0x2f73f6[0x7] + _0x40749f >>> 0x0;
        }
        return _0x2f73f6[_0xa565a2(0x160)](0x0, 0x7);
    }
    function _0xb739e3(_0x1ae5d1, _0x4d8449) {
        return (_0x1ae5d1 >>> _0x4d8449 | _0x1ae5d1 << 0x20 - _0x4d8449) >>> 0x0;
    }
    const _0x1b6a4d = _0x234403(_0x32449b);
    const _0x3e1cff = _0x12b5d8(_0x1b6a4d);
    return _0x1ac292(_0x3e1cff[_0x3f0faf(0x1e8)](_0x246585 => [
        _0x246585 >>> 0x18 & 0xff,
        _0x246585 >>> 0x10 & 0xff,
        _0x246585 >>> 0x8 & 0xff,
        _0x246585 & 0xff
    ]));
}
