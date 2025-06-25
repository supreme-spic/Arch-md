const _0x4e3496 = _0x518a;
(function (_0x373a59, _0xb0d761) {
    const _0x48e2e1 = _0x518a;
    const _0x33f01a = _0x373a59();
    while (!![]) {
        try {
            const _0x8be771 = parseInt(_0x48e2e1(0xf4)) / 0x1 * (parseInt(_0x48e2e1(0xf5)) / 0x2) + -parseInt(_0x48e2e1(0x18e)) / 0x3 * (parseInt(_0x48e2e1(0x108)) / 0x4) + -parseInt(_0x48e2e1(0xf7)) / 0x5 * (-parseInt(_0x48e2e1(0x1a1)) / 0x6) + parseInt(_0x48e2e1(0x186)) / 0x7 * (-parseInt(_0x48e2e1(0x157)) / 0x8) + -parseInt(_0x48e2e1(0x165)) / 0x9 * (-parseInt(_0x48e2e1(0x184)) / 0xa) + -parseInt(_0x48e2e1(0x15e)) / 0xb + parseInt(_0x48e2e1(0x92)) / 0xc * (parseInt(_0x48e2e1(0x10d)) / 0xd);
            if (_0x8be771 === _0xb0d761) {
                break;
            } else {
                _0x33f01a['push'](_0x33f01a['shift']());
            }
        } catch (_0x4244bf) {
            _0x33f01a['push'](_0x33f01a['shift']());
        }
    }
}(_0x22d8, 0x209b0));
const originalLog = console[_0x4e3496(0x138)];
const originalError = console[_0x4e3496(0xcd)];
const originalDebug = console[_0x4e3496(0x11d)];
const originalStdout = process[_0x4e3496(0xd6)][_0x4e3496(0x19e)];
const originalStderr = process[_0x4e3496(0x159)]['\x77\x72\x69\x74\x65'];
function isNoisy(_0x403cc1) {
    const _0x50486a = _0x4e3496;
    return typeof _0x403cc1 === _0x50486a(0x13d) && (_0x403cc1['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x50486a(0x13b)) || _0x403cc1[_0x50486a(0x12f)]('\x43\x6c\x6f\x73\x69\x6e\x67\x20\x6f\x70\x65\x6e\x20\x73\x65\x73\x73\x69\x6f\x6e') || _0x403cc1[_0x50486a(0x12f)](_0x50486a(0x113)) || _0x403cc1[_0x50486a(0x12f)](_0x50486a(0x17e)) || _0x403cc1[_0x50486a(0x12f)]('\x44\x65\x63\x72\x79\x70\x74\x65\x64\x20\x6d\x65\x73\x73\x61\x67\x65\x20\x77\x69\x74\x68\x20\x63\x6c\x6f\x73\x65\x64\x20\x73\x65\x73\x73\x69\x6f\x6e\x2e') || _0x403cc1[_0x50486a(0x12f)](_0x50486a(0xec)) || _0x403cc1[_0x50486a(0x12f)](_0x50486a(0x174)) || _0x403cc1[_0x50486a(0x12f)](_0x50486a(0xf8)) || _0x403cc1[_0x50486a(0x12f)](_0x50486a(0x166)));
}
console[_0x4e3496(0x138)] = (..._0x3f5353) => {
    const _0x2b7a15 = _0x4e3496;
    if (isNoisy(_0x3f5353[0x0]))
        return;
    originalLog[_0x2b7a15(0xce)](console, _0x3f5353);
};
console[_0x4e3496(0xcd)] = (..._0xb956d) => {
    const _0x98aebe = _0x4e3496;
    if (isNoisy(_0xb956d[0x0]))
        return;
    originalError[_0x98aebe(0xce)](console, _0xb956d);
};
console[_0x4e3496(0x11d)] = (..._0x5bd273) => {
    const _0x7ae7cc = _0x4e3496;
    if (isNoisy(_0x5bd273[0x0]))
        return;
    originalDebug[_0x7ae7cc(0xce)](console, _0x5bd273);
};
process[_0x4e3496(0xd6)][_0x4e3496(0x19e)] = (_0xc8b7, _0xdb12cd, _0x5dfc41) => {
    const _0x45683c = _0x4e3496;
    if (isNoisy(_0xc8b7))
        return !![];
    return originalStdout[_0x45683c(0xe9)](process['\x73\x74\x64\x6f\x75\x74'], _0xc8b7, _0xdb12cd, _0x5dfc41);
};
process[_0x4e3496(0x159)][_0x4e3496(0x19e)] = (_0x7c6a82, _0x3b5160, _0x24df9a) => {
    const _0x5a86e4 = _0x4e3496;
    if (isNoisy(_0x7c6a82))
        return !![];
    return originalStderr[_0x5a86e4(0xe9)](process[_0x5a86e4(0x159)], _0x7c6a82, _0x3b5160, _0x24df9a);
};
function _0x518a(_0x5cd8bd, _0x1863c8) {
    const _0x22d808 = _0x22d8();
    _0x518a = function (_0x518a5e, _0x5b4572) {
        _0x518a5e = _0x518a5e - 0x90;
        let _0x4d2b39 = _0x22d808[_0x518a5e];
        if (_0x518a['\x6e\x4a\x50\x4c\x44\x4d'] === undefined) {
            var _0x306819 = function (_0x3920c4) {
                const _0x12b69f = '\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
                let _0x5bbfcd = '';
                let _0x192a4f = '';
                for (let _0x3de1ce = 0x0, _0x3828a2, _0x257d20, _0x4766f7 = 0x0; _0x257d20 = _0x3920c4['\x63\x68\x61\x72\x41\x74'](_0x4766f7++); ~_0x257d20 && (_0x3828a2 = _0x3de1ce % 0x4 ? _0x3828a2 * 0x40 + _0x257d20 : _0x257d20, _0x3de1ce++ % 0x4) ? _0x5bbfcd += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x3828a2 >> (-0x2 * _0x3de1ce & 0x6)) : 0x0) {
                    _0x257d20 = _0x12b69f['\x69\x6e\x64\x65\x78\x4f\x66'](_0x257d20);
                }
                for (let _0x940db2 = 0x0, _0x1353ed = _0x5bbfcd['\x6c\x65\x6e\x67\x74\x68']; _0x940db2 < _0x1353ed; _0x940db2++) {
                    _0x192a4f += '\x25' + ('\x30\x30' + _0x5bbfcd['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x940db2)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
                }
                return decodeURIComponent(_0x192a4f);
            };
            _0x518a['\x56\x69\x4c\x4d\x52\x70'] = _0x306819;
            _0x5cd8bd = arguments;
            _0x518a['\x6e\x4a\x50\x4c\x44\x4d'] = !![];
        }
        const _0x4ffec5 = _0x22d808[0x0];
        const _0x808223 = _0x518a5e + _0x4ffec5;
        const _0x4d9ee6 = _0x5cd8bd[_0x808223];
        if (!_0x4d9ee6) {
            _0x4d2b39 = _0x518a['\x56\x69\x4c\x4d\x52\x70'](_0x4d2b39);
            _0x5cd8bd[_0x808223] = _0x4d2b39;
        } else {
            _0x4d2b39 = _0x4d9ee6;
        }
        return _0x4d2b39;
    };
    return _0x518a(_0x5cd8bd, _0x1863c8);
}
require(_0x4e3496(0x139));
const chalk = require(_0x4e3496(0x10b));
global[_0x4e3496(0x138)] = function (_0x2d87ec, _0x4c463d) {
    const _0x13c4da = _0x4e3496;
    const _0x11dcde = new Date();
    const _0x178691 = _0x11dcde[_0x13c4da(0xde)]()[_0x13c4da(0xd9)]()[_0x13c4da(0x115)](0x2, '\x30');
    const _0x1ae353 = (_0x11dcde[_0x13c4da(0x1a7)]() + 0x1)[_0x13c4da(0xd9)]()['\x70\x61\x64\x53\x74\x61\x72\x74'](0x2, '\x30');
    const _0x3a8cff = _0x11dcde[_0x13c4da(0x149)]()[_0x13c4da(0xd9)]()[_0x13c4da(0xda)](-0x2);
    const _0x5934b9 = _0x11dcde[_0x13c4da(0x131)](_0x13c4da(0x167)) + ('\x20' + _0x178691 + '\x2d' + _0x1ae353 + '\x2d' + _0x3a8cff);
    const _0x198ce1 = _0x2d87ec['\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65']();
    const _0x4d5a38 = _0x198ce1 === _0x13c4da(0xef) ? chalk['\x63\x79\x61\x6e'](_0x198ce1) : _0x198ce1 === _0x13c4da(0x130) ? chalk[_0x13c4da(0x10e)](_0x198ce1) : _0x198ce1;
    console[_0x13c4da(0x138)](_0x4d5a38 + '\x20\x5b' + _0x5934b9 + '\x5d\x3a', chalk['\x62\x6c\x75\x65'](_0x4c463d));
};
require(_0x4e3496(0x102))['\x45\x76\x65\x6e\x74\x45\x6d\x69\x74\x74\x65\x72'][_0x4e3496(0x1b8)] = 0x1388;
const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    makeInMemoryStore,
    jidDecode,
    downloadContentFromMessage,
    delay
} = require('\x40\x77\x68\x69\x73\x6b\x65\x79\x73\x6f\x63\x6b\x65\x74\x73\x2f\x62\x61\x69\x6c\x65\x79\x73');
const pino = require(_0x4e3496(0xe1));
const {delArrSave} = require(_0x4e3496(0x120));
const fs = require('\x66\x73');
const path = require(_0x4e3496(0xc0));
const {Boom} = require('\x40\x68\x61\x70\x69\x2f\x62\x6f\x6f\x6d');
const yargs = require(_0x4e3496(0x107));
const _ = require(_0x4e3496(0x15a));
const colors = require(_0x4e3496(0xba));
const NodeCache = require('\x6e\x6f\x64\x65\x2d\x63\x61\x63\x68\x65');
const moment = require(_0x4e3496(0x15f));
const PhoneNumber = require(_0x4e3496(0xa9));
const FileType = require(_0x4e3496(0x160));
const readline = require(_0x4e3496(0x11a));
const {smsg, imageToWebp, videoToWebp, sleep, writeExif, toPTT, toAudio, toVideo, getBuffer, getSizeMedia} = require(_0x4e3496(0xe2));
const {getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture} = require('\x2e\x2f\x61\x6c\x6c\x2f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x2e\x6a\x73');
const axios = require(_0x4e3496(0x1a9));
const {color} = require(_0x4e3496(0xcc));
const moji = [
    '\ud83d\udcda',
    '\ud83d\udcad',
    '\ud83d\udcab',
    '\ud83c\udf0c',
    '\ud83c\udf0f',
    '\u2728',
    '\ud83c\udf37',
    '\ud83c\udf41',
    '\ud83e\udebb'
];
const randomemoji = moji[Math['\x66\x6c\x6f\x6f\x72'](Math[_0x4e3496(0x1ac)]() * moji[_0x4e3496(0x1a6)])];
const listcolor = [
    _0x4e3496(0x1b7),
    _0x4e3496(0x10e),
    _0x4e3496(0x109),
    '\x70\x75\x72\x70\x6c\x65',
    _0x4e3496(0x14c)
];
const randomcolor = listcolor[Math['\x66\x6c\x6f\x6f\x72'](Math[_0x4e3496(0x1ac)]() * listcolor[_0x4e3496(0x1a6)])];
const randomcolor2 = listcolor[Math['\x66\x6c\x6f\x6f\x72'](Math[_0x4e3496(0x1ac)]() * listcolor['\x6c\x65\x6e\x67\x74\x68'])];
const randomcolor3 = listcolor[Math[_0x4e3496(0x182)](Math['\x72\x61\x6e\x64\x6f\x6d']() * listcolor[_0x4e3496(0x1a6)])];
const randomcolor4 = listcolor[Math[_0x4e3496(0x182)](Math[_0x4e3496(0x1ac)]() * listcolor[_0x4e3496(0x1a6)])];
const randomcolor5 = listcolor[Math[_0x4e3496(0x182)](Math[_0x4e3496(0x1ac)]() * listcolor[_0x4e3496(0x1a6)])];
const _0x3920c4 = {};
_0x3920c4[_0x4e3496(0x119)] = 0xe10;
const groupCache = new NodeCache(_0x3920c4);
const ednutchat = require('\x2e\x2f\x74\x6d\x70\x2f\x64\x61\x74\x61');
const _0x12b69f = {};
_0x12b69f[_0x4e3496(0xbe)] = 0x64;
_0x12b69f[_0x4e3496(0xe7)] = ![];
const store = ednutchat(_0x4e3496(0x16e), _0x12b69f);
global[_0x4e3496(0xc6)] = new Object(yargs(process[_0x4e3496(0x170)][_0x4e3496(0xda)](0x2))[_0x4e3496(0xf1)](![])[_0x4e3496(0xd3)]());
const deleteFolderRecursive = function (_0x4fb89d) {
    const _0x3c1cf0 = _0x4e3496;
    if (fs['\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63'](_0x4fb89d)) {
        fs[_0x3c1cf0(0x145)](_0x4fb89d)['\x66\x6f\x72\x45\x61\x63\x68'](function (_0xd9ce41, _0x27b6b5) {
            const _0xff13c7 = _0x3c1cf0;
            const _0x5d62e0 = _0x4fb89d + '\x2f' + _0xd9ce41;
            if (fs[_0xff13c7(0xa4)](_0x5d62e0)[_0xff13c7(0x163)]()) {
                deleteFolderRecursive(_0x5d62e0);
            } else {
                fs[_0xff13c7(0x173)](_0x5d62e0);
            }
        });
        fs[_0x3c1cf0(0x168)](_0x4fb89d);
    }
};
const question = _0xc0a574 => {
    const _0x2b9a74 = _0x4e3496;
    const _0x580bbb = {};
    _0x580bbb[_0x2b9a74(0x13f)] = process[_0x2b9a74(0x127)];
    _0x580bbb[_0x2b9a74(0x134)] = process[_0x2b9a74(0xd6)];
    const _0x1703bd = readline[_0x2b9a74(0xbc)](_0x580bbb);
    return new Promise(_0x1390d8 => {
        const _0x466c5d = _0x2b9a74;
        _0x1703bd[_0x466c5d(0x11c)](_0xc0a574, _0x1390d8);
    });
};
const DataBase = require(_0x4e3496(0x1aa));
async function startBotz() {
    const _0x1712b8 = _0x4e3496;
    const _0x3035f6 = new DataBase(process[_0x1712b8(0xdb)]['\x44\x41\x54\x41\x42\x41\x53\x45\x5f\x55\x52\x4c']);
    const _0x284e6a = {};
    _0x284e6a[_0x1712b8(0x188)] = 0x0;
    _0x284e6a['\x6c\x6f\x61\x64\x65\x64\x50\x6c\x75\x67\x69\x6e\x73'] = ![];
    _0x284e6a[_0x1712b8(0x17b)] = {};
    _0x284e6a[_0x1712b8(0x19c)] = {};
    _0x284e6a[_0x1712b8(0x12e)] = {};
    _0x284e6a['\x64\x61\x74\x61\x62\x61\x73\x65'] = {};
    _0x284e6a[_0x1712b8(0x181)] = {};
    _0x284e6a['\x77\x61\x72\x6e\x73'] = {};
    _0x284e6a[_0x1712b8(0xac)] = [];
    _0x284e6a[_0x1712b8(0x105)] = [];
    _0x284e6a['\x62\x61\x6e'] = [];
    _0x284e6a[_0x1712b8(0xf3)] = [];
    _0x284e6a[_0x1712b8(0x144)] = {};
    const _0x4b24db = _0x284e6a;
    try {
        const _0x5acfb2 = await _0x3035f6[_0x1712b8(0xdd)]() || {};
        const _0x4c01a0 = {
            ..._0x4b24db,
            ..._0x5acfb2
        };
        global['\x64\x62'] = _0x4c01a0;
        global['\x64\x62'][_0x1712b8(0x188)] = typeof global['\x64\x62'][_0x1712b8(0x188)] === _0x1712b8(0xad) ? global['\x64\x62'][_0x1712b8(0x188)] : 0x0;
        global['\x64\x62'][_0x1712b8(0xdf)] = typeof global['\x64\x62'][_0x1712b8(0xdf)] === _0x1712b8(0xfd) ? global['\x64\x62'][_0x1712b8(0xdf)] : ![];
        await _0x3035f6['\x77\x72\x69\x74\x65'](global['\x64\x62']);
        let _0x3ed2c4 = JSON[_0x1712b8(0xe6)](global['\x64\x62']);
        setInterval(async () => {
            const _0x80e596 = _0x1712b8;
            try {
                const _0x391d01 = JSON[_0x80e596(0xe6)](global['\x64\x62']);
                if (_0x391d01 !== _0x3ed2c4) {
                    _0x3ed2c4 = _0x391d01;
                    await _0x3035f6[_0x80e596(0x19e)](global['\x64\x62']);
                }
            } catch (_0x329f57) {
                log('\x45\x52\x52\x4f\x52', _0x80e596(0xb1) + (_0x329f57[_0x80e596(0x16f)] || _0x329f57));
            }
        }, 0x1770);
    } catch (_0xf34f72) {
        log('\x45\x52\x52\x4f\x52', '\x44\x61\x74\x61\x62\x61\x73\x65\x20\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x61\x74\x69\x6f\x6e\x20\x65\x72\x72\x6f\x72\x3a\x20' + (_0xf34f72['\x6d\x65\x73\x73\x61\x67\x65'] || _0xf34f72));
    }
    const {
        state: _0x30d97e,
        saveCreds: _0x28bcd5
    } = await useMultiFileAuthState(_0x1712b8(0x1af));
    const _0x5b61a4 = {};
    _0x5b61a4[_0x1712b8(0x17f)] = _0x1712b8(0x10a);
    const _0x7576e8 = makeWASocket({
        '\x6c\x6f\x67\x67\x65\x72': pino(_0x5b61a4),
        '\x70\x72\x69\x6e\x74\x51\x52\x49\x6e\x54\x65\x72\x6d\x69\x6e\x61\x6c': ![],
        '\x61\x75\x74\x68': _0x30d97e,
        '\x63\x6f\x6e\x6e\x65\x63\x74\x54\x69\x6d\x65\x6f\x75\x74\x4d\x73': 0xea60,
        '\x64\x65\x66\x61\x75\x6c\x74\x51\x75\x65\x72\x79\x54\x69\x6d\x65\x6f\x75\x74\x4d\x73': 0x0,
        '\x6b\x65\x65\x70\x41\x6c\x69\x76\x65\x49\x6e\x74\x65\x72\x76\x61\x6c\x4d\x73': 0x2710,
        '\x65\x6d\x69\x74\x4f\x77\x6e\x45\x76\x65\x6e\x74\x73': !![],
        '\x66\x69\x72\x65\x49\x6e\x69\x74\x51\x75\x65\x72\x69\x65\x73': !![],
        '\x67\x65\x6e\x65\x72\x61\x74\x65\x48\x69\x67\x68\x51\x75\x61\x6c\x69\x74\x79\x4c\x69\x6e\x6b\x50\x72\x65\x76\x69\x65\x77': !![],
        '\x73\x79\x6e\x63\x46\x75\x6c\x6c\x48\x69\x73\x74\x6f\x72\x79': !![],
        '\x6d\x61\x72\x6b\x4f\x6e\x6c\x69\x6e\x65\x4f\x6e\x43\x6f\x6e\x6e\x65\x63\x74': !![],
        '\x62\x72\x6f\x77\x73\x65\x72': [
            '\x55\x62\x75\x6e\x74\x75',
            _0x1712b8(0x124),
            '\x32\x30\x2e\x30\x2e\x30\x34'
        ]
    });
    store[_0x1712b8(0xaf)](_0x7576e8['\x65\x76']);
    const _0x29d08b = require('\x2e\x2f\x68\x61\x6e\x64\x6c\x65\x72\x2e\x6a\x73');
    _0x7576e8['\x65\x76']['\x6f\x6e'](_0x1712b8(0x179), async _0x5baa6d => {
        const _0x210b03 = _0x1712b8;
        try {
            mek = _0x5baa6d[_0x210b03(0x104)][0x0];
            if (!mek[_0x210b03(0x16f)])
                return;
            mek[_0x210b03(0x16f)] = Object['\x6b\x65\x79\x73'](mek[_0x210b03(0x16f)])[0x0] === '\x65\x70\x68\x65\x6d\x65\x72\x61\x6c\x4d\x65\x73\x73\x61\x67\x65' ? mek['\x6d\x65\x73\x73\x61\x67\x65'][_0x210b03(0x110)][_0x210b03(0x16f)] : mek[_0x210b03(0x16f)];
            const _0x4e9980 = _0x3444d8 => {
                const _0x5e1469 = _0x210b03;
                if (!global['\x64\x62'] || !global['\x64\x62']['\x73\x65\x74\x74\x69\x6e\x67\x73'])
                    return process[_0x5e1469(0xdb)][_0x3444d8] === _0x5e1469(0x128);
                return global['\x64\x62'][_0x5e1469(0x12e)][_0x3444d8] ?? process[_0x5e1469(0xdb)][_0x3444d8] === _0x5e1469(0x128);
            };
            if (mek[_0x210b03(0x195)] && mek['\x6b\x65\x79'][_0x210b03(0xea)] === _0x210b03(0x137)) {
                const _0x3a6947 = process['\x65\x6e\x76']['\x53\x54\x41\x54\x55\x53\x5f\x45\x4d\x4f\x4a\x49']?.['\x73\x70\x6c\x69\x74']('\x2c')['\x6d\x61\x70'](_0x2b3043 => _0x2b3043[_0x210b03(0x100)]())[_0x210b03(0xb3)](_0x19636f => _0x19636f);
                const _0x4d4f8c = _0x3a6947 && _0x3a6947[_0x210b03(0x1a6)] > 0x0;
                if (_0x4e9980('\x72\x65\x61\x64\x73\x77') || process[_0x210b03(0xdb)][_0x210b03(0x199)] === _0x210b03(0x128) || _0x4d4f8c) {
                    _0x7576e8[_0x210b03(0x15c)]([mek['\x6b\x65\x79']]);
                    if (_0x4d4f8c) {
                        const _0xc9028c = _0x3a6947[Math[_0x210b03(0x182)](Math['\x72\x61\x6e\x64\x6f\x6d']() * _0x3a6947['\x6c\x65\x6e\x67\x74\x68'])];
                        try {
                            await _0x7576e8[_0x210b03(0x16a)](mek[_0x210b03(0x195)][_0x210b03(0xea)], {
                                '\x72\x65\x61\x63\x74': {
                                    '\x74\x65\x78\x74': _0xc9028c,
                                    '\x6b\x65\x79': mek['\x6b\x65\x79']
                                }
                            });
                        } catch (_0x4b7da5) {
                            log(_0x210b03(0x130), _0x210b03(0xe3) + _0x4b7da5);
                        }
                    }
                }
            }
            if (_0x4e9980('\x61\x75\x74\x6f\x72\x65\x61\x64') || process[_0x210b03(0xdb)][_0x210b03(0x1b1)] === '\x74\x72\x75\x65') {
                _0x7576e8[_0x210b03(0x15c)]([mek['\x6b\x65\x79']]);
            }
            if (_0x4e9980(_0x210b03(0x114)) && !mek[_0x210b03(0x195)][_0x210b03(0x1b0)]) {
                _0x7576e8[_0x210b03(0x14f)](_0x210b03(0x151), mek[_0x210b03(0x195)][_0x210b03(0xea)]);
            }
            if (!mek[_0x210b03(0x195)][_0x210b03(0x1b0)]) {
                if (_0x4e9980(_0x210b03(0x1a0)) || process[_0x210b03(0xdb)][_0x210b03(0xc2)] === _0x210b03(0x128)) {
                    _0x7576e8[_0x210b03(0x14f)]('\x61\x76\x61\x69\x6c\x61\x62\x6c\x65', mek[_0x210b03(0x195)][_0x210b03(0xea)]);
                } else {
                    _0x7576e8[_0x210b03(0x14f)](_0x210b03(0x141), mek[_0x210b03(0x195)][_0x210b03(0xea)]);
                }
            }
            if (_0x4e9980(_0x210b03(0x18d)) && !mek[_0x210b03(0x195)][_0x210b03(0x1b0)]) {
                _0x7576e8['\x73\x65\x6e\x64\x50\x72\x65\x73\x65\x6e\x63\x65\x55\x70\x64\x61\x74\x65'](_0x210b03(0xca), mek[_0x210b03(0x195)][_0x210b03(0xea)]);
            }
            if (mek[_0x210b03(0x195)]['\x69\x64'][_0x210b03(0x140)]('\x42\x41\x45\x35') && mek[_0x210b03(0x195)]['\x69\x64'][_0x210b03(0x1a6)] === 0x10)
                return;
            m = smsg(_0x7576e8, mek, store);
            _0x29d08b(_0x7576e8, m, _0x5baa6d, mek, store);
        } catch (_0x546d08) {
            log(_0x210b03(0x130), _0x546d08?.['\x73\x74\x61\x63\x6b'] || String(_0x546d08));
        }
    });
    _0x7576e8['\x64\x65\x63\x6f\x64\x65\x4a\x69\x64'] = _0x2f1929 => {
        const _0x32ac32 = _0x1712b8;
        if (!_0x2f1929)
            return _0x2f1929;
        if (/:\d+@/gi[_0x32ac32(0xa8)](_0x2f1929)) {
            let _0x58bb3d = jidDecode(_0x2f1929) || {};
            return _0x58bb3d[_0x32ac32(0xa0)] && _0x58bb3d[_0x32ac32(0xcf)] && _0x58bb3d[_0x32ac32(0xa0)] + '\x40' + _0x58bb3d['\x73\x65\x72\x76\x65\x72'] || _0x2f1929;
        } else
            return _0x2f1929;
    };
    _0x7576e8[_0x1712b8(0x1b2)] = (_0x188c00, _0x533a12 = ![]) => {
        const _0x5af88f = _0x1712b8;
        id = _0x7576e8['\x64\x65\x63\x6f\x64\x65\x4a\x69\x64'](_0x188c00);
        _0x533a12 = _0x7576e8[_0x5af88f(0xd5)] || _0x533a12;
        let _0x140cc8;
        if (id['\x65\x6e\x64\x73\x57\x69\x74\x68'](_0x5af88f(0x17c)))
            return new Promise(async _0x2d91d1 => {
                const _0x3ed5db = _0x5af88f;
                _0x140cc8 = store[_0x3ed5db(0x189)][id] || {};
                if (!(_0x140cc8[_0x3ed5db(0x125)] || _0x140cc8[_0x3ed5db(0x196)]))
                    _0x140cc8 = _0x7576e8['\x67\x72\x6f\x75\x70\x4d\x65\x74\x61\x64\x61\x74\x61'](id) || {};
                _0x2d91d1(_0x140cc8[_0x3ed5db(0x125)] || _0x140cc8['\x73\x75\x62\x6a\x65\x63\x74'] || PhoneNumber('\x2b' + id[_0x3ed5db(0x169)](_0x3ed5db(0xe8), ''))[_0x3ed5db(0x185)](_0x3ed5db(0x154)));
            });
        else
            _0x140cc8 = id === '\x30\x40\x73\x2e\x77\x68\x61\x74\x73\x61\x70\x70\x2e\x6e\x65\x74' ? {
                '\x69\x64': id,
                '\x6e\x61\x6d\x65': '\x57\x68\x61\x74\x73\x41\x70\x70'
            } : id === _0x7576e8[_0x5af88f(0x17a)](_0x7576e8[_0x5af88f(0xa0)]['\x69\x64']) ? _0x7576e8[_0x5af88f(0xa0)] : store[_0x5af88f(0x189)][id] || {};
        return (_0x533a12 ? '' : _0x140cc8['\x6e\x61\x6d\x65']) || _0x140cc8[_0x5af88f(0x196)] || _0x140cc8['\x76\x65\x72\x69\x66\x69\x65\x64\x4e\x61\x6d\x65'] || PhoneNumber('\x2b' + _0x188c00['\x72\x65\x70\x6c\x61\x63\x65'](_0x5af88f(0xe8), ''))[_0x5af88f(0x185)](_0x5af88f(0x154));
    };
    _0x7576e8[_0x1712b8(0x171)] = _0x44b4b0 => smsg(_0x7576e8, _0x44b4b0, store);
    const _0xfc9497 = require('\x6e\x6f\x64\x65\x2d\x66\x65\x74\x63\x68');
    const _0x496b50 = require('\x2e\x2f\x70\x61\x63\x6b\x61\x67\x65\x2e\x6a\x73\x6f\x6e');
    async function _0x4b701a() {
        const _0x2e1621 = _0x1712b8;
        try {
            const _0x11ba3f = await _0xfc9497(_0x2e1621(0x99));
            if (!_0x11ba3f['\x6f\x6b'])
                return null;
            const _0x218627 = await _0x11ba3f[_0x2e1621(0x147)]();
            return _0x218627[_0x2e1621(0xc9)]?.[_0x2e1621(0x169)](/^v/, '') || null;
        } catch {
            return null;
        }
    }
    const _0x565e42 = path[_0x1712b8(0x11e)](__dirname, _0x1712b8(0x10f));
    async function _0x4b701a() {
        const _0x1cc451 = _0x1712b8;
        try {
            const _0x14f070 = await _0xfc9497('\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x67\x69\x74\x68\x75\x62\x2e\x63\x6f\x6d\x2f\x72\x65\x70\x6f\x73\x2f\x45\x64\x6e\x75\x74\x30\x30\x31\x2f\x41\x72\x63\x68\x2d\x6d\x64\x2f\x72\x65\x6c\x65\x61\x73\x65\x73\x2f\x6c\x61\x74\x65\x73\x74');
            if (!_0x14f070['\x6f\x6b'])
                return null;
            const _0x10d996 = await _0x14f070[_0x1cc451(0x147)]();
            return _0x10d996[_0x1cc451(0xc9)]?.[_0x1cc451(0x169)](/^v/, '') || null;
        } catch {
            return null;
        }
    }
    _0x7576e8['\x65\x76']['\x6f\x6e'](_0x1712b8(0x9b), async _0x3dc21e => {
        const _0x2d17eb = _0x1712b8;
        const {
            connection: _0x105294,
            lastDisconnect: _0xc8d3d0
        } = _0x3dc21e;
        if (typeof global['\x64\x62']['\x72\x65\x63\x6f\x6e\x6e\x65\x63\x74'] !== _0x2d17eb(0xad))
            global['\x64\x62'][_0x2d17eb(0x188)] = 0x0;
        if (typeof global['\x64\x62'][_0x2d17eb(0xdf)] !== _0x2d17eb(0xfd))
            global['\x64\x62'][_0x2d17eb(0xdf)] = ![];
        if (_0x105294 === _0x2d17eb(0xfe)) {
            if (global['\x64\x62'][_0x2d17eb(0x188)] === 0x0) {
                log(_0x2d17eb(0xef), _0x2d17eb(0x14d));
                log(_0x2d17eb(0xef), _0x2d17eb(0xfa) + _0x496b50[_0x2d17eb(0x12b)]);
            } else {
                log(_0x2d17eb(0xef), _0x2d17eb(0xe4) + global['\x64\x62'][_0x2d17eb(0x188)] + '\x29');
            }
        }
        if (_0x105294 === '\x6f\x70\x65\x6e') {
            const _0x925fbd = _0x7576e8[_0x2d17eb(0xa0)]['\x69\x64'][_0x2d17eb(0xd4)]('\x3a')[0x0];
            log(_0x2d17eb(0xef), _0x2d17eb(0xb8) + _0x925fbd);
            if (global['\x64\x62'][_0x2d17eb(0x188)] === 0x0) {
                log('\x49\x4e\x46\x4f', _0x2d17eb(0x1a8));
            }
            global['\x64\x62'][_0x2d17eb(0x188)] += 0x1;
            await delay(0x7d0);
            if (!global['\x64\x62']['\x6c\x6f\x61\x64\x65\x64\x50\x6c\x75\x67\x69\x6e\x73']) {
                log(_0x2d17eb(0xef), '\x5b\x30\x5d\x20\x49\x6e\x73\x74\x61\x6c\x6c\x69\x6e\x67\x20\x70\x6c\x75\x67\x69\x6e\x73\x2e\x2e\x2e');
                const _0x1a24d5 = fs[_0x2d17eb(0x145)](_0x2d17eb(0xaa))[_0x2d17eb(0xb3)](_0x3572f9 => _0x3572f9[_0x2d17eb(0x1ad)](_0x2d17eb(0xa5)));
                for (const _0xf9decc of _0x1a24d5) {
                    try {
                        require(_0x2d17eb(0x1b3) + _0xf9decc);
                    } catch (_0x7841f0) {
                        log(_0x2d17eb(0x130), _0x2d17eb(0xeb) + _0xf9decc + '\x3a\x20' + _0x7841f0[_0x2d17eb(0x16f)]);
                    }
                }
                log(_0x2d17eb(0xef), _0x2d17eb(0x1a5));
                global['\x64\x62']['\x6c\x6f\x61\x64\x65\x64\x50\x6c\x75\x67\x69\x6e\x73'] = !![];
            }
            const _0x1a1725 = await _0x4b701a();
            let _0x4436d7 = _0x2d17eb(0xd0) + _0x496b50[_0x2d17eb(0x12b)];
            if (_0x1a1725) {
                if (_0x1a1725 !== _0x496b50[_0x2d17eb(0x12b)]) {
                    _0x4436d7 += '\x20\x28\u26a0\ufe0f\x20\x4e\x65\x77\x20\x76\x65\x72\x73\x69\x6f\x6e\x20\x76' + _0x1a1725 + '\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x29';
                } else {
                    _0x4436d7 += '\x20\x28\u2705\x20\x55\x70\x20\x74\x6f\x20\x64\x61\x74\x65\x29';
                }
            } else {
                _0x4436d7 += _0x2d17eb(0x14e);
            }
            if (!fs[_0x2d17eb(0x126)](_0x565e42) || JSON[_0x2d17eb(0xd3)](fs[_0x2d17eb(0x9f)](_0x565e42, _0x2d17eb(0xc5)))[_0x2d17eb(0xb4)] !== _0x925fbd) {
                const _0x1a70c1 = {};
                _0x1a70c1[_0x2d17eb(0xb4)] = _0x925fbd;
                fs[_0x2d17eb(0x9e)](_0x565e42, JSON[_0x2d17eb(0xe6)](_0x1a70c1));
                const _0x34f412 = {};
                _0x34f412['\x74\x65\x78\x74'] = _0x2d17eb(0x101) + global[_0x2d17eb(0xa3)] + _0x2d17eb(0x11f) + global[_0x2d17eb(0xa3)] + '\x6c\x69\x73\x74\x0a\u2022\x20\x2a\x48\x65\x6c\x70\x3a\x2a\x20' + global['\x70\x72\x65\x66\x69\x78'] + _0x2d17eb(0xd8) + global['\x70\x72\x65\x66\x69\x78'] + _0x2d17eb(0x10c) + global['\x70\x72\x65\x66\x69\x78'] + _0x2d17eb(0xbf) + global['\x73\x63\x61\x6e'] + _0x2d17eb(0xa1) + _0x4436d7 + _0x2d17eb(0x118);
                _0x7576e8['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x925fbd + _0x2d17eb(0xe8), _0x34f412);
            }
        }
        if (_0x105294 === _0x2d17eb(0x180) && _0xc8d3d0?.[_0x2d17eb(0xcd)]?.[_0x2d17eb(0x134)]?.[_0x2d17eb(0xf0)] !== 0x191) {
            log(_0x2d17eb(0x130), _0x2d17eb(0xdc));
            process[_0x2d17eb(0xcb)](0x1);
        }
    });
    _0x7576e8['\x65\x76']['\x6f\x6e'](_0x1712b8(0x116), _0x28bcd5);
    _0x7576e8[_0x1712b8(0x175)] = (_0x4ff5c7, _0x25a52e, _0x5915e7 = '', _0x44579c) => _0x7576e8[_0x1712b8(0x16a)](_0x4ff5c7, {
        '\x74\x65\x78\x74': _0x25a52e,
        ..._0x44579c
    }, { '\x71\x75\x6f\x74\x65\x64': _0x5915e7 });
    _0x7576e8['\x73\x65\x6e\x64\x43\x6f\x6e\x74\x61\x63\x74'] = async (_0x46b23e, _0x5d560a, _0x56fdf6 = _0x1712b8(0x17d), _0x134c7f = '', _0x2c4bcf = {}) => {
        const _0xae92ed = _0x1712b8;
        let _0x1cb08c = [];
        for (let _0x34018e of _0x5d560a) {
            const _0x432d78 = {};
            _0x432d78[_0xae92ed(0xed)] = botname;
            _0x432d78[_0xae92ed(0xc8)] = '\x42\x45\x47\x49\x4e\x3a\x56\x43\x41\x52\x44\x0a' + _0xae92ed(0x148) + (_0xae92ed(0x18b) + botname + _0xae92ed(0x1b6)) + (_0xae92ed(0x14a) + botname + '\x0a') + _0xae92ed(0x1ae) + _0xae92ed(0x18c) + ('\x69\x74\x65\x6d\x31\x2e\x54\x45\x4c\x3b\x77\x61\x69\x64\x3d' + _0x34018e + '\x3a' + _0x34018e + '\x0a') + _0xae92ed(0x176) + ('\x58\x2d\x57\x41\x2d\x42\x49\x5a\x2d\x44\x45\x53\x43\x52\x49\x50\x54\x49\x4f\x4e\x3a' + _0x56fdf6 + '\x0a') + (_0xae92ed(0x1a2) + botname + '\x0a') + _0xae92ed(0x1b5);
            _0x1cb08c[_0xae92ed(0xa2)](_0x432d78);
        }
        const _0x3cbee1 = {};
        _0x3cbee1[_0xae92ed(0xed)] = _0x1cb08c[_0xae92ed(0x1a6)] + _0xae92ed(0x123);
        _0x3cbee1[_0xae92ed(0x189)] = _0x1cb08c;
        const _0x318264 = {
            '\x63\x6f\x6e\x74\x61\x63\x74\x73': _0x3cbee1,
            ..._0x2c4bcf
        };
        const _0x4c18f1 = {};
        _0x4c18f1[_0xae92ed(0x156)] = _0x134c7f;
        _0x7576e8[_0xae92ed(0x16a)](_0x46b23e, _0x318264, _0x4c18f1);
    };
    _0x7576e8['\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x4d\x65\x64\x69\x61\x4d\x65\x73\x73\x61\x67\x65'] = async _0x28cf5a => {
        const _0x12cb9a = _0x1712b8;
        let _0x1d45ba = (_0x28cf5a[_0x12cb9a(0xd1)] || _0x28cf5a)['\x6d\x69\x6d\x65\x74\x79\x70\x65'] || '';
        let _0x5639fb = _0x28cf5a[_0x12cb9a(0x9c)] ? _0x28cf5a['\x6d\x74\x79\x70\x65']['\x72\x65\x70\x6c\x61\x63\x65'](/Message/gi, '') : _0x1d45ba[_0x12cb9a(0xd4)]('\x2f')[0x0];
        const _0x466b52 = await downloadContentFromMessage(_0x28cf5a, _0x5639fb);
        let _0x1d581d = Buffer['\x66\x72\x6f\x6d']([]);
        for await (const _0xed65ea of _0x466b52) {
            _0x1d581d = Buffer[_0x12cb9a(0xf2)]([
                _0x1d581d,
                _0xed65ea
            ]);
        }
        return _0x1d581d;
    };
    _0x7576e8[_0x1712b8(0xbd)] = async (_0x87cf, _0x52dadf, _0x344b47, _0x8dee1d = {}) => {
        const _0x4721b6 = _0x1712b8;
        let _0x577236 = Buffer[_0x4721b6(0x162)](_0x52dadf) ? _0x52dadf : /^data:.?\/.?;base64,/i[_0x4721b6(0xa8)](_0x52dadf) ? Buffer[_0x4721b6(0x15d)](_0x52dadf[_0x4721b6(0xd4)]`,`[0x1], _0x4721b6(0x90)) : /^https?:\/\//[_0x4721b6(0xa8)](_0x52dadf) ? await await getBuffer(_0x52dadf) : fs[_0x4721b6(0x126)](_0x52dadf) ? fs[_0x4721b6(0x9f)](_0x52dadf) : Buffer[_0x4721b6(0x1a4)](0x0);
        let _0x3e384d;
        if (_0x8dee1d && (_0x8dee1d[_0x4721b6(0x194)] || _0x8dee1d[_0x4721b6(0x19d)])) {
            _0x3e384d = await writeExifImg(_0x577236, _0x8dee1d);
        } else {
            _0x3e384d = await imageToWebp(_0x577236);
        }
        const _0x48641b = {};
        _0x48641b[_0x4721b6(0xee)] = _0x3e384d;
        const _0x4f0362 = {
            '\x73\x74\x69\x63\x6b\x65\x72': _0x48641b,
            ..._0x8dee1d
        };
        const _0x191a33 = {};
        _0x191a33[_0x4721b6(0x156)] = _0x344b47;
        await _0x7576e8[_0x4721b6(0x16a)](_0x87cf, _0x4f0362, _0x191a33);
        return _0x3e384d;
    };
    _0x7576e8[_0x1712b8(0x96)] = async (_0x4ac6f3, _0x16405c, _0x554e19, _0x454c60 = {}) => {
        const _0x35a433 = _0x1712b8;
        let _0xca2eba = Buffer[_0x35a433(0x162)](_0x16405c) ? _0x16405c : /^data:.?\/.?;base64,/i[_0x35a433(0xa8)](_0x16405c) ? Buffer[_0x35a433(0x15d)](_0x16405c[_0x35a433(0xd4)]`,`[0x1], _0x35a433(0x90)) : /^https?:\/\//[_0x35a433(0xa8)](_0x16405c) ? await await getBuffer(_0x16405c) : fs[_0x35a433(0x126)](_0x16405c) ? fs[_0x35a433(0x9f)](_0x16405c) : Buffer[_0x35a433(0x1a4)](0x0);
        let _0x16e62f;
        if (_0x454c60 && (_0x454c60[_0x35a433(0x194)] || _0x454c60[_0x35a433(0x19d)])) {
            _0x16e62f = await writeExifVid(_0xca2eba, _0x454c60);
        } else {
            _0x16e62f = await videoToWebp(_0xca2eba);
        }
        const _0x2d34fc = {};
        _0x2d34fc['\x75\x72\x6c'] = _0x16e62f;
        const _0x271563 = {
            '\x73\x74\x69\x63\x6b\x65\x72': _0x2d34fc,
            ..._0x454c60
        };
        const _0xf4a36 = {};
        _0xf4a36[_0x35a433(0x156)] = _0x554e19;
        await _0x7576e8['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x4ac6f3, _0x271563, _0xf4a36);
        return _0x16e62f;
    };
    _0x7576e8[_0x1712b8(0xe0)] = (_0xab9c5e, _0x570906 = '', _0x4aa751, _0x4cc7e5) => {
        const _0x2e5eac = _0x1712b8;
        return Buffer[_0x2e5eac(0x162)](_0x570906) ? this[_0x2e5eac(0xae)](_0xab9c5e, _0x570906, '\x66\x69\x6c\x65', '', _0x4aa751, ![], _0x4cc7e5) : _0x7576e8[_0x2e5eac(0x16a)](_0xab9c5e, {
            ..._0x4cc7e5,
            '\x74\x65\x78\x74': _0x570906
        }, {
            '\x71\x75\x6f\x74\x65\x64': _0x4aa751,
            ..._0x4cc7e5
        });
    };
    _0x7576e8[_0x1712b8(0xe5)] = async (_0xc0a907, _0x58c2ee, _0x1e63f4, _0x34a079 = {}) => {
        const _0xab0274 = _0x1712b8;
        let {
            ext: _0x39dd81,
            mime: _0x40ef58,
            data: _0x407d70
        } = await _0x7576e8[_0xab0274(0x13e)](_0x58c2ee);
        messageType = _0x40ef58['\x73\x70\x6c\x69\x74']('\x2f')[0x0];
        pase = messageType[_0xab0274(0x169)](_0xab0274(0x150), _0xab0274(0x98)) || messageType;
        const _0x58bfb5 = {
            ['' + pase]: _0x407d70,
            '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0x40ef58,
            ..._0x34a079
        };
        const _0x43a546 = {};
        _0x43a546[_0xab0274(0x156)] = _0x1e63f4;
        return await _0x7576e8['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0xc0a907, _0x58bfb5, _0x43a546);
    };
    _0x7576e8['\x67\x65\x74\x46\x69\x6c\x65'] = async (_0x13e2f8, _0x68b1f5) => {
        const _0x5090a1 = _0x1712b8;
        let _0x4d5bae;
        let _0x1335ff = Buffer[_0x5090a1(0x162)](_0x13e2f8) ? _0x13e2f8 : /^data:.*?\/.*?;base64,/i[_0x5090a1(0xa8)](_0x13e2f8) ? Buffer['\x66\x72\x6f\x6d'](_0x13e2f8['\x73\x70\x6c\x69\x74']('\x2c')[0x1], _0x5090a1(0x90)) : /^https?:\/\//[_0x5090a1(0xa8)](_0x13e2f8) ? await (_0x4d5bae = await getBuffer(_0x13e2f8)) : fs[_0x5090a1(0x126)](_0x13e2f8) ? (filename = _0x13e2f8, fs['\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63'](_0x13e2f8)) : typeof _0x13e2f8 === _0x5090a1(0x13d) ? _0x13e2f8 : Buffer[_0x5090a1(0x1a4)](0x0);
        const _0x18962c = {};
        _0x18962c[_0x5090a1(0x94)] = '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6f\x63\x74\x65\x74\x2d\x73\x74\x72\x65\x61\x6d';
        _0x18962c['\x65\x78\x74'] = _0x5090a1(0x133);
        let _0x2edcd6 = await FileType[_0x5090a1(0x93)](_0x1335ff) || _0x18962c;
        filename = path[_0x5090a1(0x11e)](__dirname, _0x5090a1(0x136) + new Date()[_0x5090a1(0x192)]() + '\x2e' + _0x2edcd6[_0x5090a1(0xd2)]);
        if (_0x1335ff && _0x68b1f5)
            fs['\x70\x72\x6f\x6d\x69\x73\x65\x73']['\x77\x72\x69\x74\x65\x46\x69\x6c\x65'](filename, _0x1335ff);
        return {
            '\x72\x65\x73': _0x4d5bae,
            '\x66\x69\x6c\x65\x6e\x61\x6d\x65': filename,
            '\x73\x69\x7a\x65': await getSizeMedia(_0x1335ff),
            ..._0x2edcd6,
            '\x64\x61\x74\x61': _0x1335ff
        };
    };
    _0x7576e8[_0x1712b8(0xae)] = async (_0x498b81, _0x4f08b1, _0x3e8fe5 = '', _0x23f14f = '', _0x30157e, _0x203994 = ![], _0x5a5129 = {}) => {
        const _0x22fd7c = _0x1712b8;
        let _0x2947cc = await _0x7576e8[_0x22fd7c(0x13e)](_0x4f08b1, !![]);
        let {
            res: _0x2c4b5b,
            data: _0x400a26,
            filename: _0xcde664
        } = _0x2947cc;
        if (_0x2c4b5b && _0x2c4b5b[_0x22fd7c(0x172)] !== 0xc8 || _0x400a26[_0x22fd7c(0x1a6)] <= 0x10000) {
            try {
                throw { '\x6a\x73\x6f\x6e': JSON[_0x22fd7c(0xd3)](_0x400a26[_0x22fd7c(0xd9)]()) };
            } catch (_0x5cf0fb) {
                if (_0x5cf0fb[_0x22fd7c(0x147)])
                    throw _0x5cf0fb['\x6a\x73\x6f\x6e'];
            }
        }
        const _0x3c2e7e = {};
        _0x3c2e7e[_0x22fd7c(0xb6)] = _0x3e8fe5;
        let _0xffaaa0 = _0x3c2e7e;
        if (_0x30157e)
            _0xffaaa0['\x71\x75\x6f\x74\x65\x64'] = _0x30157e;
        if (!_0x2947cc)
            _0x5a5129[_0x22fd7c(0x1a3)] = !![];
        let _0x21bbb8 = '', _0x41543f = _0x2947cc[_0x22fd7c(0x94)], _0x30d4eb;
        if (/webp/['\x74\x65\x73\x74'](_0x2947cc[_0x22fd7c(0x94)]) || /image/['\x74\x65\x73\x74'](_0x2947cc[_0x22fd7c(0x94)]) && _0x5a5129['\x61\x73\x53\x74\x69\x63\x6b\x65\x72'])
            _0x21bbb8 = _0x22fd7c(0x181);
        else if (/image/[_0x22fd7c(0xa8)](_0x2947cc[_0x22fd7c(0x94)]) || /webp/[_0x22fd7c(0xa8)](_0x2947cc[_0x22fd7c(0x94)]) && _0x5a5129[_0x22fd7c(0x9a)])
            _0x21bbb8 = _0x22fd7c(0xb2);
        else if (/video/[_0x22fd7c(0xa8)](_0x2947cc['\x6d\x69\x6d\x65']))
            _0x21bbb8 = _0x22fd7c(0xb5);
        else if (/audio/[_0x22fd7c(0xa8)](_0x2947cc[_0x22fd7c(0x94)]))
            _0x30d4eb = await (_0x203994 ? toPTT : toAudio)(_0x400a26, _0x2947cc[_0x22fd7c(0xd2)]), _0x400a26 = _0x30d4eb[_0x22fd7c(0x16c)], _0xcde664 = _0x30d4eb[_0x22fd7c(0xb6)], _0x21bbb8 = _0x22fd7c(0x12d), _0x41543f = _0x22fd7c(0x135);
        else
            _0x21bbb8 = _0x22fd7c(0x98);
        if (_0x5a5129[_0x22fd7c(0x1a3)])
            _0x21bbb8 = _0x22fd7c(0x98);
        const _0x161f95 = {};
        _0x161f95[_0x22fd7c(0xee)] = _0xcde664;
        const _0x4b7d9a = { ..._0x5a5129 };
        _0x4b7d9a[_0x22fd7c(0x161)] = _0x23f14f;
        _0x4b7d9a[_0x22fd7c(0x95)] = _0x203994;
        _0x4b7d9a[_0x21bbb8] = _0x161f95;
        _0x4b7d9a[_0x22fd7c(0x191)] = _0x41543f;
        let _0x50dcf2 = _0x4b7d9a;
        let _0xd26741;
        try {
            const _0x4fe941 = {
                ..._0xffaaa0,
                ..._0x5a5129
            };
            _0xd26741 = await _0x7576e8[_0x22fd7c(0x16a)](_0x498b81, _0x50dcf2, _0x4fe941);
        } catch (_0x2c19e4) {
            console[_0x22fd7c(0xcd)](_0x2c19e4);
            _0xd26741 = null;
        } finally {
            const _0x9ef99f = { ..._0x50dcf2 };
            _0x9ef99f[_0x21bbb8] = _0x400a26;
            const _0xaab8 = {
                ..._0xffaaa0,
                ..._0x5a5129
            };
            if (!_0xd26741)
                _0xd26741 = await _0x7576e8[_0x22fd7c(0x16a)](_0x498b81, _0x9ef99f, _0xaab8);
            return _0xd26741;
        }
    };
    const _0xb29dfc = global['\x74\x69\x6d\x65\x7a\x6f\x6e\x65'] || _0x1712b8(0xa7);
    _0x7576e8['\x65\x76']['\x6f\x6e'](_0x1712b8(0xc1), async _0x36d1f9 => {
        const _0x33c83f = _0x1712b8;
        try {
            const _0x375d0c = _0x36d1f9['\x69\x64'];
            const _0x20f4cb = await _0x7576e8[_0x33c83f(0x97)](_0x375d0c);
            const _0xbf60a8 = _0x20f4cb[_0x33c83f(0xb9)] || _0x33c83f(0x19b);
            const _0x478e97 = _0x20f4cb[_0x33c83f(0x196)];
            const _0x53e64e = _0x20f4cb[_0x33c83f(0xfb)][_0x33c83f(0x1a6)];
            const _0x257a01 = moment['\x74\x7a'](_0xb29dfc)[_0x33c83f(0x111)](_0x33c83f(0x198));
            const _0x4ed708 = moment['\x74\x7a'](_0xb29dfc)[_0x33c83f(0x111)]('\x48\x48\x3a\x6d\x6d\x3a\x73\x73');
            const _0x286b8e = global['\x64\x62']['\x67\x72\x6f\x75\x70\x73']?.[_0x375d0c]?.[_0x33c83f(0xff)] === !![] || process[_0x33c83f(0xdb)]['\x57\x45\x4c\x43\x4f\x4d\x45'] === '\x74\x72\x75\x65';
            const _0x4193c1 = global['\x64\x62'][_0x33c83f(0x19c)]?.[_0x375d0c]?.[_0x33c83f(0xb7)] === !![] || process[_0x33c83f(0xdb)][_0x33c83f(0x158)] === _0x33c83f(0x128);
            for (const _0x39088a of _0x36d1f9[_0x33c83f(0xfb)]) {
                let _0x385669;
                try {
                    _0x385669 = await _0x7576e8[_0x33c83f(0x183)](_0x39088a, _0x33c83f(0xb2));
                } catch {
                    _0x385669 = '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x64\x6e\x2e\x70\x69\x78\x61\x62\x61\x79\x2e\x63\x6f\x6d\x2f\x70\x68\x6f\x74\x6f\x2f\x32\x30\x31\x35\x2f\x31\x30\x2f\x30\x35\x2f\x32\x32\x2f\x33\x37\x2f\x62\x6c\x61\x6e\x6b\x2d\x70\x72\x6f\x66\x69\x6c\x65\x2d\x70\x69\x63\x74\x75\x72\x65\x2d\x39\x37\x33\x34\x36\x30\x5f\x39\x36\x30\x5f\x37\x32\x30\x2e\x70\x6e\x67';
                }
                const _0x29b4a5 = _0x39088a['\x73\x70\x6c\x69\x74']('\x40')[0x0][_0x33c83f(0xd4)]('\x3a')[0x0];
                if (_0x36d1f9[_0x33c83f(0x164)] === _0x33c83f(0x12a) && _0x286b8e) {
                    let _0x36df0a = global['\x64\x62'][_0x33c83f(0x19c)]?.[_0x375d0c]?.[_0x33c83f(0x153)] || process[_0x33c83f(0xdb)]['\x57\x45\x4c\x43\x4f\x4d\x45\x5f\x4d\x53\x47'] || '\x48\x65\x6c\x6c\x6f\x20\x40\x75\x73\x65\x72\x20\x77\x65\x6c\x63\x6f\x6d\x65\x20\x74\x6f\x20\x40\x67\x72\x6f\x75\x70\x0a\x40\x64\x65\x73\x63';
                    const _0x7f3815 = _0x36df0a[_0x33c83f(0x12f)](_0x33c83f(0xc3));
                    const _0x51ba26 = _0x36df0a[_0x33c83f(0x169)](/@user/gi, '\x40' + _0x29b4a5)[_0x33c83f(0x169)](/@group/gi, _0x478e97)[_0x33c83f(0x169)](/@desc/gi, _0xbf60a8)[_0x33c83f(0x169)](/@date/gi, _0x257a01)[_0x33c83f(0x169)](/@time/gi, _0x4ed708)[_0x33c83f(0x169)](/@pp/gi, '');
                    if (_0x7f3815) {
                        const _0x4b7453 = {};
                        _0x4b7453[_0x33c83f(0xee)] = _0x385669;
                        const _0x11f01c = {};
                        _0x11f01c[_0x33c83f(0xb2)] = _0x4b7453;
                        _0x11f01c[_0x33c83f(0x161)] = _0x51ba26;
                        _0x11f01c['\x6d\x65\x6e\x74\x69\x6f\x6e\x73'] = [_0x39088a];
                        await _0x7576e8[_0x33c83f(0x16a)](_0x375d0c, _0x11f01c);
                    } else {
                        const _0xa3351d = {};
                        _0xa3351d[_0x33c83f(0x155)] = _0x51ba26;
                        _0xa3351d[_0x33c83f(0x178)] = [_0x39088a];
                        await _0x7576e8[_0x33c83f(0x16a)](_0x375d0c, _0xa3351d);
                    }
                } else if (_0x36d1f9[_0x33c83f(0x164)] === _0x33c83f(0x16b) && _0x4193c1) {
                    let _0x1d495c = global['\x64\x62'][_0x33c83f(0x19c)]?.[_0x375d0c]?.[_0x33c83f(0xb0)] || process['\x65\x6e\x76']['\x47\x4f\x4f\x44\x42\x59\x45\x5f\x4d\x53\x47'] || _0x33c83f(0x143);
                    const _0x21482a = _0x1d495c[_0x33c83f(0x12f)](_0x33c83f(0xc3));
                    const _0x198a6e = _0x1d495c['\x72\x65\x70\x6c\x61\x63\x65'](/@user/gi, '\x40' + _0x29b4a5)['\x72\x65\x70\x6c\x61\x63\x65'](/@group/gi, _0x478e97)[_0x33c83f(0x169)](/@desc/gi, _0xbf60a8)[_0x33c83f(0x169)](/@date/gi, _0x257a01)[_0x33c83f(0x169)](/@time/gi, _0x4ed708)['\x72\x65\x70\x6c\x61\x63\x65'](/@pp/gi, '');
                    if (_0x21482a) {
                        const _0x22310d = {};
                        _0x22310d['\x75\x72\x6c'] = _0x385669;
                        const _0x5b9550 = {};
                        _0x5b9550[_0x33c83f(0xb2)] = _0x22310d;
                        _0x5b9550[_0x33c83f(0x161)] = _0x198a6e;
                        _0x5b9550['\x6d\x65\x6e\x74\x69\x6f\x6e\x73'] = [_0x39088a];
                        await _0x7576e8[_0x33c83f(0x16a)](_0x375d0c, _0x5b9550);
                    } else {
                        const _0xa20937 = {};
                        _0xa20937[_0x33c83f(0x155)] = _0x198a6e;
                        _0xa20937['\x6d\x65\x6e\x74\x69\x6f\x6e\x73'] = [_0x39088a];
                        await _0x7576e8[_0x33c83f(0x16a)](_0x375d0c, _0xa20937);
                    }
                }
                if (global['\x64\x62']['\x67\x72\x6f\x75\x70\x73']?.[_0x375d0c]?.[_0x33c83f(0x102)]) {
                    if (_0x36d1f9[_0x33c83f(0x164)] === '\x70\x72\x6f\x6d\x6f\x74\x65') {
                        await _0x7576e8['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x375d0c, {
                            '\x74\x65\x78\x74': '\x40' + _0x29b4a5 + _0x33c83f(0x12c) + _0x36d1f9[_0x33c83f(0x19d)][_0x33c83f(0xd4)]('\x40')[0x0],
                            '\x6d\x65\x6e\x74\x69\x6f\x6e\x73': [
                                _0x36d1f9['\x61\x75\x74\x68\x6f\x72'],
                                _0x39088a
                            ]
                        });
                    } else if (_0x36d1f9[_0x33c83f(0x164)] === _0x33c83f(0xf9)) {
                        await _0x7576e8[_0x33c83f(0x16a)](_0x375d0c, {
                            '\x74\x65\x78\x74': '\x40' + _0x29b4a5 + _0x33c83f(0x1ab) + _0x36d1f9[_0x33c83f(0x19d)][_0x33c83f(0xd4)]('\x40')[0x0],
                            '\x6d\x65\x6e\x74\x69\x6f\x6e\x73': [
                                _0x36d1f9[_0x33c83f(0x19d)],
                                _0x39088a
                            ]
                        });
                    }
                }
            }
        } catch (_0x28ce84) {
            log(_0x33c83f(0x130), _0x33c83f(0x103) + _0x28ce84);
        }
    });
    _0x7576e8['\x65\x76']['\x6f\x6e'](_0x1712b8(0xe9), async _0xe2a8ab => {
        const _0xfba1b2 = _0x1712b8;
        try {
            if (!_0xe2a8ab?.[0x0] || _0xe2a8ab[0x0]['\x73\x74\x61\x74\x75\x73'] !== _0xfba1b2(0x106))
                return;
            const _0x35fd35 = _0xe2a8ab[0x0]['\x66\x72\x6f\x6d'];
            const _0x40c533 = global['\x64\x62']?.[_0xfba1b2(0x12e)]?.[_0xfba1b2(0x19f)] && _0xfba1b2(0x13a) || global['\x64\x62']?.[_0xfba1b2(0x12e)]?.['\x61\x6e\x74\x69\x63\x61\x6c\x6c'] && '\x72\x65\x6a\x65\x63\x74' || process[_0xfba1b2(0xdb)][_0xfba1b2(0xf6)]?.[_0xfba1b2(0x13c)]();
            if (!_0x40c533)
                return;
            const _0x2af134 = _0x40c533 === _0xfba1b2(0x13a) ? '\x40' + _0x35fd35[_0xfba1b2(0xd4)]('\x40')[0x0] + _0xfba1b2(0x193) : '\x40' + _0x35fd35[_0xfba1b2(0xd4)]('\x40')[0x0] + _0xfba1b2(0x91);
            const _0x4d1d1a = {};
            _0x4d1d1a[_0xfba1b2(0x155)] = _0x2af134;
            _0x4d1d1a[_0xfba1b2(0x178)] = [_0x35fd35];
            await _0x7576e8[_0xfba1b2(0x16a)](_0x7576e8[_0xfba1b2(0xa0)]['\x69\x64'], _0x4d1d1a);
            await _0x7576e8[_0xfba1b2(0x132)](_0xe2a8ab[0x0]['\x69\x64'], _0x35fd35);
            if (_0x40c533 === _0xfba1b2(0x13a)) {
                await sleep(0x7d0);
                await _0x7576e8[_0xfba1b2(0x187)](_0x35fd35, _0xfba1b2(0x13a));
            }
        } catch (_0x4ab08d) {
            log(_0xfba1b2(0x130), _0xfba1b2(0x18f) + _0x4ab08d[_0xfba1b2(0x16f)]);
        }
    });
    _0x7576e8[_0x1712b8(0x19a)] = async (_0x1f3258, _0xc8c45b, _0x333453 = !![]) => {
        const _0x5a4469 = _0x1712b8;
        let _0x2ca128 = _0x1f3258['\x6d'] ? _0x1f3258['\x6d'] : _0x1f3258;
        let _0x55ea0c = (_0x1f3258['\x6d'] || _0x1f3258)['\x6d\x69\x6d\x65\x74\x79\x70\x65'] || '';
        let _0x315014 = _0x1f3258['\x6d\x74\x79\x70\x65'] ? _0x1f3258[_0x5a4469(0x9c)]['\x72\x65\x70\x6c\x61\x63\x65'](/Message/gi, '') : _0x55ea0c[_0x5a4469(0xd4)]('\x2f')[0x0];
        const _0x3b636f = await downloadContentFromMessage(_0x2ca128, _0x315014);
        let _0x13995b = Buffer['\x66\x72\x6f\x6d']([]);
        for await (const _0x40090f of _0x3b636f) {
            _0x13995b = Buffer[_0x5a4469(0xf2)]([
                _0x13995b,
                _0x40090f
            ]);
        }
        let _0x3e877e = await FileType['\x66\x72\x6f\x6d\x42\x75\x66\x66\x65\x72'](_0x13995b);
        trueFileName = _0x333453 ? _0xc8c45b + '\x2e' + _0x3e877e['\x65\x78\x74'] : _0xc8c45b;
        const _0x4b9bde = _0x5a4469(0x136);
        if (!fs[_0x5a4469(0x126)](_0x4b9bde)) {
            fs[_0x5a4469(0x14b)](_0x4b9bde);
        }
        const _0x3ab2b5 = _0x4b9bde + '\x2f' + trueFileName;
        await fs[_0x5a4469(0x9e)](_0x3ab2b5, _0x13995b);
        return _0x3ab2b5;
    };
    return _0x7576e8;
}
function _0x22d8() {
    const _0xd8891 = [
        '\x79\x32\x39\x55\x79\x32\x66\x30',
        '\x7a\x32\x6e\x49\x79\x77\x34',
        '\x6f\x67\x6e\x41\x43\x4d\x39\x62\x77\x61',
        '\x6d\x5a\x75\x32\x6d\x64\x62\x49\x43\x30\x50\x6a\x73\x31\x69',
        '\x71\x30\x66\x6d\x74\x61',
        '\x6d\x74\x69\x30\x6d\x4a\x69\x31\x74\x33\x6a\x63\x79\x32\x44\x5a',
        '\x75\x32\x76\x5a\x43\x32\x4c\x56\x42\x4b\x6e\x50\x43\x67\x48\x4c\x43\x49\x35\x4b\x42\x30\x72\x4c\x79\x33\x6a\x35\x43\x68\x72\x78\x41\x67\x4c\x5a\x43\x67\x76\x59\x74\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71',
        '\x7a\x67\x76\x54\x42\x33\x72\x4c',
        '\x77\x5a\x62\x44\x69\x65\x66\x59\x79\x32\x47\x47\x76\x4d\x76\x59\x43\x32\x4c\x56\x42\x4a\x4f\x47\x44\x47',
        '\x43\x67\x66\x59\x44\x67\x4c\x4a\x41\x78\x62\x48\x42\x4e\x72\x5a',
        '\x42\x67\x4c\x5a\x44\x67\x76\x55',
        '\x79\x4d\x39\x56\x42\x67\x76\x48\x42\x47',
        '\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x55\x7a\x57',
        '\x44\x32\x76\x53\x79\x32\x39\x54\x7a\x71',
        '\x44\x68\x6a\x50\x42\x71',
        '\x38\x6a\x2b\x51\x47\x63\x62\x62\x43\x4d\x6e\x4f\x69\x65\x31\x4b\x69\x67\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x4c\x7a\x63\x62\x5a\x44\x77\x6e\x4a\x7a\x78\x6e\x5a\x7a\x4e\x76\x53\x42\x68\x4b\x6b\x63\x4e\x62\x59\x7a\x77\x7a\x50\x45\x64\x4f\x47',
        '\x7a\x78\x7a\x4c\x42\x4e\x72\x5a',
        '\x76\x32\x76\x53\x79\x32\x39\x54\x7a\x73\x39\x68\x42\x32\x39\x4b\x79\x4e\x4c\x4c\x69\x65\x76\x59\x43\x4d\x39\x59\x6f\x49\x61',
        '\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x78\x6d',
        '\x7a\x67\x4c\x5a\x79\x77\x6a\x53\x7a\x77\x71',
        '\x42\x32\x7a\x4d\x7a\x78\x69',
        '\x45\x77\x66\x59\x7a\x33\x6d\x56\x45\x77\x66\x59\x7a\x33\x6d',
        '\x6f\x66\x66\x4b\x41\x67\x76\x49\x45\x47',
        '\x79\x4d\x58\x31\x7a\x71',
        '\x43\x32\x4c\x53\x7a\x77\x35\x30',
        '\x79\x32\x48\x48\x42\x67\x53',
        '\x42\x67\x4c\x5a\x44\x63\x4f\x6b\x34\x4f\x63\x49\x69\x65\x44\x4c\x44\x63\x62\x4f\x7a\x77\x58\x57\x69\x67\x66\x49\x42\x33\x76\x30\x69\x67\x65\x47\x79\x32\x39\x54\x42\x77\x66\x55\x7a\x64\x4f\x47\x6b\x47',
        '\x6d\x4a\x7a\x74\x75\x32\x6a\x67\x71\x4d\x65',
        '\x43\x4d\x76\x4b',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x7a\x67\x66\x30\x79\x77\x6a\x48\x43\x32\x75\x56\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x56\x42\x49\x35\x51\x43\x32\x39\x55',
        '\x7a\x78\x62\x4f\x7a\x77\x31\x4c\x43\x4d\x66\x53\x74\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71',
        '\x7a\x4d\x39\x59\x42\x77\x66\x30',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x5a\x44\x67\x66\x53\x7a\x73\x62\x56\x43\x67\x76\x55\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34\x47\x7a\x4d\x39\x59\x69\x67\x35\x4c\x44\x59\x62\x56\x44\x78\x72\x4e\x42\x32\x4c\x55\x7a\x59\x62\x57\x43\x4d\x76\x52\x7a\x78\x4b\x47\x79\x4e\x76\x55\x7a\x67\x58\x4c',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x5a\x44\x67\x66\x53\x7a\x73\x62\x56\x43\x67\x76\x55\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34',
        '\x79\x78\x76\x30\x42\x33\x72\x35\x43\x67\x4c\x55\x7a\x57',
        '\x43\x67\x66\x4b\x75\x33\x72\x48\x43\x4e\x71',
        '\x79\x33\x6a\x4c\x7a\x68\x6d\x55\x44\x78\x62\x4b\x79\x78\x72\x4c',
        '\x44\x77\x35\x4a\x79\x78\x76\x4e\x41\x68\x72\x66\x45\x67\x6e\x4c\x43\x68\x72\x50\x42\x32\x34',
        '\x63\x47\x50\x73\x7a\x77\x44\x48\x43\x4d\x72\x5a\x6c\x61\x52\x57\x4e\x7a\x6f\x75\x38\x6a\x32\x74\x52\x46\x63\x44\x4b\x37\x46\x57\x4e\x7a\x6f\x2b\x38\x6a\x32\x74\x56\x71',
        '\x43\x33\x72\x4b\x76\x66\x72\x6d',
        '\x43\x4d\x76\x48\x7a\x67\x58\x50\x42\x4d\x75',
        '\x72\x78\x6a\x59\x42\x33\x69\x36\x69\x68\x6a\x4c\x79\x77\x71\x47\x72\x75\x6e\x70\x74\x4b\x35\x73\x72\x76\x6e\x66\x76\x61',
        '\x43\x78\x76\x4c\x43\x33\x72\x50\x42\x32\x34',
        '\x7a\x67\x76\x49\x44\x77\x43',
        '\x41\x4d\x39\x50\x42\x47',
        '\x63\x47\x50\x69\x7a\x77\x58\x53\x42\x59\x65\x47\x38\x6a\x2b\x72\x49\x59\x62\x6a\x6a\x32\x30\x47\x71\x78\x6a\x4a\x41\x63\x62\x6e\x7a\x63\x57\x47\x45\x77\x39\x31\x43\x49\x62\x78\x41\x67\x66\x30\x43\x30\x66\x57\x43\x63\x62\x49\x42\x33\x71\x55\x69\x65\x48\x4c\x43\x4d\x75\x4e\x43\x59\x62\x4f\x42\x33\x43\x47\x44\x67\x38\x47\x44\x78\x6e\x4c\x69\x67\x31\x4c\x6f\x47\x4f\x6b\x34\x4f\x63\x49\x69\x63\x50\x76\x43\x32\x66\x4e\x7a\x74\x4f\x51\x69\x61',
        '\x6c\x49\x39\x53\x41\x77\x69\x56\x79\x78\x6a\x59\x7a\x4e\x76\x55\x79\x33\x72\x50\x42\x32\x34\x55\x41\x4e\x6d',
        '\x43\x32\x76\x55\x7a\x61',
        '\x6c\x33\x6a\x48\x44\x57',
        '\x69\x67\x6e\x56\x42\x4e\x72\x48\x79\x33\x72\x5a',
        '\x71\x32\x48\x59\x42\x32\x31\x4c',
        '\x42\x4d\x66\x54\x7a\x71',
        '\x7a\x78\x48\x50\x43\x33\x72\x5a\x75\x33\x4c\x55\x79\x57',
        '\x43\x33\x72\x4b\x41\x77\x34',
        '\x44\x68\x6a\x31\x7a\x71',
        '\x43\x4d\x66\x30\x7a\x73\x31\x56\x44\x4d\x76\x59\x42\x67\x4c\x54\x41\x78\x71',
        '\x79\x77\x72\x4b',
        '\x44\x4d\x76\x59\x43\x32\x4c\x56\x42\x47',
        '\x69\x67\x48\x48\x43\x59\x62\x49\x7a\x77\x76\x55\x69\x68\x62\x59\x42\x32\x31\x56\x44\x67\x76\x4b\x69\x68\x72\x56\x69\x67\x66\x4b\x42\x77\x4c\x55\x69\x67\x6a\x35\x69\x65\x61',
        '\x79\x78\x76\x4b\x41\x77\x38',
        '\x43\x32\x76\x30\x44\x67\x4c\x55\x7a\x33\x6d',
        '\x41\x77\x35\x4a\x42\x68\x76\x4b\x7a\x78\x6d',
        '\x72\x76\x6a\x73\x74\x31\x69',
        '\x44\x67\x39\x6d\x42\x32\x6e\x48\x42\x67\x76\x75\x41\x77\x31\x4c\x75\x33\x72\x59\x41\x77\x35\x4e',
        '\x43\x4d\x76\x51\x7a\x77\x6e\x30\x71\x32\x66\x53\x42\x61',
        '\x6c\x4d\x6a\x50\x42\x47',
        '\x42\x33\x76\x30\x43\x68\x76\x30',
        '\x79\x78\x76\x4b\x41\x77\x38\x56\x42\x32\x44\x4e\x6f\x59\x62\x4a\x42\x32\x72\x4c\x79\x33\x6d\x39\x42\x33\x62\x31\x43\x57',
        '\x6c\x49\x39\x30\x42\x78\x61\x56',
        '\x43\x33\x72\x48\x44\x68\x76\x5a\x71\x67\x6a\x59\x42\x32\x66\x4b\x79\x32\x66\x5a\x44\x61',
        '\x42\x67\x39\x4e',
        '\x6c\x49\x39\x4a\x42\x32\x35\x4d\x41\x77\x43\x55\x41\x4e\x6d',
        '\x79\x4d\x58\x56\x79\x32\x53',
        '\x71\x4d\x66\x4b\x69\x65\x31\x62\x71\x57',
        '\x44\x67\x39\x6d\x42\x33\x44\x4c\x43\x4b\x6e\x48\x43\x32\x75',
        '\x43\x33\x72\x59\x41\x77\x35\x4e',
        '\x7a\x32\x76\x30\x72\x4d\x4c\x53\x7a\x71',
        '\x41\x77\x35\x57\x44\x78\x71',
        '\x43\x33\x72\x48\x43\x4e\x72\x5a\x76\x32\x4c\x30\x41\x61',
        '\x44\x77\x35\x48\x44\x4d\x66\x50\x42\x67\x66\x49\x42\x67\x75',
        '\x79\x77\x58\x59\x7a\x77\x66\x4b\x45\x73\x31\x4c\x45\x67\x4c\x5a\x44\x68\x6d',
        '\x71\x68\x76\x5a\x7a\x78\x69\x47\x41\x67\x66\x5a\x69\x67\x58\x4c\x7a\x4e\x71\x47\x71\x67\x44\x59\x42\x33\x76\x57',
        '\x43\x67\x58\x31\x7a\x32\x4c\x55\x43\x57',
        '\x43\x4d\x76\x48\x7a\x67\x72\x50\x43\x4c\x6e\x35\x42\x4d\x6d',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x56\x43\x67\x76\x55\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34\x47\x41\x77\x34\x47\x7a\x4d\x66\x32\x42\x33\x69\x47\x42\x32\x79\x47\x41\x77\x35\x4a\x42\x32\x31\x50\x42\x4d\x43\x47\x43\x68\x6a\x4c\x41\x32\x76\x35\x69\x67\x6a\x31\x42\x4d\x72\x53\x7a\x71',
        '\x41\x4e\x6e\x56\x42\x47',
        '\x76\x4b\x76\x73\x75\x30\x4c\x70\x74\x4a\x4f\x5a\x6c\x4a\x61\x6b',
        '\x7a\x32\x76\x30\x72\x4e\x76\x53\x42\x66\x4c\x4c\x79\x78\x69',
        '\x72\x4b\x34\x36',
        '\x42\x77\x54\x4b\x41\x78\x6a\x74\x45\x77\x35\x4a',
        '\x42\x77\x66\x4e\x7a\x77\x35\x30\x79\x71',
        '\x77\x5a\x62\x44\x69\x65\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x50\x42\x4d\x43\x47\x44\x67\x38\x47\x76\x32\x48\x48\x44\x68\x6e\x62\x43\x68\x61\x55\x6c\x49\x34',
        '\x69\x63\x4a\x49\x4d\x51\x64\x56\x55\x69\x38\x47\x76\x77\x35\x48\x79\x4d\x58\x4c\x69\x68\x72\x56\x69\x67\x6e\x4f\x7a\x77\x6e\x52\x69\x67\x7a\x56\x43\x49\x62\x31\x43\x67\x72\x48\x44\x67\x76\x5a\x6b\x71',
        '\x43\x32\x76\x55\x7a\x66\x62\x59\x7a\x78\x6e\x4c\x42\x4d\x6e\x4c\x76\x78\x62\x4b\x79\x78\x72\x4c',
        '\x79\x78\x62\x57\x42\x67\x4c\x4a\x79\x78\x72\x50\x42\x32\x34',
        '\x79\x32\x39\x54\x43\x67\x39\x5a\x41\x77\x35\x4e',
        '\x79\x4d\x66\x4b\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34',
        '\x43\x32\x76\x30\x44\x32\x76\x53\x79\x32\x39\x54\x7a\x71',
        '\x41\x77\x35\x30\x7a\x78\x6a\x55\x79\x78\x72\x50\x42\x32\x35\x48\x42\x61',
        '\x44\x67\x76\x34\x44\x61',
        '\x43\x78\x76\x56\x44\x67\x76\x4b',
        '\x6e\x4a\x6d\x59\x6d\x68\x7a\x49\x73\x32\x54\x75\x72\x57',
        '\x72\x30\x39\x70\x72\x65\x6a\x7a\x72\x71',
        '\x43\x33\x72\x4b\x7a\x78\x6a\x59',
        '\x42\x67\x39\x4b\x79\x78\x6e\x4f',
        '\x43\x33\x72\x48\x79\x32\x53',
        '\x43\x4d\x76\x48\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x32\x76\x5a',
        '\x7a\x4e\x6a\x56\x42\x71',
        '\x6d\x74\x6d\x58\x6e\x4a\x61\x31\x6d\x77\x44\x67\x7a\x75\x6e\x4f\x72\x47',
        '\x42\x77\x39\x54\x7a\x77\x35\x30\x6c\x78\x72\x50\x42\x77\x76\x36\x42\x32\x35\x4c',
        '\x7a\x4d\x4c\x53\x7a\x73\x31\x30\x45\x78\x62\x4c',
        '\x79\x32\x66\x57\x44\x67\x4c\x56\x42\x47',
        '\x41\x78\x6e\x63\x44\x77\x7a\x4d\x7a\x78\x69',
        '\x41\x78\x6e\x65\x41\x78\x6a\x4c\x79\x33\x72\x56\x43\x4e\x4b',
        '\x79\x77\x6e\x30\x41\x77\x39\x55',
        '\x6d\x4a\x65\x30\x6d\x5a\x43\x58\x41\x77\x4c\x55\x77\x68\x62\x7a',
        '\x75\x32\x76\x5a\x43\x32\x4c\x56\x42\x4b\x6e\x50\x43\x67\x48\x4c\x43\x49\x35\x4b\x7a\x77\x6e\x59\x45\x78\x62\x30\x76\x32\x4c\x30\x41\x66\x6e\x4c\x43\x33\x6e\x50\x42\x32\x35\x5a',
        '\x7a\x77\x34\x54\x72\x30\x69',
        '\x43\x4d\x31\x4b\x41\x78\x6a\x74\x45\x77\x35\x4a',
        '\x43\x4d\x76\x57\x42\x67\x66\x4a\x7a\x71',
        '\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x32\x75',
        '\x43\x4d\x76\x54\x42\x33\x7a\x4c',
        '\x7a\x67\x66\x30\x79\x71',
        '\x75\x32\x39\x4a\x41\x32\x76\x30\x69\x67\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x50\x42\x32\x34\x47\x44\x67\x4c\x54\x7a\x77\x39\x31\x44\x61',
        '\x6c\x49\x39\x30\x42\x78\x61\x56\x43\x33\x72\x56\x43\x4d\x75',
        '\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71',
        '\x79\x78\x6a\x4e\x44\x47',
        '\x43\x32\x76\x59\x41\x77\x66\x53\x41\x78\x50\x4c\x74\x71',
        '\x43\x33\x72\x48\x44\x68\x76\x5a',
        '\x44\x77\x35\x53\x41\x77\x35\x52\x75\x33\x4c\x55\x79\x57',
        '\x74\x77\x76\x5a\x43\x32\x66\x4e\x7a\x75\x6e\x56\x44\x77\x35\x30\x7a\x78\x6a\x66\x43\x4e\x6a\x56\x43\x4a\x4f\x47\x73\x32\x76\x35\x69\x68\x76\x5a\x7a\x77\x71\x47\x79\x77\x58\x59\x7a\x77\x66\x4b\x45\x73\x62\x56\x43\x49\x62\x55\x7a\x78\x7a\x4c\x43\x49\x62\x4d\x41\x77\x58\x53\x7a\x77\x71',
        '\x43\x32\x76\x55\x7a\x66\x72\x4c\x45\x68\x71',
        '\x41\x78\x72\x4c\x42\x74\x65\x55\x77\x63\x31\x62\x71\x4b\x58\x48\x79\x4d\x76\x53\x6f\x4c\x62\x56\x42\x4e\x6e\x4c\x42\x61\x4f',
        '\x42\x4d\x39\x30\x6c\x77\x66\x31\x44\x67\x48\x56\x43\x4d\x4c\x36\x7a\x77\x71',
        '\x42\x77\x76\x55\x44\x67\x4c\x56\x42\x4e\x6d',
        '\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x78\x6d\x55\x44\x78\x62\x5a\x7a\x78\x6a\x30',
        '\x7a\x67\x76\x4a\x42\x32\x72\x4c\x73\x4d\x4c\x4b',
        '\x44\x78\x6e\x4c\x43\x4e\x6d',
        '\x71\x67\x43\x55\x44\x78\x6d',
        '\x72\x67\x76\x32\x7a\x77\x58\x56\x43\x67\x76\x59\x69\x65\x6a\x56\x44\x61',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55',
        '\x42\x67\x76\x32\x7a\x77\x57',
        '\x79\x32\x58\x56\x43\x32\x75',
        '\x43\x33\x72\x50\x79\x32\x54\x4c\x43\x47',
        '\x7a\x4d\x58\x56\x42\x33\x69',
        '\x43\x68\x6a\x56\x7a\x4d\x4c\x53\x7a\x76\x62\x50\x79\x33\x72\x31\x43\x4d\x76\x76\x43\x4d\x57',
        '\x6d\x5a\x62\x72\x44\x4c\x66\x79\x41\x76\x75',
        '\x7a\x32\x76\x30\x74\x4e\x76\x54\x79\x4d\x76\x59',
        '\x6e\x5a\x44\x67\x73\x75\x66\x75\x43\x66\x79',
        '\x44\x78\x62\x4b\x79\x78\x72\x4c\x71\x4d\x58\x56\x79\x32\x54\x74\x44\x67\x66\x30\x44\x78\x6d',
        '\x43\x4d\x76\x4a\x42\x32\x35\x55\x7a\x77\x6e\x30',
        '\x79\x32\x39\x55\x44\x67\x66\x4a\x44\x68\x6d',
        '\x79\x4d\x66\x4b\x69\x67\x31\x48\x79\x57',
        '\x74\x4a\x4f\x37',
        '\x76\x65\x4c\x75\x74\x65\x75\x36\x63\x47',
        '\x79\x78\x76\x30\x42\x33\x6a\x4c\x79\x32\x39\x59\x7a\x67\x4c\x55\x7a\x57',
        '\x6d\x5a\x79\x58\x6e\x5a\x71\x35\x71\x77\x54\x73\x72\x32\x7a\x79',
        '\x72\x78\x6a\x59\x42\x33\x69\x47\x41\x77\x34\x47\x79\x32\x66\x53\x42\x63\x62\x4f\x79\x77\x35\x4b\x42\x67\x76\x59\x6f\x49\x61',
        '\x71\x4d\x39\x30\x69\x67\x4c\x5a\x69\x68\x6a\x31\x42\x4d\x35\x50\x42\x4d\x43\x48',
        '\x42\x77\x4c\x54\x7a\x78\x72\x35\x43\x67\x75',
        '\x7a\x32\x76\x30\x76\x67\x4c\x54\x7a\x71',
        '\x69\x67\x6e\x48\x42\x67\x58\x4c\x7a\x63\x62\x30\x41\x67\x75\x47\x79\x4d\x39\x30\x69\x67\x66\x55\x7a\x63\x62\x4f\x79\x78\x6d\x47\x79\x4d\x76\x4c\x42\x49\x61\x51\x79\x4d\x58\x56\x79\x32\x54\x4c\x7a\x63\x4f\x55',
        '\x43\x67\x66\x4a\x41\x32\x35\x48\x42\x77\x75',
        '\x41\x32\x76\x35',
        '\x43\x33\x76\x49\x41\x4d\x76\x4a\x44\x61',
        '\x75\x65\x39\x73\x76\x61',
        '\x72\x65\x71\x56\x74\x75\x30\x56\x77\x76\x4c\x7a\x77\x71',
        '\x75\x31\x72\x62\x76\x66\x76\x74',
        '\x7a\x67\x39\x33\x42\x4d\x58\x56\x79\x77\x72\x62\x42\x4d\x72\x74\x79\x78\x7a\x4c\x74\x77\x76\x4b\x41\x77\x66\x6e\x7a\x78\x6e\x5a\x79\x77\x44\x4c',
        '\x74\x4d\x38\x47\x7a\x67\x76\x5a\x79\x33\x6a\x50\x43\x68\x72\x50\x42\x32\x34\x55',
        '\x7a\x33\x6a\x56\x44\x78\x62\x5a',
        '\x79\x78\x76\x30\x41\x67\x39\x59',
        '\x44\x33\x6a\x50\x44\x67\x75',
        '\x79\x77\x35\x30\x41\x77\x6e\x48\x42\x67\x57\x59',
        '\x79\x78\x7a\x48\x41\x77\x58\x48\x79\x4d\x58\x4c',
        '\x6e\x64\x48\x6e\x7a\x77\x58\x48\x41\x4b\x71',
        '\x77\x63\x31\x78\x71\x73\x31\x63\x73\x76\x4f\x54\x74\x4b\x66\x6e\x72\x74\x4f',
        '\x79\x78\x6e\x65\x42\x32\x6e\x31\x42\x77\x76\x55\x44\x61',
        '\x79\x77\x58\x53\x42\x32\x6d',
        '\x77\x5a\x62\x44\x69\x66\x62\x53\x44\x77\x44\x50\x42\x4e\x6d\x47\x41\x77\x35\x5a\x44\x67\x66\x53\x42\x67\x76\x4b\x6c\x47',
        '\x42\x67\x76\x55\x7a\x33\x72\x4f',
        '\x7a\x32\x76\x30\x74\x77\x39\x55\x44\x67\x47',
        '\x77\x5a\x62\x44\x69\x65\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x4c\x7a\x63\x65',
        '\x79\x78\x48\x50\x42\x33\x6d',
        '\x6c\x49\x39\x53\x41\x77\x69\x56\x7a\x67\x66\x30\x79\x77\x6a\x48\x43\x32\x75',
        '\x69\x67\x48\x48\x43\x59\x62\x49\x7a\x77\x76\x55\x69\x67\x72\x4c\x42\x77\x39\x30\x7a\x77\x71\x47\x79\x4e\x4b\x47\x71\x61',
        '\x43\x4d\x66\x55\x7a\x67\x39\x54',
        '\x7a\x77\x35\x4b\x43\x31\x44\x50\x44\x67\x47',
        '\x74\x31\x6a\x68\x6f\x4d\x35\x31\x42\x67\x57\x6b',
        '\x6c\x49\x39\x30\x42\x78\x61\x56\x43\x32\x76\x5a\x43\x32\x4c\x56\x42\x49\x38',
        '\x7a\x4e\x6a\x56\x42\x75\x31\x4c',
        '\x75\x4b\x76\x62\x72\x61',
        '\x7a\x32\x76\x30\x74\x4d\x66\x54\x7a\x71',
        '\x6c\x49\x39\x57\x42\x68\x76\x4e\x41\x77\x35\x5a\x6c\x32\x76\x4b\x42\x4e\x76\x30\x6c\x57',
        '\x7a\x78\x48\x57\x43\x4d\x76\x5a\x43\x57',
        '\x72\x75\x35\x65\x6f\x4c\x7a\x64\x71\x76\x6a\x65',
        '\x6f\x5a\x53\x37\x63\x47',
        '\x79\x78\x66\x31\x79\x71',
        '\x7a\x67\x76\x4d\x79\x78\x76\x53\x44\x65\x31\x48\x45\x65\x58\x50\x43\x33\x72\x4c\x42\x4d\x76\x59\x43\x57',
        '\x79\x4d\x66\x5a\x7a\x74\x79\x30',
        '\x69\x67\x6e\x48\x42\x67\x58\x4c\x7a\x63\x62\x30\x41\x67\x75\x47\x79\x4d\x39\x30\x69\x67\x66\x55\x7a\x63\x62\x30\x41\x67\x75\x47\x79\x32\x66\x53\x42\x63\x62\x33\x79\x78\x6d\x47\x6b\x4e\x6a\x4c\x41\x4d\x76\x4a\x44\x67\x76\x4b\x6b\x49\x34',
        '\x6e\x74\x71\x59\x6e\x74\x4b\x59\x42\x77\x44\x6a\x42\x67\x72\x50',
        '\x7a\x4e\x6a\x56\x42\x75\x6a\x31\x7a\x4d\x7a\x4c\x43\x47',
        '\x42\x77\x4c\x54\x7a\x71',
        '\x43\x68\x72\x30',
        '\x43\x32\x76\x55\x7a\x66\x7a\x50\x7a\x67\x76\x56\x71\x78\x6e\x74\x44\x67\x4c\x4a\x41\x32\x76\x59',
        '\x7a\x33\x6a\x56\x44\x78\x62\x6e\x7a\x78\x72\x48\x7a\x67\x66\x30\x79\x71',
        '\x7a\x67\x39\x4a\x44\x77\x31\x4c\x42\x4e\x71',
        '\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x48\x43\x67\x4b\x55\x7a\x32\x4c\x30\x41\x68\x76\x49\x6c\x4d\x6e\x56\x42\x73\x39\x59\x7a\x78\x62\x56\x43\x59\x39\x66\x7a\x67\x35\x31\x44\x64\x61\x57\x6d\x73\x39\x62\x43\x4d\x6e\x4f\x6c\x77\x31\x4b\x6c\x33\x6a\x4c\x42\x67\x76\x48\x43\x32\x76\x5a\x6c\x32\x58\x48\x44\x67\x76\x5a\x44\x61',
        '\x79\x78\x6e\x6a\x42\x77\x66\x4e\x7a\x71',
        '\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x56\x42\x49\x35\x31\x43\x67\x72\x48\x44\x67\x75',
        '\x42\x78\x72\x35\x43\x67\x75',
        '\x43\x32\x39\x54\x7a\x71',
        '\x44\x33\x6a\x50\x44\x67\x76\x67\x41\x77\x58\x4c\x75\x33\x4c\x55\x79\x57',
        '\x43\x4d\x76\x48\x7a\x65\x7a\x50\x42\x67\x76\x74\x45\x77\x35\x4a',
        '\x44\x78\x6e\x4c\x43\x47',
        '\x63\x55\x6b\x61\x4f\x49\x62\x6a\x42\x4e\x62\x31\x44\x63\x62\x50\x42\x49\x62\x35\x42\x33\x75\x47\x43\x32\x76\x5a\x43\x32\x4c\x56\x42\x49\x62\x50\x7a\x63\x62\x32\x79\x78\x6a\x50\x79\x77\x6a\x53\x7a\x73\x61\x6b\x34\x4f\x63\x49\x69\x66\x6a\x4c\x43\x33\x72\x48\x43\x4e\x71\x47\x7a\x4e\x6a\x56\x42\x73\x62\x4f\x42\x33\x6e\x30\x69\x70\x63\x46\x4b\x50\x4f\x6b\x63\x47',
        '\x43\x68\x76\x5a\x41\x61',
        '\x43\x68\x6a\x4c\x7a\x4d\x4c\x34',
        '\x42\x68\x6e\x30\x79\x78\x72\x74\x45\x77\x35\x4a',
        '\x6c\x4d\x50\x5a',
        '\x71\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x56\x42\x49\x62\x64\x42\x67\x39\x5a\x7a\x77\x71',
        '\x71\x77\x7a\x59\x41\x77\x6e\x48\x6c\x30\x58\x48\x7a\x32\x39\x5a',
        '\x44\x67\x76\x5a\x44\x61',
        '\x79\x78\x44\x4c\x43\x32\x39\x54\x7a\x73\x31\x57\x41\x67\x39\x55\x7a\x77\x35\x31\x42\x77\x6a\x4c\x43\x47',
        '\x6c\x49\x39\x57\x42\x68\x76\x4e\x41\x77\x35\x5a\x6c\x32\x76\x4b\x42\x4e\x76\x30',
        '\x77\x31\x76\x55\x79\x32\x66\x31\x7a\x32\x48\x30\x69\x65\x76\x34\x79\x32\x76\x57\x44\x67\x4c\x56\x42\x4c\x30\x47',
        '\x43\x32\x76\x30\x43\x33\x76\x4b\x42\x57',
        '\x42\x4e\x76\x54\x79\x4d\x76\x59',
        '\x43\x32\x76\x55\x7a\x65\x7a\x50\x42\x67\x75',
        '\x79\x4d\x4c\x55\x7a\x61',
        '\x43\x32\x76\x30\x7a\x32\x39\x56\x7a\x67\x6a\x35\x7a\x71',
        '\x77\x30\x72\x63\x78\x73\x62\x78\x43\x4d\x4c\x30\x7a\x73\x62\x4c\x43\x4e\x6a\x56\x43\x4a\x4f\x47',
        '\x41\x77\x31\x48\x7a\x32\x75',
        '\x7a\x4d\x4c\x53\x44\x67\x76\x59',
        '\x44\x78\x6e\x4c\x43\x4b\x4c\x4b',
        '\x44\x4d\x4c\x4b\x7a\x77\x38',
        '\x7a\x4d\x4c\x53\x7a\x77\x35\x48\x42\x77\x75',
        '\x7a\x32\x39\x56\x7a\x67\x6a\x35\x7a\x71',
        '\x77\x5a\x62\x44\x69\x65\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x50\x42\x4d\x43\x47\x44\x67\x38\x36\x69\x61',
        '\x7a\x67\x76\x5a\x79\x57',
        '\x71\x67\x6e\x56\x42\x67\x39\x59\x43\x59\x39\x4a\x42\x32\x58\x56\x43\x4e\x6d\x56\x43\x32\x66\x4d\x7a\x71',
        '\x76\x77\x35\x4c\x45\x68\x62\x4c\x79\x33\x72\x4c\x7a\x63\x62\x4f\x79\x77\x35\x4b\x43\x32\x48\x48\x41\x32\x75\x47\x7a\x78\x6a\x59\x42\x33\x69',
        '\x79\x33\x6a\x4c\x79\x78\x72\x4c\x73\x77\x35\x30\x7a\x78\x6a\x4d\x79\x77\x6e\x4c',
        '\x43\x32\x76\x55\x7a\x65\x4c\x54\x79\x77\x44\x4c\x71\x78\x6e\x74\x44\x67\x4c\x4a\x41\x32\x76\x59',
        '\x42\x77\x66\x34\x74\x77\x76\x5a\x43\x32\x66\x4e\x7a\x78\x6e\x71\x7a\x78\x6a\x64\x41\x67\x66\x30',
        '\x41\x67\x76\x53\x43\x63\x62\x53\x41\x78\x6e\x30\x6b\x47\x4f\x6b\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x76\x4b\x69\x67\x35\x56\x44\x63\x62\x59\x7a\x78\x6e\x57\x42\x32\x35\x4b\x41\x77\x35\x4e\x70\x59\x64\x57\x4e\x36\x73\x4d\x69\x67\x58\x4c\x44\x63\x62\x54\x7a\x73\x62\x4f\x7a\x77\x58\x57\x69\x63\x34\x55\x6c\x47\x4f\x6b\x34\x4f\x63\x49\x69\x65\x44\x4c\x44\x63\x62\x48\x69\x67\x35\x4c\x44\x59\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55\x69\x67\x7a\x59\x42\x32\x30\x47',
        '\x43\x67\x66\x30\x41\x61',
        '\x7a\x33\x6a\x56\x44\x78\x61\x54\x43\x67\x66\x59\x44\x67\x4c\x4a\x41\x78\x62\x48\x42\x4e\x72\x5a\x6c\x4e\x76\x57\x7a\x67\x66\x30\x7a\x71',
        '\x74\x30\x35\x6d\x73\x75\x35\x66',
        '\x71\x68\x62\x57',
        '\x75\x32\x76\x5a\x43\x32\x4c\x56\x42\x49\x62\x6a\x72\x63\x62\x55\x42\x33\x71\x47\x7a\x4d\x39\x31\x42\x4d\x71\x55\x69\x66\x62\x53\x7a\x77\x66\x5a\x7a\x73\x62\x48\x7a\x67\x71\x47\x42\x32\x35\x4c\x69\x67\x4c\x55\x69\x67\x6e\x56\x42\x4d\x7a\x50\x7a\x59\x35\x51\x43\x57',
        '\x44\x78\x72\x4d\x6f\x61',
        '\x42\x33\x62\x30\x43\x57',
        '\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x4e\x41\x78\x6e\x30\x6c\x4d\x44\x50\x44\x67\x48\x31\x79\x4e\x76\x5a\x7a\x78\x6a\x4a\x42\x32\x35\x30\x7a\x77\x35\x30\x6c\x4d\x6e\x56\x42\x73\x39\x4c\x7a\x67\x35\x31\x44\x64\x61\x57\x6d\x73\x38',
        '\x44\x4d\x6e\x48\x43\x4d\x71',
        '\x44\x67\x66\x4e\x78\x32\x35\x48\x42\x77\x75',
        '\x43\x4d\x76\x4a\x42\x33\x6a\x4b\x41\x77\x35\x4e',
        '\x7a\x78\x48\x50\x44\x61',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x79\x32\x39\x53\x42\x33\x69',
        '\x7a\x78\x6a\x59\x42\x33\x69',
        '\x79\x78\x62\x57\x42\x68\x4b',
        '\x43\x32\x76\x59\x44\x4d\x76\x59',
        '\x76\x4d\x76\x59\x43\x32\x4c\x56\x42\x4a\x4f\x47\x44\x47',
        '\x42\x78\x6e\x4e',
        '\x7a\x78\x48\x30',
        '\x43\x67\x66\x59\x43\x32\x75',
        '\x43\x33\x62\x53\x41\x78\x71',
        '\x44\x32\x4c\x30\x41\x67\x39\x31\x44\x65\x6e\x56\x42\x4e\x72\x48\x79\x33\x71',
        '\x43\x33\x72\x4b\x42\x33\x76\x30',
        '\x7a\x32\x76\x30',
        '\x41\x67\x76\x53\x43\x63\x61\x38\x79\x32\x39\x54\x42\x77\x66\x55\x7a\x66\x39\x55\x79\x77\x31\x4c\x70\x47\x4f\x6b\x72\x78\x48\x48\x42\x78\x62\x53\x7a\x74\x4f\x6b\x34\x4f\x63\x49\x69\x65\x58\x50\x43\x33\x71\x47\x79\x77\x58\x53\x69\x67\x6e\x56\x42\x77\x31\x48\x42\x4d\x72\x5a\x6f\x49\x61\x51',
        '\x44\x67\x39\x74\x44\x68\x6a\x50\x42\x4d\x43',
        '\x43\x32\x58\x50\x79\x32\x75',
        '\x7a\x77\x35\x32',
        '\x77\x5a\x62\x44\x69\x65\x72\x50\x43\x32\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x4c\x7a\x63\x34\x47\x75\x4d\x76\x5a\x44\x67\x66\x59\x44\x67\x4c\x55\x7a\x59\x62\x49\x42\x33\x71\x55\x6c\x49\x34',
        '\x43\x4d\x76\x48\x7a\x61',
        '\x7a\x32\x76\x30\x72\x67\x66\x30\x7a\x71',
        '\x42\x67\x39\x48\x7a\x67\x76\x4b\x75\x67\x58\x31\x7a\x32\x4c\x55\x43\x57',
        '\x43\x4d\x76\x57\x42\x68\x4b',
        '\x43\x67\x4c\x55\x42\x57',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x42\x78\x4c\x4d\x44\x77\x35\x4a',
        '\x72\x4d\x66\x50\x42\x67\x76\x4b\x69\x68\x72\x56\x69\x68\x6a\x4c\x79\x77\x6e\x30\x69\x68\x72\x56\x69\x68\x6e\x30\x79\x78\x72\x31\x43\x5a\x4f\x47',
        '\x77\x5a\x62\x44\x69\x66\x6a\x4c\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x55\x7a\x59\x34\x55\x6c\x49\x61\x4f',
        '\x43\x32\x76\x55\x7a\x65\x31\x4c\x7a\x67\x4c\x48',
        '\x43\x33\x72\x59\x41\x77\x35\x4e\x41\x77\x7a\x35',
        '\x42\x77\x76\x54\x42\x33\x6a\x35\x74\x32\x35\x53\x45\x71',
        '\x71\x68\x6d\x55\x44\x32\x48\x48\x44\x68\x6e\x48\x43\x68\x61\x55\x42\x4d\x76\x30',
        '\x79\x32\x66\x53\x42\x61',
        '\x43\x4d\x76\x54\x42\x33\x72\x4c\x73\x4d\x4c\x4b',
        '\x77\x5a\x62\x44\x69\x65\x7a\x48\x41\x77\x58\x4c\x7a\x63\x62\x30\x42\x59\x62\x53\x42\x32\x66\x4b\x69\x68\x62\x53\x44\x77\x44\x50\x42\x49\x61',
        '\x72\x4d\x66\x50\x42\x67\x76\x4b\x69\x68\x72\x56\x69\x67\x72\x4c\x79\x33\x6a\x35\x43\x68\x71\x47\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x73\x62\x33\x41\x78\x72\x4f\x69\x67\x66\x55\x45\x73\x62\x52\x42\x4d\x39\x33\x42\x49\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55',
        '\x7a\x67\x4c\x5a\x43\x67\x58\x48\x45\x75\x35\x48\x42\x77\x75',
        '\x44\x78\x6a\x53',
        '\x73\x75\x35\x67\x74\x57',
        '\x43\x33\x72\x48\x44\x68\x76\x5a\x71\x32\x39\x4b\x7a\x71',
        '\x7a\x78\x48\x50\x44\x66\x62\x59\x42\x32\x6e\x4c\x43\x33\x6d'
    ];
    _0x22d8 = function () {
        return _0xd8891;
    };
    return _0x22d8();
}
async function startBot() {
    const _0xfb0bd8 = _0x4e3496;
    try {
        let _0x1417fb = global['\x73\x65\x73\x73\x69\x6f\x6e'];
        if (!_0x1417fb) {
            log(_0xfb0bd8(0x130), _0xfb0bd8(0xc4));
            return;
        }
        if (!/^Arch[_~]|^Ednut~/['\x74\x65\x73\x74'](_0x1417fb)) {
            log('\x45\x52\x52\x4f\x52', '\x49\x6e\x76\x61\x6c\x69\x64\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x49\x44\x2e\x20\x50\x6c\x65\x61\x73\x65\x20\x73\x63\x61\x6e\x20\x61\x20\x6e\x65\x77\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x66\x72\x6f\x6d\x20' + global['\x73\x63\x61\x6e']);
            return;
        }
        const _0x28fe8f = _0x1417fb[_0xfb0bd8(0x169)](/^Arch[_~]|^Ednut~/, '');
        const _0x3529e5 = await axios['\x67\x65\x74'](_0xfb0bd8(0xc7) + _0x28fe8f + _0xfb0bd8(0x122));
        const _0x43b5a6 = __dirname + '\x2f\x74\x6d\x70\x2f\x73\x65\x73\x73\x69\x6f\x6e\x2f\x63\x72\x65\x64\x73\x2e\x6a\x73\x6f\x6e';
        fs['\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53\x79\x6e\x63'](_0x43b5a6, JSON[_0xfb0bd8(0xe6)](_0x3529e5[_0xfb0bd8(0x16c)]));
        startBotz();
    } catch (_0x342c80) {
        log('\x45\x52\x52\x4f\x52', '\x45\x6e\x63\x6f\x75\x6e\x74\x65\x72\x65\x64\x20\x45\x72\x72\x6f\x72\x3a\x20' + (_0x342c80?.[_0xfb0bd8(0x15b)] || _0x342c80));
    }
}
startBot();
process['\x6f\x6e'](_0x4e3496(0x117), function (_0x2caa8a) {
    const _0xf2f89a = _0x4e3496;
    const _0x740a5c = String(_0x2caa8a || '');
    const _0xb03a4f = [
        '\x63\x6f\x6e\x66\x6c\x69\x63\x74',
        _0xf2f89a(0x16d),
        _0xf2f89a(0x177),
        _0xf2f89a(0x142),
        _0xf2f89a(0x129),
        _0xf2f89a(0xa6),
        '\x54\x69\x6d\x65\x64\x20\x4f\x75\x74',
        '\x56\x61\x6c\x75\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64',
        _0xf2f89a(0x146),
        _0xf2f89a(0x112),
        _0xf2f89a(0x17e),
        _0xf2f89a(0x18a),
        _0xf2f89a(0x152),
        _0xf2f89a(0xbb),
        _0xf2f89a(0x11b)
    ];
    if (_0xb03a4f[_0xf2f89a(0x9d)](_0x2ab2a1 => _0x740a5c[_0xf2f89a(0x13c)]()[_0xf2f89a(0x12f)](_0x2ab2a1[_0xf2f89a(0x13c)]()))) {
        return;
    }
    log(_0xf2f89a(0x130), _0xf2f89a(0xab) + (_0x2caa8a?.[_0xf2f89a(0x15b)] || _0x740a5c));
});
const express = require(_0x4e3496(0x1b4));
const app = express();
const port = process['\x65\x6e\x76'][_0x4e3496(0x197)] || 0xbb8;
app[_0x4e3496(0xd7)]('\x2f', (_0x2580fe, _0x21a45b) => _0x21a45b[_0x4e3496(0x121)](_0x4e3496(0x190)));
app[_0x4e3496(0xfc)](port);