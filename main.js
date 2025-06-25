/*
 * Base By Ednut
 * Created On 11/10/2024
 * Contact Me on wa.me/2348102487241
*/

// 🧼 Ultimate Noise Suppressor — FULL log silence for session/decrypt junk

const _0x4312a0 = _0x2e9c;
(function (_0x168985, _0x15f1e9) {
    const _0x4c56e2 = _0x2e9c;
    const _0x5481b7 = _0x168985();
    while (!![]) {
        try {
            const _0x5b2f83 = parseInt(_0x4c56e2(0x14e)) / 0x1 + parseInt(_0x4c56e2(0x1e8)) / 0x2 * (parseInt(_0x4c56e2(0x1a4)) / 0x3) + parseInt(_0x4c56e2(0x18d)) / 0x4 * (parseInt(_0x4c56e2(0x107)) / 0x5) + -parseInt(_0x4c56e2(0xf1)) / 0x6 + parseInt(_0x4c56e2(0xe6)) / 0x7 + -parseInt(_0x4c56e2(0x126)) / 0x8 * (-parseInt(_0x4c56e2(0xec)) / 0x9) + -parseInt(_0x4c56e2(0x1ee)) / 0xa;
            if (_0x5b2f83 === _0x15f1e9) {
                break;
            } else {
                _0x5481b7['push'](_0x5481b7['shift']());
            }
        } catch (_0x35b6c9) {
            _0x5481b7['push'](_0x5481b7['shift']());
        }
    }
}(_0xc11d, 0xc9f3b));
const originalLog = console[_0x4312a0(0x17d)];
const originalError = console[_0x4312a0(0x1bb)];
const originalDebug = console[_0x4312a0(0x13c)];
const originalStdout = process['\x73\x74\x64\x6f\x75\x74'][_0x4312a0(0xed)];
const originalStderr = process['\x73\x74\x64\x65\x72\x72'][_0x4312a0(0xed)];
function isNoisy(_0x11e3e9) {
    const _0x1fb11a = _0x4312a0;
    return typeof _0x11e3e9 === _0x1fb11a(0x1e3) && (_0x11e3e9[_0x1fb11a(0x1d4)](_0x1fb11a(0x143)) || _0x11e3e9[_0x1fb11a(0x1d4)]('\x43\x6c\x6f\x73\x69\x6e\x67\x20\x6f\x70\x65\x6e\x20\x73\x65\x73\x73\x69\x6f\x6e') || _0x11e3e9[_0x1fb11a(0x1d4)]('\x43\x6c\x6f\x73\x69\x6e\x67\x20\x73\x74\x61\x6c\x65\x20\x6f\x70\x65\x6e\x20\x73\x65\x73\x73\x69\x6f\x6e') || _0x11e3e9['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x1fb11a(0x1da)) || _0x11e3e9['\x69\x6e\x63\x6c\x75\x64\x65\x73']('\x44\x65\x63\x72\x79\x70\x74\x65\x64\x20\x6d\x65\x73\x73\x61\x67\x65\x20\x77\x69\x74\x68\x20\x63\x6c\x6f\x73\x65\x64\x20\x73\x65\x73\x73\x69\x6f\x6e\x2e') || _0x11e3e9[_0x1fb11a(0x1d4)]('\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x64\x65\x63\x72\x79\x70\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x20\x77\x69\x74\x68\x20\x61\x6e\x79\x20\x6b\x6e\x6f\x77\x6e\x20\x73\x65\x73\x73\x69\x6f\x6e'));
}
console[_0x4312a0(0x17d)] = (..._0x1de537) => {
    if (isNoisy(_0x1de537[0x0]))
        return;
    originalLog['\x61\x70\x70\x6c\x79'](console, _0x1de537);
};
console['\x65\x72\x72\x6f\x72'] = (..._0x4cae32) => {
    const _0x2bd482 = _0x4312a0;
    if (isNoisy(_0x4cae32[0x0]))
        return;
    originalError[_0x2bd482(0x1ec)](console, _0x4cae32);
};
console[_0x4312a0(0x13c)] = (..._0x513285) => {
    if (isNoisy(_0x513285[0x0]))
        return;
    originalDebug['\x61\x70\x70\x6c\x79'](console, _0x513285);
};
process[_0x4312a0(0x1a9)][_0x4312a0(0xed)] = (_0x3e36ba, _0x3588c1, _0x52880d) => {
    const _0xf756e9 = _0x4312a0;
    if (isNoisy(_0x3e36ba))
        return !![];
    return originalStdout[_0xf756e9(0x1cf)](process[_0xf756e9(0x1a9)], _0x3e36ba, _0x3588c1, _0x52880d);
};
process[_0x4312a0(0x10d)]['\x77\x72\x69\x74\x65'] = (_0xd8c73f, _0x245ca5, _0x1af2f1) => {
    const _0x59a28f = _0x4312a0;
    if (isNoisy(_0xd8c73f))
        return !![];
    return originalStderr[_0x59a28f(0x1cf)](process[_0x59a28f(0x10d)], _0xd8c73f, _0x245ca5, _0x1af2f1);
};
require(_0x4312a0(0x116));
const chalk = require(_0x4312a0(0x13e));
global[_0x4312a0(0x17d)] = function (_0x4ffe2d, _0x3d7b8f) {
    const _0x1d267b = _0x4312a0;
    const _0x21d08e = new Date();
    const _0x4cd958 = _0x21d08e[_0x1d267b(0x14c)]()[_0x1d267b(0x1b7)]()['\x70\x61\x64\x53\x74\x61\x72\x74'](0x2, '\x30');
    const _0x3bce42 = (_0x21d08e['\x67\x65\x74\x4d\x6f\x6e\x74\x68']() + 0x1)[_0x1d267b(0x1b7)]()[_0x1d267b(0x18f)](0x2, '\x30');
    const _0x361023 = _0x21d08e[_0x1d267b(0x127)]()['\x74\x6f\x53\x74\x72\x69\x6e\x67']()[_0x1d267b(0x19a)](-0x2);
    const _0x253458 = _0x21d08e[_0x1d267b(0x104)](_0x1d267b(0x198)) + ('\x20' + _0x4cd958 + '\x2d' + _0x3bce42 + '\x2d' + _0x361023);
    const _0x2dee03 = _0x4ffe2d['\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65']();
    const _0x21cd13 = _0x2dee03 === '\x49\x4e\x46\x4f' ? chalk[_0x1d267b(0x139)](_0x2dee03) : _0x2dee03 === _0x1d267b(0x191) ? chalk[_0x1d267b(0x180)](_0x2dee03) : _0x2dee03;
    console[_0x1d267b(0x17d)](_0x21cd13 + '\x20\x5b' + _0x253458 + '\x5d\x3a', chalk[_0x1d267b(0x148)](_0x3d7b8f));
};
require(_0x4312a0(0x150))[_0x4312a0(0x1b1)][_0x4312a0(0xf6)] = 0x1388;
const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    makeInMemoryStore,
    jidDecode,
    downloadContentFromMessage,
    delay
} = require(_0x4312a0(0x13f));
const pino = require(_0x4312a0(0x1d7));
const {delArrSave} = require(_0x4312a0(0x132));
const fs = require('\x66\x73');
const path = require(_0x4312a0(0x173));
const {Boom} = require(_0x4312a0(0x140));
const yargs = require(_0x4312a0(0x14b));
const _ = require(_0x4312a0(0x13d));
const colors = require(_0x4312a0(0xfc));
const NodeCache = require(_0x4312a0(0xe9));
const moment = require('\x6d\x6f\x6d\x65\x6e\x74\x2d\x74\x69\x6d\x65\x7a\x6f\x6e\x65');
const PhoneNumber = require('\x61\x77\x65\x73\x6f\x6d\x65\x2d\x70\x68\x6f\x6e\x65\x6e\x75\x6d\x62\x65\x72');
const FileType = require(_0x4312a0(0x177));
const readline = require('\x72\x65\x61\x64\x6c\x69\x6e\x65');
const {smsg, imageToWebp, videoToWebp, sleep, writeExif, toPTT, toAudio, toVideo, getBuffer, getSizeMedia} = require(_0x4312a0(0x145));
const {getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture} = require(_0x4312a0(0x178));
function _0xc11d() {
    const _0x3e87bf = [
        '\x44\x33\x6a\x50\x44\x67\x76\x67\x41\x77\x58\x4c\x75\x33\x4c\x55\x79\x57',
        '\x43\x33\x72\x50\x79\x32\x54\x4c\x43\x47',
        '\x79\x32\x66\x57\x44\x67\x4c\x56\x42\x47',
        '\x42\x33\x76\x30\x43\x68\x76\x30',
        '\x44\x32\x4c\x30\x41\x67\x39\x31\x44\x65\x6e\x56\x42\x4e\x72\x48\x79\x33\x71',
        '\x73\x67\x76\x53\x42\x67\x38\x47\x71\x68\x76\x5a\x7a\x78\x69\x47\x44\x32\x76\x53\x79\x32\x39\x54\x7a\x73\x62\x30\x42\x59\x62\x61\x7a\x33\x6a\x56\x44\x78\x61\x6b\x71\x67\x72\x4c\x43\x32\x6d',
        '\x43\x32\x76\x30\x43\x33\x76\x4b\x42\x57',
        '\x42\x32\x7a\x4d\x7a\x78\x69',
        '\x43\x32\x39\x54\x7a\x71',
        '\x44\x78\x6e\x4c\x43\x4b\x4c\x4b',
        '\x6e\x64\x79\x31\x6d\x4a\x61\x34\x6f\x66\x6a\x65\x75\x76\x48\x53\x73\x57',
        '\x44\x32\x76\x53\x79\x32\x39\x54\x7a\x71',
        '\x43\x32\x6e\x48\x42\x47',
        '\x42\x4d\x39\x4b\x7a\x73\x31\x4a\x79\x77\x6e\x4f\x7a\x71',
        '\x7a\x77\x35\x32',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x79\x32\x39\x53\x42\x33\x69',
        '\x6d\x74\x6d\x58\x6e\x4a\x65\x30\x6e\x64\x44\x5a\x43\x75\x4c\x75\x43\x4d\x38',
        '\x44\x33\x6a\x50\x44\x67\x75',
        '\x7a\x4d\x58\x56\x42\x33\x69',
        '\x44\x77\x35\x4a\x79\x78\x76\x4e\x41\x68\x72\x66\x45\x67\x6e\x4c\x43\x68\x72\x50\x42\x32\x34',
        '\x79\x32\x39\x54\x43\x67\x39\x5a\x41\x77\x35\x4e',
        '\x6e\x4a\x69\x57\x6d\x64\x79\x58\x6e\x4d\x6e\x56\x71\x32\x50\x48\x42\x71',
        '\x73\x77\x35\x32\x79\x77\x58\x50\x7a\x63\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55\x69\x65\x4c\x65\x6c\x49\x62\x71\x42\x67\x76\x48\x43\x32\x75\x47\x43\x32\x6e\x48\x42\x49\x62\x48\x69\x67\x35\x4c\x44\x59\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55\x69\x67\x7a\x59\x42\x32\x30\x47',
        '\x6c\x4d\x50\x5a',
        '\x77\x63\x31\x78\x71\x73\x31\x63\x73\x76\x4f\x54\x72\x65\x76\x74\x71\x31\x6a\x6a\x75\x66\x72\x6a\x74\x30\x34\x36',
        '\x44\x4d\x4c\x4b\x7a\x77\x38',
        '\x7a\x67\x76\x4d\x79\x78\x76\x53\x44\x65\x31\x48\x45\x65\x58\x50\x43\x33\x72\x4c\x42\x4d\x76\x59\x43\x57',
        '\x77\x5a\x62\x44\x69\x65\x4c\x55\x43\x33\x72\x48\x42\x67\x58\x50\x42\x4d\x43\x47\x43\x67\x58\x31\x7a\x32\x4c\x55\x43\x59\x34\x55\x6c\x47',
        '\x44\x67\x76\x34\x44\x61',
        '\x43\x32\x76\x55\x7a\x65\x31\x4c\x7a\x67\x4c\x48',
        '\x7a\x33\x6a\x56\x44\x78\x62\x5a',
        '\x76\x32\x76\x53\x79\x32\x39\x54\x7a\x73\x39\x68\x42\x32\x39\x4b\x79\x4e\x4c\x4c\x69\x65\x76\x59\x43\x4d\x39\x59\x6f\x49\x61',
        '\x71\x67\x6e\x56\x42\x67\x39\x59\x43\x59\x39\x4a\x42\x32\x58\x56\x43\x4e\x6d\x56\x43\x32\x66\x4d\x7a\x71',
        '\x43\x33\x72\x4b\x76\x66\x72\x6d',
        '\x43\x4d\x66\x30\x7a\x73\x31\x56\x44\x4d\x76\x59\x42\x67\x4c\x54\x41\x78\x71',
        '\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x56\x42\x49\x35\x31\x43\x67\x72\x48\x44\x67\x75',
        '\x79\x77\x6e\x30\x41\x77\x39\x55',
        '\x76\x30\x76\x6d\x71\x30\x39\x6e\x72\x71',
        '\x75\x32\x76\x5a\x43\x32\x4c\x56\x42\x49\x62\x6a\x72\x63\x62\x55\x42\x33\x71\x47\x7a\x4d\x39\x31\x42\x4d\x71\x55\x69\x66\x62\x53\x7a\x77\x66\x5a\x7a\x73\x62\x48\x7a\x67\x71\x47\x42\x32\x35\x4c\x69\x67\x4c\x55\x69\x67\x6e\x56\x42\x4d\x7a\x50\x7a\x59\x35\x51\x43\x57',
        '\x71\x32\x48\x59\x42\x32\x31\x4c',
        '\x44\x67\x39\x6d\x42\x32\x6e\x48\x42\x67\x76\x75\x41\x77\x31\x4c\x75\x33\x72\x59\x41\x77\x35\x4e',
        '\x71\x68\x62\x57',
        '\x79\x77\x35\x30\x41\x77\x6e\x48\x42\x67\x57',
        '\x6d\x5a\x62\x57\x42\x4b\x76\x32\x71\x32\x79',
        '\x6c\x49\x39\x30\x42\x78\x61\x56',
        '\x69\x67\x6e\x48\x42\x67\x58\x4c\x7a\x63\x62\x30\x41\x67\x75\x47\x79\x4d\x39\x30\x69\x67\x66\x55\x7a\x63\x62\x30\x41\x67\x75\x47\x79\x32\x66\x53\x42\x63\x62\x33\x79\x78\x6d\x47\x6b\x4e\x6a\x4c\x41\x4d\x76\x4a\x44\x67\x76\x4b\x6b\x49\x34',
        '\x69\x67\x48\x48\x43\x59\x62\x49\x7a\x77\x76\x55\x69\x68\x62\x59\x42\x32\x31\x56\x44\x67\x76\x4b\x69\x68\x72\x56\x69\x67\x66\x4b\x42\x77\x4c\x55\x69\x67\x6a\x35\x69\x65\x61',
        '\x42\x77\x66\x4e\x7a\x77\x35\x30\x79\x71',
        '\x6c\x33\x72\x54\x43\x63\x39\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55\x6c\x32\x6e\x59\x7a\x77\x72\x5a\x6c\x4d\x50\x5a\x42\x32\x34',
        '\x43\x33\x72\x4b\x7a\x78\x6a\x59',
        '\x43\x4d\x76\x51\x7a\x77\x6e\x30',
        '\x7a\x32\x76\x30',
        '\x77\x5a\x62\x44\x69\x66\x6a\x4c\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x55\x7a\x59\x34\x55\x6c\x49\x61\x4f',
        '\x42\x4d\x39\x4b\x7a\x73\x31\x4d\x7a\x78\x72\x4a\x41\x61',
        '\x71\x4b\x76\x68\x73\x75\x34\x36\x76\x4b\x6e\x62\x75\x4b\x71\x6b',
        '\x43\x78\x76\x4c\x43\x33\x72\x50\x42\x32\x34',
        '\x7a\x78\x48\x50\x44\x61',
        '\x63\x47\x50\x73\x7a\x77\x44\x48\x43\x4d\x72\x5a\x6c\x61\x52\x57\x4e\x7a\x6f\x75\x38\x6a\x32\x74\x52\x46\x63\x44\x4b\x37\x46\x57\x4e\x7a\x6f\x2b\x38\x6a\x32\x74\x56\x71',
        '\x6c\x49\x39\x4a\x42\x32\x35\x4d\x41\x77\x43\x55\x41\x4e\x6d',
        '\x43\x32\x76\x30\x44\x67\x4c\x55\x7a\x33\x6d',
        '\x71\x4b\x66\x66\x6e\x71',
        '\x63\x55\x6b\x61\x4f\x49\x62\x6a\x42\x4e\x62\x31\x44\x63\x62\x50\x42\x49\x62\x35\x42\x33\x75\x47\x43\x32\x76\x5a\x43\x32\x4c\x56\x42\x49\x62\x50\x7a\x63\x62\x32\x79\x78\x6a\x50\x79\x77\x6a\x53\x7a\x73\x61\x6b\x34\x4f\x63\x49\x69\x66\x6a\x4c\x43\x33\x72\x48\x43\x4e\x71\x47\x7a\x4e\x6a\x56\x42\x73\x62\x4f\x42\x33\x6e\x30\x69\x70\x63\x46\x4b\x50\x4f\x6b\x63\x47',
        '\x7a\x33\x6a\x56\x44\x78\x62\x6e\x7a\x78\x72\x48\x7a\x67\x66\x30\x79\x71',
        '\x42\x77\x76\x55\x44\x67\x4c\x56\x42\x4e\x6d',
        '\x42\x67\x4c\x5a\x44\x67\x76\x55',
        '\x69\x63\x4a\x49\x4d\x51\x64\x56\x55\x69\x38\x47\x76\x77\x35\x48\x79\x4d\x58\x4c\x69\x68\x72\x56\x69\x67\x6e\x4f\x7a\x77\x6e\x52\x69\x67\x7a\x56\x43\x49\x62\x31\x43\x67\x72\x48\x44\x67\x76\x5a\x6b\x71',
        '\x7a\x4d\x39\x59\x72\x77\x66\x4a\x41\x61',
        '\x7a\x32\x76\x30\x74\x4e\x76\x54\x79\x4d\x76\x59',
        '\x79\x78\x76\x4b\x41\x77\x38',
        '\x74\x30\x35\x6d\x73\x75\x35\x66',
        '\x75\x32\x39\x4a\x41\x32\x76\x30\x69\x67\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x50\x42\x32\x34\x47\x44\x67\x4c\x54\x7a\x77\x39\x31\x44\x61',
        '\x44\x68\x6a\x31\x7a\x71',
        '\x43\x32\x76\x55\x7a\x66\x72\x4c\x45\x68\x71',
        '\x69\x67\x6e\x48\x42\x67\x58\x4c\x7a\x63\x62\x30\x41\x67\x75\x47\x79\x4d\x39\x30\x69\x67\x66\x55\x7a\x63\x62\x4f\x79\x78\x6d\x47\x79\x4d\x76\x4c\x42\x49\x61\x51\x79\x4d\x58\x56\x79\x32\x54\x4c\x7a\x63\x4f\x55',
        '\x6f\x66\x6a\x75\x79\x4c\x62\x36\x42\x57',
        '\x7a\x32\x76\x30\x72\x4e\x76\x53\x42\x66\x4c\x4c\x79\x78\x69',
        '\x7a\x4d\x4c\x53\x44\x67\x76\x59',
        '\x43\x4d\x66\x55\x7a\x67\x39\x54',
        '\x79\x78\x6e\x74\x44\x67\x4c\x4a\x41\x32\x76\x59',
        '\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71',
        '\x42\x67\x4c\x5a\x44\x61\x52\x49\x47\x6b\x69\x47\x6b\x4b\x48\x4c\x42\x68\x61\x36\x6b\x49\x61',
        '\x6c\x49\x39\x53\x41\x77\x69\x56\x7a\x67\x66\x30\x79\x77\x6a\x48\x43\x32\x75',
        '\x41\x78\x6e\x65\x41\x78\x6a\x4c\x79\x33\x72\x56\x43\x4e\x4b',
        '\x43\x68\x6a\x56\x42\x77\x4c\x5a\x7a\x78\x6d',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x5a\x44\x67\x66\x53\x7a\x73\x62\x56\x43\x67\x76\x55\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34\x47\x7a\x4d\x39\x59\x69\x67\x35\x4c\x44\x59\x62\x56\x44\x78\x72\x4e\x42\x32\x4c\x55\x7a\x59\x62\x57\x43\x4d\x76\x52\x7a\x78\x4b\x47\x79\x4e\x76\x55\x7a\x67\x58\x4c',
        '\x73\x75\x35\x67\x74\x57',
        '\x6c\x49\x39\x53\x41\x77\x69\x56\x79\x78\x6a\x59\x7a\x4e\x76\x55\x79\x33\x72\x50\x42\x32\x34\x55\x41\x4e\x6d',
        '\x77\x31\x76\x55\x79\x32\x66\x31\x7a\x32\x48\x30\x69\x65\x76\x34\x79\x32\x76\x57\x44\x67\x4c\x56\x42\x4c\x30\x47',
        '\x43\x4d\x76\x48\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x32\x76\x5a',
        '\x79\x77\x72\x4b',
        '\x72\x67\x76\x32\x7a\x77\x58\x56\x43\x67\x76\x59\x69\x65\x6a\x56\x44\x61',
        '\x77\x5a\x62\x44\x69\x65\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x50\x42\x4d\x43\x47\x44\x67\x38\x36\x69\x61',
        '\x42\x4e\x76\x54\x79\x4d\x76\x59',
        '\x79\x33\x4c\x48\x42\x47',
        '\x43\x68\x6a\x4c\x7a\x4d\x4c\x34',
        '\x72\x78\x6a\x59\x42\x33\x69\x36\x69\x68\x6a\x4c\x79\x77\x71\x47\x72\x75\x6e\x70\x74\x4b\x35\x73\x72\x76\x6e\x66\x76\x61',
        '\x7a\x67\x76\x49\x44\x77\x43',
        '\x42\x67\x39\x4b\x79\x78\x6e\x4f',
        '\x79\x32\x48\x48\x42\x67\x53',
        '\x71\x68\x44\x4f\x41\x78\x6e\x52\x7a\x78\x4c\x5a\x42\x32\x6e\x52\x7a\x78\x72\x5a\x6c\x32\x6a\x48\x41\x77\x58\x4c\x45\x78\x6d',
        '\x71\x67\x48\x48\x43\x67\x4b\x56\x79\x4d\x39\x56\x42\x71',
        '\x42\x78\x72\x35\x43\x67\x75',
        '\x76\x77\x35\x4c\x45\x68\x62\x4c\x79\x33\x72\x4c\x7a\x63\x62\x4f\x79\x77\x35\x4b\x43\x32\x48\x48\x41\x32\x75\x47\x7a\x78\x6a\x59\x42\x33\x69',
        '\x71\x4d\x66\x4b\x69\x65\x31\x62\x71\x57',
        '\x71\x77\x7a\x59\x41\x77\x6e\x48\x6c\x30\x58\x48\x7a\x32\x39\x5a',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x42\x78\x4c\x4d\x44\x77\x35\x4a',
        '\x41\x32\x76\x35',
        '\x42\x67\x76\x32\x7a\x77\x57',
        '\x79\x4d\x58\x31\x7a\x71',
        '\x79\x78\x7a\x48\x41\x77\x58\x48\x79\x4d\x58\x4c',
        '\x79\x4d\x66\x5a\x7a\x74\x79\x30',
        '\x45\x77\x66\x59\x7a\x33\x6d\x56\x45\x77\x66\x59\x7a\x33\x6d',
        '\x7a\x32\x76\x30\x72\x67\x66\x30\x7a\x71',
        '\x72\x78\x6a\x59\x42\x33\x69\x47\x41\x77\x34\x47\x79\x32\x66\x53\x42\x63\x62\x4f\x79\x77\x35\x4b\x42\x67\x76\x59\x6f\x49\x61',
        '\x6d\x74\x71\x58\x6e\x74\x6d\x35\x79\x4b\x39\x51\x71\x32\x39\x65',
        '\x43\x67\x66\x59\x43\x32\x75',
        '\x7a\x78\x7a\x4c\x42\x4e\x72\x5a',
        '\x79\x78\x76\x30\x42\x33\x6a\x4c\x79\x32\x39\x59\x7a\x67\x4c\x55\x7a\x57',
        '\x41\x78\x6e\x63\x44\x77\x7a\x4d\x7a\x78\x69',
        '\x7a\x4e\x6a\x56\x42\x75\x6a\x31\x7a\x4d\x7a\x4c\x43\x47',
        '\x79\x78\x76\x30\x41\x67\x39\x59',
        '\x44\x77\x35\x53\x41\x77\x35\x52\x75\x33\x4c\x55\x79\x57',
        '\x43\x4d\x76\x4a\x42\x32\x35\x55\x7a\x77\x6e\x30',
        '\x38\x6a\x2b\x51\x47\x63\x62\x62\x43\x4d\x6e\x4f\x69\x65\x31\x4b\x69\x67\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x4c\x7a\x63\x62\x5a\x44\x77\x6e\x4a\x7a\x78\x6e\x5a\x7a\x4e\x76\x53\x42\x68\x4b\x6b\x63\x4e\x62\x59\x7a\x77\x7a\x50\x45\x64\x4f\x47',
        '\x43\x68\x72\x30',
        '\x7a\x67\x39\x33\x42\x4d\x58\x56\x79\x77\x72\x62\x42\x4d\x72\x74\x79\x78\x7a\x4c\x74\x77\x76\x4b\x41\x77\x66\x6e\x7a\x78\x6e\x5a\x79\x77\x44\x4c',
        '\x7a\x4d\x39\x59\x42\x77\x66\x30',
        '\x43\x33\x72\x48\x79\x32\x53',
        '\x42\x77\x4c\x54\x7a\x71',
        '\x43\x33\x62\x53\x41\x78\x71',
        '\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x4e\x41\x78\x6e\x30\x6c\x4d\x44\x50\x44\x67\x48\x31\x79\x4e\x76\x5a\x7a\x78\x6a\x4a\x42\x32\x35\x30\x7a\x77\x35\x30\x6c\x4d\x6e\x56\x42\x73\x39\x4c\x7a\x67\x35\x31\x44\x64\x61\x57\x6d\x73\x38',
        '\x43\x33\x72\x48\x43\x4e\x72\x5a\x76\x32\x4c\x30\x41\x61',
        '\x77\x30\x72\x63\x78\x73\x62\x78\x43\x4d\x4c\x30\x7a\x73\x62\x4c\x43\x4e\x6a\x56\x43\x4a\x4f\x47',
        '\x44\x78\x6e\x4c\x43\x4e\x6d',
        '\x79\x4d\x66\x4b\x69\x67\x31\x48\x79\x57',
        '\x71\x68\x6d\x55\x44\x32\x48\x48\x44\x68\x6e\x48\x43\x68\x61\x55\x42\x4d\x76\x30',
        '\x44\x67\x4c\x54\x7a\x78\x50\x56\x42\x4d\x75',
        '\x6c\x49\x39\x57\x79\x77\x6e\x52\x79\x77\x44\x4c\x6c\x4d\x50\x5a\x42\x32\x34',
        '\x42\x67\x39\x48\x7a\x67\x76\x4b\x75\x67\x58\x31\x7a\x32\x4c\x55\x43\x57',
        '\x44\x67\x39\x6d\x42\x33\x44\x4c\x43\x4b\x6e\x48\x43\x32\x75',
        '\x7a\x67\x66\x30\x79\x71',
        '\x7a\x78\x62\x4f\x7a\x77\x31\x4c\x43\x4d\x66\x53\x74\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71',
        '\x41\x78\x72\x4c\x42\x74\x65\x55\x76\x65\x76\x6d\x6f\x33\x44\x48\x41\x77\x71\x39',
        '\x79\x4d\x4c\x55\x7a\x61',
        '\x42\x77\x66\x57',
        '\x42\x4d\x39\x30\x6c\x77\x66\x31\x44\x67\x48\x56\x43\x4d\x4c\x36\x7a\x77\x71',
        '\x43\x33\x72\x48\x44\x68\x76\x5a',
        '\x7a\x67\x4c\x5a\x79\x77\x6a\x53\x7a\x77\x71',
        '\x6c\x49\x39\x57\x42\x68\x76\x4e\x41\x77\x35\x5a\x6c\x32\x76\x4b\x42\x4e\x76\x30',
        '\x69\x67\x66\x32\x79\x77\x4c\x53\x79\x77\x6a\x53\x7a\x73\x4b',
        '\x41\x77\x31\x48\x7a\x32\x75',
        '\x43\x67\x66\x30\x41\x61',
        '\x77\x63\x31\x78\x71\x73\x31\x63\x73\x76\x4f\x54\x74\x4b\x66\x6e\x72\x74\x4f',
        '\x44\x78\x62\x4b\x79\x78\x72\x4c\x71\x4d\x58\x56\x79\x32\x54\x74\x44\x67\x66\x30\x44\x78\x6d',
        '\x41\x4e\x6e\x56\x42\x47',
        '\x7a\x4d\x4c\x53\x7a\x73\x31\x30\x45\x78\x62\x4c',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x7a\x4e\x76\x55\x79\x33\x72\x50\x42\x32\x34\x55\x41\x4e\x6d',
        '\x7a\x4e\x6a\x56\x42\x75\x31\x4c',
        '\x44\x68\x6a\x50\x42\x71',
        '\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x32\x75',
        '\x43\x67\x66\x4a\x41\x32\x35\x48\x42\x77\x75',
        '\x42\x67\x39\x4e',
        '\x42\x67\x4c\x5a\x44\x63\x4f\x6b\x34\x4f\x63\x49\x69\x65\x44\x4c\x44\x63\x62\x4f\x7a\x77\x58\x57\x69\x67\x66\x49\x42\x33\x76\x30\x69\x67\x65\x47\x79\x32\x39\x54\x42\x77\x66\x55\x7a\x64\x4f\x47\x6b\x47',
        '\x43\x32\x76\x59\x41\x77\x66\x53\x41\x78\x50\x4c\x74\x71',
        '\x43\x4d\x76\x4b',
        '\x79\x4d\x66\x4b\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34',
        '\x44\x4d\x6e\x48\x43\x4d\x71',
        '\x7a\x78\x48\x30',
        '\x43\x67\x66\x59\x44\x67\x4c\x4a\x41\x78\x62\x48\x42\x4e\x72\x5a',
        '\x42\x4d\x66\x54\x7a\x71',
        '\x43\x68\x76\x59\x43\x67\x58\x4c',
        '\x77\x5a\x62\x44\x69\x65\x7a\x48\x41\x77\x58\x4c\x7a\x63\x62\x30\x42\x59\x62\x53\x42\x32\x66\x4b\x69\x68\x62\x53\x44\x77\x44\x50\x42\x49\x61',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x56\x43\x67\x76\x55\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34\x47\x41\x77\x34\x47\x7a\x4d\x66\x32\x42\x33\x69\x47\x42\x32\x79\x47\x41\x77\x35\x4a\x42\x32\x31\x50\x42\x4d\x43\x47\x43\x68\x6a\x4c\x41\x32\x76\x35\x69\x67\x6a\x31\x42\x4d\x72\x53\x7a\x71',
        '\x7a\x32\x6e\x49\x79\x77\x34',
        '\x43\x32\x76\x55\x7a\x65\x4c\x54\x79\x77\x44\x4c\x71\x78\x6e\x74\x44\x67\x4c\x4a\x41\x32\x76\x59',
        '\x43\x4d\x31\x4b\x41\x78\x6a\x74\x45\x77\x35\x4a',
        '\x43\x32\x76\x30\x44\x32\x76\x53\x79\x32\x39\x54\x7a\x71',
        '\x6d\x74\x4b\x57\x6d\x64\x61\x57\x72\x33\x44\x65\x77\x4c\x76\x73',
        '\x42\x77\x66\x34\x74\x77\x76\x5a\x43\x32\x66\x4e\x7a\x78\x6e\x71\x7a\x78\x6a\x64\x41\x67\x66\x30',
        '\x43\x67\x66\x4b\x75\x33\x72\x48\x43\x4e\x71',
        '\x76\x4d\x76\x59\x43\x32\x4c\x56\x42\x4a\x4f\x47\x44\x47',
        '\x72\x76\x6a\x73\x74\x31\x69',
        '\x6d\x4a\x61\x55\x6d\x63\x34\x57\x6e\x61',
        '\x42\x67\x76\x55\x7a\x33\x72\x4f',
        '\x43\x32\x4c\x53\x7a\x77\x35\x30',
        '\x72\x65\x66\x75\x71\x75\x6a\x62\x75\x30\x76\x46\x76\x76\x6a\x6d',
        '\x72\x30\x39\x70\x72\x65\x6a\x7a\x72\x76\x39\x6e\x75\x30\x43',
        '\x41\x32\x76\x35\x43\x57',
        '\x7a\x77\x34\x54\x72\x30\x69',
        '\x76\x4d\x66\x53\x44\x77\x75\x47\x42\x4d\x39\x30\x69\x67\x7a\x56\x44\x77\x35\x4b',
        '\x43\x32\x58\x50\x79\x32\x75',
        '\x42\x77\x54\x4b\x41\x78\x6a\x74\x45\x77\x35\x4a',
        '\x43\x4d\x76\x48\x7a\x61',
        '\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x48\x43\x67\x4b\x55\x7a\x32\x4c\x30\x41\x68\x76\x49\x6c\x4d\x6e\x56\x42\x73\x39\x59\x7a\x78\x62\x56\x43\x59\x39\x66\x7a\x67\x35\x31\x44\x64\x61\x57\x6d\x73\x39\x62\x43\x4d\x6e\x4f\x6c\x77\x31\x4b\x6c\x33\x6a\x4c\x42\x67\x76\x48\x43\x32\x76\x5a\x6c\x32\x58\x48\x44\x67\x76\x5a\x44\x61',
        '\x77\x5a\x62\x44\x69\x66\x62\x53\x44\x77\x44\x50\x42\x4e\x6d\x47\x41\x77\x35\x5a\x44\x67\x66\x53\x42\x67\x76\x4b\x6c\x47',
        '\x43\x68\x6a\x56\x7a\x4d\x4c\x53\x7a\x76\x62\x50\x79\x33\x72\x31\x43\x4d\x76\x76\x43\x4d\x57',
        '\x77\x5a\x62\x44\x69\x65\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x4c\x7a\x63\x65',
        '\x76\x65\x4c\x75\x74\x65\x75\x36\x63\x47',
        '\x79\x78\x76\x30\x42\x33\x6a\x4c\x79\x77\x71',
        '\x7a\x78\x48\x50\x44\x66\x62\x59\x42\x32\x6e\x4c\x43\x33\x6d',
        '\x6d\x4a\x4b\x58\x6d\x4a\x44\x6c\x75\x32\x66\x62\x79\x76\x79',
        '\x7a\x67\x76\x4a\x42\x32\x72\x4c\x73\x4d\x4c\x4b',
        '\x79\x32\x39\x55\x79\x32\x66\x30',
        '\x76\x67\x4c\x54\x7a\x77\x71\x47\x74\x33\x76\x30',
        '\x44\x67\x66\x4e\x78\x32\x35\x48\x42\x77\x75',
        '\x43\x33\x72\x4b\x42\x33\x76\x30',
        '\x44\x33\x6a\x50\x44\x67\x76\x67\x41\x77\x58\x4c',
        '\x42\x77\x76\x54\x42\x33\x6a\x35\x74\x32\x35\x53\x45\x71',
        '\x72\x75\x35\x65\x6f\x4c\x7a\x64\x71\x76\x6a\x65',
        '\x43\x32\x76\x55\x7a\x66\x7a\x50\x7a\x67\x76\x56\x71\x78\x6e\x74\x44\x67\x4c\x4a\x41\x32\x76\x59',
        '\x41\x78\x72\x4c\x42\x74\x65\x55\x77\x63\x31\x62\x71\x4b\x58\x48\x79\x4d\x76\x53\x6f\x4c\x62\x56\x42\x4e\x6e\x4c\x42\x61\x4f',
        '\x44\x77\x35\x48\x44\x4d\x66\x50\x42\x67\x66\x49\x42\x67\x75',
        '\x41\x4d\x39\x50\x42\x47',
        '\x72\x78\x7a\x4c\x42\x4e\x72\x66\x42\x77\x4c\x30\x44\x67\x76\x59',
        '\x79\x4d\x39\x56\x42\x67\x76\x48\x42\x47',
        '\x44\x4d\x76\x59\x41\x77\x7a\x50\x7a\x77\x72\x6f\x79\x77\x31\x4c',
        '\x69\x63\x4a\x49\x4e\x69\x75\x47\x76\x78\x61\x47\x44\x67\x38\x47\x7a\x67\x66\x30\x7a\x73\x4b',
        '\x7a\x67\x4c\x5a\x43\x67\x58\x48\x45\x75\x35\x48\x42\x77\x75',
        '\x76\x32\x48\x48\x44\x68\x6e\x62\x43\x68\x61',
        '\x44\x67\x39\x74\x44\x68\x6a\x50\x42\x4d\x43',
        '\x43\x33\x72\x4b\x41\x77\x34',
        '\x7a\x78\x48\x50\x43\x33\x72\x5a\x75\x33\x4c\x55\x79\x57',
        '\x79\x78\x76\x30\x42\x33\x72\x35\x43\x67\x4c\x55\x7a\x57',
        '\x7a\x78\x6a\x59\x42\x33\x69',
        '\x7a\x67\x39\x4a\x44\x77\x31\x4c\x42\x4e\x71',
        '\x6c\x33\x6a\x48\x44\x57',
        '\x6c\x49\x39\x30\x42\x78\x61\x56\x43\x33\x72\x56\x43\x4d\x75',
        '\x79\x78\x62\x57\x42\x67\x4c\x4a\x79\x78\x72\x50\x42\x32\x34',
        '\x42\x77\x4c\x54\x7a\x78\x72\x35\x43\x67\x75',
        '\x43\x78\x76\x56\x44\x67\x76\x4b',
        '\x41\x77\x35\x30\x7a\x78\x6a\x55\x79\x78\x72\x50\x42\x32\x35\x48\x42\x61',
        '\x7a\x32\x76\x30\x72\x4d\x4c\x53\x7a\x71',
        '\x79\x78\x6e\x65\x42\x32\x6e\x31\x42\x77\x76\x55\x44\x61',
        '\x44\x4d\x76\x59\x43\x32\x4c\x56\x42\x47',
        '\x43\x33\x72\x59\x41\x77\x35\x4e\x41\x77\x7a\x35',
        '\x7a\x32\x39\x56\x7a\x67\x6a\x35\x7a\x71',
        '\x79\x78\x6a\x4e\x44\x47',
        '\x7a\x67\x39\x33\x42\x4d\x58\x56\x79\x77\x72\x6e\x7a\x77\x72\x50\x79\x75\x31\x4c\x43\x33\x6e\x48\x7a\x32\x75',
        '\x44\x67\x76\x5a\x44\x61',
        '\x79\x32\x39\x55\x44\x67\x66\x4a\x44\x68\x6d',
        '\x43\x4d\x76\x54\x42\x33\x7a\x4c',
        '\x43\x4d\x76\x4a\x42\x33\x6a\x4b\x41\x77\x35\x4e',
        '\x44\x78\x6e\x4c\x43\x47',
        '\x79\x32\x66\x53\x42\x61',
        '\x75\x65\x39\x73\x76\x61',
        '\x76\x77\x6a\x31\x42\x4e\x72\x31',
        '\x6c\x49\x39\x30\x42\x78\x61\x56\x7a\x67\x66\x30\x79\x71',
        '\x7a\x4e\x6a\x56\x42\x71',
        '\x41\x77\x35\x4a\x42\x68\x76\x4b\x7a\x78\x6d',
        '\x43\x68\x76\x5a\x41\x61',
        '\x77\x5a\x62\x44\x69\x65\x66\x59\x79\x32\x47\x47\x76\x4d\x76\x59\x43\x32\x4c\x56\x42\x4a\x4f\x47\x44\x47',
        '\x43\x67\x4c\x55\x42\x57',
        '\x44\x78\x6a\x53',
        '\x43\x32\x76\x30\x7a\x32\x39\x56\x7a\x67\x6a\x35\x7a\x71',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55',
        '\x43\x68\x6a\x56\x42\x77\x39\x30\x7a\x71',
        '\x6d\x65\x62\x5a\x6c\x4e\x44\x4f\x79\x78\x72\x5a\x79\x78\x62\x57\x6c\x4d\x35\x4c\x44\x61',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x7a\x67\x66\x30\x79\x77\x6a\x48\x43\x32\x75\x56\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x56\x42\x49\x35\x51\x43\x32\x39\x55',
        '\x72\x4b\x34\x36',
        '\x69\x63\x4a\x49\x4d\x51\x64\x56\x55\x69\x38\x47\x74\x4d\x76\x33\x69\x68\x7a\x4c\x43\x4e\x6e\x50\x42\x32\x34\x47\x44\x47',
        '\x43\x32\x76\x55\x7a\x65\x7a\x50\x42\x67\x75',
        '\x41\x67\x76\x53\x43\x63\x61\x38\x79\x32\x39\x54\x42\x77\x66\x55\x7a\x66\x39\x55\x79\x77\x31\x4c\x70\x47\x4f\x6b\x72\x78\x48\x48\x42\x78\x62\x53\x7a\x74\x4f\x6b\x34\x4f\x63\x49\x69\x65\x58\x50\x43\x33\x71\x47\x79\x77\x58\x53\x69\x67\x6e\x56\x42\x77\x31\x48\x42\x4d\x72\x5a\x6f\x49\x61\x51',
        '\x7a\x4d\x4c\x53\x7a\x77\x35\x48\x42\x77\x75',
        '\x43\x33\x72\x59\x41\x77\x35\x4e',
        '\x79\x4d\x58\x56\x79\x32\x53',
        '\x79\x77\x58\x53\x42\x32\x6d',
        '\x43\x4d\x76\x48\x7a\x67\x72\x50\x43\x4c\x6e\x35\x42\x4d\x6d',
        '\x43\x33\x76\x49\x41\x4d\x76\x4a\x44\x61',
        '\x6e\x64\x7a\x7a\x72\x32\x44\x76\x42\x77\x6d',
        '\x79\x77\x58\x59\x7a\x77\x66\x4b\x45\x73\x31\x4c\x45\x67\x4c\x5a\x44\x68\x6d',
        '\x43\x32\x76\x59\x44\x4d\x76\x59',
        '\x43\x32\x76\x55\x7a\x66\x62\x59\x7a\x78\x6e\x4c\x42\x4d\x6e\x4c\x76\x78\x62\x4b\x79\x78\x72\x4c',
        '\x79\x78\x62\x57\x42\x68\x4b',
        '\x44\x32\x66\x59\x42\x4e\x6d',
        '\x6f\x74\x65\x32\x6d\x74\x47\x59\x6d\x68\x62\x36\x79\x4b\x31\x4b\x45\x71',
        '\x43\x4d\x76\x54\x42\x33\x72\x4c\x73\x4d\x4c\x4b',
        '\x43\x4d\x76\x57\x42\x67\x66\x4a\x7a\x71',
        '\x43\x4d\x76\x48\x7a\x65\x7a\x50\x42\x67\x76\x74\x45\x77\x35\x4a',
        '\x41\x67\x76\x53\x43\x63\x62\x53\x41\x78\x6e\x30\x6b\x47\x4f\x6b\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x76\x4b\x69\x67\x35\x56\x44\x63\x62\x59\x7a\x78\x6e\x57\x42\x32\x35\x4b\x41\x77\x35\x4e\x70\x59\x64\x57\x4e\x36\x73\x4d\x69\x67\x58\x4c\x44\x63\x62\x54\x7a\x73\x62\x4f\x7a\x77\x58\x57\x69\x63\x34\x55\x6c\x47\x4f\x6b\x34\x4f\x63\x49\x69\x65\x44\x4c\x44\x63\x62\x48\x69\x67\x35\x4c\x44\x59\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55\x69\x67\x7a\x59\x42\x32\x30\x47',
        '\x71\x68\x76\x5a\x7a\x78\x69\x47\x41\x67\x66\x5a\x69\x67\x58\x4c\x7a\x4e\x71\x47\x71\x67\x44\x59\x42\x33\x76\x57',
        '\x6c\x49\x39\x4f\x79\x77\x35\x4b\x42\x67\x76\x59\x6c\x4d\x50\x5a',
        '\x69\x67\x6e\x56\x42\x4e\x72\x48\x79\x33\x72\x5a',
        '\x76\x4b\x76\x73\x75\x30\x4c\x70\x74\x4a\x4f\x5a\x6c\x4a\x61\x6b',
        '\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x55\x7a\x57'
    ];
    _0xc11d = function () {
        return _0x3e87bf;
    };
    return _0xc11d();
}
const axios = require('\x61\x78\x69\x6f\x73');
const {color} = require(_0x4312a0(0xeb));
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
const randomemoji = moji[Math[_0x4312a0(0xee)](Math[_0x4312a0(0x129)]() * moji['\x6c\x65\x6e\x67\x74\x68'])];
const listcolor = [
    '\x61\x71\x75\x61',
    _0x4312a0(0x180),
    _0x4312a0(0x148),
    _0x4312a0(0x186),
    _0x4312a0(0x10b)
];
const randomcolor = listcolor[Math[_0x4312a0(0xee)](Math['\x72\x61\x6e\x64\x6f\x6d']() * listcolor[_0x4312a0(0x193)])];
const randomcolor2 = listcolor[Math[_0x4312a0(0xee)](Math['\x72\x61\x6e\x64\x6f\x6d']() * listcolor[_0x4312a0(0x193)])];
const randomcolor3 = listcolor[Math[_0x4312a0(0xee)](Math[_0x4312a0(0x129)]() * listcolor[_0x4312a0(0x193)])];
const randomcolor4 = listcolor[Math[_0x4312a0(0xee)](Math[_0x4312a0(0x129)]() * listcolor[_0x4312a0(0x193)])];
const randomcolor5 = listcolor[Math[_0x4312a0(0xee)](Math[_0x4312a0(0x129)]() * listcolor[_0x4312a0(0x193)])];
const _0x47b131 = {};
_0x47b131[_0x4312a0(0xfd)] = 0xe10;
const groupCache = new NodeCache(_0x47b131);
const ednutchat = require(_0x4312a0(0x1d2));
const _0x3ad653 = {};
_0x3ad653[_0x4312a0(0x18e)] = 0x64;
_0x3ad653[_0x4312a0(0x1ab)] = ![];
const store = ednutchat(_0x4312a0(0x1be), _0x3ad653);
global['\x6f\x70\x74\x73'] = new Object(yargs(process[_0x4312a0(0x1c8)][_0x4312a0(0x19a)](0x2))[_0x4312a0(0x1a3)](![])[_0x4312a0(0x14f)]());
const deleteFolderRecursive = function (_0x5ad709) {
    const _0x72dab5 = _0x4312a0;
    if (fs[_0x72dab5(0x1b9)](_0x5ad709)) {
        fs[_0x72dab5(0x1e6)](_0x5ad709)[_0x72dab5(0x11e)](function (_0x4d3544, _0x5d20ed) {
            const _0x41ceae = _0x72dab5;
            const _0x3f9939 = _0x5ad709 + '\x2f' + _0x4d3544;
            if (fs['\x6c\x73\x74\x61\x74\x53\x79\x6e\x63'](_0x3f9939)[_0x41ceae(0x12e)]()) {
                deleteFolderRecursive(_0x3f9939);
            } else {
                fs[_0x41ceae(0x155)](_0x3f9939);
            }
        });
        fs[_0x72dab5(0x18b)](_0x5ad709);
    }
};
const question = _0x15a411 => {
    const _0x5788c4 = _0x4312a0;
    const _0x33c73d = {};
    _0x33c73d['\x69\x6e\x70\x75\x74'] = process[_0x5788c4(0x1b8)];
    _0x33c73d[_0x5788c4(0x1fb)] = process['\x73\x74\x64\x6f\x75\x74'];
    const _0xe303e1 = readline['\x63\x72\x65\x61\x74\x65\x49\x6e\x74\x65\x72\x66\x61\x63\x65'](_0x33c73d);
    return new Promise(_0x311cf3 => {
        const _0x20392f = _0x5788c4;
        _0xe303e1[_0x20392f(0x113)](_0x15a411, _0x311cf3);
    });
};
const DataBase = require(_0x4312a0(0x12d));
async function startBotz() {
    const _0x537c94 = _0x4312a0;
    const _0x125a8e = new DataBase(process['\x65\x6e\x76'][_0x537c94(0x195)]);
    const _0x4af523 = {};
    _0x4af523[_0x537c94(0x156)] = 0x0;
    _0x4af523['\x6c\x6f\x61\x64\x65\x64\x50\x6c\x75\x67\x69\x6e\x73'] = ![];
    _0x4af523[_0x537c94(0x161)] = {};
    _0x4af523[_0x537c94(0xfa)] = {};
    _0x4af523[_0x537c94(0x117)] = {};
    _0x4af523['\x64\x61\x74\x61\x62\x61\x73\x65'] = {};
    _0x4af523[_0x537c94(0x1f9)] = {};
    _0x4af523[_0x537c94(0x1ed)] = {};
    _0x4af523[_0x537c94(0x1fe)] = [];
    _0x4af523[_0x537c94(0x16f)] = [];
    _0x4af523['\x62\x61\x6e'] = [];
    _0x4af523[_0x537c94(0x189)] = [];
    _0x4af523['\x70\x6c\x75\x67\x69\x6e\x73'] = {};
    const _0x588563 = _0x4af523;
    try {
        const _0x389ad3 = await _0x125a8e[_0x537c94(0x19c)]() || {};
        const _0x1b894f = {
            ..._0x588563,
            ..._0x389ad3
        };
        global['\x64\x62'] = _0x1b894f;
        global['\x64\x62'][_0x537c94(0x156)] = typeof global['\x64\x62']['\x72\x65\x63\x6f\x6e\x6e\x65\x63\x74'] === _0x537c94(0x138) ? global['\x64\x62']['\x72\x65\x63\x6f\x6e\x6e\x65\x63\x74'] : 0x0;
        global['\x64\x62'][_0x537c94(0x166)] = typeof global['\x64\x62'][_0x537c94(0x166)] === _0x537c94(0x1b2) ? global['\x64\x62'][_0x537c94(0x166)] : ![];
        await _0x125a8e['\x77\x72\x69\x74\x65'](global['\x64\x62']);
        let _0x2464ba = JSON[_0x537c94(0x1c6)](global['\x64\x62']);
        setInterval(async () => {
            const _0x52ba48 = _0x537c94;
            try {
                const _0x5b2422 = JSON[_0x52ba48(0x1c6)](global['\x64\x62']);
                if (_0x5b2422 !== _0x2464ba) {
                    _0x2464ba = _0x5b2422;
                    await _0x125a8e[_0x52ba48(0xed)](global['\x64\x62']);
                }
            } catch (_0x57aea5) {
                log(_0x52ba48(0x191), _0x52ba48(0x160) + (_0x57aea5[_0x52ba48(0x12b)] || _0x57aea5));
            }
        }, 0x1770);
    } catch (_0x2d9baf) {
        log(_0x537c94(0x191), '\x44\x61\x74\x61\x62\x61\x73\x65\x20\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x61\x74\x69\x6f\x6e\x20\x65\x72\x72\x6f\x72\x3a\x20' + (_0x2d9baf[_0x537c94(0x12b)] || _0x2d9baf));
    }
    const {
        state: _0x1b9489,
        saveCreds: _0x464fa2
    } = await useMultiFileAuthState('\x2e\x2f\x74\x6d\x70\x2f\x73\x65\x73\x73\x69\x6f\x6e\x2f');
    const _0x49f81d = {};
    _0x49f81d[_0x537c94(0x147)] = _0x537c94(0x194);
    const _0x143ad6 = makeWASocket({
        '\x6c\x6f\x67\x67\x65\x72': pino(_0x49f81d),
        '\x70\x72\x69\x6e\x74\x51\x52\x49\x6e\x54\x65\x72\x6d\x69\x6e\x61\x6c': ![],
        '\x61\x75\x74\x68': _0x1b9489,
        '\x63\x6f\x6e\x6e\x65\x63\x74\x54\x69\x6d\x65\x6f\x75\x74\x4d\x73': 0xea60,
        '\x64\x65\x66\x61\x75\x6c\x74\x51\x75\x65\x72\x79\x54\x69\x6d\x65\x6f\x75\x74\x4d\x73': 0x0,
        '\x6b\x65\x65\x70\x41\x6c\x69\x76\x65\x49\x6e\x74\x65\x72\x76\x61\x6c\x4d\x73': 0x2710,
        '\x65\x6d\x69\x74\x4f\x77\x6e\x45\x76\x65\x6e\x74\x73': !![],
        '\x66\x69\x72\x65\x49\x6e\x69\x74\x51\x75\x65\x72\x69\x65\x73': !![],
        '\x67\x65\x6e\x65\x72\x61\x74\x65\x48\x69\x67\x68\x51\x75\x61\x6c\x69\x74\x79\x4c\x69\x6e\x6b\x50\x72\x65\x76\x69\x65\x77': !![],
        '\x73\x79\x6e\x63\x46\x75\x6c\x6c\x48\x69\x73\x74\x6f\x72\x79': !![],
        '\x6d\x61\x72\x6b\x4f\x6e\x6c\x69\x6e\x65\x4f\x6e\x43\x6f\x6e\x6e\x65\x63\x74': !![],
        '\x62\x72\x6f\x77\x73\x65\x72': [
            _0x537c94(0x1d1),
            _0x537c94(0x103),
            _0x537c94(0x192)
        ]
    });
    store[_0x537c94(0x16b)](_0x143ad6['\x65\x76']);
    const _0x491621 = require(_0x537c94(0x1f4));
    _0x143ad6['\x65\x76']['\x6f\x6e']('\x6d\x65\x73\x73\x61\x67\x65\x73\x2e\x75\x70\x73\x65\x72\x74', async _0x1d3034 => {
        const _0x372e86 = _0x537c94;
        try {
            mek = _0x1d3034['\x6d\x65\x73\x73\x61\x67\x65\x73'][0x0];
            if (!mek[_0x372e86(0x12b)])
                return;
            mek[_0x372e86(0x12b)] = Object[_0x372e86(0x197)](mek['\x6d\x65\x73\x73\x61\x67\x65'])[0x0] === _0x372e86(0x169) ? mek['\x6d\x65\x73\x73\x61\x67\x65'][_0x372e86(0x169)][_0x372e86(0x12b)] : mek[_0x372e86(0x12b)];
            const _0x46e0ef = _0x1d7849 => {
                const _0x544d52 = _0x372e86;
                if (!global['\x64\x62'] || !global['\x64\x62'][_0x544d52(0x117)])
                    return process[_0x544d52(0xea)][_0x1d7849] === _0x544d52(0x123);
                return global['\x64\x62']['\x73\x65\x74\x74\x69\x6e\x67\x73'][_0x1d7849] ?? process[_0x544d52(0xea)][_0x1d7849] === _0x544d52(0x123);
            };
            if (mek['\x6b\x65\x79'] && mek[_0x372e86(0x146)][_0x372e86(0x1ef)] === '\x73\x74\x61\x74\x75\x73\x40\x62\x72\x6f\x61\x64\x63\x61\x73\x74') {
                const _0x142aa0 = process['\x65\x6e\x76']['\x53\x54\x41\x54\x55\x53\x5f\x45\x4d\x4f\x4a\x49']?.[_0x372e86(0x15d)]('\x2c')[_0x372e86(0x16c)](_0x2422b0 => _0x2422b0[_0x372e86(0x17a)]())['\x66\x69\x6c\x74\x65\x72'](_0x72e95a => _0x72e95a);
                const _0x30625d = _0x142aa0 && _0x142aa0[_0x372e86(0x193)] > 0x0;
                if (_0x46e0ef('\x72\x65\x61\x64\x73\x77') || process[_0x372e86(0xea)]['\x53\x54\x41\x54\x55\x53'] === '\x74\x72\x75\x65' || _0x30625d) {
                    _0x143ad6['\x72\x65\x61\x64\x4d\x65\x73\x73\x61\x67\x65\x73']([mek['\x6b\x65\x79']]);
                    if (_0x30625d) {
                        const _0x28842a = _0x142aa0[Math[_0x372e86(0xee)](Math['\x72\x61\x6e\x64\x6f\x6d']() * _0x142aa0['\x6c\x65\x6e\x67\x74\x68'])];
                        try {
                            await _0x143ad6[_0x372e86(0x17b)](mek[_0x372e86(0x146)][_0x372e86(0x1ef)], {
                                '\x72\x65\x61\x63\x74': {
                                    '\x74\x65\x78\x74': _0x28842a,
                                    '\x6b\x65\x79': mek['\x6b\x65\x79']
                                }
                            });
                        } catch (_0x37d05b) {
                            log('\x45\x52\x52\x4f\x52', '\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x72\x65\x61\x63\x74\x20\x74\x6f\x20\x73\x74\x61\x74\x75\x73\x3a\x20' + _0x37d05b);
                        }
                    }
                }
            }
            if (_0x46e0ef(_0x372e86(0x1a2)) || process[_0x372e86(0xea)]['\x52\x45\x41\x44'] === _0x372e86(0x123)) {
                _0x143ad6[_0x372e86(0x134)]([mek[_0x372e86(0x146)]]);
            }
            if (_0x46e0ef(_0x372e86(0x1ba)) && !mek[_0x372e86(0x146)]['\x66\x72\x6f\x6d\x4d\x65']) {
                _0x143ad6[_0x372e86(0x1eb)](_0x372e86(0xf0), mek[_0x372e86(0x146)]['\x72\x65\x6d\x6f\x74\x65\x4a\x69\x64']);
            }
            if (!mek[_0x372e86(0x146)][_0x372e86(0x179)]) {
                if (_0x46e0ef(_0x372e86(0x149)) || process[_0x372e86(0xea)][_0x372e86(0x121)] === '\x74\x72\x75\x65') {
                    _0x143ad6['\x73\x65\x6e\x64\x50\x72\x65\x73\x65\x6e\x63\x65\x55\x70\x64\x61\x74\x65'](_0x372e86(0x149), mek['\x6b\x65\x79'][_0x372e86(0x1ef)]);
                } else {
                    _0x143ad6['\x73\x65\x6e\x64\x50\x72\x65\x73\x65\x6e\x63\x65\x55\x70\x64\x61\x74\x65'](_0x372e86(0x1af), mek[_0x372e86(0x146)][_0x372e86(0x1ef)]);
                }
            }
            if (_0x46e0ef(_0x372e86(0x151)) && !mek['\x6b\x65\x79']['\x66\x72\x6f\x6d\x4d\x65']) {
                _0x143ad6[_0x372e86(0x1eb)](_0x372e86(0x1cd), mek[_0x372e86(0x146)][_0x372e86(0x1ef)]);
            }
            if (mek[_0x372e86(0x146)]['\x69\x64'][_0x372e86(0x15f)](_0x372e86(0x118)) && mek[_0x372e86(0x146)]['\x69\x64'][_0x372e86(0x193)] === 0x10)
                return;
            m = smsg(_0x143ad6, mek, store);
            _0x491621(_0x143ad6, m, _0x1d3034, mek, store);
        } catch (_0x2beddc) {
            log(_0x372e86(0x191), _0x2beddc?.['\x73\x74\x61\x63\x6b'] || String(_0x2beddc));
        }
    });
    _0x143ad6[_0x537c94(0x1a5)] = _0x4727e4 => {
        const _0x3a3a26 = _0x537c94;
        if (!_0x4727e4)
            return _0x4727e4;
        if (/:\d+@/gi[_0x3a3a26(0x1ca)](_0x4727e4)) {
            let _0x499f51 = jidDecode(_0x4727e4) || {};
            return _0x499f51[_0x3a3a26(0x1ce)] && _0x499f51['\x73\x65\x72\x76\x65\x72'] && _0x499f51[_0x3a3a26(0x1ce)] + '\x40' + _0x499f51[_0x3a3a26(0x1ea)] || _0x4727e4;
        } else
            return _0x4727e4;
    };
    _0x143ad6['\x67\x65\x74\x4e\x61\x6d\x65'] = (_0x1b029b, _0x3f4950 = ![]) => {
        const _0x2d6d14 = _0x537c94;
        id = _0x143ad6[_0x2d6d14(0x1a5)](_0x1b029b);
        _0x3f4950 = _0x143ad6[_0x2d6d14(0x1fc)] || _0x3f4950;
        let _0x408bbf;
        if (id['\x65\x6e\x64\x73\x57\x69\x74\x68']('\x40\x67\x2e\x75\x73'))
            return new Promise(async _0x35318f => {
                const _0x36967b = _0x2d6d14;
                _0x408bbf = store[_0x36967b(0x1cb)][id] || {};
                if (!(_0x408bbf['\x6e\x61\x6d\x65'] || _0x408bbf[_0x36967b(0x1e7)]))
                    _0x408bbf = _0x143ad6[_0x36967b(0x11a)](id) || {};
                _0x35318f(_0x408bbf[_0x36967b(0x185)] || _0x408bbf[_0x36967b(0x1e7)] || PhoneNumber('\x2b' + id[_0x36967b(0x1f0)](_0x36967b(0x163), ''))[_0x36967b(0x11f)](_0x36967b(0x1c2)));
            });
        else
            _0x408bbf = id === _0x2d6d14(0x1dc) ? {
                '\x69\x64': id,
                '\x6e\x61\x6d\x65': _0x2d6d14(0x1b6)
            } : id === _0x143ad6[_0x2d6d14(0x1a5)](_0x143ad6[_0x2d6d14(0x1ce)]['\x69\x64']) ? _0x143ad6[_0x2d6d14(0x1ce)] : store['\x63\x6f\x6e\x74\x61\x63\x74\x73'][id] || {};
        return (_0x3f4950 ? '' : _0x408bbf[_0x2d6d14(0x185)]) || _0x408bbf[_0x2d6d14(0x1e7)] || _0x408bbf[_0x2d6d14(0x1b3)] || PhoneNumber('\x2b' + _0x1b029b[_0x2d6d14(0x1f0)](_0x2d6d14(0x163), ''))[_0x2d6d14(0x11f)](_0x2d6d14(0x1c2));
    };
    _0x143ad6[_0x537c94(0x17f)] = _0x3254e5 => smsg(_0x143ad6, _0x3254e5, store);
    const _0x114391 = require(_0x537c94(0x111));
    const _0x2129d6 = require(_0x537c94(0x165));
    async function _0x2df5ff() {
        const _0x53c2f4 = _0x537c94;
        try {
            const _0x343e13 = await _0x114391(_0x53c2f4(0x19d));
            if (!_0x343e13['\x6f\x6b'])
                return null;
            const _0x288242 = await _0x343e13['\x6a\x73\x6f\x6e']();
            return _0x288242[_0x53c2f4(0x1a8)]?.[_0x53c2f4(0x1f0)](/^v/, '') || null;
        } catch {
            return null;
        }
    }
    const _0x29b32b = path[_0x537c94(0x1b0)](__dirname, _0x537c94(0x1dd));
    async function _0x2df5ff() {
        const _0x21829e = _0x537c94;
        try {
            const _0xdece8a = await _0x114391(_0x21829e(0x19d));
            if (!_0xdece8a['\x6f\x6b'])
                return null;
            const _0x4049d0 = await _0xdece8a[_0x21829e(0x176)]();
            return _0x4049d0[_0x21829e(0x1a8)]?.[_0x21829e(0x1f0)](/^v/, '') || null;
        } catch {
            return null;
        }
    }
    _0x143ad6['\x65\x76']['\x6f\x6e'](_0x537c94(0xff), async _0x69b4ad => {
        const _0x1a7d7c = _0x537c94;
        const {
            connection: _0xd5e448,
            lastDisconnect: _0x18e855
        } = _0x69b4ad;
        if (typeof global['\x64\x62'][_0x1a7d7c(0x156)] !== '\x6e\x75\x6d\x62\x65\x72')
            global['\x64\x62']['\x72\x65\x63\x6f\x6e\x6e\x65\x63\x74'] = 0x0;
        if (typeof global['\x64\x62']['\x6c\x6f\x61\x64\x65\x64\x50\x6c\x75\x67\x69\x6e\x73'] !== _0x1a7d7c(0x1b2))
            global['\x64\x62'][_0x1a7d7c(0x166)] = ![];
        if (_0xd5e448 === _0x1a7d7c(0x1f7)) {
            if (global['\x64\x62'][_0x1a7d7c(0x156)] === 0x0) {
                log(_0x1a7d7c(0x131), '\x5b\x30\x5d\x20\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67\x20\x74\x6f\x20\x57\x68\x61\x74\x73\x41\x70\x70\x2e\x2e\x2e');
                log(_0x1a7d7c(0x131), _0x1a7d7c(0x1d6) + _0x2129d6['\x76\x65\x72\x73\x69\x6f\x6e']);
            } else {
                log('\x49\x4e\x46\x4f', _0x1a7d7c(0x110) + global['\x64\x62'][_0x1a7d7c(0x156)] + '\x29');
            }
        }
        if (_0xd5e448 === '\x6f\x70\x65\x6e') {
            const _0x179e3c = _0x143ad6[_0x1a7d7c(0x1ce)]['\x69\x64'][_0x1a7d7c(0x15d)]('\x3a')[0x0];
            log(_0x1a7d7c(0x131), _0x1a7d7c(0x137) + _0x179e3c);
            if (global['\x64\x62'][_0x1a7d7c(0x156)] === 0x0) {
                log(_0x1a7d7c(0x131), _0x1a7d7c(0x1a0));
            }
            global['\x64\x62'][_0x1a7d7c(0x156)] += 0x1;
            await delay(0x7d0);
            if (!global['\x64\x62'][_0x1a7d7c(0x166)]) {
                log(_0x1a7d7c(0x131), _0x1a7d7c(0xf7));
                const _0x40c093 = fs[_0x1a7d7c(0x1e6)](_0x1a7d7c(0x170))[_0x1a7d7c(0x128)](_0x5c036f => _0x5c036f['\x65\x6e\x64\x73\x57\x69\x74\x68'](_0x1a7d7c(0xf3)));
                for (const _0x21c469 of _0x40c093) {
                    try {
                        require('\x2e\x2f\x70\x6c\x75\x67\x69\x6e\x73\x2f\x65\x64\x6e\x75\x74\x2f' + _0x21c469);
                    } catch (_0x382ddd) {
                        log(_0x1a7d7c(0x191), _0x1a7d7c(0x187) + _0x21c469 + '\x3a\x20' + _0x382ddd[_0x1a7d7c(0x12b)]);
                    }
                }
                log('\x49\x4e\x46\x4f', _0x1a7d7c(0x19e));
                global['\x64\x62'][_0x1a7d7c(0x166)] = !![];
            }
            const _0x7242aa = await _0x2df5ff();
            let _0xfcec2c = _0x1a7d7c(0x190) + _0x2129d6[_0x1a7d7c(0x1c5)];
            if (_0x7242aa) {
                if (_0x7242aa !== _0x2129d6[_0x1a7d7c(0x1c5)]) {
                    _0xfcec2c += _0x1a7d7c(0x1df) + _0x7242aa + _0x1a7d7c(0x171);
                } else {
                    _0xfcec2c += _0x1a7d7c(0x1b4);
                }
            } else {
                _0xfcec2c += _0x1a7d7c(0x11d);
            }
            if (!fs[_0x1a7d7c(0x1b9)](_0x29b32b) || JSON[_0x1a7d7c(0x14f)](fs[_0x1a7d7c(0x1f1)](_0x29b32b, '\x75\x74\x66\x38'))[_0x1a7d7c(0xe5)] !== _0x179e3c) {
                const _0x5f14eb = {};
                _0x5f14eb['\x75\x73\x65\x72\x49\x64'] = _0x179e3c;
                fs[_0x1a7d7c(0x1f8)](_0x29b32b, JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x5f14eb));
                const _0x736b2d = {};
                _0x736b2d['\x74\x65\x78\x74'] = _0x1a7d7c(0x157) + global['\x70\x72\x65\x66\x69\x78'] + '\x0a\x0a\x48\x65\x6c\x6c\x6f\x21\x20\ud83d\udc4b\x20\x49\x27\x6d\x20\x41\x72\x63\x68\x20\x4d\x64\x2c\x20\x79\x6f\x75\x72\x20\x57\x68\x61\x74\x73\x41\x70\x70\x20\x62\x6f\x74\x2e\x20\x48\x65\x72\x65\x27\x73\x20\x68\x6f\x77\x20\x74\x6f\x20\x75\x73\x65\x20\x6d\x65\x3a\x0a\x0a\u2022\x20\x2a\x55\x73\x61\x67\x65\x3a\x2a\x20' + global['\x70\x72\x65\x66\x69\x78'] + _0x1a7d7c(0x12c) + global[_0x1a7d7c(0x13a)] + _0x1a7d7c(0x1e1) + global[_0x1a7d7c(0x13a)] + _0x1a7d7c(0x17e) + global[_0x1a7d7c(0x13a)] + _0x1a7d7c(0x1f2) + global[_0x1a7d7c(0xe8)] + _0x1a7d7c(0x119) + _0xfcec2c + _0x1a7d7c(0x115);
                _0x143ad6[_0x1a7d7c(0x17b)](_0x179e3c + '\x40\x73\x2e\x77\x68\x61\x74\x73\x61\x70\x70\x2e\x6e\x65\x74', _0x736b2d);
            }
        }
        if (_0xd5e448 === '\x63\x6c\x6f\x73\x65' && _0x18e855?.[_0x1a7d7c(0x1bb)]?.[_0x1a7d7c(0x1fb)]?.['\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65'] !== 0x191) {
            log('\x45\x52\x52\x4f\x52', '\x5b\x30\x5d\x20\x44\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64\x2e\x20\x52\x65\x73\x74\x61\x72\x74\x69\x6e\x67\x20\x62\x6f\x74\x2e\x2e\x2e');
            process[_0x1a7d7c(0x114)](0x1);
        }
    });
    _0x143ad6['\x65\x76']['\x6f\x6e']('\x63\x72\x65\x64\x73\x2e\x75\x70\x64\x61\x74\x65', _0x464fa2);
    _0x143ad6[_0x537c94(0x124)] = (_0x10c18b, _0x55f861, _0x5c3b91 = '', _0xe8766b) => _0x143ad6['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x10c18b, {
        '\x74\x65\x78\x74': _0x55f861,
        ..._0xe8766b
    }, { '\x71\x75\x6f\x74\x65\x64': _0x5c3b91 });
    _0x143ad6['\x73\x65\x6e\x64\x43\x6f\x6e\x74\x61\x63\x74'] = async (_0x22559c, _0x272f18, _0x35d117 = _0x537c94(0x136), _0x328b16 = '', _0x5e0810 = {}) => {
        const _0xb44f62 = _0x537c94;
        let _0x264e8d = [];
        for (let _0x5de19f of _0x272f18) {
            const _0xea068c = {};
            _0xea068c[_0xb44f62(0x1b5)] = botname;
            _0xea068c[_0xb44f62(0x182)] = _0xb44f62(0x112) + _0xb44f62(0x1f6) + ('\x4e\x3a\x3b' + botname + '\x3b\x3b\x3b\x0a') + (_0xb44f62(0x1de) + botname + '\x0a') + '\x4f\x52\x47\x3a\x6e\x75\x6c\x6c\x0a' + _0xb44f62(0x1a1) + (_0xb44f62(0x16a) + _0x5de19f + '\x3a' + _0x5de19f + '\x0a') + _0xb44f62(0x1ae) + (_0xb44f62(0xf4) + _0x35d117 + '\x0a') + (_0xb44f62(0x174) + botname + '\x0a') + _0xb44f62(0x1ac);
            _0x264e8d[_0xb44f62(0x1d5)](_0xea068c);
        }
        const _0x2e0a56 = {};
        _0x2e0a56[_0xb44f62(0x1b5)] = _0x264e8d['\x6c\x65\x6e\x67\x74\x68'] + _0xb44f62(0x1f5);
        _0x2e0a56[_0xb44f62(0x1cb)] = _0x264e8d;
        const _0xef1f50 = {
            '\x63\x6f\x6e\x74\x61\x63\x74\x73': _0x2e0a56,
            ..._0x5e0810
        };
        const _0x3f3757 = {};
        _0x3f3757['\x71\x75\x6f\x74\x65\x64'] = _0x328b16;
        _0x143ad6[_0xb44f62(0x17b)](_0x22559c, _0xef1f50, _0x3f3757);
    };
    _0x143ad6[_0x537c94(0x1c9)] = async _0x208d37 => {
        const _0x4b1dce = _0x537c94;
        let _0x35a3ad = (_0x208d37['\x6d\x73\x67'] || _0x208d37)[_0x4b1dce(0x1c0)] || '';
        let _0x4477b5 = _0x208d37[_0x4b1dce(0x141)] ? _0x208d37[_0x4b1dce(0x141)][_0x4b1dce(0x1f0)](/Message/gi, '') : _0x35a3ad['\x73\x70\x6c\x69\x74']('\x2f')[0x0];
        const _0x2ea246 = await downloadContentFromMessage(_0x208d37, _0x4477b5);
        let _0x183501 = Buffer[_0x4b1dce(0x1d3)]([]);
        for await (const _0x4833b2 of _0x2ea246) {
            _0x183501 = Buffer[_0x4b1dce(0x1a6)]([
                _0x183501,
                _0x4833b2
            ]);
        }
        return _0x183501;
    };
    _0x143ad6[_0x537c94(0x18a)] = async (_0x266a5a, _0x491786, _0x497fa1, _0x325127 = {}) => {
        const _0x327568 = _0x537c94;
        let _0x378ca3 = Buffer['\x69\x73\x42\x75\x66\x66\x65\x72'](_0x491786) ? _0x491786 : /^data:.?\/.?;base64,/i['\x74\x65\x73\x74'](_0x491786) ? Buffer[_0x327568(0x1d3)](_0x491786[_0x327568(0x15d)]`,`[0x1], _0x327568(0x14a)) : /^https?:\/\//[_0x327568(0x1ca)](_0x491786) ? await await getBuffer(_0x491786) : fs[_0x327568(0x1b9)](_0x491786) ? fs['\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63'](_0x491786) : Buffer[_0x327568(0x1e5)](0x0);
        let _0xf4a4e9;
        if (_0x325127 && (_0x325127[_0x327568(0x17c)] || _0x325127[_0x327568(0x154)])) {
            _0xf4a4e9 = await writeExifImg(_0x378ca3, _0x325127);
        } else {
            _0xf4a4e9 = await imageToWebp(_0x378ca3);
        }
        const _0x4b5191 = {};
        _0x4b5191[_0x327568(0x1d8)] = _0xf4a4e9;
        const _0x133f55 = {
            '\x73\x74\x69\x63\x6b\x65\x72': _0x4b5191,
            ..._0x325127
        };
        const _0xb30bc8 = {};
        _0xb30bc8[_0x327568(0x1c1)] = _0x497fa1;
        await _0x143ad6['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x266a5a, _0x133f55, _0xb30bc8);
        return _0xf4a4e9;
    };
    _0x143ad6[_0x537c94(0x1ad)] = async (_0x203444, _0x1de877, _0x22d481, _0x16e2e7 = {}) => {
        const _0x3c5567 = _0x537c94;
        let _0x573f44 = Buffer[_0x3c5567(0x152)](_0x1de877) ? _0x1de877 : /^data:.?\/.?;base64,/i[_0x3c5567(0x1ca)](_0x1de877) ? Buffer[_0x3c5567(0x1d3)](_0x1de877[_0x3c5567(0x15d)]`,`[0x1], _0x3c5567(0x14a)) : /^https?:\/\//[_0x3c5567(0x1ca)](_0x1de877) ? await await getBuffer(_0x1de877) : fs[_0x3c5567(0x1b9)](_0x1de877) ? fs[_0x3c5567(0x1f1)](_0x1de877) : Buffer[_0x3c5567(0x1e5)](0x0);
        let _0x45add2;
        if (_0x16e2e7 && (_0x16e2e7[_0x3c5567(0x17c)] || _0x16e2e7['\x61\x75\x74\x68\x6f\x72'])) {
            _0x45add2 = await writeExifVid(_0x573f44, _0x16e2e7);
        } else {
            _0x45add2 = await videoToWebp(_0x573f44);
        }
        const _0x569ef9 = {};
        _0x569ef9[_0x3c5567(0x1d8)] = _0x45add2;
        const _0x5b3646 = {
            '\x73\x74\x69\x63\x6b\x65\x72': _0x569ef9,
            ..._0x16e2e7
        };
        const _0x40efae = {};
        _0x40efae[_0x3c5567(0x1c1)] = _0x22d481;
        await _0x143ad6['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x203444, _0x5b3646, _0x40efae);
        return _0x45add2;
    };
    _0x143ad6['\x72\x65\x70\x6c\x79'] = (_0x25e58f, _0x4269b0 = '', _0xf94cd8, _0x3bb287) => {
        const _0x8073d8 = _0x537c94;
        return Buffer['\x69\x73\x42\x75\x66\x66\x65\x72'](_0x4269b0) ? this[_0x8073d8(0x1e0)](_0x25e58f, _0x4269b0, '\x66\x69\x6c\x65', '', _0xf94cd8, ![], _0x3bb287) : _0x143ad6[_0x8073d8(0x17b)](_0x25e58f, {
            ..._0x3bb287,
            '\x74\x65\x78\x74': _0x4269b0
        }, {
            '\x71\x75\x6f\x74\x65\x64': _0xf94cd8,
            ..._0x3bb287
        });
    };
    _0x143ad6[_0x537c94(0xf9)] = async (_0x32b1a9, _0x357091, _0x58dee8, _0x368fb3 = {}) => {
        const _0x21fe0a = _0x537c94;
        let {
            ext: _0x588a54,
            mime: _0x4e8cd6,
            data: _0x98b403
        } = await _0x143ad6[_0x21fe0a(0x1c3)](_0x357091);
        messageType = _0x4e8cd6[_0x21fe0a(0x15d)]('\x2f')[0x0];
        pase = messageType['\x72\x65\x70\x6c\x61\x63\x65'](_0x21fe0a(0x1bf), _0x21fe0a(0x1bc)) || messageType;
        const _0x529711 = {
            ['' + pase]: _0x98b403,
            '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0x4e8cd6,
            ..._0x368fb3
        };
        const _0x41ff2d = {};
        _0x41ff2d[_0x21fe0a(0x1c1)] = _0x58dee8;
        return await _0x143ad6[_0x21fe0a(0x17b)](_0x32b1a9, _0x529711, _0x41ff2d);
    };
    _0x143ad6['\x67\x65\x74\x46\x69\x6c\x65'] = async (_0x24a158, _0x402ae3) => {
        const _0x33caae = _0x537c94;
        let _0x362e42;
        let _0x3d88f5 = Buffer[_0x33caae(0x152)](_0x24a158) ? _0x24a158 : /^data:.*?\/.*?;base64,/i[_0x33caae(0x1ca)](_0x24a158) ? Buffer[_0x33caae(0x1d3)](_0x24a158[_0x33caae(0x15d)]('\x2c')[0x1], '\x62\x61\x73\x65\x36\x34') : /^https?:\/\//[_0x33caae(0x1ca)](_0x24a158) ? await (_0x362e42 = await getBuffer(_0x24a158)) : fs[_0x33caae(0x1b9)](_0x24a158) ? (filename = _0x24a158, fs[_0x33caae(0x1f1)](_0x24a158)) : typeof _0x24a158 === '\x73\x74\x72\x69\x6e\x67' ? _0x24a158 : Buffer[_0x33caae(0x1e5)](0x0);
        const _0x3b0e57 = {};
        _0x3b0e57[_0x33caae(0x15c)] = '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6f\x63\x74\x65\x74\x2d\x73\x74\x72\x65\x61\x6d';
        _0x3b0e57[_0x33caae(0x183)] = '\x2e\x62\x69\x6e';
        let _0x2855e2 = await FileType[_0x33caae(0x153)](_0x3d88f5) || _0x3b0e57;
        filename = path[_0x33caae(0x1b0)](__dirname, _0x33caae(0x108) + new Date()['\x67\x65\x74\x54\x69\x6d\x65']() + '\x2e' + _0x2855e2[_0x33caae(0x183)]);
        if (_0x3d88f5 && _0x402ae3)
            fs[_0x33caae(0x12f)][_0x33caae(0x1aa)](filename, _0x3d88f5);
        return {
            '\x72\x65\x73': _0x362e42,
            '\x66\x69\x6c\x65\x6e\x61\x6d\x65': filename,
            '\x73\x69\x7a\x65': await getSizeMedia(_0x3d88f5),
            ..._0x2855e2,
            '\x64\x61\x74\x61': _0x3d88f5
        };
    };
    _0x143ad6[_0x537c94(0x1e0)] = async (_0x3f8047, _0x44f028, _0x361bf9 = '', _0xaa9bd6 = '', _0xef278f, _0x2d63e3 = ![], _0x12d447 = {}) => {
        const _0x2fce7d = _0x537c94;
        let _0x52f5ea = await _0x143ad6[_0x2fce7d(0x1c3)](_0x44f028, !![]);
        let {
            res: _0xc13e5b,
            data: _0x119f7c,
            filename: _0x2a17a3
        } = _0x52f5ea;
        if (_0xc13e5b && _0xc13e5b[_0x2fce7d(0x16e)] !== 0xc8 || _0x119f7c[_0x2fce7d(0x193)] <= 0x10000) {
            try {
                throw { '\x6a\x73\x6f\x6e': JSON[_0x2fce7d(0x14f)](_0x119f7c[_0x2fce7d(0x1b7)]()) };
            } catch (_0x1f1217) {
                if (_0x1f1217[_0x2fce7d(0x176)])
                    throw _0x1f1217[_0x2fce7d(0x176)];
            }
        }
        const _0x3e0d85 = {};
        _0x3e0d85[_0x2fce7d(0x1e2)] = _0x361bf9;
        let _0x53aa9e = _0x3e0d85;
        if (_0xef278f)
            _0x53aa9e[_0x2fce7d(0x1c1)] = _0xef278f;
        if (!_0x52f5ea)
            _0x12d447[_0x2fce7d(0x1c4)] = !![];
        let _0x22244d = '', _0x1d1c43 = _0x52f5ea[_0x2fce7d(0x15c)], _0x58b664;
        if (/webp/[_0x2fce7d(0x1ca)](_0x52f5ea['\x6d\x69\x6d\x65']) || /image/[_0x2fce7d(0x1ca)](_0x52f5ea[_0x2fce7d(0x15c)]) && _0x12d447[_0x2fce7d(0x12a)])
            _0x22244d = _0x2fce7d(0x1f9);
        else if (/image/[_0x2fce7d(0x1ca)](_0x52f5ea[_0x2fce7d(0x15c)]) || /webp/['\x74\x65\x73\x74'](_0x52f5ea['\x6d\x69\x6d\x65']) && _0x12d447['\x61\x73\x49\x6d\x61\x67\x65'])
            _0x22244d = _0x2fce7d(0x172);
        else if (/video/[_0x2fce7d(0x1ca)](_0x52f5ea[_0x2fce7d(0x15c)]))
            _0x22244d = _0x2fce7d(0xf5);
        else if (/audio/[_0x2fce7d(0x1ca)](_0x52f5ea[_0x2fce7d(0x15c)]))
            _0x58b664 = await (_0x2d63e3 ? toPTT : toAudio)(_0x119f7c, _0x52f5ea[_0x2fce7d(0x183)]), _0x119f7c = _0x58b664[_0x2fce7d(0x168)], _0x2a17a3 = _0x58b664[_0x2fce7d(0x1e2)], _0x22244d = _0x2fce7d(0x120), _0x1d1c43 = '\x61\x75\x64\x69\x6f\x2f\x6f\x67\x67\x3b\x20\x63\x6f\x64\x65\x63\x73\x3d\x6f\x70\x75\x73';
        else
            _0x22244d = '\x64\x6f\x63\x75\x6d\x65\x6e\x74';
        if (_0x12d447[_0x2fce7d(0x1c4)])
            _0x22244d = _0x2fce7d(0x1bc);
        const _0x3cbdd7 = {};
        _0x3cbdd7['\x75\x72\x6c'] = _0x2a17a3;
        const _0x27095c = { ..._0x12d447 };
        _0x27095c['\x63\x61\x70\x74\x69\x6f\x6e'] = _0xaa9bd6;
        _0x27095c[_0x2fce7d(0x158)] = _0x2d63e3;
        _0x27095c[_0x22244d] = _0x3cbdd7;
        _0x27095c[_0x2fce7d(0x1c0)] = _0x1d1c43;
        let _0x5be99e = _0x27095c;
        let _0x3e628a;
        try {
            const _0x7f9de4 = {
                ..._0x53aa9e,
                ..._0x12d447
            };
            _0x3e628a = await _0x143ad6['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x3f8047, _0x5be99e, _0x7f9de4);
        } catch (_0x54e80c) {
            console[_0x2fce7d(0x1bb)](_0x54e80c);
            _0x3e628a = null;
        } finally {
            const _0x42e1d5 = { ..._0x5be99e };
            _0x42e1d5[_0x22244d] = _0x119f7c;
            const _0x3b27e9 = {
                ..._0x53aa9e,
                ..._0x12d447
            };
            if (!_0x3e628a)
                _0x3e628a = await _0x143ad6[_0x2fce7d(0x17b)](_0x3f8047, _0x42e1d5, _0x3b27e9);
            return _0x3e628a;
        }
    };
    const _0x30f0b1 = global[_0x537c94(0x164)] || _0x537c94(0x144);
    _0x143ad6['\x65\x76']['\x6f\x6e']('\x67\x72\x6f\x75\x70\x2d\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x73\x2e\x75\x70\x64\x61\x74\x65', async _0x58f852 => {
        const _0x4a75d7 = _0x537c94;
        try {
            const _0x594aac = _0x58f852['\x69\x64'];
            const _0x4e26b1 = await _0x143ad6[_0x4a75d7(0x11a)](_0x594aac);
            const _0x145cc0 = _0x4e26b1['\x64\x65\x73\x63'] || '\x4e\x6f\x20\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x2e';
            const _0x442468 = _0x4e26b1['\x73\x75\x62\x6a\x65\x63\x74'];
            const _0x19012c = _0x4e26b1[_0x4a75d7(0x184)]['\x6c\x65\x6e\x67\x74\x68'];
            const _0x4dc268 = moment['\x74\x7a'](_0x30f0b1)[_0x4a75d7(0x15a)]('\x44\x44\x2f\x4d\x4d\x2f\x59\x59\x59\x59');
            const _0x15898e = moment['\x74\x7a'](_0x30f0b1)[_0x4a75d7(0x15a)]('\x48\x48\x3a\x6d\x6d\x3a\x73\x73');
            const _0x1c9ead = global['\x64\x62'][_0x4a75d7(0xfa)]?.[_0x594aac]?.[_0x4a75d7(0xe7)] === !![] || process[_0x4a75d7(0xea)][_0x4a75d7(0x101)] === _0x4a75d7(0x123);
            const _0x52bfc9 = global['\x64\x62']['\x67\x72\x6f\x75\x70\x73']?.[_0x594aac]?.[_0x4a75d7(0x1c7)] === !![] || process[_0x4a75d7(0xea)]['\x47\x4f\x4f\x44\x42\x59\x45'] === _0x4a75d7(0x123);
            for (const _0x3c8af6 of _0x58f852['\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x73']) {
                let _0x185ed5;
                try {
                    _0x185ed5 = await _0x143ad6[_0x4a75d7(0x19f)](_0x3c8af6, '\x69\x6d\x61\x67\x65');
                } catch {
                    _0x185ed5 = '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x64\x6e\x2e\x70\x69\x78\x61\x62\x61\x79\x2e\x63\x6f\x6d\x2f\x70\x68\x6f\x74\x6f\x2f\x32\x30\x31\x35\x2f\x31\x30\x2f\x30\x35\x2f\x32\x32\x2f\x33\x37\x2f\x62\x6c\x61\x6e\x6b\x2d\x70\x72\x6f\x66\x69\x6c\x65\x2d\x70\x69\x63\x74\x75\x72\x65\x2d\x39\x37\x33\x34\x36\x30\x5f\x39\x36\x30\x5f\x37\x32\x30\x2e\x70\x6e\x67';
                }
                const _0x2d31de = _0x3c8af6['\x73\x70\x6c\x69\x74']('\x40')[0x0][_0x4a75d7(0x15d)]('\x3a')[0x0];
                if (_0x58f852['\x61\x63\x74\x69\x6f\x6e'] === _0x4a75d7(0x135) && _0x1c9ead) {
                    let _0x409b9b = global['\x64\x62'][_0x4a75d7(0xfa)]?.[_0x594aac]?.[_0x4a75d7(0x18c)] || process[_0x4a75d7(0xea)]['\x57\x45\x4c\x43\x4f\x4d\x45\x5f\x4d\x53\x47'] || _0x4a75d7(0x1fd);
                    const _0xd30159 = _0x409b9b['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x4a75d7(0x105));
                    const _0x250c8e = _0x409b9b['\x72\x65\x70\x6c\x61\x63\x65'](/@user/gi, '\x40' + _0x2d31de)[_0x4a75d7(0x1f0)](/@group/gi, _0x442468)[_0x4a75d7(0x1f0)](/@desc/gi, _0x145cc0)[_0x4a75d7(0x1f0)](/@date/gi, _0x4dc268)[_0x4a75d7(0x1f0)](/@time/gi, _0x15898e)['\x72\x65\x70\x6c\x61\x63\x65'](/@pp/gi, '');
                    if (_0xd30159) {
                        const _0x128f35 = {};
                        _0x128f35[_0x4a75d7(0x1d8)] = _0x185ed5;
                        const _0x3efdc5 = {};
                        _0x3efdc5['\x69\x6d\x61\x67\x65'] = _0x128f35;
                        _0x3efdc5[_0x4a75d7(0x1fa)] = _0x250c8e;
                        _0x3efdc5[_0x4a75d7(0x11b)] = [_0x3c8af6];
                        await _0x143ad6[_0x4a75d7(0x17b)](_0x594aac, _0x3efdc5);
                    } else {
                        const _0x470b20 = {};
                        _0x470b20[_0x4a75d7(0xf8)] = _0x250c8e;
                        _0x470b20[_0x4a75d7(0x11b)] = [_0x3c8af6];
                        await _0x143ad6['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x594aac, _0x470b20);
                    }
                } else if (_0x58f852[_0x4a75d7(0x100)] === _0x4a75d7(0x1cc) && _0x52bfc9) {
                    let _0x2086b4 = global['\x64\x62'][_0x4a75d7(0xfa)]?.[_0x594aac]?.[_0x4a75d7(0x1d9)] || process[_0x4a75d7(0xea)][_0x4a75d7(0x196)] || _0x4a75d7(0x1f3);
                    const _0x2a9610 = _0x2086b4[_0x4a75d7(0x1d4)](_0x4a75d7(0x105));
                    const _0xdf17bc = _0x2086b4['\x72\x65\x70\x6c\x61\x63\x65'](/@user/gi, '\x40' + _0x2d31de)['\x72\x65\x70\x6c\x61\x63\x65'](/@group/gi, _0x442468)['\x72\x65\x70\x6c\x61\x63\x65'](/@desc/gi, _0x145cc0)[_0x4a75d7(0x1f0)](/@date/gi, _0x4dc268)[_0x4a75d7(0x1f0)](/@time/gi, _0x15898e)['\x72\x65\x70\x6c\x61\x63\x65'](/@pp/gi, '');
                    if (_0x2a9610) {
                        const _0x206fe0 = {};
                        _0x206fe0['\x75\x72\x6c'] = _0x185ed5;
                        const _0x435884 = {};
                        _0x435884[_0x4a75d7(0x172)] = _0x206fe0;
                        _0x435884[_0x4a75d7(0x1fa)] = _0xdf17bc;
                        _0x435884[_0x4a75d7(0x11b)] = [_0x3c8af6];
                        await _0x143ad6[_0x4a75d7(0x17b)](_0x594aac, _0x435884);
                    } else {
                        const _0x554807 = {};
                        _0x554807[_0x4a75d7(0xf8)] = _0xdf17bc;
                        _0x554807[_0x4a75d7(0x11b)] = [_0x3c8af6];
                        await _0x143ad6[_0x4a75d7(0x17b)](_0x594aac, _0x554807);
                    }
                }
                if (global['\x64\x62'][_0x4a75d7(0xfa)]?.[_0x594aac]?.['\x65\x76\x65\x6e\x74\x73']) {
                    if (_0x58f852[_0x4a75d7(0x100)] === _0x4a75d7(0x1db)) {
                        await _0x143ad6[_0x4a75d7(0x17b)](_0x594aac, {
                            '\x74\x65\x78\x74': '\x40' + _0x2d31de + _0x4a75d7(0x10a) + _0x58f852[_0x4a75d7(0x154)][_0x4a75d7(0x15d)]('\x40')[0x0],
                            '\x6d\x65\x6e\x74\x69\x6f\x6e\x73': [
                                _0x58f852[_0x4a75d7(0x154)],
                                _0x3c8af6
                            ]
                        });
                    } else if (_0x58f852[_0x4a75d7(0x100)] === '\x64\x65\x6d\x6f\x74\x65') {
                        await _0x143ad6['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x594aac, {
                            '\x74\x65\x78\x74': '\x40' + _0x2d31de + '\x20\x68\x61\x73\x20\x62\x65\x65\x6e\x20\x64\x65\x6d\x6f\x74\x65\x64\x20\x62\x79\x20\x40' + _0x58f852[_0x4a75d7(0x154)][_0x4a75d7(0x15d)]('\x40')[0x0],
                            '\x6d\x65\x6e\x74\x69\x6f\x6e\x73': [
                                _0x58f852[_0x4a75d7(0x154)],
                                _0x3c8af6
                            ]
                        });
                    }
                }
            }
        } catch (_0x272a02) {
            log(_0x4a75d7(0x191), _0x4a75d7(0xfb) + _0x272a02);
        }
    });
    _0x143ad6['\x65\x76']['\x6f\x6e'](_0x537c94(0x1cf), async _0x4805bd => {
        const _0x27d499 = _0x537c94;
        try {
            if (!_0x4805bd?.[0x0] || _0x4805bd[0x0][_0x27d499(0x16e)] !== _0x27d499(0xe3))
                return;
            const _0x4369cf = _0x4805bd[0x0]['\x66\x72\x6f\x6d'];
            const _0x18b9bf = global['\x64\x62']?.[_0x27d499(0x117)]?.['\x61\x6e\x74\x69\x63\x61\x6c\x6c\x32'] && _0x27d499(0x1e4) || global['\x64\x62']?.[_0x27d499(0x117)]?.[_0x27d499(0x106)] && _0x27d499(0x10e) || process['\x65\x6e\x76']['\x43\x41\x4c\x4c']?.[_0x27d499(0x167)]();
            if (!_0x18b9bf)
                return;
            const _0x5088ed = _0x18b9bf === _0x27d499(0x1e4) ? '\x40' + _0x4369cf[_0x27d499(0x15d)]('\x40')[0x0] + _0x27d499(0x125) : '\x40' + _0x4369cf[_0x27d499(0x15d)]('\x40')[0x0] + _0x27d499(0x109);
            const _0x46da20 = {};
            _0x46da20['\x74\x65\x78\x74'] = _0x5088ed;
            _0x46da20[_0x27d499(0x11b)] = [_0x4369cf];
            await _0x143ad6['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x143ad6[_0x27d499(0x1ce)]['\x69\x64'], _0x46da20);
            await _0x143ad6['\x72\x65\x6a\x65\x63\x74\x43\x61\x6c\x6c'](_0x4805bd[0x0]['\x69\x64'], _0x4369cf);
            if (_0x18b9bf === '\x62\x6c\x6f\x63\x6b') {
                await sleep(0x7d0);
                await _0x143ad6[_0x27d499(0x175)](_0x4369cf, _0x27d499(0x1e4));
            }
        } catch (_0x51aae4) {
            log(_0x27d499(0x191), _0x27d499(0x14d) + _0x51aae4[_0x27d499(0x12b)]);
        }
    });
    _0x143ad6[_0x537c94(0x159)] = async (_0x2685e4, _0x2e89f7, _0x2ca767 = !![]) => {
        const _0x3a4f71 = _0x537c94;
        let _0x306e65 = _0x2685e4['\x6d'] ? _0x2685e4['\x6d'] : _0x2685e4;
        let _0x36c424 = (_0x2685e4['\x6d'] || _0x2685e4)['\x6d\x69\x6d\x65\x74\x79\x70\x65'] || '';
        let _0x110145 = _0x2685e4[_0x3a4f71(0x141)] ? _0x2685e4[_0x3a4f71(0x141)][_0x3a4f71(0x1f0)](/Message/gi, '') : _0x36c424['\x73\x70\x6c\x69\x74']('\x2f')[0x0];
        const _0x457bfa = await downloadContentFromMessage(_0x306e65, _0x110145);
        let _0x1961b3 = Buffer[_0x3a4f71(0x1d3)]([]);
        for await (const _0x39d6ac of _0x457bfa) {
            _0x1961b3 = Buffer[_0x3a4f71(0x1a6)]([
                _0x1961b3,
                _0x39d6ac
            ]);
        }
        let _0x18384e = await FileType[_0x3a4f71(0x153)](_0x1961b3);
        trueFileName = _0x2ca767 ? _0x2e89f7 + '\x2e' + _0x18384e[_0x3a4f71(0x183)] : _0x2e89f7;
        const _0x14da2f = '\x2e\x2f\x74\x6d\x70\x2f';
        if (!fs[_0x3a4f71(0x1b9)](_0x14da2f)) {
            fs[_0x3a4f71(0x19b)](_0x14da2f);
        }
        const _0x4b465e = _0x14da2f + '\x2f' + trueFileName;
        await fs[_0x3a4f71(0x1f8)](_0x4b465e, _0x1961b3);
        return _0x4b465e;
    };
    return _0x143ad6;
}
async function startBot() {
    const _0x2c65b4 = _0x4312a0;
    try {
        let _0x18cfee = global['\x73\x65\x73\x73\x69\x6f\x6e'];
        if (!_0x18cfee) {
            log(_0x2c65b4(0x191), _0x2c65b4(0x102));
            return;
        }
        if (!/^Arch[_~]|^Ednut~/[_0x2c65b4(0x1ca)](_0x18cfee)) {
            log(_0x2c65b4(0x191), _0x2c65b4(0xf2) + global[_0x2c65b4(0xe8)]);
            return;
        }
        const _0xf5cea = _0x18cfee[_0x2c65b4(0x1f0)](/^Arch[_~]|^Ednut~/, '');
        const _0x22bced = await axios[_0x2c65b4(0x10f)](_0x2c65b4(0x15e) + _0xf5cea + _0x2c65b4(0x1bd));
        const _0x186be3 = __dirname + _0x2c65b4(0x10c);
        fs[_0x2c65b4(0x1f8)](_0x186be3, JSON[_0x2c65b4(0x1c6)](_0x22bced[_0x2c65b4(0x168)]));
        startBotz();
    } catch (_0x34a58b) {
        log(_0x2c65b4(0x191), '\x45\x6e\x63\x6f\x75\x6e\x74\x65\x72\x65\x64\x20\x45\x72\x72\x6f\x72\x3a\x20' + (_0x34a58b?.[_0x2c65b4(0x15b)] || _0x34a58b));
    }
}
startBot();
process['\x6f\x6e'](_0x4312a0(0xef), function (_0x66855a) {
    const _0x4eb0d0 = _0x4312a0;
    const _0x4bf754 = String(_0x66855a || '');
    const _0x157331 = [
        '\x63\x6f\x6e\x66\x6c\x69\x63\x74',
        _0x4eb0d0(0x122),
        _0x4eb0d0(0x16d),
        _0x4eb0d0(0x1e9),
        _0x4eb0d0(0xfe),
        '\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x43\x6c\x6f\x73\x65\x64',
        _0x4eb0d0(0x1a7),
        _0x4eb0d0(0x199),
        _0x4eb0d0(0x188),
        _0x4eb0d0(0x130),
        _0x4eb0d0(0x1da),
        _0x4eb0d0(0x162),
        _0x4eb0d0(0x181),
        _0x4eb0d0(0x142),
        _0x4eb0d0(0x13b)
    ];
    if (_0x157331[_0x4eb0d0(0xe4)](_0x4c09c => _0x4bf754[_0x4eb0d0(0x167)]()['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x4c09c[_0x4eb0d0(0x167)]()))) {
        return;
    }
    log('\x45\x52\x52\x4f\x52', _0x4eb0d0(0x133) + (_0x66855a?.[_0x4eb0d0(0x15b)] || _0x4bf754));
});
const express = require('\x65\x78\x70\x72\x65\x73\x73');
function _0x2e9c(_0x1e22f4, _0x57fa84) {
    const _0xc11d98 = _0xc11d();
    _0x2e9c = function (_0x2e9c11, _0x333806) {
        _0x2e9c11 = _0x2e9c11 - 0xe3;
        let _0x56fc88 = _0xc11d98[_0x2e9c11];
        if (_0x2e9c['\x46\x46\x4e\x71\x74\x41'] === undefined) {
            var _0x33826a = function (_0x47b131) {
                const _0x3ad653 = '\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
                let _0x4fba08 = '';
                let _0x499e1c = '';
                for (let _0x55778e = 0x0, _0x6ef89b, _0x2ac1c5, _0x34c491 = 0x0; _0x2ac1c5 = _0x47b131['\x63\x68\x61\x72\x41\x74'](_0x34c491++); ~_0x2ac1c5 && (_0x6ef89b = _0x55778e % 0x4 ? _0x6ef89b * 0x40 + _0x2ac1c5 : _0x2ac1c5, _0x55778e++ % 0x4) ? _0x4fba08 += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x6ef89b >> (-0x2 * _0x55778e & 0x6)) : 0x0) {
                    _0x2ac1c5 = _0x3ad653['\x69\x6e\x64\x65\x78\x4f\x66'](_0x2ac1c5);
                }
                for (let _0x3a551d = 0x0, _0x3e5624 = _0x4fba08['\x6c\x65\x6e\x67\x74\x68']; _0x3a551d < _0x3e5624; _0x3a551d++) {
                    _0x499e1c += '\x25' + ('\x30\x30' + _0x4fba08['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x3a551d)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
                }
                return decodeURIComponent(_0x499e1c);
            };
            _0x2e9c['\x74\x43\x56\x65\x68\x6c'] = _0x33826a;
            _0x1e22f4 = arguments;
            _0x2e9c['\x46\x46\x4e\x71\x74\x41'] = !![];
        }
        const _0x268c0e = _0xc11d98[0x0];
        const _0x4513eb = _0x2e9c11 + _0x268c0e;
        const _0x22a147 = _0x1e22f4[_0x4513eb];
        if (!_0x22a147) {
            _0x56fc88 = _0x2e9c['\x74\x43\x56\x65\x68\x6c'](_0x56fc88);
            _0x1e22f4[_0x4513eb] = _0x56fc88;
        } else {
            _0x56fc88 = _0x22a147;
        }
        return _0x56fc88;
    };
    return _0x2e9c(_0x1e22f4, _0x57fa84);
}
const app = express();
const port = process[_0x4312a0(0xea)][_0x4312a0(0x1d0)] || 0xbb8;
app[_0x4312a0(0x10f)]('\x2f', (_0x4647f1, _0x3d7429) => _0x3d7429['\x73\x65\x6e\x64']('\x42\x6f\x74\x20\x69\x73\x20\x72\x75\x6e\x6e\x69\x6e\x67\x21'));
app[_0x4312a0(0x11c)](port);