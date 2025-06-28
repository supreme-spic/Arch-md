const _0x4e96c2 = _0x191b;
(function (_0x59b405, _0x234e0f) {
    const _0x515956 = _0x191b;
    const _0x5b4b61 = _0x59b405();
    while (!![]) {
        try {
            const _0x6ffea2 = -parseInt(_0x515956(0x1eb)) / 0x1 + -parseInt(_0x515956(0x294)) / 0x2 + parseInt(_0x515956(0x25e)) / 0x3 + parseInt(_0x515956(0x1cf)) / 0x4 * (-parseInt(_0x515956(0x1f6)) / 0x5) + parseInt(_0x515956(0x26c)) / 0x6 * (parseInt(_0x515956(0x1d9)) / 0x7) + -parseInt(_0x515956(0x1de)) / 0x8 + parseInt(_0x515956(0x215)) / 0x9 * (parseInt(_0x515956(0x270)) / 0xa);
            if (_0x6ffea2 === _0x234e0f) {
                break;
            } else {
                _0x5b4b61['push'](_0x5b4b61['shift']());
            }
        } catch (_0x374446) {
            _0x5b4b61['push'](_0x5b4b61['shift']());
        }
    }
}(_0x5d47, 0x1ab13));
const originalLog = console[_0x4e96c2(0x25a)];
const originalError = console[_0x4e96c2(0x1f0)];
const originalDebug = console[_0x4e96c2(0x298)];
const originalStdout = process['\x73\x74\x64\x6f\x75\x74'][_0x4e96c2(0x287)];
const originalStderr = process['\x73\x74\x64\x65\x72\x72'][_0x4e96c2(0x287)];
function isNoisy(_0x55ca09) {
    const _0x2d5f94 = _0x4e96c2;
    return typeof _0x55ca09 === '\x73\x74\x72\x69\x6e\x67' && (_0x55ca09['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x2d5f94(0x26f)) || _0x55ca09['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x2d5f94(0x1d3)) || _0x55ca09['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x2d5f94(0x2c9)) || _0x55ca09[_0x2d5f94(0x2b9)](_0x2d5f94(0x21e)) || _0x55ca09['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x44\x65\x63\x72\x79\x70\x74\x65\x64\x20\x6d\x65\x73\x73\x61\x67\x65\x20\x77\x69\x74\x68\x20\x63\x6c\x6f\x73\x65\x64\x20\x73\x65\x73\x73\x69\x6f\x6e\x2e') || _0x55ca09[_0x2d5f94(0x2b9)]('\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x64\x65\x63\x72\x79\x70\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x20\x77\x69\x74\x68\x20\x61\x6e\x79\x20\x6b\x6e\x6f\x77\x6e\x20\x73\x65\x73\x73\x69\x6f\x6e') || _0x55ca09[_0x2d5f94(0x2b9)]('\x4d\x65\x73\x73\x61\x67\x65\x43\x6f\x75\x6e\x74\x65\x72\x45\x72\x72\x6f\x72\x3a\x20\x4b\x65\x79\x20\x75\x73\x65\x64\x20\x61\x6c\x72\x65\x61\x64\x79\x20\x6f\x72\x20\x6e\x65\x76\x65\x72\x20\x66\x69\x6c\x6c\x65\x64') || _0x55ca09[_0x2d5f94(0x2b9)](_0x2d5f94(0x229)) || _0x55ca09[_0x2d5f94(0x2b9)]('\x53\x65\x73\x73\x69\x6f\x6e\x43\x69\x70\x68\x65\x72\x2e\x64\x65\x63\x72\x79\x70\x74\x57\x69\x74\x68\x53\x65\x73\x73\x69\x6f\x6e\x73'));
}
console[_0x4e96c2(0x25a)] = (..._0x3402dc) => {
    const _0x288ead = _0x4e96c2;
    if (isNoisy(_0x3402dc[0x0]))
        return;
    originalLog[_0x288ead(0x213)](console, _0x3402dc);
};
console[_0x4e96c2(0x1f0)] = (..._0x10f410) => {
    const _0x4bded1 = _0x4e96c2;
    if (isNoisy(_0x10f410[0x0]))
        return;
    originalError[_0x4bded1(0x213)](console, _0x10f410);
};
console['\x64\x65\x62\x75\x67'] = (..._0x578d2e) => {
    const _0x295233 = _0x4e96c2;
    if (isNoisy(_0x578d2e[0x0]))
        return;
    originalDebug[_0x295233(0x213)](console, _0x578d2e);
};
process['\x73\x74\x64\x6f\x75\x74']['\x77\x72\x69\x74\x65'] = (_0xc69f85, _0x3a0f19, _0x243598) => {
    const _0xf7e7c6 = _0x4e96c2;
    if (isNoisy(_0xc69f85))
        return !![];
    return originalStdout[_0xf7e7c6(0x226)](process[_0xf7e7c6(0x29e)], _0xc69f85, _0x3a0f19, _0x243598);
};
process[_0x4e96c2(0x288)][_0x4e96c2(0x287)] = (_0x55ef85, _0x4d2f64, _0x3baa8a) => {
    const _0x16e2d5 = _0x4e96c2;
    if (isNoisy(_0x55ef85))
        return !![];
    return originalStderr[_0x16e2d5(0x226)](process['\x73\x74\x64\x65\x72\x72'], _0x55ef85, _0x4d2f64, _0x3baa8a);
};
require(_0x4e96c2(0x235));
const chalk = require('\x63\x68\x61\x6c\x6b');
const handleMessage = require('\x2e\x2f\x68\x61\x6e\x64\x6c\x65\x72\x2e\x6a\x73');
global['\x6c\x6f\x67'] = function (_0x4a9871, _0x5ba42a) {
    const _0x576e23 = _0x4e96c2;
    const _0x30edf9 = new Date();
    const _0x1bb9fd = _0x30edf9[_0x576e23(0x28e)]()['\x74\x6f\x53\x74\x72\x69\x6e\x67']()[_0x576e23(0x212)](0x2, '\x30');
    const _0x2de4f4 = (_0x30edf9['\x67\x65\x74\x4d\x6f\x6e\x74\x68']() + 0x1)['\x74\x6f\x53\x74\x72\x69\x6e\x67']()[_0x576e23(0x212)](0x2, '\x30');
    const _0x2c8312 = _0x30edf9['\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72']()[_0x576e23(0x258)]()[_0x576e23(0x2d6)](-0x2);
    const _0x57fc0f = _0x30edf9[_0x576e23(0x273)](_0x576e23(0x1c2)) + ('\x20' + _0x1bb9fd + '\x2d' + _0x2de4f4 + '\x2d' + _0x2c8312);
    const _0x5d38e0 = _0x4a9871[_0x576e23(0x246)]();
    const _0x379a71 = _0x5d38e0 === _0x576e23(0x260) ? chalk[_0x576e23(0x1ef)](_0x5d38e0) : _0x5d38e0 === _0x576e23(0x1cd) ? chalk['\x72\x65\x64'](_0x5d38e0) : _0x5d38e0;
    console[_0x576e23(0x25a)](_0x379a71 + '\x20\x5b' + _0x57fc0f + '\x5d\x3a', chalk[_0x576e23(0x22e)](_0x5ba42a));
};
require('\x65\x76\x65\x6e\x74\x73')['\x45\x76\x65\x6e\x74\x45\x6d\x69\x74\x74\x65\x72'][_0x4e96c2(0x1fa)] = 0x258;
const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    makeInMemoryStore,
    jidDecode,
    downloadContentFromMessage,
    delay
} = require(_0x4e96c2(0x29c));
const pino = require(_0x4e96c2(0x284));
const {delArrSave} = require(_0x4e96c2(0x276));
const fs = require('\x66\x73');
const path = require(_0x4e96c2(0x1f3));
const {Boom} = require('\x40\x68\x61\x70\x69\x2f\x62\x6f\x6f\x6d');
const yargs = require(_0x4e96c2(0x220));
const _ = require(_0x4e96c2(0x282));
const colors = require(_0x4e96c2(0x2a7));
const NodeCache = require(_0x4e96c2(0x1f1));
const moment = require(_0x4e96c2(0x24e));
const PhoneNumber = require(_0x4e96c2(0x25f));
const FileType = require(_0x4e96c2(0x27b));
const readline = require(_0x4e96c2(0x239));
const {smsg, imageToWebp, videoToWebp, sleep, writeExif, toPTT, toAudio, toVideo, getBuffer, getSizeMedia} = require(_0x4e96c2(0x1be));
const {getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture} = require(_0x4e96c2(0x218));
const axios = require(_0x4e96c2(0x2bc));
const {color} = require(_0x4e96c2(0x259));
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
const randomemoji = moji[Math[_0x4e96c2(0x2a0)](Math['\x72\x61\x6e\x64\x6f\x6d']() * moji[_0x4e96c2(0x2c0)])];
const listcolor = [
    _0x4e96c2(0x242),
    _0x4e96c2(0x2c1),
    _0x4e96c2(0x22e),
    _0x4e96c2(0x20e),
    _0x4e96c2(0x248)
];
const randomcolor = listcolor[Math[_0x4e96c2(0x2a0)](Math[_0x4e96c2(0x2b6)]() * listcolor[_0x4e96c2(0x2c0)])];
const randomcolor2 = listcolor[Math[_0x4e96c2(0x2a0)](Math[_0x4e96c2(0x2b6)]() * listcolor['\x6c\x65\x6e\x67\x74\x68'])];
const randomcolor3 = listcolor[Math[_0x4e96c2(0x2a0)](Math['\x72\x61\x6e\x64\x6f\x6d']() * listcolor[_0x4e96c2(0x2c0)])];
const randomcolor4 = listcolor[Math[_0x4e96c2(0x2a0)](Math[_0x4e96c2(0x2b6)]() * listcolor[_0x4e96c2(0x2c0)])];
const randomcolor5 = listcolor[Math[_0x4e96c2(0x2a0)](Math[_0x4e96c2(0x2b6)]() * listcolor[_0x4e96c2(0x2c0)])];
function _0x191b(_0x3d0f42, _0x2c4cb3) {
    const _0x5d4768 = _0x5d47();
    _0x191b = function (_0x191b31, _0x537669) {
        _0x191b31 = _0x191b31 - 0x1be;
        let _0x231490 = _0x5d4768[_0x191b31];
        if (_0x191b['\x46\x4e\x53\x4a\x50\x72'] === undefined) {
            var _0x871b8a = function (_0x580cdc) {
                const _0x560dc6 = '\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
                let _0x236320 = '';
                let _0x5ca633 = '';
                for (let _0x4ae223 = 0x0, _0x272c31, _0x504a2c, _0x5b8815 = 0x0; _0x504a2c = _0x580cdc['\x63\x68\x61\x72\x41\x74'](_0x5b8815++); ~_0x504a2c && (_0x272c31 = _0x4ae223 % 0x4 ? _0x272c31 * 0x40 + _0x504a2c : _0x504a2c, _0x4ae223++ % 0x4) ? _0x236320 += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x272c31 >> (-0x2 * _0x4ae223 & 0x6)) : 0x0) {
                    _0x504a2c = _0x560dc6['\x69\x6e\x64\x65\x78\x4f\x66'](_0x504a2c);
                }
                for (let _0x189b2b = 0x0, _0x11a6c9 = _0x236320['\x6c\x65\x6e\x67\x74\x68']; _0x189b2b < _0x11a6c9; _0x189b2b++) {
                    _0x5ca633 += '\x25' + ('\x30\x30' + _0x236320['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x189b2b)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
                }
                return decodeURIComponent(_0x5ca633);
            };
            _0x191b['\x4a\x54\x71\x6b\x6f\x74'] = _0x871b8a;
            _0x3d0f42 = arguments;
            _0x191b['\x46\x4e\x53\x4a\x50\x72'] = !![];
        }
        const _0x204849 = _0x5d4768[0x0];
        const _0x31aaf7 = _0x191b31 + _0x204849;
        const _0x139356 = _0x3d0f42[_0x31aaf7];
        if (!_0x139356) {
            _0x231490 = _0x191b['\x4a\x54\x71\x6b\x6f\x74'](_0x231490);
            _0x3d0f42[_0x31aaf7] = _0x231490;
        } else {
            _0x231490 = _0x139356;
        }
        return _0x231490;
    };
    return _0x191b(_0x3d0f42, _0x2c4cb3);
}
const _0x580cdc = {};
_0x580cdc[_0x4e96c2(0x2d1)] = 0xe10;
const groupCache = new NodeCache(_0x580cdc);
const ednutchat = require(_0x4e96c2(0x27f));
const _0x560dc6 = {};
_0x560dc6['\x6d\x61\x78\x4d\x65\x73\x73\x61\x67\x65\x73\x50\x65\x72\x43\x68\x61\x74'] = 0x64;
_0x560dc6[_0x4e96c2(0x20f)] = ![];
const store = ednutchat(_0x4e96c2(0x2af), _0x560dc6);
global[_0x4e96c2(0x228)] = new Object(yargs(process[_0x4e96c2(0x2ad)][_0x4e96c2(0x2d6)](0x2))[_0x4e96c2(0x21a)](![])[_0x4e96c2(0x251)]());
const deleteFolderRecursive = function (_0x3b2003) {
    const _0x552e55 = _0x4e96c2;
    if (fs['\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63'](_0x3b2003)) {
        fs[_0x552e55(0x2b8)](_0x3b2003)[_0x552e55(0x29f)](function (_0xd59911, _0x5bd13a) {
            const _0x484dda = _0x552e55;
            const _0x189245 = _0x3b2003 + '\x2f' + _0xd59911;
            if (fs[_0x484dda(0x2b5)](_0x189245)[_0x484dda(0x1e5)]()) {
                deleteFolderRecursive(_0x189245);
            } else {
                fs[_0x484dda(0x21f)](_0x189245);
            }
        });
        fs['\x72\x6d\x64\x69\x72\x53\x79\x6e\x63'](_0x3b2003);
    }
};
const question = _0x3cf5e6 => {
    const _0x275d47 = _0x4e96c2;
    const _0x2b5046 = {};
    _0x2b5046[_0x275d47(0x2cf)] = process[_0x275d47(0x206)];
    _0x2b5046[_0x275d47(0x1f5)] = process[_0x275d47(0x29e)];
    const _0x49a778 = readline[_0x275d47(0x234)](_0x2b5046);
    return new Promise(_0xdc95e1 => {
        const _0x7228f5 = _0x275d47;
        _0x49a778[_0x7228f5(0x2a6)](_0x3cf5e6, _0xdc95e1);
    });
};
const fetch = require('\x6e\x6f\x64\x65\x2d\x66\x65\x74\x63\x68');
const pkg = require(_0x4e96c2(0x2b0));
const connectionFilePath = path[_0x4e96c2(0x262)](__dirname, '\x2e\x2f\x61\x6c\x6c\x2f\x64\x61\x74\x61\x62\x61\x73\x65\x2f\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x2e\x6a\x73\x6f\x6e');
async function getLatestGitHubVersion() {
    const _0x3a8241 = _0x4e96c2;
    try {
        const _0x3854d2 = await fetch(_0x3a8241(0x205));
        if (!_0x3854d2['\x6f\x6b'])
            return null;
        const _0x3bbf8b = await _0x3854d2[_0x3a8241(0x289)]();
        return _0x3bbf8b[_0x3a8241(0x223)]?.[_0x3a8241(0x2c8)](/^v/, '') || null;
    } catch {
        return null;
    }
}
const DataBase = require(_0x4e96c2(0x278));
async function startBotz() {
    const _0x51a77f = _0x4e96c2;
    const {
        state: _0x2fcee9,
        saveCreds: _0x7e21e0
    } = await useMultiFileAuthState('\x2e\x2f\x74\x6d\x70\x2f\x73\x65\x73\x73\x69\x6f\x6e');
    const _0x46c473 = {};
    _0x46c473[_0x51a77f(0x216)] = 0x64;
    _0x46c473[_0x51a77f(0x20f)] = ![];
    const _0x2e2d41 = ednutchat('\x2e\x2f\x74\x6d\x70\x2f\x73\x74\x6f\x72\x65', _0x46c473);
    const _0x36f939 = new DataBase(process[_0x51a77f(0x1c3)][_0x51a77f(0x2c6)]);
    const _0x47035a = await _0x36f939['\x72\x65\x61\x64']();
    const _0x2559e4 = {
        '\x72\x65\x63\x6f\x6e\x6e\x65\x63\x74': 0x0,
        '\x6c\x6f\x61\x64\x65\x64\x50\x6c\x75\x67\x69\x6e\x73': ![],
        '\x67\x72\x6f\x75\x70\x73': {},
        '\x73\x65\x74\x74\x69\x6e\x67\x73': {},
        '\x64\x61\x74\x61\x62\x61\x73\x65': {},
        '\x73\x74\x69\x63\x6b\x65\x72': {},
        '\x77\x61\x72\x6e\x73': {},
        '\x73\x65\x74\x73\x75\x64\x6f': [],
        '\x64\x69\x73\x61\x62\x6c\x65\x64': [],
        '\x62\x61\x6e': [],
        '\x67\x63\x62\x61\x6e': [],
        '\x70\x6c\x75\x67\x69\x6e\x73': {},
        ..._0x47035a
    };
    global['\x64\x62'] = _0x2559e4;
    const _0x1ede17 = {};
    _0x1ede17['\x6c\x65\x76\x65\x6c'] = _0x51a77f(0x231);
    const _0x4dac94 = makeWASocket({
        '\x61\x75\x74\x68': _0x2fcee9,
        '\x6c\x6f\x67\x67\x65\x72': pino(_0x1ede17),
        '\x70\x72\x69\x6e\x74\x51\x52\x49\x6e\x54\x65\x72\x6d\x69\x6e\x61\x6c': !![],
        '\x62\x72\x6f\x77\x73\x65\x72': [
            _0x51a77f(0x237),
            _0x51a77f(0x1fb),
            _0x51a77f(0x1d5)
        ]
    });
    _0x4dac94['\x65\x76']['\x6f\x6e'](_0x51a77f(0x29d), _0x7e21e0);
    if (!_0x2e2d41['\x5f\x62\x6f\x75\x6e\x64']) {
        _0x2e2d41[_0x51a77f(0x1bf)](_0x4dac94['\x65\x76']);
        _0x2e2d41['\x5f\x62\x6f\x75\x6e\x64'] = !![];
    }
    global[_0x51a77f(0x22a)] = _0x4dac94;
    const _0x450478 = async _0x1374a0 => {
        const _0x9d2f34 = _0x51a77f;
        try {
            const _0x4dcaa0 = _0x1374a0[_0x9d2f34(0x256)]?.[0x0];
            if (!_0x4dcaa0?.[_0x9d2f34(0x25d)])
                return;
            const _0x4ac99e = _0x4dcaa0[_0x9d2f34(0x2cc)]['\x66\x72\x6f\x6d\x4d\x65'];
            const _0xe83535 = _0x4dcaa0['\x6b\x65\x79'][_0x9d2f34(0x286)];
            const _0x36533b = smsg(_0x4dac94, _0x4dcaa0, _0x2e2d41);
            if (_0xe83535 === '\x73\x74\x61\x74\x75\x73\x40\x62\x72\x6f\x61\x64\x63\x61\x73\x74') {
                const _0x3d0e98 = process[_0x9d2f34(0x1c3)][_0x9d2f34(0x2d4)]?.[_0x9d2f34(0x1df)]('\x2c')[_0x9d2f34(0x209)](_0x42a2d1 => _0x42a2d1[_0x9d2f34(0x23a)]())['\x66\x69\x6c\x74\x65\x72'](_0x26c782 => _0x26c782);
                const _0x207c61 = Array['\x69\x73\x41\x72\x72\x61\x79'](_0x3d0e98) && _0x3d0e98[_0x9d2f34(0x2c0)] > 0x0;
                const _0xb11c92 = process['\x65\x6e\x76']['\x53\x54\x41\x54\x55\x53'] === _0x9d2f34(0x20b) || global['\x64\x62']['\x73\x65\x74\x74\x69\x6e\x67\x73']?.[_0x9d2f34(0x1d7)] === !![];
                if (_0xb11c92 || _0x207c61) {
                    await _0x4dac94['\x72\x65\x61\x64\x4d\x65\x73\x73\x61\x67\x65\x73']([_0x4dcaa0[_0x9d2f34(0x2cc)]]);
                    if (_0x207c61) {
                        const _0x32310c = _0x3d0e98[Math[_0x9d2f34(0x2a0)](Math[_0x9d2f34(0x2b6)]() * _0x3d0e98[_0x9d2f34(0x2c0)])];
                        try {
                            const _0x512681 = {};
                            _0x512681[_0x9d2f34(0x293)] = _0x32310c;
                            _0x512681[_0x9d2f34(0x2cc)] = _0x4dcaa0['\x6b\x65\x79'];
                            const _0x5e308d = {};
                            _0x5e308d['\x72\x65\x61\x63\x74'] = _0x512681;
                            await _0x4dac94[_0x9d2f34(0x1d6)](_0xe83535, _0x5e308d);
                        } catch (_0x557c4f) {
                            log(_0x9d2f34(0x1cd), '\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x72\x65\x61\x63\x74\x20\x74\x6f\x20\x73\x74\x61\x74\x75\x73\x3a\x20' + _0x557c4f);
                        }
                    }
                }
                return;
            }
            if (process['\x65\x6e\x76']['\x52\x45\x41\x44'] === _0x9d2f34(0x20b) || global['\x64\x62']['\x73\x65\x74\x74\x69\x6e\x67\x73']?.[_0x9d2f34(0x24a)] === !![]) {
                await _0x4dac94[_0x9d2f34(0x24b)]([_0x4dcaa0['\x6b\x65\x79']]);
            }
            if (!_0x4ac99e && global['\x64\x62'][_0x9d2f34(0x2a9)]?.[_0x9d2f34(0x227)] === !![]) {
                _0x4dac94['\x73\x65\x6e\x64\x50\x72\x65\x73\x65\x6e\x63\x65\x55\x70\x64\x61\x74\x65'](_0x9d2f34(0x269), _0xe83535);
            }
            if (!_0x4ac99e && global['\x64\x62'][_0x9d2f34(0x2a9)]?.['\x61\x75\x74\x6f\x72\x65\x63\x6f\x72\x64\x69\x6e\x67'] === !![]) {
                _0x4dac94[_0x9d2f34(0x27d)](_0x9d2f34(0x1fe), _0xe83535);
            }
            if (!_0x4ac99e) {
                const _0x5c6e80 = process[_0x9d2f34(0x1c3)][_0x9d2f34(0x279)] === _0x9d2f34(0x20b) || global['\x64\x62'][_0x9d2f34(0x2a9)]?.[_0x9d2f34(0x2d3)] === !![];
                _0x4dac94[_0x9d2f34(0x27d)](_0x5c6e80 ? _0x9d2f34(0x2d3) : _0x9d2f34(0x1c4), _0xe83535);
            }
            handleMessage(_0x4dac94, _0x36533b, _0x1374a0, _0x4dcaa0, _0x2e2d41);
        } catch (_0x15ffb9) {
            log(_0x9d2f34(0x1cd), _0x9d2f34(0x277) + (_0x15ffb9[_0x9d2f34(0x25d)] || _0x15ffb9));
        }
    };
    _0x4dac94['\x65\x76'][_0x51a77f(0x2ce)](_0x51a77f(0x2a1), _0x450478);
    _0x4dac94['\x65\x76']['\x6f\x6e'](_0x51a77f(0x2a1), _0x450478);
    const _0x2b455c = async _0xfd3640 => {
        const _0x323dd2 = _0x51a77f;
        const {
            connection: _0x56fabe,
            lastDisconnect: _0x51fb00
        } = _0xfd3640;
        if (_0x56fabe === '\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67') {
            if (global['\x64\x62'][_0x323dd2(0x22c)] === 0x0) {
                log(_0x323dd2(0x260), _0x323dd2(0x225));
                log('\x49\x4e\x46\x4f', '\x5b\x30\x5d\x20\x41\x72\x63\x68\x20\x56\x65\x72\x73\x69\x6f\x6e\x3a\x20\x76' + pkg[_0x323dd2(0x28d)]);
            } else {
                log(_0x323dd2(0x260), '\x5b\x30\x5d\x20\x52\x65\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67\x2e\x2e\x2e\x20\x28' + global['\x64\x62'][_0x323dd2(0x22c)] + '\x29');
            }
        }
        if (_0x56fabe === '\x6f\x70\x65\x6e') {
            const _0x48f550 = _0x4dac94[_0x323dd2(0x263)]['\x69\x64'][_0x323dd2(0x1df)]('\x3a')[0x0];
            log(_0x323dd2(0x260), _0x323dd2(0x274) + _0x48f550);
            if (global['\x64\x62'][_0x323dd2(0x22c)] === 0x0) {
                log(_0x323dd2(0x260), '\x5b\x30\x5d\x20\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64\x21');
            }
            global['\x64\x62'][_0x323dd2(0x22c)] += 0x1;
            await delay(0x7d0);
            if (!global['\x64\x62'][_0x323dd2(0x23d)]) {
                log(_0x323dd2(0x260), _0x323dd2(0x2a8));
                const _0xe7d335 = fs[_0x323dd2(0x2b8)](_0x323dd2(0x1d1))[_0x323dd2(0x257)](_0x4e7266 => _0x4e7266[_0x323dd2(0x252)]('\x2e\x6a\x73'));
                for (const _0x3ce17c of _0xe7d335) {
                    try {
                        require('\x2e\x2f\x70\x6c\x75\x67\x69\x6e\x73\x2f\x65\x64\x6e\x75\x74\x2f' + _0x3ce17c);
                    } catch (_0x8056ca) {
                        log(_0x323dd2(0x1cd), _0x323dd2(0x236) + _0x3ce17c + '\x3a\x20' + _0x8056ca[_0x323dd2(0x25d)]);
                    }
                }
                log('\x49\x4e\x46\x4f', '\x5b\x30\x5d\x20\x50\x6c\x75\x67\x69\x6e\x73\x20\x69\x6e\x73\x74\x61\x6c\x6c\x65\x64\x2e');
                global['\x64\x62'][_0x323dd2(0x23d)] = !![];
            }
            if (global['\x64\x62'][_0x323dd2(0x22c)] === 0x1) {
                const _0x1f551c = await getLatestGitHubVersion();
                let _0xadeaba = _0x323dd2(0x2ca) + pkg[_0x323dd2(0x28d)];
                if (_0x1f551c) {
                    _0xadeaba += _0x1f551c !== pkg[_0x323dd2(0x28d)] ? '\x20\x28\u26a0\ufe0f\x20\x4e\x65\x77\x20\x76\x65\x72\x73\x69\x6f\x6e\x20\x76' + _0x1f551c + _0x323dd2(0x1e9) : _0x323dd2(0x267);
                } else {
                    _0xadeaba += _0x323dd2(0x296);
                }
                const _0xe8f50b = {};
                _0xe8f50b[_0x323dd2(0x293)] = _0x323dd2(0x291) + global[_0x323dd2(0x1c6)] + _0x323dd2(0x2aa) + global['\x70\x72\x65\x66\x69\x78'] + _0x323dd2(0x2bb) + global[_0x323dd2(0x1c6)] + _0x323dd2(0x2ba) + global[_0x323dd2(0x1c6)] + _0x323dd2(0x2c7) + global[_0x323dd2(0x1c6)] + _0x323dd2(0x2b4) + global[_0x323dd2(0x1ed)] + '\x0a\u2022\x20\x49\x6e\x70\x75\x74\x20\x69\x6e\x20\x79\x6f\x75\x72\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x49\x44\x20\x76\x61\x72\x69\x61\x62\x6c\x65\x20\x0a\u2022\x20\x52\x65\x73\x74\x61\x72\x74\x20\x66\x72\x6f\x6d\x20\x68\x6f\x73\x74\x20\ud83d\udc9a\x0a\x0a' + _0xadeaba + '\x0a\x0a\x52\x65\x67\x61\x72\x64\x73\x2c\x0a\ud835\udcd4\ud835\udced\ud835\udcf7\ud835\udcfe\ud835\udcfd';
                await _0x4dac94[_0x323dd2(0x1d6)](_0x48f550 + _0x323dd2(0x1f2), _0xe8f50b);
            }
        }
        if (_0x56fabe === _0x323dd2(0x1e3) && _0x51fb00?.[_0x323dd2(0x1f0)]?.['\x6f\x75\x74\x70\x75\x74']?.[_0x323dd2(0x23e)] !== 0x191) {
            log(_0x323dd2(0x1cd), _0x323dd2(0x268));
            process['\x65\x78\x69\x74'](0x1);
        }
    };
    _0x4dac94['\x65\x76'][_0x51a77f(0x2ce)](_0x51a77f(0x2d8), _0x2b455c);
    _0x4dac94['\x65\x76']['\x6f\x6e'](_0x51a77f(0x2d8), _0x2b455c);
    const _0x31eb5f = async _0x5e8cd2 => {
        const _0xc41463 = _0x51a77f;
        try {
            const _0x56ad33 = global[_0xc41463(0x2bd)] || _0xc41463(0x1f4);
            const _0x609f20 = _0x5e8cd2['\x69\x64'];
            const _0x3a9816 = await _0x4dac94[_0xc41463(0x2a4)](_0x609f20);
            const _0x39cd74 = _0x3a9816[_0xc41463(0x23c)];
            const _0x2de891 = _0x3a9816[_0xc41463(0x21c)] || '\x4e\x6f\x20\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x2e';
            const _0x25f6dd = _0x3a9816[_0xc41463(0x27e)]['\x6c\x65\x6e\x67\x74\x68'];
            const _0x549d2d = moment()['\x74\x7a'](_0x56ad33)[_0xc41463(0x1f7)](_0xc41463(0x1e4));
            const _0x252d58 = moment()['\x74\x7a'](_0x56ad33)[_0xc41463(0x1f7)](_0xc41463(0x1c1));
            const _0xfeb597 = global['\x64\x62']['\x67\x72\x6f\x75\x70\x73']?.[_0x609f20]?.[_0xc41463(0x2d2)] === !![] || process[_0xc41463(0x1c3)]['\x57\x45\x4c\x43\x4f\x4d\x45'] === _0xc41463(0x20b);
            const _0x511805 = global['\x64\x62']['\x67\x72\x6f\x75\x70\x73']?.[_0x609f20]?.[_0xc41463(0x20d)] === !![] || process[_0xc41463(0x1c3)][_0xc41463(0x297)] === _0xc41463(0x20b);
            for (const _0xf39f5b of _0x5e8cd2[_0xc41463(0x27e)]) {
                const _0x4567e0 = _0xf39f5b[_0xc41463(0x1df)]('\x40')[0x0][_0xc41463(0x1df)]('\x3a')[0x0];
                let _0x3e8fd4 = _0xc41463(0x24d);
                try {
                    _0x3e8fd4 = await _0x4dac94['\x70\x72\x6f\x66\x69\x6c\x65\x50\x69\x63\x74\x75\x72\x65\x55\x72\x6c'](_0xf39f5b, _0xc41463(0x2ac));
                } catch {
                }
                if (_0x5e8cd2[_0xc41463(0x224)] === '\x61\x64\x64' && _0xfeb597) {
                    let _0x4a7d56 = global['\x64\x62'][_0xc41463(0x1fc)]?.[_0x609f20]?.[_0xc41463(0x201)] || process['\x65\x6e\x76'][_0xc41463(0x1e0)] || _0xc41463(0x2bf);
                    const _0xc1e702 = _0x4a7d56['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0xc41463(0x23b));
                    const _0x22556f = _0x4a7d56[_0xc41463(0x2c8)](/@user/gi, '\x40' + _0x4567e0)[_0xc41463(0x2c8)](/@group/gi, _0x39cd74)[_0xc41463(0x2c8)](/@desc/gi, _0x2de891)[_0xc41463(0x2c8)](/@date/gi, _0x549d2d)[_0xc41463(0x2c8)](/@time/gi, _0x252d58)['\x72\x65\x70\x6c\x61\x63\x65'](/@pp/gi, '');
                    if (_0xc1e702) {
                        const _0xdf6d8c = {};
                        _0xdf6d8c[_0xc41463(0x222)] = _0x3e8fd4;
                        const _0x3d49c0 = {};
                        _0x3d49c0['\x69\x6d\x61\x67\x65'] = _0xdf6d8c;
                        _0x3d49c0['\x63\x61\x70\x74\x69\x6f\x6e'] = _0x22556f;
                        _0x3d49c0[_0xc41463(0x238)] = [_0xf39f5b];
                        await _0x4dac94[_0xc41463(0x1d6)](_0x609f20, _0x3d49c0);
                    } else {
                        const _0x26526b = {};
                        _0x26526b[_0xc41463(0x293)] = _0x22556f;
                        _0x26526b['\x6d\x65\x6e\x74\x69\x6f\x6e\x73'] = [_0xf39f5b];
                        await _0x4dac94[_0xc41463(0x1d6)](_0x609f20, _0x26526b);
                    }
                } else if (_0x5e8cd2[_0xc41463(0x224)] === _0xc41463(0x1e8) && _0x511805) {
                    let _0x20b1d5 = global['\x64\x62'][_0xc41463(0x1fc)]?.[_0x609f20]?.['\x73\x65\x74\x67\x6f\x6f\x64\x62\x79\x65'] || process[_0xc41463(0x1c3)][_0xc41463(0x219)] || _0xc41463(0x2da);
                    const _0xc032cb = _0x20b1d5[_0xc41463(0x2b9)]('\x40\x70\x70');
                    const _0xb88c4f = _0x20b1d5['\x72\x65\x70\x6c\x61\x63\x65'](/@user/gi, '\x40' + _0x4567e0)['\x72\x65\x70\x6c\x61\x63\x65'](/@group/gi, _0x39cd74)['\x72\x65\x70\x6c\x61\x63\x65'](/@desc/gi, _0x2de891)[_0xc41463(0x2c8)](/@date/gi, _0x549d2d)[_0xc41463(0x2c8)](/@time/gi, _0x252d58)[_0xc41463(0x2c8)](/@pp/gi, '');
                    if (_0xc032cb) {
                        const _0x5a9502 = {};
                        _0x5a9502[_0xc41463(0x222)] = _0x3e8fd4;
                        const _0x336cde = {};
                        _0x336cde[_0xc41463(0x2ac)] = _0x5a9502;
                        _0x336cde[_0xc41463(0x1ca)] = _0xb88c4f;
                        _0x336cde[_0xc41463(0x238)] = [_0xf39f5b];
                        await _0x4dac94[_0xc41463(0x1d6)](_0x609f20, _0x336cde);
                    } else {
                        const _0x636240 = {};
                        _0x636240[_0xc41463(0x293)] = _0xb88c4f;
                        _0x636240[_0xc41463(0x238)] = [_0xf39f5b];
                        await _0x4dac94[_0xc41463(0x1d6)](_0x609f20, _0x636240);
                    }
                }
                if (global['\x64\x62'][_0xc41463(0x1fc)]?.[_0x609f20]?.[_0xc41463(0x2b1)]) {
                    if (_0x5e8cd2[_0xc41463(0x224)] === _0xc41463(0x29b)) {
                        await _0x4dac94[_0xc41463(0x1d6)](_0x609f20, {
                            '\x74\x65\x78\x74': '\x40' + _0x4567e0 + _0xc41463(0x283) + _0x5e8cd2[_0xc41463(0x1c0)][_0xc41463(0x1df)]('\x40')[0x0],
                            '\x6d\x65\x6e\x74\x69\x6f\x6e\x73': [
                                _0xf39f5b,
                                _0x5e8cd2[_0xc41463(0x1c0)]
                            ]
                        });
                    } else if (_0x5e8cd2[_0xc41463(0x224)] === _0xc41463(0x2a5)) {
                        await _0x4dac94[_0xc41463(0x1d6)](_0x609f20, {
                            '\x74\x65\x78\x74': '\x40' + _0x4567e0 + _0xc41463(0x204) + _0x5e8cd2[_0xc41463(0x1c0)][_0xc41463(0x1df)]('\x40')[0x0],
                            '\x6d\x65\x6e\x74\x69\x6f\x6e\x73': [
                                _0xf39f5b,
                                _0x5e8cd2[_0xc41463(0x1c0)]
                            ]
                        });
                    }
                }
            }
        } catch (_0x241aa1) {
            log(_0xc41463(0x1cd), _0xc41463(0x290) + _0x241aa1[_0xc41463(0x25d)]);
        }
    };
    _0x4dac94['\x65\x76']['\x6f\x66\x66']('\x67\x72\x6f\x75\x70\x2d\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x73\x2e\x75\x70\x64\x61\x74\x65', _0x31eb5f);
    _0x4dac94['\x65\x76']['\x6f\x6e'](_0x51a77f(0x264), _0x31eb5f);
    const _0x3bb751 = async _0x50b2da => {
        const _0x46f890 = _0x51a77f;
        try {
            if (!_0x50b2da?.[0x0] || _0x50b2da[0x0]['\x73\x74\x61\x74\x75\x73'] !== _0x46f890(0x1c5))
                return;
            const _0x1442fa = _0x50b2da[0x0][_0x46f890(0x1ec)];
            const _0x5a6444 = global['\x64\x62']['\x73\x65\x74\x74\x69\x6e\x67\x73']?.['\x61\x6e\x74\x69\x63\x61\x6c\x6c\x32'] ? _0x46f890(0x2d9) : global['\x64\x62'][_0x46f890(0x2a9)]?.[_0x46f890(0x1d2)] ? _0x46f890(0x214) : process[_0x46f890(0x1c3)][_0x46f890(0x249)]?.[_0x46f890(0x1d8)]();
            if (!_0x5a6444)
                return;
            const _0x4e3aae = _0x5a6444 === _0x46f890(0x2d9) ? '\x40' + _0x1442fa[_0x46f890(0x1df)]('\x40')[0x0] + _0x46f890(0x247) : '\x40' + _0x1442fa['\x73\x70\x6c\x69\x74']('\x40')[0x0] + _0x46f890(0x2c4);
            const _0x1814b0 = {};
            _0x1814b0[_0x46f890(0x293)] = _0x4e3aae;
            _0x1814b0[_0x46f890(0x238)] = [_0x1442fa];
            await _0x4dac94[_0x46f890(0x1d6)](_0x4dac94['\x75\x73\x65\x72']['\x69\x64'], _0x1814b0);
            await _0x4dac94[_0x46f890(0x243)](_0x50b2da[0x0]['\x69\x64'], _0x1442fa);
            if (_0x5a6444 === _0x46f890(0x2d9)) {
                await delay(0x7d0);
                await _0x4dac94['\x75\x70\x64\x61\x74\x65\x42\x6c\x6f\x63\x6b\x53\x74\x61\x74\x75\x73'](_0x1442fa, _0x46f890(0x2d9));
            }
        } catch (_0x3f1681) {
            log(_0x46f890(0x1cd), _0x46f890(0x2d0) + _0x3f1681[_0x46f890(0x25d)]);
        }
    };
    _0x4dac94['\x65\x76']['\x6f\x66\x66'](_0x51a77f(0x226), _0x3bb751);
    _0x4dac94['\x65\x76']['\x6f\x6e']('\x63\x61\x6c\x6c', _0x3bb751);
    setInterval(async () => {
        const _0x4e8806 = _0x51a77f;
        try {
            await _0x36f939[_0x4e8806(0x287)](global['\x64\x62']);
        } catch (_0x24755a) {
            log(_0x4e8806(0x1cd), _0x4e8806(0x1ff) + _0x24755a[_0x4e8806(0x25d)]);
        }
    }, 0x2710);
    setInterval(() => {
        const _0x3f6e0b = _0x51a77f;
        const _0x989b20 = Date['\x6e\x6f\x77']() - 0x2 * 0x18 * 0x3c * 0x3c * 0x3e8;
        let _0x182f75 = 0x0;
        for (let _0xba326 in _0x2e2d41[_0x3f6e0b(0x21d)]) {
            const _0x57b1a6 = _0x2e2d41[_0x3f6e0b(0x21d)][_0xba326]?.[_0x3f6e0b(0x256)]?.[_0x3f6e0b(0x232)];
            const _0x34962d = _0x57b1a6?.['\x76\x61\x6c\x75\x65']?.[_0x3f6e0b(0x253)] * 0x3e8;
            if (_0x34962d && _0x34962d < _0x989b20) {
                delete _0x2e2d41[_0x3f6e0b(0x21d)][_0xba326];
                _0x182f75++;
            }
        }
        if (_0x182f75)
            log(_0x3f6e0b(0x260), _0x3f6e0b(0x2a3) + _0x182f75 + '\x20\x69\x6e\x61\x63\x74\x69\x76\x65\x20\x63\x68\x61\x74\x73\x20\x66\x72\x6f\x6d\x20\x73\x74\x6f\x72\x65\x2e');
    }, 0x1e * 0x3c * 0x3e8);
    _0x4dac94[_0x51a77f(0x26d)] = _0x137c9b => {
        const _0x1bc17d = _0x51a77f;
        if (!_0x137c9b)
            return _0x137c9b;
        if (/:\d+@/gi[_0x1bc17d(0x1e6)](_0x137c9b)) {
            let _0x19100f = jidDecode(_0x137c9b) || {};
            return _0x19100f[_0x1bc17d(0x263)] && _0x19100f['\x73\x65\x72\x76\x65\x72'] && _0x19100f[_0x1bc17d(0x263)] + '\x40' + _0x19100f['\x73\x65\x72\x76\x65\x72'] || _0x137c9b;
        } else
            return _0x137c9b;
    };
    _0x4dac94[_0x51a77f(0x285)] = (_0x5c2e01, _0x1fdd6d = ![]) => {
        const _0x290dc6 = _0x51a77f;
        id = _0x4dac94[_0x290dc6(0x26d)](_0x5c2e01);
        _0x1fdd6d = _0x4dac94['\x77\x69\x74\x68\x6f\x75\x74\x43\x6f\x6e\x74\x61\x63\x74'] || _0x1fdd6d;
        let _0x3a5605;
        if (id[_0x290dc6(0x252)]('\x40\x67\x2e\x75\x73'))
            return new Promise(async _0x189711 => {
                const _0x16e7d5 = _0x290dc6;
                _0x3a5605 = _0x2e2d41[_0x16e7d5(0x21b)][id] || {};
                if (!(_0x3a5605[_0x16e7d5(0x211)] || _0x3a5605[_0x16e7d5(0x23c)]))
                    _0x3a5605 = _0x4dac94['\x67\x72\x6f\x75\x70\x4d\x65\x74\x61\x64\x61\x74\x61'](id) || {};
                _0x189711(_0x3a5605['\x6e\x61\x6d\x65'] || _0x3a5605['\x73\x75\x62\x6a\x65\x63\x74'] || PhoneNumber('\x2b' + id['\x72\x65\x70\x6c\x61\x63\x65'](_0x16e7d5(0x1f2), ''))['\x67\x65\x74\x4e\x75\x6d\x62\x65\x72'](_0x16e7d5(0x25b)));
            });
        else
            _0x3a5605 = id === _0x290dc6(0x1cc) ? {
                '\x69\x64': id,
                '\x6e\x61\x6d\x65': _0x290dc6(0x1e7)
            } : id === _0x4dac94[_0x290dc6(0x26d)](_0x4dac94[_0x290dc6(0x263)]['\x69\x64']) ? _0x4dac94[_0x290dc6(0x263)] : _0x2e2d41[_0x290dc6(0x21b)][id] || {};
        return (_0x1fdd6d ? '' : _0x3a5605['\x6e\x61\x6d\x65']) || _0x3a5605[_0x290dc6(0x23c)] || _0x3a5605[_0x290dc6(0x261)] || PhoneNumber('\x2b' + _0x5c2e01[_0x290dc6(0x2c8)](_0x290dc6(0x1f2), ''))[_0x290dc6(0x28c)]('\x69\x6e\x74\x65\x72\x6e\x61\x74\x69\x6f\x6e\x61\x6c');
    };
    _0x4dac94[_0x51a77f(0x22b)] = _0x5323cb => smsg(_0x4dac94, _0x5323cb, _0x2e2d41);
    _0x4dac94['\x73\x65\x6e\x64\x54\x65\x78\x74'] = (_0x3714de, _0x1e52d6, _0x35a238 = '', _0x180f93) => _0x4dac94[_0x51a77f(0x1d6)](_0x3714de, {
        '\x74\x65\x78\x74': _0x1e52d6,
        ..._0x180f93
    }, { '\x71\x75\x6f\x74\x65\x64': _0x35a238 });
    _0x4dac94[_0x51a77f(0x28a)] = async (_0x5a2de5, _0x4fdbb0, _0x312c5e = _0x51a77f(0x1ea), _0x16f199 = '', _0x246637 = {}) => {
        const _0x3e291b = _0x51a77f;
        let _0xf9bd51 = [];
        for (let _0x4481a6 of _0x4fdbb0) {
            const _0x16fa81 = {};
            _0x16fa81[_0x3e291b(0x2be)] = botname;
            _0x16fa81[_0x3e291b(0x281)] = _0x3e291b(0x2cb) + _0x3e291b(0x1dc) + (_0x3e291b(0x22d) + botname + _0x3e291b(0x240)) + ('\x46\x4e\x3a' + botname + '\x0a') + _0x3e291b(0x1c9) + '\x54\x49\x54\x4c\x45\x3a\x0a' + (_0x3e291b(0x1e2) + _0x4481a6 + '\x3a' + _0x4481a6 + '\x0a') + _0x3e291b(0x250) + ('\x58\x2d\x57\x41\x2d\x42\x49\x5a\x2d\x44\x45\x53\x43\x52\x49\x50\x54\x49\x4f\x4e\x3a' + _0x312c5e + '\x0a') + (_0x3e291b(0x1ee) + botname + '\x0a') + _0x3e291b(0x1db);
            _0xf9bd51[_0x3e291b(0x1ce)](_0x16fa81);
        }
        const _0x233f79 = {};
        _0x233f79[_0x3e291b(0x2be)] = _0xf9bd51['\x6c\x65\x6e\x67\x74\x68'] + _0x3e291b(0x275);
        _0x233f79['\x63\x6f\x6e\x74\x61\x63\x74\x73'] = _0xf9bd51;
        const _0x42c9f4 = {
            '\x63\x6f\x6e\x74\x61\x63\x74\x73': _0x233f79,
            ..._0x246637
        };
        const _0x5f4eca = {};
        _0x5f4eca[_0x3e291b(0x255)] = _0x16f199;
        _0x4dac94[_0x3e291b(0x1d6)](_0x5a2de5, _0x42c9f4, _0x5f4eca);
    };
    _0x4dac94[_0x51a77f(0x26e)] = async _0x57878f => {
        const _0x5bff0f = _0x51a77f;
        let _0x51046f = (_0x57878f['\x6d\x73\x67'] || _0x57878f)[_0x5bff0f(0x26a)] || '';
        let _0x36e129 = _0x57878f['\x6d\x74\x79\x70\x65'] ? _0x57878f[_0x5bff0f(0x1f8)][_0x5bff0f(0x2c8)](/Message/gi, '') : _0x51046f[_0x5bff0f(0x1df)]('\x2f')[0x0];
        const _0x15d704 = await downloadContentFromMessage(_0x57878f, _0x36e129);
        let _0x32d24e = Buffer['\x66\x72\x6f\x6d']([]);
        for await (const _0x22b0b8 of _0x15d704) {
            _0x32d24e = Buffer['\x63\x6f\x6e\x63\x61\x74']([
                _0x32d24e,
                _0x22b0b8
            ]);
        }
        return _0x32d24e;
    };
    _0x4dac94[_0x51a77f(0x202)] = async (_0x1aa98d, _0x46c46f, _0x4050e4, _0x22ecb0 = {}) => {
        const _0x5323ab = _0x51a77f;
        let _0x7e369 = Buffer[_0x5323ab(0x24f)](_0x46c46f) ? _0x46c46f : /^data:.?\/.?;base64,/i[_0x5323ab(0x1e6)](_0x46c46f) ? Buffer[_0x5323ab(0x1ec)](_0x46c46f[_0x5323ab(0x1df)]`,`[0x1], _0x5323ab(0x266)) : /^https?:\/\//[_0x5323ab(0x1e6)](_0x46c46f) ? await await getBuffer(_0x46c46f) : fs[_0x5323ab(0x230)](_0x46c46f) ? fs['\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63'](_0x46c46f) : Buffer[_0x5323ab(0x29a)](0x0);
        let _0xc23409;
        if (_0x22ecb0 && (_0x22ecb0[_0x5323ab(0x203)] || _0x22ecb0[_0x5323ab(0x1c0)])) {
            _0xc23409 = await writeExifImg(_0x7e369, _0x22ecb0);
        } else {
            _0xc23409 = await imageToWebp(_0x7e369);
        }
        const _0x38070b = {};
        _0x38070b[_0x5323ab(0x222)] = _0xc23409;
        const _0x394a00 = {
            '\x73\x74\x69\x63\x6b\x65\x72': _0x38070b,
            ..._0x22ecb0
        };
        const _0x50cd3d = {};
        _0x50cd3d['\x71\x75\x6f\x74\x65\x64'] = _0x4050e4;
        await _0x4dac94[_0x5323ab(0x1d6)](_0x1aa98d, _0x394a00, _0x50cd3d);
        return _0xc23409;
    };
    _0x4dac94[_0x51a77f(0x2d5)] = async (_0x1fa4ac, _0x410126, _0x4f37ee, _0x3990c8 = {}) => {
        const _0x236a33 = _0x51a77f;
        let _0x8390bc = Buffer[_0x236a33(0x24f)](_0x410126) ? _0x410126 : /^data:.?\/.?;base64,/i['\x74\x65\x73\x74'](_0x410126) ? Buffer[_0x236a33(0x1ec)](_0x410126['\x73\x70\x6c\x69\x74']`,`[0x1], _0x236a33(0x266)) : /^https?:\/\//[_0x236a33(0x1e6)](_0x410126) ? await await getBuffer(_0x410126) : fs[_0x236a33(0x230)](_0x410126) ? fs['\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63'](_0x410126) : Buffer['\x61\x6c\x6c\x6f\x63'](0x0);
        let _0x291f5f;
        if (_0x3990c8 && (_0x3990c8[_0x236a33(0x203)] || _0x3990c8[_0x236a33(0x1c0)])) {
            _0x291f5f = await writeExifVid(_0x8390bc, _0x3990c8);
        } else {
            _0x291f5f = await videoToWebp(_0x8390bc);
        }
        const _0x575387 = {};
        _0x575387[_0x236a33(0x222)] = _0x291f5f;
        const _0x274a29 = {
            '\x73\x74\x69\x63\x6b\x65\x72': _0x575387,
            ..._0x3990c8
        };
        const _0x125809 = {};
        _0x125809[_0x236a33(0x255)] = _0x4f37ee;
        await _0x4dac94[_0x236a33(0x1d6)](_0x1fa4ac, _0x274a29, _0x125809);
        return _0x291f5f;
    };
    _0x4dac94[_0x51a77f(0x299)] = (_0x1cb45a, _0x262f59 = '', _0x9fde77, _0x25554f) => {
        const _0xdb4820 = _0x51a77f;
        return Buffer['\x69\x73\x42\x75\x66\x66\x65\x72'](_0x262f59) ? this[_0xdb4820(0x1fd)](_0x1cb45a, _0x262f59, _0xdb4820(0x1da), '', _0x9fde77, ![], _0x25554f) : _0x4dac94[_0xdb4820(0x1d6)](_0x1cb45a, {
            ..._0x25554f,
            '\x74\x65\x78\x74': _0x262f59
        }, {
            '\x71\x75\x6f\x74\x65\x64': _0x9fde77,
            ..._0x25554f
        });
    };
    _0x4dac94[_0x51a77f(0x2c2)] = async (_0x5b95e8, _0x17e903, _0x2cf7d1, _0x46e6b5 = {}) => {
        const _0x35eafc = _0x51a77f;
        let {
            ext: _0x870a7a,
            mime: _0x3d792d,
            data: _0x223e2d
        } = await _0x4dac94['\x67\x65\x74\x46\x69\x6c\x65'](_0x17e903);
        messageType = _0x3d792d['\x73\x70\x6c\x69\x74']('\x2f')[0x0];
        pase = messageType[_0x35eafc(0x2c8)](_0x35eafc(0x2ab), _0x35eafc(0x221)) || messageType;
        const _0x50673e = {
            ['' + pase]: _0x223e2d,
            '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0x3d792d,
            ..._0x46e6b5
        };
        const _0x4f65c3 = {};
        _0x4f65c3[_0x35eafc(0x255)] = _0x2cf7d1;
        return await _0x4dac94['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x5b95e8, _0x50673e, _0x4f65c3);
    };
    _0x4dac94[_0x51a77f(0x26b)] = async (_0x13b94c, _0x4eac2b) => {
        const _0xd6c139 = _0x51a77f;
        let _0x5adc9d;
        let _0x3d5a47 = Buffer[_0xd6c139(0x24f)](_0x13b94c) ? _0x13b94c : /^data:.*?\/.*?;base64,/i[_0xd6c139(0x1e6)](_0x13b94c) ? Buffer[_0xd6c139(0x1ec)](_0x13b94c[_0xd6c139(0x1df)]('\x2c')[0x1], _0xd6c139(0x266)) : /^https?:\/\//[_0xd6c139(0x1e6)](_0x13b94c) ? await (_0x5adc9d = await getBuffer(_0x13b94c)) : fs[_0xd6c139(0x230)](_0x13b94c) ? (filename = _0x13b94c, fs[_0xd6c139(0x1e1)](_0x13b94c)) : typeof _0x13b94c === _0xd6c139(0x23f) ? _0x13b94c : Buffer[_0xd6c139(0x29a)](0x0);
        const _0x71c47d = {};
        _0x71c47d[_0xd6c139(0x1c7)] = _0xd6c139(0x20a);
        _0x71c47d[_0xd6c139(0x28b)] = _0xd6c139(0x254);
        let _0x4d20f6 = await FileType[_0xd6c139(0x27a)](_0x3d5a47) || _0x71c47d;
        filename = path[_0xd6c139(0x262)](__dirname, _0xd6c139(0x2c3) + new Date()[_0xd6c139(0x241)]() + '\x2e' + _0x4d20f6['\x65\x78\x74']);
        if (_0x3d5a47 && _0x4eac2b)
            fs['\x70\x72\x6f\x6d\x69\x73\x65\x73'][_0xd6c139(0x22f)](filename, _0x3d5a47);
        return {
            '\x72\x65\x73': _0x5adc9d,
            '\x66\x69\x6c\x65\x6e\x61\x6d\x65': filename,
            '\x73\x69\x7a\x65': await getSizeMedia(_0x3d5a47),
            ..._0x4d20f6,
            '\x64\x61\x74\x61': _0x3d5a47
        };
    };
    _0x4dac94[_0x51a77f(0x1fd)] = async (_0xf5c16f, _0x27d20f, _0x5daf36 = '', _0x54dc9b = '', _0x2a71dc, _0x3c65d0 = ![], _0x320e83 = {}) => {
        const _0x555889 = _0x51a77f;
        let _0x8c88f = await _0x4dac94[_0x555889(0x26b)](_0x27d20f, !![]);
        let {
            res: _0xcbcaa2,
            data: _0xda6dee,
            filename: _0x266708
        } = _0x8c88f;
        if (_0xcbcaa2 && _0xcbcaa2[_0x555889(0x210)] !== 0xc8 || _0xda6dee[_0x555889(0x2c0)] <= 0x10000) {
            try {
                throw { '\x6a\x73\x6f\x6e': JSON[_0x555889(0x251)](_0xda6dee[_0x555889(0x258)]()) };
            } catch (_0x434ce4) {
                if (_0x434ce4[_0x555889(0x289)])
                    throw _0x434ce4[_0x555889(0x289)];
            }
        }
        const _0x402b8b = {};
        _0x402b8b[_0x555889(0x295)] = _0x5daf36;
        let _0x3f32d9 = _0x402b8b;
        if (_0x2a71dc)
            _0x3f32d9[_0x555889(0x255)] = _0x2a71dc;
        if (!_0x8c88f)
            _0x320e83['\x61\x73\x44\x6f\x63\x75\x6d\x65\x6e\x74'] = !![];
        let _0x1adb9d = '', _0x39dd49 = _0x8c88f['\x6d\x69\x6d\x65'], _0x2cfbd3;
        if (/webp/[_0x555889(0x1e6)](_0x8c88f['\x6d\x69\x6d\x65']) || /image/[_0x555889(0x1e6)](_0x8c88f[_0x555889(0x1c7)]) && _0x320e83[_0x555889(0x271)])
            _0x1adb9d = _0x555889(0x25c);
        else if (/image/[_0x555889(0x1e6)](_0x8c88f[_0x555889(0x1c7)]) || /webp/[_0x555889(0x1e6)](_0x8c88f[_0x555889(0x1c7)]) && _0x320e83[_0x555889(0x2cd)])
            _0x1adb9d = _0x555889(0x2ac);
        else if (/video/[_0x555889(0x1e6)](_0x8c88f[_0x555889(0x1c7)]))
            _0x1adb9d = _0x555889(0x1cb);
        else if (/audio/[_0x555889(0x1e6)](_0x8c88f[_0x555889(0x1c7)]))
            _0x2cfbd3 = await (_0x3c65d0 ? toPTT : toAudio)(_0xda6dee, _0x8c88f[_0x555889(0x28b)]), _0xda6dee = _0x2cfbd3[_0x555889(0x27c)], _0x266708 = _0x2cfbd3[_0x555889(0x295)], _0x1adb9d = '\x61\x75\x64\x69\x6f', _0x39dd49 = _0x555889(0x245);
        else
            _0x1adb9d = '\x64\x6f\x63\x75\x6d\x65\x6e\x74';
        if (_0x320e83['\x61\x73\x44\x6f\x63\x75\x6d\x65\x6e\x74'])
            _0x1adb9d = _0x555889(0x221);
        const _0x1c9a84 = {};
        _0x1c9a84['\x75\x72\x6c'] = _0x266708;
        const _0xde2ee = { ..._0x320e83 };
        _0xde2ee[_0x555889(0x1ca)] = _0x54dc9b;
        _0xde2ee['\x70\x74\x74'] = _0x3c65d0;
        _0xde2ee[_0x1adb9d] = _0x1c9a84;
        _0xde2ee['\x6d\x69\x6d\x65\x74\x79\x70\x65'] = _0x39dd49;
        let _0x4d92b1 = _0xde2ee;
        let _0x5d66b5;
        try {
            const _0x571199 = {
                ..._0x3f32d9,
                ..._0x320e83
            };
            _0x5d66b5 = await _0x4dac94[_0x555889(0x1d6)](_0xf5c16f, _0x4d92b1, _0x571199);
        } catch (_0x3c3369) {
            console['\x65\x72\x72\x6f\x72'](_0x3c3369);
            _0x5d66b5 = null;
        } finally {
            const _0x2aae67 = { ..._0x4d92b1 };
            _0x2aae67[_0x1adb9d] = _0xda6dee;
            const _0x4b144c = {
                ..._0x3f32d9,
                ..._0x320e83
            };
            if (!_0x5d66b5)
                _0x5d66b5 = await _0x4dac94['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0xf5c16f, _0x2aae67, _0x4b144c);
            return _0x5d66b5;
        }
    };
    _0x4dac94[_0x51a77f(0x2c5)] = async (_0x4875e5, _0x2121b8, _0x402dfe = !![]) => {
        const _0x320b03 = _0x51a77f;
        let _0x551889 = _0x4875e5['\x6d'] ? _0x4875e5['\x6d'] : _0x4875e5;
        let _0x49407c = (_0x4875e5['\x6d'] || _0x4875e5)[_0x320b03(0x26a)] || '';
        let _0x3b5317 = _0x4875e5[_0x320b03(0x1f8)] ? _0x4875e5[_0x320b03(0x1f8)][_0x320b03(0x2c8)](/Message/gi, '') : _0x49407c[_0x320b03(0x1df)]('\x2f')[0x0];
        const _0x3afc3e = await downloadContentFromMessage(_0x551889, _0x3b5317);
        let _0x3cf54c = Buffer[_0x320b03(0x1ec)]([]);
        for await (const _0x52f5 of _0x3afc3e) {
            _0x3cf54c = Buffer[_0x320b03(0x280)]([
                _0x3cf54c,
                _0x52f5
            ]);
        }
        let _0x6e62d4 = await FileType[_0x320b03(0x27a)](_0x3cf54c);
        trueFileName = _0x402dfe ? _0x2121b8 + '\x2e' + _0x6e62d4[_0x320b03(0x28b)] : _0x2121b8;
        const _0x1c0809 = '\x2e\x2f\x74\x6d\x70\x2f';
        if (!fs[_0x320b03(0x230)](_0x1c0809)) {
            fs[_0x320b03(0x2b3)](_0x1c0809);
        }
        const _0x417975 = _0x1c0809 + '\x2f' + trueFileName;
        await fs[_0x320b03(0x1d0)](_0x417975, _0x3cf54c);
        return _0x417975;
    };
    return _0x4dac94;
}
async function startBot() {
    const _0x1ec7f9 = _0x4e96c2;
    try {
        let _0x7ae3f4 = global[_0x1ec7f9(0x2d7)];
        if (!_0x7ae3f4) {
            log(_0x1ec7f9(0x1cd), _0x1ec7f9(0x207));
            return;
        }
        if (!/^Arch[_~]|^Ednut~/[_0x1ec7f9(0x1e6)](_0x7ae3f4)) {
            log('\x45\x52\x52\x4f\x52', _0x1ec7f9(0x20c) + global[_0x1ec7f9(0x1ed)]);
            return;
        }
        const _0x40228f = _0x7ae3f4[_0x1ec7f9(0x2c8)](/^Arch[_~]|^Ednut~/, '');
        const _0x1c182a = await axios['\x67\x65\x74'](_0x1ec7f9(0x1c8) + _0x40228f + _0x1ec7f9(0x2a2));
        const _0x44d5af = __dirname + _0x1ec7f9(0x208);
        fs['\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53\x79\x6e\x63'](_0x44d5af, JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x1c182a[_0x1ec7f9(0x27c)]));
        if (global['\x65\x64\x6e\x75\x74']?.['\x65\x76']) {
            global[_0x1ec7f9(0x22a)]['\x65\x76'][_0x1ec7f9(0x2b7)]();
            global[_0x1ec7f9(0x22a)] = null;
        }
        startBotz();
    } catch (_0x3952ca) {
        log('\x45\x52\x52\x4f\x52', '\x45\x6e\x63\x6f\x75\x6e\x74\x65\x72\x65\x64\x20\x45\x72\x72\x6f\x72\x3a\x20' + (_0x3952ca?.[_0x1ec7f9(0x1f9)] || _0x3952ca));
    }
}
startBot();
process['\x6f\x6e']('\x75\x6e\x63\x61\x75\x67\x68\x74\x45\x78\x63\x65\x70\x74\x69\x6f\x6e', function (_0x482c7a) {
    const _0x280746 = _0x4e96c2;
    const _0x5d70c2 = String(_0x482c7a || '');
    const _0x30c93f = [
        '\x63\x6f\x6e\x66\x6c\x69\x63\x74',
        _0x280746(0x24c),
        _0x280746(0x2ae),
        '\x61\x6c\x72\x65\x61\x64\x79\x2d\x65\x78\x69\x73\x74\x73',
        '\x72\x61\x74\x65\x2d\x6f\x76\x65\x72\x6c\x69\x6d\x69\x74',
        '\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x43\x6c\x6f\x73\x65\x64',
        _0x280746(0x233),
        _0x280746(0x28f),
        _0x280746(0x2b2),
        _0x280746(0x217),
        '\x43\x6c\x6f\x73\x69\x6e\x67\x20\x73\x65\x73\x73\x69\x6f\x6e',
        _0x280746(0x244),
        '\x62\x61\x64\x20\x73\x65\x73\x73\x69\x6f\x6e',
        _0x280746(0x292),
        '\x45\x72\x72\x6f\x72\x3a\x20\x72\x65\x61\x64\x20\x45\x43\x4f\x4e\x4e\x52\x45\x53\x45\x54'
    ];
    if (_0x30c93f[_0x280746(0x265)](_0x3b3829 => _0x5d70c2[_0x280746(0x1d8)]()[_0x280746(0x2b9)](_0x3b3829[_0x280746(0x1d8)]()))) {
        return;
    }
    log(_0x280746(0x1cd), '\x5b\x55\x6e\x63\x61\x75\x67\x68\x74\x20\x45\x78\x63\x65\x70\x74\x69\x6f\x6e\x5d\x20' + (_0x482c7a?.[_0x280746(0x1f9)] || _0x5d70c2));
});
const express = require(_0x4e96c2(0x272));
const app = express();
const port = process['\x65\x6e\x76'][_0x4e96c2(0x1d4)] || 0xbb8;
function _0x5d47() {
    const _0x35d2f6 = [
        '\x42\x67\x39\x48\x7a\x67\x76\x4b\x75\x67\x58\x31\x7a\x32\x4c\x55\x43\x57',
        '\x43\x33\x72\x48\x44\x68\x76\x5a\x71\x32\x39\x4b\x7a\x71',
        '\x43\x33\x72\x59\x41\x77\x35\x4e',
        '\x6f\x5a\x53\x37\x63\x47',
        '\x7a\x32\x76\x30\x76\x67\x4c\x54\x7a\x71',
        '\x79\x78\x66\x31\x79\x71',
        '\x43\x4d\x76\x51\x7a\x77\x6e\x30\x71\x32\x66\x53\x42\x61',
        '\x79\x4d\x66\x4b\x69\x67\x31\x48\x79\x57',
        '\x79\x78\x76\x4b\x41\x77\x38\x56\x42\x32\x44\x4e\x6f\x59\x62\x4a\x42\x32\x72\x4c\x79\x33\x6d\x39\x42\x33\x62\x31\x43\x57',
        '\x44\x67\x39\x76\x43\x68\x62\x4c\x43\x4b\x6e\x48\x43\x32\x75',
        '\x69\x67\x6e\x48\x42\x67\x58\x4c\x7a\x63\x62\x48\x42\x4d\x71\x47\x44\x32\x66\x5a\x69\x63\x50\x49\x42\x67\x39\x4a\x41\x32\x76\x4b\x6b\x47',
        '\x42\x77\x66\x4e\x7a\x77\x35\x30\x79\x71',
        '\x71\x30\x66\x6d\x74\x61',
        '\x79\x78\x76\x30\x42\x33\x6a\x4c\x79\x77\x71',
        '\x43\x4d\x76\x48\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x32\x76\x5a',
        '\x75\x32\x39\x4a\x41\x32\x76\x30\x69\x67\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x50\x42\x32\x34\x47\x44\x67\x4c\x54\x7a\x77\x39\x31\x44\x61',
        '\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x4a\x7a\x67\x34\x55\x43\x67\x4c\x34\x79\x77\x6a\x48\x45\x73\x35\x4a\x42\x32\x30\x56\x43\x67\x48\x56\x44\x67\x38\x56\x6d\x4a\x61\x58\x6e\x73\x38\x58\x6d\x63\x38\x57\x6e\x73\x38\x59\x6d\x49\x38\x5a\x6e\x59\x39\x49\x42\x67\x66\x55\x41\x59\x31\x57\x43\x4d\x39\x4d\x41\x77\x58\x4c\x6c\x78\x62\x50\x79\x33\x72\x31\x43\x4d\x75\x54\x6f\x74\x43\x5a\x6e\x64\x79\x57\x78\x5a\x4b\x32\x6d\x66\x38\x33\x6d\x4a\x61\x55\x43\x67\x35\x4e',
        '\x42\x77\x39\x54\x7a\x77\x35\x30\x6c\x78\x72\x50\x42\x77\x76\x36\x42\x32\x35\x4c',
        '\x41\x78\x6e\x63\x44\x77\x7a\x4d\x7a\x78\x69',
        '\x41\x78\x72\x4c\x42\x74\x65\x55\x77\x63\x31\x62\x71\x4b\x58\x48\x79\x4d\x76\x53\x6f\x4c\x62\x56\x42\x4e\x6e\x4c\x42\x61\x4f',
        '\x43\x67\x66\x59\x43\x32\x75',
        '\x7a\x77\x35\x4b\x43\x31\x44\x50\x44\x67\x47',
        '\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x76\x72\x50\x42\x77\x76\x5a\x44\x67\x66\x54\x43\x61',
        '\x6c\x4d\x6a\x50\x42\x47',
        '\x43\x78\x76\x56\x44\x67\x76\x4b',
        '\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x78\x6d',
        '\x7a\x4d\x4c\x53\x44\x67\x76\x59',
        '\x44\x67\x39\x74\x44\x68\x6a\x50\x42\x4d\x43',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x79\x32\x39\x53\x42\x33\x69',
        '\x42\x67\x39\x4e',
        '\x41\x77\x35\x30\x7a\x78\x6a\x55\x79\x78\x72\x50\x42\x32\x35\x48\x42\x61',
        '\x43\x33\x72\x50\x79\x32\x54\x4c\x43\x47',
        '\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71',
        '\x6e\x4a\x69\x57\x6e\x74\x47\x57\x74\x4b\x35\x68\x79\x4b\x72\x34',
        '\x79\x78\x44\x4c\x43\x32\x39\x54\x7a\x73\x31\x57\x41\x67\x39\x55\x7a\x77\x35\x31\x42\x77\x6a\x4c\x43\x47',
        '\x73\x75\x35\x67\x74\x57',
        '\x44\x4d\x76\x59\x41\x77\x7a\x50\x7a\x77\x72\x6f\x79\x77\x31\x4c',
        '\x41\x4d\x39\x50\x42\x47',
        '\x44\x78\x6e\x4c\x43\x47',
        '\x7a\x33\x6a\x56\x44\x78\x61\x54\x43\x67\x66\x59\x44\x67\x4c\x4a\x41\x78\x62\x48\x42\x4e\x72\x5a\x6c\x4e\x76\x57\x7a\x67\x66\x30\x7a\x71',
        '\x43\x32\x39\x54\x7a\x71',
        '\x79\x4d\x66\x5a\x7a\x74\x79\x30',
        '\x69\x63\x4a\x49\x4e\x69\x75\x47\x76\x78\x61\x47\x44\x67\x38\x47\x7a\x67\x66\x30\x7a\x73\x4b',
        '\x77\x5a\x62\x44\x69\x65\x72\x50\x43\x32\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x4c\x7a\x63\x34\x47\x75\x4d\x76\x5a\x44\x67\x66\x59\x44\x67\x4c\x55\x7a\x59\x62\x49\x42\x33\x71\x55\x6c\x49\x34',
        '\x79\x32\x39\x54\x43\x67\x39\x5a\x41\x77\x35\x4e',
        '\x42\x77\x4c\x54\x7a\x78\x72\x35\x43\x67\x75',
        '\x7a\x32\x76\x30\x72\x4d\x4c\x53\x7a\x71',
        '\x6e\x4c\x7a\x49\x76\x78\x6e\x63\x73\x61',
        '\x7a\x67\x76\x4a\x42\x32\x72\x4c\x73\x4d\x4c\x4b',
        '\x7a\x67\x39\x33\x42\x4d\x58\x56\x79\x77\x72\x6e\x7a\x77\x72\x50\x79\x75\x31\x4c\x43\x33\x6e\x48\x7a\x32\x75',
        '\x71\x4d\x66\x4b\x69\x65\x31\x62\x71\x57',
        '\x6d\x74\x65\x30\x6d\x65\x66\x63\x75\x68\x44\x34\x75\x61',
        '\x79\x78\x6e\x74\x44\x67\x4c\x4a\x41\x32\x76\x59',
        '\x7a\x78\x48\x57\x43\x4d\x76\x5a\x43\x57',
        '\x44\x67\x39\x6d\x42\x32\x6e\x48\x42\x67\x76\x75\x41\x77\x31\x4c\x75\x33\x72\x59\x41\x77\x35\x4e',
        '\x77\x5a\x62\x44\x69\x65\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x4c\x7a\x63\x62\x30\x42\x5a\x4f\x47',
        '\x69\x67\x6e\x56\x42\x4e\x72\x48\x79\x33\x72\x5a',
        '\x6c\x49\x39\x53\x41\x77\x69\x56\x79\x78\x6a\x59\x7a\x4e\x76\x55\x79\x33\x72\x50\x42\x32\x34\x55\x41\x4e\x6d',
        '\x74\x77\x76\x5a\x43\x32\x66\x4e\x7a\x73\x62\x69\x79\x77\x35\x4b\x42\x67\x76\x59\x6f\x49\x61',
        '\x6c\x49\x39\x53\x41\x77\x69\x56\x7a\x67\x66\x30\x79\x77\x6a\x48\x43\x32\x75',
        '\x74\x30\x35\x6d\x73\x75\x35\x66',
        '\x7a\x4e\x6a\x56\x42\x75\x6a\x31\x7a\x4d\x7a\x4c\x43\x47',
        '\x7a\x4d\x4c\x53\x7a\x73\x31\x30\x45\x78\x62\x4c',
        '\x7a\x67\x66\x30\x79\x71',
        '\x43\x32\x76\x55\x7a\x66\x62\x59\x7a\x78\x6e\x4c\x42\x4d\x6e\x4c\x76\x78\x62\x4b\x79\x78\x72\x4c',
        '\x43\x67\x66\x59\x44\x67\x4c\x4a\x41\x78\x62\x48\x42\x4e\x72\x5a',
        '\x6c\x49\x39\x30\x42\x78\x61\x56\x7a\x67\x66\x30\x79\x71',
        '\x79\x32\x39\x55\x79\x32\x66\x30',
        '\x44\x4d\x6e\x48\x43\x4d\x71',
        '\x42\x67\x39\x4b\x79\x78\x6e\x4f',
        '\x69\x67\x48\x48\x43\x59\x62\x49\x7a\x77\x76\x55\x69\x68\x62\x59\x42\x32\x31\x56\x44\x67\x76\x4b\x69\x67\x6a\x35\x69\x65\x61',
        '\x43\x67\x4c\x55\x42\x57',
        '\x7a\x32\x76\x30\x74\x4d\x66\x54\x7a\x71',
        '\x43\x4d\x76\x54\x42\x33\x72\x4c\x73\x4d\x4c\x4b',
        '\x44\x33\x6a\x50\x44\x67\x75',
        '\x43\x33\x72\x4b\x7a\x78\x6a\x59',
        '\x41\x4e\x6e\x56\x42\x47',
        '\x43\x32\x76\x55\x7a\x65\x6e\x56\x42\x4e\x72\x48\x79\x33\x71',
        '\x7a\x78\x48\x30',
        '\x7a\x32\x76\x30\x74\x4e\x76\x54\x79\x4d\x76\x59',
        '\x44\x4d\x76\x59\x43\x32\x4c\x56\x42\x47',
        '\x7a\x32\x76\x30\x72\x67\x66\x30\x7a\x71',
        '\x76\x4d\x66\x53\x44\x77\x75\x47\x42\x4d\x39\x30\x69\x67\x7a\x56\x44\x77\x35\x4b',
        '\x72\x33\x6a\x56\x44\x78\x61\x47\x76\x78\x62\x4b\x79\x78\x72\x4c\x6f\x49\x61',
        '\x38\x6a\x2b\x51\x47\x63\x62\x62\x43\x4d\x6e\x4f\x69\x65\x31\x4b\x69\x67\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x4c\x7a\x63\x62\x5a\x44\x77\x6e\x4a\x7a\x78\x6e\x5a\x7a\x4e\x76\x53\x42\x68\x4b\x6b\x63\x4e\x62\x59\x7a\x77\x7a\x50\x45\x64\x4f\x47',
        '\x76\x77\x35\x4c\x45\x68\x62\x4c\x79\x33\x72\x4c\x7a\x63\x62\x4f\x79\x77\x35\x4b\x43\x32\x48\x48\x41\x32\x75\x47\x7a\x78\x6a\x59\x42\x33\x69',
        '\x44\x67\x76\x34\x44\x61',
        '\x6d\x4a\x47\x58\x6e\x64\x65\x34\x45\x4b\x44\x73\x75\x65\x35\x6c',
        '\x7a\x4d\x4c\x53\x7a\x77\x35\x48\x42\x77\x75',
        '\x69\x63\x4a\x49\x4d\x51\x64\x56\x55\x69\x38\x47\x76\x77\x35\x48\x79\x4d\x58\x4c\x69\x68\x72\x56\x69\x67\x6e\x4f\x7a\x77\x6e\x52\x69\x67\x7a\x56\x43\x49\x62\x31\x43\x67\x72\x48\x44\x67\x76\x5a\x6b\x71',
        '\x72\x30\x39\x70\x72\x65\x6a\x7a\x72\x71',
        '\x7a\x67\x76\x49\x44\x77\x43',
        '\x43\x4d\x76\x57\x42\x68\x4b',
        '\x79\x77\x58\x53\x42\x32\x6d',
        '\x43\x68\x6a\x56\x42\x77\x39\x30\x7a\x71',
        '\x71\x68\x44\x4f\x41\x78\x6e\x52\x7a\x78\x4c\x5a\x42\x32\x6e\x52\x7a\x78\x72\x5a\x6c\x32\x6a\x48\x41\x77\x58\x4c\x45\x78\x6d',
        '\x79\x33\x6a\x4c\x7a\x68\x6d\x55\x44\x78\x62\x4b\x79\x78\x72\x4c',
        '\x43\x33\x72\x4b\x42\x33\x76\x30',
        '\x7a\x4d\x39\x59\x72\x77\x66\x4a\x41\x61',
        '\x7a\x4d\x58\x56\x42\x33\x69',
        '\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x78\x6d\x55\x44\x78\x62\x5a\x7a\x78\x6a\x30',
        '\x6c\x33\x6a\x48\x44\x57',
        '\x38\x6a\x2b\x4e\x55\x73\x62\x64\x42\x67\x76\x48\x42\x4d\x76\x4b\x69\x61',
        '\x7a\x33\x6a\x56\x44\x78\x62\x6e\x7a\x78\x72\x48\x7a\x67\x66\x30\x79\x71',
        '\x7a\x67\x76\x54\x42\x33\x72\x4c',
        '\x43\x78\x76\x4c\x43\x33\x72\x50\x42\x32\x34',
        '\x71\x67\x6e\x56\x42\x67\x39\x59\x43\x59\x39\x4a\x42\x32\x58\x56\x43\x4e\x6d\x56\x43\x32\x66\x4d\x7a\x71',
        '\x77\x5a\x62\x44\x69\x65\x4c\x55\x43\x33\x72\x48\x42\x67\x58\x50\x42\x4d\x43\x47\x43\x67\x58\x31\x7a\x32\x4c\x55\x43\x59\x34\x55\x6c\x47',
        '\x43\x32\x76\x30\x44\x67\x4c\x55\x7a\x33\x6d',
        '\x63\x47\x50\x69\x7a\x77\x58\x53\x42\x59\x65\x47\x38\x6a\x2b\x72\x49\x59\x62\x6a\x6a\x32\x30\x47\x71\x78\x6a\x4a\x41\x63\x62\x6e\x7a\x63\x57\x47\x45\x77\x39\x31\x43\x49\x62\x78\x41\x67\x66\x30\x43\x30\x66\x57\x43\x63\x62\x49\x42\x33\x71\x55\x69\x65\x48\x4c\x43\x4d\x75\x4e\x43\x59\x62\x4f\x42\x33\x43\x47\x44\x67\x38\x47\x44\x78\x6e\x4c\x69\x67\x31\x4c\x6f\x47\x4f\x6b\x34\x4f\x63\x49\x69\x63\x50\x76\x43\x32\x66\x4e\x7a\x74\x4f\x51\x69\x61',
        '\x79\x78\x62\x57\x42\x67\x4c\x4a\x79\x78\x72\x50\x42\x32\x34',
        '\x41\x77\x31\x48\x7a\x32\x75',
        '\x79\x78\x6a\x4e\x44\x47',
        '\x42\x4d\x39\x30\x6c\x77\x66\x31\x44\x67\x48\x56\x43\x4d\x4c\x36\x7a\x77\x71',
        '\x6c\x49\x39\x30\x42\x78\x61\x56\x43\x33\x72\x56\x43\x4d\x75',
        '\x6c\x49\x39\x57\x79\x77\x6e\x52\x79\x77\x44\x4c\x6c\x4d\x50\x5a\x42\x32\x34',
        '\x7a\x78\x7a\x4c\x42\x4e\x72\x5a',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x56\x43\x67\x76\x55\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34\x47\x41\x77\x34\x47\x7a\x4d\x66\x32\x42\x33\x69\x47\x42\x32\x79\x47\x41\x77\x35\x4a\x42\x32\x31\x50\x42\x4d\x43\x47\x43\x68\x6a\x4c\x41\x32\x76\x35\x69\x67\x6a\x31\x42\x4d\x72\x53\x7a\x71',
        '\x42\x77\x54\x4b\x41\x78\x6a\x74\x45\x77\x35\x4a',
        '\x41\x67\x76\x53\x43\x63\x62\x53\x41\x78\x6e\x30\x6b\x47\x4f\x6b\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x76\x4b\x69\x67\x35\x56\x44\x63\x62\x59\x7a\x78\x6e\x57\x42\x32\x35\x4b\x41\x77\x35\x4e\x70\x59\x64\x57\x4e\x36\x73\x4d\x69\x67\x58\x4c\x44\x63\x62\x54\x7a\x73\x62\x4f\x7a\x77\x58\x57\x69\x63\x34\x55\x6c\x47\x4f\x6b\x34\x4f\x63\x49\x69\x65\x44\x4c\x44\x63\x62\x48\x69\x67\x35\x4c\x44\x59\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55\x69\x67\x7a\x59\x42\x32\x30\x47',
        '\x42\x68\x6e\x30\x79\x78\x72\x74\x45\x77\x35\x4a',
        '\x43\x4d\x66\x55\x7a\x67\x39\x54',
        '\x43\x4d\x76\x54\x42\x33\x7a\x4c\x71\x77\x58\x53\x74\x67\x4c\x5a\x44\x67\x76\x55\x7a\x78\x6a\x5a',
        '\x43\x4d\x76\x48\x7a\x67\x72\x50\x43\x4c\x6e\x35\x42\x4d\x6d',
        '\x41\x77\x35\x4a\x42\x68\x76\x4b\x7a\x78\x6d',
        '\x41\x67\x76\x53\x43\x63\x61\x38\x79\x32\x39\x54\x42\x77\x66\x55\x7a\x66\x39\x55\x79\x77\x31\x4c\x70\x47\x4f\x6b\x72\x78\x48\x48\x42\x78\x62\x53\x7a\x74\x4f\x6b\x34\x4f\x63\x49\x69\x65\x58\x50\x43\x33\x71\x47\x79\x77\x58\x53\x69\x67\x6e\x56\x42\x77\x31\x48\x42\x4d\x72\x5a\x6f\x49\x61\x51',
        '\x42\x67\x4c\x5a\x44\x61\x52\x49\x47\x6b\x69\x47\x6b\x4b\x48\x4c\x42\x68\x61\x36\x6b\x49\x61',
        '\x79\x78\x48\x50\x42\x33\x6d',
        '\x44\x67\x4c\x54\x7a\x78\x50\x56\x42\x4d\x75',
        '\x7a\x67\x4c\x5a\x43\x67\x58\x48\x45\x75\x35\x48\x42\x77\x75',
        '\x38\x6a\x2b\x72\x49\x59\x62\x69\x7a\x77\x58\x53\x42\x59\x62\x61\x44\x78\x6e\x4c\x43\x49\x57\x47\x44\x32\x76\x53\x79\x32\x39\x54\x7a\x73\x62\x30\x42\x59\x61\x51\x71\x67\x44\x59\x42\x33\x76\x57\x6b\x47\x4f\x6b\x71\x67\x72\x4c\x43\x32\x6d\x6b\x38\x6a\x2b\x74\x48\x73\x62\x61\x7a\x67\x66\x30\x7a\x73\x62\x61\x44\x67\x4c\x54\x7a\x71',
        '\x42\x67\x76\x55\x7a\x33\x72\x4f',
        '\x43\x4d\x76\x4b',
        '\x43\x32\x76\x55\x7a\x65\x31\x4c\x7a\x67\x4c\x48',
        '\x6c\x49\x39\x30\x42\x78\x61\x56',
        '\x69\x67\x6e\x48\x42\x67\x58\x4c\x7a\x63\x62\x48\x42\x4d\x71\x47\x44\x67\x48\x4c\x69\x67\x6e\x48\x42\x67\x57\x47\x44\x32\x66\x5a\x69\x63\x50\x59\x7a\x77\x50\x4c\x79\x33\x72\x4c\x7a\x63\x4f',
        '\x7a\x67\x39\x33\x42\x4d\x58\x56\x79\x77\x72\x62\x42\x4d\x72\x74\x79\x78\x7a\x4c\x74\x77\x76\x4b\x41\x77\x66\x6e\x7a\x78\x6e\x5a\x79\x77\x44\x4c',
        '\x72\x65\x66\x75\x71\x75\x6a\x62\x75\x30\x76\x46\x76\x76\x6a\x6d',
        '\x42\x67\x4c\x5a\x44\x63\x4f\x6b\x34\x4f\x63\x49\x69\x65\x44\x4c\x44\x63\x62\x4f\x7a\x77\x58\x57\x69\x67\x66\x49\x42\x33\x76\x30\x69\x67\x65\x47\x79\x32\x39\x54\x42\x77\x66\x55\x7a\x64\x4f\x47\x6b\x47',
        '\x43\x4d\x76\x57\x42\x67\x66\x4a\x7a\x71',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x5a\x44\x67\x66\x53\x7a\x73\x62\x56\x43\x67\x76\x55\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34',
        '\x76\x4d\x76\x59\x43\x32\x4c\x56\x42\x4a\x4f\x47\x44\x47',
        '\x71\x4b\x76\x68\x73\x75\x34\x36\x76\x4b\x6e\x62\x75\x4b\x71\x6b',
        '\x41\x32\x76\x35',
        '\x79\x78\x6e\x6a\x42\x77\x66\x4e\x7a\x71',
        '\x42\x32\x7a\x4d',
        '\x41\x77\x35\x57\x44\x78\x71',
        '\x71\x32\x66\x53\x42\x63\x62\x69\x79\x77\x35\x4b\x42\x67\x76\x59\x6f\x49\x61',
        '\x43\x33\x72\x4b\x76\x66\x72\x6d',
        '\x44\x32\x76\x53\x79\x32\x39\x54\x7a\x71',
        '\x79\x78\x7a\x48\x41\x77\x58\x48\x79\x4d\x58\x4c',
        '\x75\x31\x72\x62\x76\x66\x76\x74\x78\x30\x76\x6e\x74\x30\x50\x6a',
        '\x43\x32\x76\x55\x7a\x66\x7a\x50\x7a\x67\x76\x56\x71\x78\x6e\x74\x44\x67\x4c\x4a\x41\x32\x76\x59',
        '\x43\x32\x58\x50\x79\x32\x75',
        '\x43\x32\x76\x5a\x43\x32\x4c\x56\x42\x47',
        '\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x56\x42\x49\x35\x31\x43\x67\x72\x48\x44\x67\x75',
        '\x79\x4d\x58\x56\x79\x32\x53',
        '\x38\x6a\x2b\x72\x49\x59\x62\x61\x44\x78\x6e\x4c\x43\x49\x62\x53\x7a\x77\x7a\x30\x69\x63\x50\x61\x7a\x33\x6a\x56\x44\x78\x61\x51',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x42\x78\x4c\x4d\x44\x77\x35\x4a',
        '\x79\x4d\x4c\x55\x7a\x61',
        '\x79\x78\x76\x30\x41\x67\x39\x59',
        '\x73\x65\x47\x36\x42\x77\x30\x36\x43\x33\x6d',
        '\x7a\x77\x34\x54\x72\x30\x69',
        '\x7a\x77\x35\x32',
        '\x44\x77\x35\x48\x44\x4d\x66\x50\x42\x67\x66\x49\x42\x67\x75',
        '\x42\x32\x7a\x4d\x7a\x78\x69',
        '\x43\x68\x6a\x4c\x7a\x4d\x4c\x34',
        '\x42\x77\x4c\x54\x7a\x71',
        '\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x4e\x41\x78\x6e\x30\x6c\x4d\x44\x50\x44\x67\x48\x31\x79\x4e\x76\x5a\x7a\x78\x6a\x4a\x42\x32\x35\x30\x7a\x77\x35\x30\x6c\x4d\x6e\x56\x42\x73\x39\x4c\x7a\x67\x35\x31\x44\x64\x61\x57\x6d\x73\x38',
        '\x74\x31\x6a\x68\x6f\x4d\x35\x31\x42\x67\x57\x6b',
        '\x79\x32\x66\x57\x44\x67\x4c\x56\x42\x47',
        '\x44\x4d\x4c\x4b\x7a\x77\x38',
        '\x6d\x65\x62\x5a\x6c\x4e\x44\x4f\x79\x78\x72\x5a\x79\x78\x62\x57\x6c\x4d\x35\x4c\x44\x61',
        '\x72\x76\x6a\x73\x74\x31\x69',
        '\x43\x68\x76\x5a\x41\x61',
        '\x6e\x65\x58\x6d\x42\x32\x72\x52\x41\x71',
        '\x44\x33\x6a\x50\x44\x67\x76\x67\x41\x77\x58\x4c\x75\x33\x4c\x55\x79\x57',
        '\x6c\x49\x39\x57\x42\x68\x76\x4e\x41\x77\x35\x5a\x6c\x32\x76\x4b\x42\x4e\x76\x30',
        '\x79\x77\x35\x30\x41\x77\x6e\x48\x42\x67\x57',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x56\x43\x67\x76\x55\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34',
        '\x75\x65\x39\x73\x76\x61',
        '\x6d\x4a\x61\x55\x6d\x63\x34\x57\x6e\x61',
        '\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x32\x75',
        '\x43\x4d\x76\x48\x7a\x68\x6e\x33',
        '\x44\x67\x39\x6d\x42\x33\x44\x4c\x43\x4b\x6e\x48\x43\x32\x75',
        '\x6e\x5a\x43\x33\x6f\x74\x66\x56\x76\x4e\x4c\x67\x41\x30\x30',
        '\x7a\x4d\x4c\x53\x7a\x71',
        '\x72\x75\x35\x65\x6f\x4c\x7a\x64\x71\x76\x6a\x65',
        '\x76\x4b\x76\x73\x75\x30\x4c\x70\x74\x4a\x4f\x5a\x6c\x4a\x61\x6b',
        '\x43\x32\x76\x55\x7a\x61',
        '\x6d\x4a\x79\x5a\x6d\x5a\x79\x34\x43\x65\x6a\x74\x77\x68\x7a\x57',
        '\x43\x33\x62\x53\x41\x78\x71',
        '\x76\x30\x76\x6d\x71\x30\x39\x6e\x72\x76\x39\x6e\x75\x30\x43',
        '\x43\x4d\x76\x48\x7a\x65\x7a\x50\x42\x67\x76\x74\x45\x77\x35\x4a',
        '\x41\x78\x72\x4c\x42\x74\x65\x55\x76\x65\x76\x6d\x6f\x33\x44\x48\x41\x77\x71\x39',
        '\x79\x32\x58\x56\x43\x32\x75',
        '\x72\x65\x71\x56\x74\x75\x30\x56\x77\x76\x4c\x7a\x77\x71',
        '\x41\x78\x6e\x65\x41\x78\x6a\x4c\x79\x33\x72\x56\x43\x4e\x4b',
        '\x44\x67\x76\x5a\x44\x61',
        '\x76\x32\x48\x48\x44\x68\x6e\x62\x43\x68\x61',
        '\x43\x4d\x76\x54\x42\x33\x7a\x4c',
        '\x69\x67\x66\x32\x79\x77\x4c\x53\x79\x77\x6a\x53\x7a\x73\x4b',
        '\x72\x67\x76\x32\x7a\x77\x58\x56\x43\x67\x76\x59\x69\x65\x6a\x56\x44\x61',
        '\x6e\x64\x65\x30\x6e\x74\x7a\x48\x44\x65\x66\x6c\x41\x30\x75',
        '\x7a\x4e\x6a\x56\x42\x71',
        '\x43\x32\x6e\x48\x42\x47',
        '\x77\x63\x31\x78\x71\x73\x31\x63\x73\x76\x4f\x54\x74\x4b\x66\x6e\x72\x74\x4f',
        '\x79\x33\x4c\x48\x42\x47',
        '\x7a\x78\x6a\x59\x42\x33\x69',
        '\x42\x4d\x39\x4b\x7a\x73\x31\x4a\x79\x77\x6e\x4f\x7a\x71',
        '\x71\x68\x6d\x55\x44\x32\x48\x48\x44\x68\x6e\x48\x43\x68\x61\x55\x42\x4d\x76\x30',
        '\x43\x67\x66\x30\x41\x61',
        '\x71\x77\x7a\x59\x41\x77\x6e\x48\x6c\x30\x58\x48\x7a\x32\x39\x5a',
        '\x42\x33\x76\x30\x43\x68\x76\x30',
        '\x6e\x4a\x61\x30\x6d\x5a\x79\x57\x72\x32\x31\x71\x76\x77\x54\x74',
        '\x7a\x4d\x39\x59\x42\x77\x66\x30',
        '\x42\x78\x72\x35\x43\x67\x75',
        '\x43\x33\x72\x48\x79\x32\x53',
        '\x7a\x67\x76\x4d\x79\x78\x76\x53\x44\x65\x31\x48\x45\x65\x58\x50\x43\x33\x72\x4c\x42\x4d\x76\x59\x43\x57',
        '\x71\x32\x48\x59\x42\x32\x31\x4c',
        '\x7a\x33\x6a\x56\x44\x78\x62\x5a',
        '\x43\x32\x76\x55\x7a\x65\x7a\x50\x42\x67\x75',
        '\x43\x4d\x76\x4a\x42\x33\x6a\x4b\x41\x77\x35\x4e',
        '\x72\x65\x69\x47\x75\x32\x66\x32\x7a\x74\x4f\x47',
        '\x42\x67\x4c\x5a\x44\x67\x76\x55',
        '\x43\x32\x76\x30\x44\x32\x76\x53\x79\x32\x39\x54\x7a\x71',
        '\x43\x32\x76\x55\x7a\x65\x4c\x54\x79\x77\x44\x4c\x71\x78\x6e\x74\x44\x67\x4c\x4a\x41\x32\x76\x59',
        '\x43\x67\x66\x4a\x41\x32\x35\x48\x42\x77\x75',
        '\x69\x67\x48\x48\x43\x59\x62\x49\x7a\x77\x76\x55\x69\x67\x72\x4c\x42\x77\x39\x30\x7a\x77\x71\x47\x79\x4e\x4b\x47\x71\x61',
        '\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x48\x43\x67\x4b\x55\x7a\x32\x4c\x30\x41\x68\x76\x49\x6c\x4d\x6e\x56\x42\x73\x39\x59\x7a\x78\x62\x56\x43\x59\x39\x66\x7a\x67\x35\x31\x44\x64\x61\x57\x6d\x73\x39\x62\x43\x4d\x6e\x4f\x6c\x77\x31\x4b\x6c\x33\x6a\x4c\x42\x67\x76\x48\x43\x32\x76\x5a\x6c\x32\x58\x48\x44\x67\x76\x5a\x44\x61',
        '\x43\x33\x72\x4b\x41\x77\x34',
        '\x75\x32\x76\x5a\x43\x32\x4c\x56\x42\x49\x62\x6a\x72\x63\x62\x55\x42\x33\x71\x47\x7a\x4d\x39\x31\x42\x4d\x71\x55\x69\x66\x62\x53\x7a\x77\x66\x5a\x7a\x73\x62\x48\x7a\x67\x71\x47\x42\x32\x35\x4c\x69\x67\x4c\x55\x69\x67\x6e\x56\x42\x4d\x7a\x50\x7a\x59\x35\x51\x43\x57',
        '\x6c\x33\x72\x54\x43\x63\x39\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55\x6c\x32\x6e\x59\x7a\x77\x72\x5a\x6c\x4d\x50\x5a\x42\x32\x34',
        '\x42\x77\x66\x57',
        '\x79\x78\x62\x57\x42\x67\x4c\x4a\x79\x78\x72\x50\x42\x32\x34\x56\x42\x32\x6e\x30\x7a\x78\x71\x54\x43\x33\x72\x59\x7a\x77\x66\x54',
        '\x44\x68\x6a\x31\x7a\x71',
        '\x73\x77\x35\x32\x79\x77\x58\x50\x7a\x63\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55\x69\x65\x4c\x65\x6c\x49\x62\x71\x42\x67\x76\x48\x43\x32\x75\x47\x43\x32\x6e\x48\x42\x49\x62\x48\x69\x67\x35\x4c\x44\x59\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55\x69\x67\x7a\x59\x42\x32\x30\x47',
        '\x7a\x32\x39\x56\x7a\x67\x6a\x35\x7a\x71',
        '\x43\x68\x76\x59\x43\x67\x58\x4c',
        '\x42\x77\x76\x54\x42\x33\x6a\x35\x74\x32\x35\x53\x45\x71',
        '\x43\x33\x72\x48\x44\x68\x76\x5a',
        '\x42\x4d\x66\x54\x7a\x71',
        '\x43\x67\x66\x4b\x75\x33\x72\x48\x43\x4e\x71',
        '\x79\x78\x62\x57\x42\x68\x4b',
        '\x43\x4d\x76\x51\x7a\x77\x6e\x30',
        '\x6d\x74\x43\x35\x6e\x64\x7a\x54\x74\x4e\x6e\x72\x7a\x33\x69',
        '\x42\x77\x66\x34\x74\x77\x76\x5a\x43\x32\x66\x4e\x7a\x78\x6e\x71\x7a\x78\x6a\x64\x41\x67\x66\x30',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x5a\x44\x67\x66\x53\x7a\x73\x62\x56\x43\x67\x76\x55\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34\x47\x7a\x4d\x39\x59\x69\x67\x35\x4c\x44\x59\x62\x56\x44\x78\x72\x4e\x42\x32\x4c\x55\x7a\x59\x62\x57\x43\x4d\x76\x52\x7a\x78\x4b\x47\x79\x4e\x76\x55\x7a\x67\x58\x4c',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x7a\x4e\x76\x55\x79\x33\x72\x50\x42\x32\x34\x55\x41\x4e\x6d',
        '\x72\x30\x39\x70\x72\x65\x6a\x7a\x72\x76\x39\x6e\x75\x30\x43',
        '\x7a\x78\x48\x50\x44\x66\x62\x59\x42\x32\x6e\x4c\x43\x33\x6d',
        '\x79\x32\x39\x55\x44\x67\x66\x4a\x44\x68\x6d',
        '\x7a\x67\x76\x5a\x79\x57',
        '\x79\x32\x48\x48\x44\x68\x6d',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55',
        '\x44\x77\x35\x53\x41\x77\x35\x52\x75\x33\x4c\x55\x79\x57',
        '\x45\x77\x66\x59\x7a\x33\x6d\x56\x45\x77\x66\x59\x7a\x33\x6d',
        '\x7a\x67\x39\x4a\x44\x77\x31\x4c\x42\x4e\x71',
        '\x44\x78\x6a\x53',
        '\x44\x67\x66\x4e\x78\x32\x35\x48\x42\x77\x75',
        '\x79\x77\x6e\x30\x41\x77\x39\x55',
        '\x77\x5a\x62\x44\x69\x65\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x50\x42\x4d\x43\x47\x44\x67\x38\x47\x76\x32\x48\x48\x44\x68\x6e\x62\x43\x68\x61\x55\x6c\x49\x34',
        '\x79\x32\x66\x53\x42\x61',
        '\x79\x78\x76\x30\x42\x33\x72\x35\x43\x67\x4c\x55\x7a\x57',
        '\x42\x33\x62\x30\x43\x57',
        '\x75\x32\x76\x5a\x43\x32\x4c\x56\x42\x4b\x6e\x50\x43\x67\x48\x4c\x43\x49\x35\x4b\x42\x30\x72\x4c\x79\x33\x6a\x35\x43\x68\x72\x78\x41\x67\x4c\x5a\x43\x67\x76\x59\x74\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71',
        '\x7a\x77\x72\x55\x44\x78\x71',
        '\x43\x32\x76\x59\x41\x77\x66\x53\x41\x78\x50\x4c\x74\x71',
        '\x43\x4d\x76\x4a\x42\x32\x35\x55\x7a\x77\x6e\x30',
        '\x74\x4a\x4f\x37',
        '\x79\x4d\x58\x31\x7a\x71',
        '\x44\x33\x6a\x50\x44\x67\x76\x67\x41\x77\x58\x4c',
        '\x7a\x78\x48\x50\x43\x33\x72\x5a\x75\x33\x4c\x55\x79\x57',
        '\x43\x32\x4c\x53\x7a\x77\x35\x30',
        '\x42\x67\x66\x5a\x44\x61',
        '\x76\x67\x4c\x54\x7a\x77\x71\x47\x74\x33\x76\x30',
        '\x79\x33\x6a\x4c\x79\x78\x72\x4c\x73\x77\x35\x30\x7a\x78\x6a\x4d\x79\x77\x6e\x4c',
        '\x6c\x49\x39\x4a\x42\x32\x35\x4d\x41\x77\x43\x55\x41\x4e\x6d',
        '\x77\x5a\x62\x44\x69\x65\x7a\x48\x41\x77\x58\x4c\x7a\x63\x62\x30\x42\x59\x62\x53\x42\x32\x66\x4b\x69\x68\x62\x53\x44\x77\x44\x50\x42\x49\x61',
        '\x76\x77\x6a\x31\x42\x4e\x72\x31',
        '\x42\x77\x76\x55\x44\x67\x4c\x56\x42\x4e\x6d',
        '\x43\x4d\x76\x48\x7a\x67\x58\x50\x42\x4d\x75',
        '\x44\x68\x6a\x50\x42\x71',
        '\x71\x68\x62\x57',
        '\x43\x33\x76\x49\x41\x4d\x76\x4a\x44\x61'
    ];
    _0x5d47 = function () {
        return _0x35d2f6;
    };
    return _0x5d47();
}
app['\x67\x65\x74']('\x2f', (_0x561088, _0x17d513) => _0x17d513[_0x4e96c2(0x1dd)]('\x42\x6f\x74\x20\x69\x73\x20\x72\x75\x6e\x6e\x69\x6e\x67\x21'));
app[_0x4e96c2(0x200)](port);