const _0x324594 = _0x4fe0;
(function (_0x58bc71, _0x586fea) {
    const _0x3409c2 = _0x4fe0;
    const _0xb49e43 = _0x58bc71();
    while (!![]) {
        try {
            const _0x49ddca = parseInt(_0x3409c2(0x1d4)) / 0x1 + -parseInt(_0x3409c2(0x199)) / 0x2 * (-parseInt(_0x3409c2(0x171)) / 0x3) + parseInt(_0x3409c2(0x1c6)) / 0x4 + -parseInt(_0x3409c2(0x22e)) / 0x5 * (parseInt(_0x3409c2(0x16f)) / 0x6) + parseInt(_0x3409c2(0x219)) / 0x7 + parseInt(_0x3409c2(0x1bf)) / 0x8 + -parseInt(_0x3409c2(0x1ae)) / 0x9;
            if (_0x49ddca === _0x586fea) {
                break;
            } else {
                _0xb49e43['push'](_0xb49e43['shift']());
            }
        } catch (_0x285bae) {
            _0xb49e43['push'](_0xb49e43['shift']());
        }
    }
}(_0x3c90, 0xd27cd));
const originalLog = console[_0x324594(0x1ff)];
const originalError = console[_0x324594(0x28c)];
const originalDebug = console[_0x324594(0x21b)];
const originalStdout = process[_0x324594(0x291)][_0x324594(0x26f)];
const originalStderr = process[_0x324594(0x270)][_0x324594(0x26f)];
function isNoisy(_0x3f393a) {
    const _0x47ee65 = _0x324594;
    return typeof _0x3f393a === _0x47ee65(0x1c9) && (_0x3f393a[_0x47ee65(0x1b2)](_0x47ee65(0x1c0)) || _0x3f393a[_0x47ee65(0x1b2)](_0x47ee65(0x284)) || _0x3f393a['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x47ee65(0x268)) || _0x3f393a[_0x47ee65(0x1b2)](_0x47ee65(0x174)) || _0x3f393a[_0x47ee65(0x1b2)]('\x44\x65\x63\x72\x79\x70\x74\x65\x64\x20\x6d\x65\x73\x73\x61\x67\x65\x20\x77\x69\x74\x68\x20\x63\x6c\x6f\x73\x65\x64\x20\x73\x65\x73\x73\x69\x6f\x6e\x2e') || _0x3f393a[_0x47ee65(0x1b2)]('\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x64\x65\x63\x72\x79\x70\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x20\x77\x69\x74\x68\x20\x61\x6e\x79\x20\x6b\x6e\x6f\x77\x6e\x20\x73\x65\x73\x73\x69\x6f\x6e') || _0x3f393a[_0x47ee65(0x1b2)](_0x47ee65(0x1a6)) || _0x3f393a['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x47ee65(0x186)) || _0x3f393a[_0x47ee65(0x1b2)](_0x47ee65(0x26a)));
}
console[_0x324594(0x1ff)] = (..._0x23e46f) => {
    const _0x304d22 = _0x324594;
    if (isNoisy(_0x23e46f[0x0]))
        return;
    originalLog[_0x304d22(0x1e3)](console, _0x23e46f);
};
console[_0x324594(0x28c)] = (..._0x1bbbc6) => {
    const _0x2b3059 = _0x324594;
    if (isNoisy(_0x1bbbc6[0x0]))
        return;
    originalError[_0x2b3059(0x1e3)](console, _0x1bbbc6);
};
console[_0x324594(0x21b)] = (..._0xac617c) => {
    const _0x2794b1 = _0x324594;
    if (isNoisy(_0xac617c[0x0]))
        return;
    originalDebug[_0x2794b1(0x1e3)](console, _0xac617c);
};
process[_0x324594(0x291)][_0x324594(0x26f)] = (_0x226316, _0x36235f, _0x566092) => {
    const _0x43340d = _0x324594;
    if (isNoisy(_0x226316))
        return !![];
    return originalStdout[_0x43340d(0x264)](process[_0x43340d(0x291)], _0x226316, _0x36235f, _0x566092);
};
process[_0x324594(0x270)][_0x324594(0x26f)] = (_0x410fc8, _0x61562d, _0xc712a2) => {
    const _0x40c7a5 = _0x324594;
    if (isNoisy(_0x410fc8))
        return !![];
    return originalStderr[_0x40c7a5(0x264)](process[_0x40c7a5(0x270)], _0x410fc8, _0x61562d, _0xc712a2);
};
require(_0x324594(0x21f));
const chalk = require(_0x324594(0x25f));
const handleMessage = require('\x2e\x2f\x68\x61\x6e\x64\x6c\x65\x72\x2e\x6a\x73');
function _0x3c90() {
    const _0x1ffdf4 = [
        '\x42\x77\x4c\x54\x7a\x71',
        '\x76\x4d\x66\x53\x44\x77\x75\x47\x42\x4d\x39\x30\x69\x67\x7a\x56\x44\x77\x35\x4b',
        '\x7a\x77\x35\x4b\x43\x31\x44\x50\x44\x67\x47',
        '\x75\x32\x76\x5a\x43\x32\x4c\x56\x42\x49\x62\x6a\x72\x63\x62\x55\x42\x33\x71\x47\x7a\x4d\x39\x31\x42\x4d\x71\x55\x69\x66\x62\x53\x7a\x77\x66\x5a\x7a\x73\x62\x48\x7a\x67\x71\x47\x42\x32\x35\x4c\x69\x67\x4c\x55\x69\x67\x6e\x56\x42\x4d\x7a\x50\x7a\x59\x35\x51\x43\x57',
        '\x76\x30\x76\x6d\x71\x30\x39\x6e\x72\x76\x39\x6e\x75\x30\x43',
        '\x6e\x64\x71\x32\x6d\x5a\x61\x34\x6d\x77\x66\x66\x43\x4c\x6e\x4d\x7a\x47',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x79\x32\x39\x53\x42\x33\x69',
        '\x7a\x67\x76\x49\x44\x77\x43',
        '\x7a\x32\x76\x30\x72\x67\x66\x30\x7a\x71',
        '\x75\x65\x39\x73\x76\x61',
        '\x6c\x33\x72\x54\x43\x63\x39\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55\x6c\x32\x6e\x59\x7a\x77\x72\x5a\x6c\x4d\x50\x5a\x42\x32\x34',
        '\x6c\x49\x39\x4a\x42\x32\x35\x4d\x41\x77\x43\x55\x41\x4e\x6d',
        '\x43\x4d\x76\x51\x7a\x77\x6e\x30',
        '\x42\x67\x4c\x5a\x44\x63\x4f\x6b\x34\x4f\x63\x49\x69\x65\x44\x4c\x44\x63\x62\x4f\x7a\x77\x58\x57\x69\x67\x66\x49\x42\x33\x76\x30\x69\x67\x65\x47\x79\x32\x39\x54\x42\x77\x66\x55\x7a\x64\x4f\x47\x6b\x47',
        '\x71\x32\x66\x53\x42\x63\x62\x69\x79\x77\x35\x4b\x42\x67\x76\x59\x6f\x49\x61',
        '\x63\x47\x50\x73\x7a\x77\x44\x48\x43\x4d\x72\x5a\x6c\x61\x52\x57\x4e\x7a\x6f\x75\x38\x6a\x32\x74\x52\x46\x63\x44\x4b\x37\x46\x57\x4e\x7a\x6f\x2b\x38\x6a\x32\x74\x56\x71',
        '\x42\x67\x4c\x5a\x44\x67\x76\x55',
        '\x41\x78\x6e\x62\x43\x4e\x6a\x48\x45\x71',
        '\x44\x67\x39\x74\x44\x68\x6a\x50\x42\x4d\x43',
        '\x7a\x4d\x4c\x53\x7a\x77\x35\x48\x42\x77\x75',
        '\x43\x33\x72\x48\x44\x68\x76\x5a\x71\x67\x6a\x59\x42\x32\x66\x4b\x79\x32\x66\x5a\x44\x61',
        '\x6c\x49\x39\x57\x42\x68\x76\x4e\x41\x77\x35\x5a\x6c\x32\x76\x4b\x42\x4e\x76\x30',
        '\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x78\x6d\x55\x44\x78\x62\x5a\x7a\x78\x6a\x30',
        '\x43\x4d\x76\x4a\x42\x32\x35\x55\x7a\x77\x6e\x30',
        '\x44\x67\x4c\x54\x7a\x78\x50\x56\x42\x4d\x75',
        '\x42\x4d\x39\x30\x6c\x77\x66\x31\x44\x67\x48\x56\x43\x4d\x4c\x36\x7a\x77\x71',
        '\x6d\x74\x76\x6d\x77\x65\x31\x73\x7a\x4b\x79',
        '\x7a\x4e\x6a\x56\x42\x71',
        '\x43\x67\x66\x59\x43\x32\x75',
        '\x74\x4d\x38\x47\x7a\x67\x76\x5a\x79\x33\x6a\x50\x43\x68\x72\x50\x42\x32\x34\x55',
        '\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x56\x42\x49\x35\x31\x43\x67\x72\x48\x44\x67\x75',
        '\x42\x67\x4c\x5a\x44\x61\x52\x49\x47\x6b\x69\x47\x6b\x4b\x48\x4c\x42\x68\x61\x36\x6b\x49\x61',
        '\x41\x78\x72\x4c\x42\x74\x65\x55\x76\x65\x76\x6d\x6f\x33\x44\x48\x41\x77\x71\x39',
        '\x43\x68\x6a\x56\x42\x77\x39\x30\x7a\x71',
        '\x72\x76\x6a\x73\x74\x31\x69',
        '\x79\x78\x76\x4b\x41\x77\x38',
        '\x43\x78\x76\x4c\x43\x33\x72\x50\x42\x32\x34',
        '\x43\x4d\x31\x4b\x41\x78\x6a\x74\x45\x77\x35\x4a',
        '\x43\x32\x76\x55\x7a\x66\x72\x4c\x45\x68\x71',
        '\x42\x32\x7a\x4d',
        '\x79\x78\x6e\x65\x42\x32\x6e\x31\x42\x77\x76\x55\x44\x61',
        '\x44\x77\x35\x4a\x79\x78\x76\x4e\x41\x68\x72\x66\x45\x67\x6e\x4c\x43\x68\x72\x50\x42\x32\x34',
        '\x79\x32\x39\x55\x79\x32\x66\x30',
        '\x72\x77\x35\x4a\x42\x33\x76\x55\x44\x67\x76\x59\x7a\x77\x71\x47\x72\x78\x6a\x59\x42\x33\x69\x36\x69\x61',
        '\x7a\x78\x48\x57\x43\x4d\x76\x5a\x43\x57',
        '\x44\x4d\x76\x59\x43\x32\x4c\x56\x42\x47',
        '\x41\x78\x72\x4c\x42\x74\x65\x55\x77\x63\x31\x62\x71\x4b\x58\x48\x79\x4d\x76\x53\x6f\x4c\x62\x56\x42\x4e\x6e\x4c\x42\x61\x4f',
        '\x79\x78\x6e\x74\x44\x67\x4c\x4a\x41\x32\x76\x59',
        '\x69\x67\x6e\x48\x42\x67\x58\x4c\x7a\x63\x62\x48\x42\x4d\x71\x47\x44\x67\x48\x4c\x69\x67\x6e\x48\x42\x67\x57\x47\x44\x32\x66\x5a\x69\x63\x50\x59\x7a\x77\x50\x4c\x79\x33\x72\x4c\x7a\x63\x4f',
        '\x44\x67\x76\x5a\x44\x61',
        '\x43\x67\x4c\x55\x42\x57',
        '\x79\x77\x58\x53\x42\x32\x6d',
        '\x76\x32\x48\x48\x44\x68\x6e\x62\x43\x68\x61',
        '\x76\x77\x6a\x31\x42\x4e\x72\x31',
        '\x69\x63\x4a\x49\x4e\x69\x75\x47\x76\x78\x61\x47\x44\x67\x38\x47\x7a\x67\x66\x30\x7a\x73\x4b',
        '\x79\x78\x76\x4b\x41\x77\x38\x56\x42\x32\x44\x4e\x6f\x59\x62\x4a\x42\x32\x72\x4c\x79\x33\x6d\x39\x42\x33\x62\x31\x43\x57',
        '\x6c\x33\x6a\x48\x44\x57',
        '\x69\x67\x6e\x56\x42\x4e\x72\x48\x79\x33\x72\x5a',
        '\x79\x32\x58\x56\x43\x32\x75',
        '\x43\x4d\x76\x51\x7a\x77\x6e\x30\x71\x32\x66\x53\x42\x61',
        '\x44\x78\x6e\x4c\x43\x47',
        '\x71\x68\x6d\x55\x44\x32\x48\x48\x44\x68\x6e\x48\x43\x68\x61\x55\x42\x4d\x76\x30',
        '\x43\x33\x62\x53\x41\x78\x71',
        '\x7a\x4d\x4c\x53\x44\x67\x76\x59',
        '\x41\x4e\x6e\x56\x42\x47',
        '\x6c\x49\x39\x30\x42\x78\x61\x56\x43\x33\x72\x56\x43\x4d\x75',
        '\x74\x4a\x4f\x37',
        '\x43\x78\x76\x56\x44\x67\x76\x4b',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x7a\x67\x66\x30\x79\x77\x6a\x48\x43\x32\x75\x56\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x56\x42\x49\x35\x51\x43\x32\x39\x55',
        '\x43\x32\x76\x55\x7a\x65\x4c\x54\x79\x77\x44\x4c\x71\x78\x6e\x74\x44\x67\x4c\x4a\x41\x32\x76\x59',
        '\x79\x33\x6a\x4c\x79\x78\x72\x4c\x73\x77\x35\x30\x7a\x78\x6a\x4d\x79\x77\x6e\x4c',
        '\x77\x5a\x62\x44\x69\x65\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x4c\x7a\x63\x62\x30\x42\x5a\x4f\x47',
        '\x7a\x32\x76\x30\x74\x77\x39\x55\x44\x67\x47',
        '\x43\x67\x66\x59\x44\x67\x4c\x4a\x41\x78\x62\x48\x42\x4e\x72\x5a',
        '\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x76\x72\x50\x42\x77\x76\x5a\x44\x67\x66\x54\x43\x61',
        '\x79\x32\x48\x48\x42\x67\x53',
        '\x7a\x67\x76\x54\x42\x33\x72\x4c',
        '\x43\x67\x66\x4a\x41\x32\x35\x48\x42\x77\x75',
        '\x7a\x78\x48\x30',
        '\x43\x4d\x76\x48\x7a\x65\x7a\x50\x42\x67\x76\x74\x45\x77\x35\x4a',
        '\x79\x32\x66\x53\x42\x61',
        '\x77\x63\x31\x78\x71\x73\x31\x63\x73\x76\x4f\x54\x72\x65\x76\x74\x71\x31\x6a\x6a\x75\x66\x72\x6a\x74\x30\x34\x36',
        '\x79\x78\x76\x30\x42\x33\x6a\x4c\x79\x32\x39\x59\x7a\x67\x4c\x55\x7a\x57',
        '\x7a\x78\x48\x50\x43\x33\x72\x5a\x75\x33\x4c\x55\x79\x57',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x5a\x44\x67\x66\x53\x7a\x73\x62\x56\x43\x67\x76\x55\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34',
        '\x42\x67\x39\x4b\x79\x78\x6e\x4f',
        '\x75\x32\x76\x5a\x43\x32\x4c\x56\x42\x4b\x6e\x50\x43\x67\x48\x4c\x43\x49\x35\x4b\x7a\x77\x6e\x59\x45\x78\x62\x30\x76\x32\x4c\x30\x41\x66\x6e\x4c\x43\x33\x6e\x50\x42\x32\x35\x5a',
        '\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x4e\x41\x78\x6e\x30\x6c\x4d\x44\x50\x44\x67\x48\x31\x79\x4e\x76\x5a\x7a\x78\x6a\x4a\x42\x32\x35\x30\x7a\x77\x35\x30\x6c\x4d\x6e\x56\x42\x73\x39\x4c\x7a\x67\x35\x31\x44\x64\x61\x57\x6d\x73\x38',
        '\x42\x77\x76\x54\x42\x33\x6a\x35\x74\x32\x35\x53\x45\x71',
        '\x44\x67\x76\x34\x44\x61',
        '\x43\x32\x76\x5a\x43\x32\x4c\x56\x42\x47',
        '\x44\x33\x6a\x50\x44\x67\x75',
        '\x43\x33\x72\x4b\x7a\x78\x6a\x59',
        '\x42\x78\x72\x35\x43\x67\x75',
        '\x79\x32\x39\x55\x7a\x4d\x58\x50\x79\x33\x71',
        '\x44\x33\x6a\x50\x44\x67\x76\x67\x41\x77\x58\x4c',
        '\x41\x4d\x39\x50\x42\x47',
        '\x76\x4d\x76\x59\x43\x32\x4c\x56\x42\x4a\x4f\x47\x44\x47',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x42\x78\x4c\x4d\x44\x77\x35\x4a',
        '\x7a\x32\x76\x30',
        '\x43\x4d\x76\x4a\x42\x33\x6a\x4b\x41\x77\x35\x4e',
        '\x7a\x33\x6a\x56\x44\x78\x62\x5a',
        '\x76\x4b\x76\x73\x75\x30\x4c\x70\x74\x4a\x4f\x5a\x6c\x4a\x61\x6b',
        '\x41\x77\x31\x48\x7a\x32\x75',
        '\x71\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x56\x42\x49\x62\x64\x42\x67\x39\x5a\x7a\x77\x71',
        '\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71',
        '\x43\x4d\x76\x4b',
        '\x79\x78\x66\x31\x79\x71',
        '\x79\x77\x35\x30\x41\x77\x6e\x48\x42\x67\x57\x59',
        '\x79\x32\x48\x48\x44\x68\x6d',
        '\x44\x4d\x66\x53\x44\x77\x75',
        '\x7a\x33\x6a\x56\x44\x78\x62\x6e\x7a\x78\x72\x48\x7a\x67\x66\x30\x79\x71',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x56\x43\x67\x76\x55\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34',
        '\x79\x78\x6a\x4e\x44\x47',
        '\x75\x31\x72\x62\x76\x66\x76\x74\x78\x30\x76\x6e\x74\x30\x50\x6a',
        '\x41\x32\x76\x35',
        '\x7a\x67\x66\x30\x79\x71',
        '\x7a\x32\x76\x30\x74\x4d\x66\x54\x7a\x71',
        '\x7a\x67\x4c\x5a\x43\x67\x58\x48\x45\x75\x35\x48\x42\x77\x75',
        '\x44\x67\x66\x4e\x78\x32\x35\x48\x42\x77\x75',
        '\x7a\x78\x6a\x59\x42\x33\x69',
        '\x76\x77\x35\x4c\x45\x68\x62\x4c\x79\x33\x72\x4c\x7a\x63\x62\x4f\x79\x77\x35\x4b\x43\x32\x48\x48\x41\x32\x75\x47\x7a\x78\x6a\x59\x42\x33\x69',
        '\x43\x68\x6a\x56\x42\x77\x4c\x5a\x7a\x78\x6d',
        '\x44\x67\x39\x6d\x42\x33\x44\x4c\x43\x4b\x6e\x48\x43\x32\x75',
        '\x7a\x32\x76\x30\x74\x4e\x76\x54\x79\x4d\x76\x59',
        '\x43\x33\x72\x4b\x42\x33\x76\x30',
        '\x41\x78\x6e\x63\x44\x77\x7a\x4d\x7a\x78\x69',
        '\x42\x4d\x39\x33',
        '\x76\x65\x4c\x75\x74\x65\x75\x36\x63\x47',
        '\x6c\x49\x39\x57\x79\x77\x6e\x52\x79\x77\x44\x4c\x6c\x4d\x50\x5a\x42\x32\x34',
        '\x6c\x4d\x6a\x50\x42\x47',
        '\x79\x78\x76\x30\x42\x33\x72\x35\x43\x67\x4c\x55\x7a\x57',
        '\x43\x4d\x76\x48\x7a\x68\x6e\x33',
        '\x6d\x5a\x6d\x57\x6e\x64\x79\x35\x6d\x4b\x58\x53\x72\x66\x50\x55\x7a\x57',
        '\x79\x33\x6a\x4c\x7a\x68\x6d\x55\x44\x78\x62\x4b\x79\x78\x72\x4c',
        '\x6d\x5a\x4c\x67\x77\x75\x35\x49\x74\x77\x69',
        '\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x4a\x7a\x67\x34\x55\x43\x67\x4c\x34\x79\x77\x6a\x48\x45\x73\x35\x4a\x42\x32\x30\x56\x43\x67\x48\x56\x44\x67\x38\x56\x6d\x4a\x61\x58\x6e\x73\x38\x58\x6d\x63\x38\x57\x6e\x73\x38\x59\x6d\x49\x38\x5a\x6e\x59\x39\x49\x42\x67\x66\x55\x41\x59\x31\x57\x43\x4d\x39\x4d\x41\x77\x58\x4c\x6c\x78\x62\x50\x79\x33\x72\x31\x43\x4d\x75\x54\x6f\x74\x43\x5a\x6e\x64\x79\x57\x78\x5a\x4b\x32\x6d\x66\x38\x33\x6d\x4a\x61\x55\x43\x67\x35\x4e',
        '\x7a\x33\x6a\x56\x44\x78\x61\x54\x43\x67\x66\x59\x44\x67\x4c\x4a\x41\x78\x62\x48\x42\x4e\x72\x5a\x6c\x4e\x76\x57\x7a\x67\x66\x30\x7a\x71',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55',
        '\x7a\x67\x76\x4a\x42\x32\x72\x4c\x73\x4d\x4c\x4b',
        '\x79\x4d\x4c\x55\x7a\x61',
        '\x43\x32\x76\x55\x7a\x66\x7a\x50\x7a\x67\x76\x56\x71\x78\x6e\x74\x44\x67\x4c\x4a\x41\x32\x76\x59',
        '\x41\x77\x35\x57\x44\x78\x71',
        '\x7a\x32\x76\x30\x72\x4d\x4c\x53\x7a\x71',
        '\x7a\x77\x72\x55\x44\x78\x71',
        '\x71\x4d\x39\x30\x69\x67\x4c\x5a\x69\x68\x6a\x31\x42\x4d\x35\x50\x42\x4d\x43\x48',
        '\x71\x68\x62\x57',
        '\x77\x5a\x62\x44\x69\x66\x62\x53\x44\x77\x44\x50\x42\x4e\x6d\x47\x41\x77\x35\x5a\x44\x67\x66\x53\x42\x67\x76\x4b\x6c\x47',
        '\x72\x33\x6a\x56\x44\x78\x61\x47\x76\x78\x62\x4b\x79\x78\x72\x4c\x6f\x49\x61',
        '\x43\x4d\x76\x48\x7a\x67\x72\x50\x43\x4c\x6e\x35\x42\x4d\x6d',
        '\x7a\x4d\x4c\x53\x7a\x73\x31\x30\x45\x78\x62\x4c',
        '\x43\x4d\x76\x48\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x32\x76\x5a',
        '\x7a\x4d\x58\x56\x42\x33\x69',
        '\x42\x4d\x39\x4b\x7a\x73\x31\x4a\x79\x77\x6e\x4f\x7a\x71',
        '\x42\x4d\x39\x4b\x7a\x73\x31\x4d\x7a\x78\x72\x4a\x41\x61',
        '\x77\x63\x31\x78\x71\x73\x31\x63\x73\x76\x4f\x54\x74\x4b\x66\x6e\x72\x74\x4f',
        '\x75\x32\x76\x5a\x43\x32\x4c\x56\x42\x4b\x6e\x50\x43\x67\x48\x4c\x43\x49\x35\x4b\x42\x30\x72\x4c\x79\x33\x6a\x35\x43\x68\x72\x78\x41\x67\x4c\x5a\x43\x67\x76\x59\x74\x77\x76\x5a\x43\x32\x66\x4e\x7a\x71',
        '\x79\x77\x6e\x30\x41\x77\x39\x55',
        '\x72\x75\x35\x65\x6f\x4c\x7a\x64\x71\x76\x6a\x65',
        '\x77\x5a\x62\x44\x69\x65\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x4c\x7a\x63\x65',
        '\x43\x33\x76\x49\x41\x4d\x76\x4a\x44\x61',
        '\x44\x33\x6a\x50\x44\x67\x76\x67\x41\x77\x58\x4c\x75\x33\x4c\x55\x79\x57',
        '\x43\x33\x72\x4b\x76\x66\x72\x6d',
        '\x79\x4d\x58\x31\x7a\x71',
        '\x72\x4b\x34\x36',
        '\x72\x78\x7a\x4c\x42\x4e\x72\x66\x42\x77\x4c\x30\x44\x67\x76\x59',
        '\x71\x32\x58\x56\x43\x32\x4c\x55\x7a\x59\x62\x5a\x44\x67\x66\x53\x7a\x73\x62\x56\x43\x67\x76\x55\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34\x47\x7a\x4d\x39\x59\x69\x67\x35\x4c\x44\x59\x62\x56\x44\x78\x72\x4e\x42\x32\x4c\x55\x7a\x59\x62\x57\x43\x4d\x76\x52\x7a\x78\x4b\x47\x79\x4e\x76\x55\x7a\x67\x58\x4c',
        '\x42\x77\x4c\x54\x7a\x78\x72\x35\x43\x67\x75',
        '\x77\x5a\x62\x44\x69\x65\x66\x59\x79\x32\x47\x47\x76\x4d\x76\x59\x43\x32\x4c\x56\x42\x4a\x4f\x47\x44\x47',
        '\x43\x4d\x76\x54\x42\x33\x7a\x4c',
        '\x69\x67\x66\x32\x79\x77\x4c\x53\x79\x77\x6a\x53\x7a\x73\x4b',
        '\x79\x78\x48\x50\x42\x33\x6d',
        '\x69\x63\x4a\x49\x4d\x51\x64\x56\x55\x69\x38\x47\x76\x77\x35\x48\x79\x4d\x58\x4c\x69\x68\x72\x56\x69\x67\x6e\x4f\x7a\x77\x6e\x52\x69\x67\x7a\x56\x43\x49\x62\x31\x43\x67\x72\x48\x44\x67\x76\x5a\x6b\x71',
        '\x42\x67\x39\x48\x7a\x67\x76\x4b\x75\x67\x58\x31\x7a\x32\x4c\x55\x43\x57',
        '\x72\x78\x6a\x59\x42\x33\x69\x36\x69\x68\x6a\x4c\x79\x77\x71\x47\x72\x75\x6e\x70\x74\x4b\x35\x73\x72\x76\x6e\x66\x76\x61',
        '\x6d\x4a\x71\x30\x6e\x64\x71\x59\x74\x67\x48\x56\x74\x77\x72\x57',
        '\x79\x78\x7a\x48\x41\x77\x58\x48\x79\x4d\x58\x4c',
        '\x44\x78\x62\x4b\x79\x78\x72\x4c\x71\x4d\x58\x56\x79\x32\x54\x74\x44\x67\x66\x30\x44\x78\x6d',
        '\x43\x32\x76\x30\x44\x32\x76\x53\x79\x32\x39\x54\x7a\x71',
        '\x38\x6a\x2b\x4e\x55\x73\x62\x64\x42\x67\x76\x48\x42\x4d\x76\x4b\x69\x61',
        '\x79\x78\x62\x57\x42\x67\x4c\x4a\x79\x78\x72\x50\x42\x32\x34\x56\x42\x32\x6e\x30\x7a\x78\x71\x54\x43\x33\x72\x59\x7a\x77\x66\x54',
        '\x69\x63\x4a\x49\x4d\x51\x64\x56\x55\x69\x38\x47\x74\x4d\x76\x33\x69\x68\x7a\x4c\x43\x4e\x6e\x50\x42\x32\x34\x47\x44\x47',
        '\x43\x68\x72\x30',
        '\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x78\x6d',
        '\x6c\x49\x39\x53\x41\x77\x69\x56\x7a\x67\x66\x30\x79\x77\x6a\x48\x43\x32\x75',
        '\x43\x4d\x76\x48\x7a\x67\x58\x50\x42\x4d\x75',
        '\x43\x33\x72\x48\x79\x32\x53',
        '\x42\x77\x39\x54\x7a\x77\x35\x30\x6c\x78\x72\x50\x42\x77\x76\x36\x42\x32\x35\x4c',
        '\x74\x77\x76\x5a\x43\x32\x66\x4e\x7a\x75\x6e\x56\x44\x77\x35\x30\x7a\x78\x6a\x66\x43\x4e\x6a\x56\x43\x4a\x4f\x47\x73\x32\x76\x35\x69\x68\x76\x5a\x7a\x77\x71\x47\x79\x77\x58\x59\x7a\x77\x66\x4b\x45\x73\x62\x56\x43\x49\x62\x55\x7a\x78\x7a\x4c\x43\x49\x62\x4d\x41\x77\x58\x53\x7a\x77\x71',
        '\x43\x68\x76\x59\x43\x67\x58\x4c',
        '\x43\x4d\x76\x48\x79\x33\x71',
        '\x43\x32\x76\x59\x44\x4d\x76\x59',
        '\x78\x32\x6a\x56\x44\x77\x35\x4b',
        '\x43\x32\x76\x55\x7a\x65\x7a\x50\x42\x67\x75',
        '\x44\x78\x6a\x53',
        '\x43\x32\x76\x55\x7a\x66\x62\x59\x7a\x78\x6e\x4c\x42\x4d\x6e\x4c\x76\x78\x62\x4b\x79\x78\x72\x4c',
        '\x6d\x74\x79\x58\x6d\x64\x43\x31\x6e\x5a\x62\x71\x74\x4b\x4c\x68\x7a\x78\x79',
        '\x6f\x5a\x53\x37\x63\x47',
        '\x43\x33\x72\x48\x44\x68\x76\x5a\x71\x32\x39\x4b\x7a\x71',
        '\x44\x32\x4c\x30\x41\x67\x39\x31\x44\x65\x6e\x56\x42\x4e\x72\x48\x79\x33\x71',
        '\x41\x77\x35\x4a\x42\x68\x76\x4b\x7a\x78\x6d',
        '\x79\x78\x76\x30\x42\x33\x6a\x4c\x79\x77\x71',
        '\x43\x32\x76\x55\x7a\x65\x31\x4c\x7a\x67\x4c\x48',
        '\x7a\x67\x39\x33\x42\x4d\x58\x56\x79\x77\x72\x62\x42\x4d\x72\x74\x79\x78\x7a\x4c\x74\x77\x76\x4b\x41\x77\x66\x6e\x7a\x78\x6e\x5a\x79\x77\x44\x4c',
        '\x71\x67\x48\x48\x43\x67\x4b\x56\x79\x4d\x39\x56\x42\x71',
        '\x43\x33\x72\x50\x79\x32\x54\x4c\x43\x47',
        '\x44\x32\x76\x53\x79\x32\x39\x54\x7a\x71',
        '\x43\x32\x76\x59\x41\x77\x66\x53\x41\x78\x50\x4c\x74\x71',
        '\x79\x4d\x66\x5a\x7a\x74\x79\x30',
        '\x73\x75\x35\x67\x74\x57',
        '\x44\x4d\x76\x59\x41\x77\x7a\x50\x7a\x77\x72\x6f\x79\x77\x31\x4c',
        '\x7a\x67\x76\x5a\x79\x57',
        '\x7a\x78\x48\x50\x44\x66\x62\x59\x42\x32\x6e\x4c\x43\x33\x6d',
        '\x6d\x74\x69\x5a\x6d\x5a\x71\x59\x6f\x64\x48\x53\x41\x30\x35\x53\x7a\x77\x75',
        '\x71\x4d\x66\x4b\x69\x65\x31\x62\x71\x57',
        '\x77\x5a\x62\x44\x69\x66\x6a\x4c\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x55\x7a\x59\x34\x55\x6c\x49\x61\x4f',
        '\x74\x30\x35\x6d\x73\x75\x35\x66',
        '\x43\x4d\x66\x55\x7a\x67\x39\x54',
        '\x43\x4d\x76\x57\x42\x67\x66\x4a\x7a\x71',
        '\x42\x67\x76\x55\x7a\x33\x72\x4f',
        '\x6d\x74\x79\x34\x6f\x64\x43\x58\x6d\x4d\x58\x53\x43\x78\x50\x73\x43\x71',
        '\x44\x68\x6a\x31\x7a\x71',
        '\x7a\x4d\x39\x59\x72\x77\x66\x4a\x41\x61',
        '\x43\x33\x72\x59\x41\x77\x35\x4e',
        '\x71\x67\x6e\x56\x42\x67\x39\x59\x43\x59\x39\x4a\x42\x32\x58\x56\x43\x4e\x6d\x56\x43\x32\x66\x4d\x7a\x71',
        '\x79\x4d\x58\x56\x79\x32\x53',
        '\x44\x67\x39\x76\x43\x68\x62\x4c\x43\x4b\x6e\x48\x43\x32\x75',
        '\x43\x32\x76\x55\x7a\x65\x31\x4c\x43\x33\x6e\x48\x7a\x32\x75',
        '\x7a\x4d\x4c\x53\x7a\x71',
        '\x43\x32\x76\x55\x7a\x65\x6e\x56\x42\x4e\x72\x48\x79\x33\x71',
        '\x79\x78\x76\x30\x41\x67\x39\x59',
        '\x77\x5a\x62\x44\x69\x65\x72\x50\x43\x32\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x4c\x7a\x63\x34\x47\x75\x4d\x76\x5a\x44\x67\x66\x59\x44\x67\x4c\x55\x7a\x59\x62\x49\x42\x33\x71\x55\x6c\x49\x34',
        '\x73\x77\x35\x32\x79\x77\x58\x50\x7a\x63\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55\x69\x65\x4c\x65\x6c\x49\x62\x71\x42\x67\x76\x48\x43\x32\x75\x47\x43\x32\x6e\x48\x42\x49\x62\x48\x69\x67\x35\x4c\x44\x59\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55\x69\x67\x7a\x59\x42\x32\x30\x47',
        '\x7a\x78\x7a\x4c\x42\x4e\x72\x5a',
        '\x6d\x74\x65\x5a\x6f\x64\x65\x5a\x44\x68\x66\x79\x45\x4c\x44\x59',
        '\x6c\x4d\x50\x5a',
        '\x43\x32\x6e\x48\x42\x47',
        '\x43\x67\x66\x4b\x75\x33\x72\x48\x43\x4e\x71',
        '\x71\x4b\x76\x68\x73\x75\x34\x36\x76\x4b\x6e\x62\x75\x4b\x71\x6b',
        '\x7a\x4e\x6a\x56\x42\x75\x6a\x31\x7a\x4d\x7a\x4c\x43\x47',
        '\x42\x77\x76\x55\x44\x67\x4c\x56\x42\x4e\x6d',
        '\x6c\x49\x39\x30\x42\x78\x61\x56',
        '\x43\x32\x4c\x53\x7a\x77\x35\x30',
        '\x63\x55\x6b\x61\x4f\x49\x62\x6a\x42\x4e\x62\x31\x44\x63\x62\x50\x42\x49\x62\x35\x42\x33\x76\x59\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34\x47\x73\x75\x71\x47\x44\x4d\x66\x59\x41\x77\x66\x49\x42\x67\x75\x47\x63\x55\x6b\x61\x4f\x49\x62\x73\x7a\x78\x6e\x30\x79\x78\x6a\x30\x69\x67\x7a\x59\x42\x32\x30\x47\x41\x67\x39\x5a\x44\x63\x64\x57\x4e\x35\x6b\x41\x63\x47\x4f',
        '\x6c\x49\x39\x30\x42\x78\x61\x56\x43\x32\x76\x5a\x43\x32\x4c\x56\x42\x47',
        '\x42\x68\x6e\x30\x79\x78\x72\x74\x45\x77\x35\x4a',
        '\x41\x78\x6e\x65\x41\x78\x6a\x4c\x79\x33\x72\x56\x43\x4e\x4b',
        '\x79\x78\x62\x57\x42\x67\x4c\x4a\x79\x78\x72\x50\x42\x32\x34',
        '\x79\x32\x39\x55\x44\x67\x66\x4a\x44\x68\x6d',
        '\x79\x78\x62\x57\x42\x68\x4b',
        '\x6c\x49\x39\x30\x42\x78\x61\x56\x7a\x67\x66\x30\x79\x71',
        '\x44\x77\x35\x48\x44\x4d\x66\x50\x42\x67\x66\x49\x42\x67\x75',
        '\x77\x31\x76\x55\x79\x32\x66\x31\x7a\x32\x48\x30\x69\x65\x76\x34\x79\x32\x76\x57\x44\x67\x4c\x56\x42\x4c\x30\x47',
        '\x72\x65\x71\x56\x74\x75\x30\x56\x77\x76\x4c\x7a\x77\x71',
        '\x79\x4d\x66\x4b\x69\x68\x6e\x4c\x43\x33\x6e\x50\x42\x32\x34',
        '\x79\x33\x4c\x48\x42\x47',
        '\x43\x32\x76\x30\x44\x67\x4c\x55\x7a\x33\x6d',
        '\x42\x77\x66\x57',
        '\x79\x32\x66\x57\x44\x67\x4c\x56\x42\x47',
        '\x75\x31\x72\x62\x76\x66\x76\x74',
        '\x6c\x49\x39\x48\x42\x67\x57\x56\x7a\x4e\x76\x55\x79\x33\x72\x50\x42\x32\x34\x55\x41\x4e\x6d',
        '\x43\x32\x39\x54\x7a\x71',
        '\x43\x32\x58\x50\x79\x32\x75',
        '\x43\x68\x6a\x4c\x7a\x4d\x4c\x34',
        '\x77\x5a\x62\x44\x69\x65\x6e\x56\x42\x4d\x35\x4c\x79\x33\x72\x50\x42\x4d\x43\x47\x44\x67\x38\x47\x76\x32\x48\x48\x44\x68\x6e\x62\x43\x68\x61\x55\x6c\x49\x34',
        '\x7a\x67\x76\x4d\x79\x78\x76\x53\x44\x65\x31\x48\x45\x65\x58\x50\x43\x33\x72\x4c\x42\x4d\x76\x59\x43\x57',
        '\x43\x33\x72\x59\x41\x77\x35\x4e\x41\x77\x7a\x35',
        '\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x48\x43\x67\x4b\x55\x7a\x32\x4c\x30\x41\x68\x76\x49\x6c\x4d\x6e\x56\x42\x73\x39\x59\x7a\x78\x62\x56\x43\x59\x39\x66\x7a\x67\x35\x31\x44\x64\x61\x57\x6d\x73\x39\x62\x43\x4d\x6e\x4f\x6c\x77\x31\x4b\x6c\x33\x6a\x4c\x42\x67\x76\x48\x43\x32\x76\x5a\x6c\x32\x58\x48\x44\x67\x76\x5a\x44\x61',
        '\x42\x4d\x66\x54\x7a\x71',
        '\x41\x67\x76\x53\x43\x63\x62\x53\x41\x78\x6e\x30\x6b\x47\x4f\x6b\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x76\x4b\x69\x67\x35\x56\x44\x63\x62\x59\x7a\x78\x6e\x57\x42\x32\x35\x4b\x41\x77\x35\x4e\x70\x59\x64\x57\x4e\x36\x73\x4d\x69\x67\x58\x4c\x44\x63\x62\x54\x7a\x73\x62\x4f\x7a\x77\x58\x57\x69\x63\x34\x55\x6c\x47\x4f\x6b\x34\x4f\x63\x49\x69\x65\x44\x4c\x44\x63\x62\x48\x69\x67\x35\x4c\x44\x59\x62\x5a\x7a\x78\x6e\x5a\x41\x77\x39\x55\x69\x67\x7a\x59\x42\x32\x30\x47',
        '\x43\x67\x66\x30\x41\x61',
        '\x7a\x77\x35\x32',
        '\x76\x30\x76\x6d\x71\x30\x39\x6e\x72\x71',
        '\x69\x67\x6e\x48\x42\x67\x58\x4c\x7a\x63\x62\x48\x42\x4d\x71\x47\x44\x32\x66\x5a\x69\x63\x50\x49\x42\x67\x39\x4a\x41\x32\x76\x4b\x6b\x47',
        '\x77\x5a\x62\x44\x69\x65\x7a\x48\x41\x77\x58\x4c\x7a\x63\x62\x30\x42\x59\x62\x53\x42\x32\x66\x4b\x69\x68\x62\x53\x44\x77\x44\x50\x42\x49\x61',
        '\x43\x4d\x76\x54\x42\x33\x7a\x4c\x71\x77\x58\x53\x74\x67\x4c\x5a\x44\x67\x76\x55\x7a\x78\x6a\x5a',
        '\x71\x30\x66\x6d\x74\x61',
        '\x42\x67\x39\x4e',
        '\x6d\x4a\x61\x55\x6d\x63\x34\x57\x6e\x61',
        '\x42\x78\x6e\x4e',
        '\x42\x77\x66\x4e\x7a\x77\x35\x30\x79\x71',
        '\x79\x32\x39\x55\x42\x4d\x76\x4a\x44\x67\x4c\x55\x7a\x57',
        '\x43\x4d\x76\x48\x7a\x61',
        '\x43\x4d\x76\x54\x42\x33\x72\x4c\x73\x4d\x4c\x4b',
        '\x42\x33\x76\x30\x43\x68\x76\x30',
        '\x41\x77\x35\x30\x7a\x78\x6a\x55\x79\x78\x72\x50\x42\x32\x35\x48\x42\x61',
        '\x42\x33\x62\x30\x43\x57',
        '\x76\x67\x4c\x54\x7a\x77\x71\x47\x74\x33\x76\x30',
        '\x71\x77\x7a\x59\x41\x77\x6e\x48\x6c\x30\x58\x48\x7a\x32\x39\x5a',
        '\x44\x4d\x6e\x48\x43\x4d\x71',
        '\x7a\x67\x39\x4a\x44\x77\x31\x4c\x42\x4e\x71',
        '\x77\x5a\x62\x44\x69\x65\x4c\x55\x43\x33\x72\x48\x42\x67\x58\x50\x42\x4d\x43\x47\x43\x67\x58\x31\x7a\x32\x4c\x55\x43\x59\x34\x55\x6c\x47',
        '\x43\x32\x76\x30\x7a\x32\x39\x56\x7a\x67\x6a\x35\x7a\x71',
        '\x42\x33\x62\x4c\x42\x47',
        '\x79\x78\x44\x4c\x43\x32\x39\x54\x7a\x73\x31\x57\x41\x67\x39\x55\x7a\x77\x35\x31\x42\x77\x6a\x4c\x43\x47',
        '\x7a\x4d\x39\x59\x42\x77\x66\x30',
        '\x43\x33\x72\x4b\x41\x77\x34',
        '\x44\x68\x6a\x50\x42\x71'
    ];
    _0x3c90 = function () {
        return _0x1ffdf4;
    };
    return _0x3c90();
}
global['\x6c\x6f\x67'] = function (_0x51bba3, _0x465838) {
    const _0x5d9b3d = _0x324594;
    const _0x1a56b8 = new Date();
    const _0x3c7469 = _0x1a56b8[_0x5d9b3d(0x21c)]()['\x74\x6f\x53\x74\x72\x69\x6e\x67']()['\x70\x61\x64\x53\x74\x61\x72\x74'](0x2, '\x30');
    const _0x25c9fe = (_0x1a56b8[_0x5d9b3d(0x25c)]() + 0x1)[_0x5d9b3d(0x226)]()[_0x5d9b3d(0x1d7)](0x2, '\x30');
    const _0x2c739f = _0x1a56b8['\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72']()[_0x5d9b3d(0x226)]()[_0x5d9b3d(0x1f0)](-0x2);
    const _0x2631cd = _0x1a56b8['\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x54\x69\x6d\x65\x53\x74\x72\x69\x6e\x67']('\x65\x6e\x2d\x47\x42') + ('\x20' + _0x3c7469 + '\x2d' + _0x25c9fe + '\x2d' + _0x2c739f);
    const _0x4ad8de = _0x51bba3[_0x5d9b3d(0x1cc)]();
    const _0x4e6f28 = _0x4ad8de === '\x49\x4e\x46\x4f' ? chalk[_0x5d9b3d(0x1e9)](_0x4ad8de) : _0x4ad8de === '\x45\x52\x52\x4f\x52' ? chalk[_0x5d9b3d(0x27e)](_0x4ad8de) : _0x4ad8de;
    console[_0x5d9b3d(0x1ff)](_0x4e6f28 + '\x20\x5b' + _0x2631cd + '\x5d\x3a', chalk[_0x5d9b3d(0x18d)](_0x465838));
};
require(_0x324594(0x1d3))[_0x324594(0x18f)][_0x324594(0x1f3)] = 0x64;
const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    makeInMemoryStore,
    jidDecode,
    downloadContentFromMessage,
    delay
} = require('\x40\x77\x68\x69\x73\x6b\x65\x79\x73\x6f\x63\x6b\x65\x74\x73\x2f\x62\x61\x69\x6c\x65\x79\x73');
const pino = require(_0x324594(0x246));
const {delArrSave} = require('\x2e\x2f\x6c\x69\x62\x2f\x61\x72\x72\x66\x75\x6e\x63\x74\x69\x6f\x6e\x2e\x6a\x73');
const fs = require('\x66\x73');
const path = require(_0x324594(0x1f8));
const {Boom} = require(_0x324594(0x1b6));
const yargs = require('\x79\x61\x72\x67\x73\x2f\x79\x61\x72\x67\x73');
const _ = require(_0x324594(0x269));
const colors = require(_0x324594(0x1ca));
const NodeCache = require(_0x324594(0x183));
const moment = require(_0x324594(0x1a5));
const PhoneNumber = require(_0x324594(0x210));
const FileType = require(_0x324594(0x180));
const readline = require(_0x324594(0x1a3));
const {smsg, imageToWebp, videoToWebp, sleep, writeExif, toPTT, toAudio, toVideo, getBuffer, getSizeMedia} = require(_0x324594(0x276));
const {getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture} = require(_0x324594(0x1ee));
const axios = require(_0x324594(0x195));
const {color} = require(_0x324594(0x21a));
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
const randomemoji = moji[Math[_0x324594(0x182)](Math['\x72\x61\x6e\x64\x6f\x6d']() * moji[_0x324594(0x1c5)])];
const listcolor = [
    _0x324594(0x27f),
    _0x324594(0x27e),
    _0x324594(0x18d),
    _0x324594(0x1a7),
    _0x324594(0x202)
];
const randomcolor = listcolor[Math['\x66\x6c\x6f\x6f\x72'](Math[_0x324594(0x1c3)]() * listcolor[_0x324594(0x1c5)])];
const randomcolor2 = listcolor[Math[_0x324594(0x182)](Math[_0x324594(0x1c3)]() * listcolor[_0x324594(0x1c5)])];
const randomcolor3 = listcolor[Math[_0x324594(0x182)](Math[_0x324594(0x1c3)]() * listcolor[_0x324594(0x1c5)])];
const randomcolor4 = listcolor[Math[_0x324594(0x182)](Math[_0x324594(0x1c3)]() * listcolor[_0x324594(0x1c5)])];
const randomcolor5 = listcolor[Math[_0x324594(0x182)](Math[_0x324594(0x1c3)]() * listcolor[_0x324594(0x1c5)])];
const _0x242fcc = {};
_0x242fcc[_0x324594(0x18c)] = 0xe10;
const groupCache = new NodeCache(_0x242fcc);
const ednutchat = require(_0x324594(0x1e4));
const _0x148541 = {};
_0x148541['\x6d\x61\x78\x4d\x65\x73\x73\x61\x67\x65\x73\x50\x65\x72\x43\x68\x61\x74'] = 0x64;
_0x148541[_0x324594(0x26c)] = ![];
const store = ednutchat(_0x324594(0x255), _0x148541);
global[_0x324594(0x208)] = new Object(yargs(process[_0x324594(0x285)][_0x324594(0x1f0)](0x2))[_0x324594(0x1be)](![])[_0x324594(0x230)]());
const deleteFolderRecursive = function (_0x12ce74) {
    const _0x245fcd = _0x324594;
    if (fs[_0x245fcd(0x267)](_0x12ce74)) {
        fs[_0x245fcd(0x17f)](_0x12ce74)[_0x245fcd(0x1c8)](function (_0x39b699, _0x487381) {
            const _0x1a8f9d = _0x245fcd;
            const _0x5f5a0a = _0x12ce74 + '\x2f' + _0x39b699;
            if (fs[_0x1a8f9d(0x1df)](_0x5f5a0a)[_0x1a8f9d(0x1e0)]()) {
                deleteFolderRecursive(_0x5f5a0a);
            } else {
                fs['\x75\x6e\x6c\x69\x6e\x6b\x53\x79\x6e\x63'](_0x5f5a0a);
            }
        });
        fs[_0x245fcd(0x239)](_0x12ce74);
    }
};
const question = _0x5d3abb => {
    const _0x408893 = _0x324594;
    const _0x5e04cb = {};
    _0x5e04cb[_0x408893(0x178)] = process[_0x408893(0x212)];
    _0x5e04cb[_0x408893(0x206)] = process[_0x408893(0x291)];
    const _0x321477 = readline[_0x408893(0x25a)](_0x5e04cb);
    return new Promise(_0x310142 => {
        const _0x4533c9 = _0x408893;
        _0x321477[_0x4533c9(0x238)](_0x5d3abb, _0x310142);
    });
};
const fetch = require(_0x324594(0x184));
const pkg = require(_0x324594(0x16b));
const connectionFilePath = path[_0x324594(0x274)](__dirname, _0x324594(0x258));
async function getLatestGitHubVersion() {
    const _0x5412ce = _0x324594;
    try {
        const _0x2fc594 = await fetch(_0x5412ce(0x1f5));
        if (!_0x2fc594['\x6f\x6b'])
            return null;
        const _0x32cbc6 = await _0x2fc594[_0x5412ce(0x254)]();
        return _0x32cbc6[_0x5412ce(0x28b)]?.[_0x5412ce(0x1c4)](/^v/, '') || null;
    } catch {
        return null;
    }
}
const DataBase = require(_0x324594(0x1a2));
async function startBotz() {
    const _0x516bc8 = _0x324594;
    const {
        state: _0x20d2b2,
        saveCreds: _0x5b1297
    } = await useMultiFileAuthState(_0x516bc8(0x1de));
    const _0x406342 = {};
    _0x406342['\x6d\x61\x78\x4d\x65\x73\x73\x61\x67\x65\x73\x50\x65\x72\x43\x68\x61\x74'] = 0x64;
    _0x406342['\x6d\x65\x6d\x6f\x72\x79\x4f\x6e\x6c\x79'] = ![];
    const _0x3e3b81 = ednutchat(_0x516bc8(0x255), _0x406342);
    const _0x3da6f8 = new DataBase(process[_0x516bc8(0x1f9)]['\x44\x41\x54\x41\x42\x41\x53\x45\x5f\x55\x52\x4c']);
    const _0x21b937 = await _0x3da6f8[_0x516bc8(0x204)]();
    const _0x190f0c = {
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
        ..._0x21b937
    };
    global['\x64\x62'] = _0x190f0c;
    const _0x1082a7 = {};
    _0x1082a7['\x6c\x65\x76\x65\x6c'] = _0x516bc8(0x1dc);
    const _0x1376de = makeWASocket({
        '\x61\x75\x74\x68': _0x20d2b2,
        '\x6c\x6f\x67\x67\x65\x72': pino(_0x1082a7),
        '\x70\x72\x69\x6e\x74\x51\x52\x49\x6e\x54\x65\x72\x6d\x69\x6e\x61\x6c': !![],
        '\x62\x72\x6f\x77\x73\x65\x72': [
            _0x516bc8(0x249),
            '\x43\x68\x72\x6f\x6d\x65',
            _0x516bc8(0x200)
        ]
    });
    _0x1376de['\x65\x76']['\x6f\x6e'](_0x516bc8(0x170), _0x5b1297);
    if (!_0x3e3b81[_0x516bc8(0x1aa)]) {
        _0x3e3b81[_0x516bc8(0x176)](_0x1376de['\x65\x76']);
        _0x3e3b81[_0x516bc8(0x1aa)] = !![];
    }
    global[_0x516bc8(0x17a)] = _0x1376de;
    const _0x338b00 = async _0x349201 => {
        const _0x52b2f2 = _0x516bc8;
        try {
            const _0x47b176 = _0x349201[_0x52b2f2(0x1a1)]?.[0x0];
            if (!_0x47b176?.['\x6d\x65\x73\x73\x61\x67\x65'])
                return;
            const _0xb0eb51 = _0x47b176[_0x52b2f2(0x287)]['\x66\x72\x6f\x6d\x4d\x65'];
            const _0x1316ad = _0x47b176[_0x52b2f2(0x287)][_0x52b2f2(0x205)];
            const _0xe2a2cd = smsg(_0x1376de, _0x47b176, _0x3e3b81);
            if (_0x1316ad === _0x52b2f2(0x228)) {
                const _0x587a43 = process[_0x52b2f2(0x1f9)][_0x52b2f2(0x286)]?.[_0x52b2f2(0x252)]('\x2c')[_0x52b2f2(0x1eb)](_0x24a373 => _0x24a373[_0x52b2f2(0x213)]())[_0x52b2f2(0x253)](_0x1eaba4 => _0x1eaba4);
                const _0x9593de = Array[_0x52b2f2(0x225)](_0x587a43) && _0x587a43[_0x52b2f2(0x1c5)] > 0x0;
                const _0x101e58 = process[_0x52b2f2(0x1f9)][_0x52b2f2(0x1ed)] === '\x74\x72\x75\x65' || global['\x64\x62'][_0x52b2f2(0x1ea)]?.[_0x52b2f2(0x16e)] === !![];
                if (_0x101e58 || _0x9593de) {
                    await _0x1376de[_0x52b2f2(0x181)]([_0x47b176[_0x52b2f2(0x287)]]);
                    if (_0x9593de) {
                        const _0x4e05f8 = _0x587a43[Math[_0x52b2f2(0x182)](Math['\x72\x61\x6e\x64\x6f\x6d']() * _0x587a43[_0x52b2f2(0x1c5)])];
                        try {
                            const _0x4433e8 = {};
                            _0x4433e8[_0x52b2f2(0x26d)] = _0x4e05f8;
                            _0x4433e8['\x6b\x65\x79'] = _0x47b176[_0x52b2f2(0x287)];
                            const _0x26d16f = {};
                            _0x26d16f[_0x52b2f2(0x1a8)] = _0x4433e8;
                            await _0x1376de['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x1316ad, _0x26d16f);
                        } catch (_0x52515e) {
                            log(_0x52b2f2(0x236), '\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x72\x65\x61\x63\x74\x20\x74\x6f\x20\x73\x74\x61\x74\x75\x73\x3a\x20' + _0x52515e);
                        }
                    }
                }
                return;
            }
            if (process['\x65\x6e\x76']['\x52\x45\x41\x44'] === _0x52b2f2(0x1c7) || global['\x64\x62'][_0x52b2f2(0x1ea)]?.[_0x52b2f2(0x1b3)] === !![]) {
                await _0x1376de[_0x52b2f2(0x181)]([_0x47b176[_0x52b2f2(0x287)]]);
            }
            if (!_0xb0eb51 && global['\x64\x62'][_0x52b2f2(0x1ea)]?.[_0x52b2f2(0x16d)] === !![]) {
                _0x1376de[_0x52b2f2(0x1ad)]('\x63\x6f\x6d\x70\x6f\x73\x69\x6e\x67', _0x1316ad);
            }
            if (!_0xb0eb51 && global['\x64\x62']['\x73\x65\x74\x74\x69\x6e\x67\x73']?.[_0x52b2f2(0x266)] === !![]) {
                _0x1376de[_0x52b2f2(0x1ad)](_0x52b2f2(0x278), _0x1316ad);
            }
            if (!_0xb0eb51) {
                const _0x5086ba = process[_0x52b2f2(0x1f9)][_0x52b2f2(0x1c2)] === _0x52b2f2(0x1c7) || global['\x64\x62'][_0x52b2f2(0x1ea)]?.[_0x52b2f2(0x19a)] === !![];
                _0x1376de[_0x52b2f2(0x1ad)](_0x5086ba ? _0x52b2f2(0x19a) : _0x52b2f2(0x1e5), _0x1316ad);
            }
            handleMessage(_0x1376de, _0xe2a2cd, _0x349201, _0x47b176, _0x3e3b81);
        } catch (_0x5790e3) {
            log(_0x52b2f2(0x236), '\x4d\x65\x73\x73\x61\x67\x65\x20\x48\x61\x6e\x64\x6c\x65\x72\x3a\x20' + (_0x5790e3[_0x52b2f2(0x27d)] || _0x5790e3));
        }
    };
    _0x1376de['\x65\x76']['\x6f\x66\x66'](_0x516bc8(0x22a), _0x338b00);
    _0x1376de['\x65\x76']['\x6f\x6e'](_0x516bc8(0x22a), _0x338b00);
    const _0x537188 = async _0x462bc1 => {
        const _0x5ee85e = _0x516bc8;
        const {
            connection: _0xb9f798,
            lastDisconnect: _0x488d5e
        } = _0x462bc1;
        if (_0xb9f798 === _0x5ee85e(0x203)) {
            if (global['\x64\x62'][_0x5ee85e(0x22b)] === 0x0) {
                log(_0x5ee85e(0x1bb), _0x5ee85e(0x1f2));
                log(_0x5ee85e(0x1bb), _0x5ee85e(0x192) + pkg[_0x5ee85e(0x241)]);
            } else {
                log(_0x5ee85e(0x1bb), _0x5ee85e(0x1c1) + global['\x64\x62'][_0x5ee85e(0x22b)] + '\x29');
            }
        }
        if (_0xb9f798 === _0x5ee85e(0x20f)) {
            const _0x283950 = _0x1376de[_0x5ee85e(0x250)]['\x69\x64'][_0x5ee85e(0x252)]('\x3a')[0x0];
            log(_0x5ee85e(0x1bb), _0x5ee85e(0x25b) + _0x283950);
            if (global['\x64\x62'][_0x5ee85e(0x22b)] === 0x0) {
                log(_0x5ee85e(0x1bb), _0x5ee85e(0x189));
            }
            global['\x64\x62'][_0x5ee85e(0x22b)] += 0x1;
            await delay(0x7d0);
            if (!global['\x64\x62'][_0x5ee85e(0x197)]) {
                log(_0x5ee85e(0x1bb), _0x5ee85e(0x20d));
                const _0x1f3c17 = fs[_0x5ee85e(0x17f)](_0x5ee85e(0x229))['\x66\x69\x6c\x74\x65\x72'](_0x18dbd0 => _0x18dbd0[_0x5ee85e(0x216)](_0x5ee85e(0x1d5)));
                for (const _0x16bc51 of _0x1f3c17) {
                    try {
                        require('\x2e\x2f\x70\x6c\x75\x67\x69\x6e\x73\x2f\x65\x64\x6e\x75\x74\x2f' + _0x16bc51);
                    } catch (_0x9831f2) {
                        log(_0x5ee85e(0x236), _0x5ee85e(0x1fc) + _0x16bc51 + '\x3a\x20' + _0x9831f2[_0x5ee85e(0x27d)]);
                    }
                }
                log(_0x5ee85e(0x1bb), _0x5ee85e(0x17d));
                global['\x64\x62'][_0x5ee85e(0x197)] = !![];
            }
            if (global['\x64\x62']['\x72\x65\x63\x6f\x6e\x6e\x65\x63\x74'] === 0x1) {
                const _0x1f86cc = await getLatestGitHubVersion();
                let _0x167b42 = _0x5ee85e(0x275) + pkg[_0x5ee85e(0x241)];
                if (_0x1f86cc) {
                    _0x167b42 += _0x1f86cc !== pkg[_0x5ee85e(0x241)] ? _0x5ee85e(0x19f) + _0x1f86cc + _0x5ee85e(0x194) : _0x5ee85e(0x24a);
                } else {
                    _0x167b42 += _0x5ee85e(0x196);
                }
                const _0xfd0d9c = {};
                _0xfd0d9c['\x74\x65\x78\x74'] = '\ud83e\ude80\x20\x41\x72\x63\x68\x20\x4d\x64\x20\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64\x20\x73\x75\x63\x63\x65\x73\x73\x66\x75\x6c\x6c\x79\x0a\x0a\x70\x72\x65\x66\x69\x78\x3a\x20' + global[_0x5ee85e(0x1f1)] + '\x0a\x0a\x48\x65\x6c\x6c\x6f\x21\x20\ud83d\udc4b\x20\x49\x27\x6d\x20\x41\x72\x63\x68\x20\x4d\x64\x2c\x20\x79\x6f\x75\x72\x20\x57\x68\x61\x74\x73\x41\x70\x70\x20\x62\x6f\x74\x2e\x20\x48\x65\x72\x65\x27\x73\x20\x68\x6f\x77\x20\x74\x6f\x20\x75\x73\x65\x20\x6d\x65\x3a\x0a\x0a\u2022\x20\x2a\x55\x73\x61\x67\x65\x3a\x2a\x20' + global[_0x5ee85e(0x1f1)] + _0x5ee85e(0x233) + global[_0x5ee85e(0x1f1)] + '\x68\x65\x6c\x70\x20\x3c\x63\x6f\x6d\x6d\x61\x6e\x64\x5f\x6e\x61\x6d\x65\x3e\x0a\x0a\x45\x78\x61\x6d\x70\x6c\x65\x3a\x0a\u2022\x20\x4c\x69\x73\x74\x20\x61\x6c\x6c\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x73\x3a\x20\x2a' + global[_0x5ee85e(0x1f1)] + _0x5ee85e(0x221) + global[_0x5ee85e(0x1f1)] + _0x5ee85e(0x1f7) + global['\x73\x63\x61\x6e'] + _0x5ee85e(0x1dd) + _0x167b42 + _0x5ee85e(0x223);
                await _0x1376de[_0x5ee85e(0x1cd)](_0x283950 + _0x5ee85e(0x251), _0xfd0d9c);
            }
        }
        if (_0xb9f798 === _0x5ee85e(0x24e) && _0x488d5e?.['\x65\x72\x72\x6f\x72']?.[_0x5ee85e(0x206)]?.[_0x5ee85e(0x1b0)] !== 0x191) {
            log('\x45\x52\x52\x4f\x52', _0x5ee85e(0x1d1));
            process['\x65\x78\x69\x74'](0x1);
        }
    };
    _0x1376de['\x65\x76'][_0x516bc8(0x23b)](_0x516bc8(0x232), _0x537188);
    _0x1376de['\x65\x76']['\x6f\x6e']('\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x2e\x75\x70\x64\x61\x74\x65', _0x537188);
    const _0x32afb2 = async _0x3d1772 => {
        const _0x396e90 = _0x516bc8;
        try {
            const _0x2d43e2 = global[_0x396e90(0x22c)] || _0x396e90(0x20a);
            const _0x55fe77 = _0x3d1772['\x69\x64'];
            const _0x21e495 = await _0x1376de[_0x396e90(0x283)](_0x55fe77);
            const _0x5a4af9 = _0x21e495[_0x396e90(0x18a)];
            const _0x3d79e4 = _0x21e495[_0x396e90(0x1bd)] || _0x396e90(0x231);
            const _0x1efdb5 = _0x21e495[_0x396e90(0x25d)]['\x6c\x65\x6e\x67\x74\x68'];
            const _0x1b66a0 = moment()['\x74\x7a'](_0x2d43e2)[_0x396e90(0x211)](_0x396e90(0x1e7));
            const _0xb01d56 = moment()['\x74\x7a'](_0x2d43e2)[_0x396e90(0x211)]('\x48\x48\x3a\x6d\x6d\x3a\x73\x73');
            const _0x44b704 = global['\x64\x62']['\x67\x72\x6f\x75\x70\x73']?.[_0x55fe77]?.[_0x396e90(0x1b8)] === !![] || process[_0x396e90(0x1f9)][_0x396e90(0x1fa)] === _0x396e90(0x1c7);
            const _0x551d2c = global['\x64\x62']['\x67\x72\x6f\x75\x70\x73']?.[_0x55fe77]?.['\x67\x6f\x6f\x64\x62\x79\x65'] === !![] || process[_0x396e90(0x1f9)]['\x47\x4f\x4f\x44\x42\x59\x45'] === '\x74\x72\x75\x65';
            for (const _0x1d30e5 of _0x3d1772['\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x73']) {
                const _0x22a6c3 = _0x1d30e5['\x73\x70\x6c\x69\x74']('\x40')[0x0][_0x396e90(0x252)]('\x3a')[0x0];
                let _0x114391 = _0x396e90(0x172);
                try {
                    _0x114391 = await _0x1376de['\x70\x72\x6f\x66\x69\x6c\x65\x50\x69\x63\x74\x75\x72\x65\x55\x72\x6c'](_0x1d30e5, '\x69\x6d\x61\x67\x65');
                } catch {
                }
                if (_0x3d1772[_0x396e90(0x187)] === '\x61\x64\x64' && _0x44b704) {
                    let _0x891a4a = global['\x64\x62']['\x67\x72\x6f\x75\x70\x73']?.[_0x55fe77]?.[_0x396e90(0x19c)] || process[_0x396e90(0x1f9)][_0x396e90(0x218)] || '\ud83d\udc4b\x20\x48\x65\x6c\x6c\x6f\x20\x40\x75\x73\x65\x72\x2c\x20\x77\x65\x6c\x63\x6f\x6d\x65\x20\x74\x6f\x20\x2a\x40\x67\x72\x6f\x75\x70\x2a\x0a\x0a\x40\x64\x65\x73\x63\x0a\ud83d\udcc5\x20\x40\x64\x61\x74\x65\x20\x40\x74\x69\x6d\x65';
                    const _0x5988e6 = _0x891a4a[_0x396e90(0x1b2)](_0x396e90(0x17c));
                    const _0x1719ab = _0x891a4a[_0x396e90(0x1c4)](/@user/gi, '\x40' + _0x22a6c3)[_0x396e90(0x1c4)](/@group/gi, _0x5a4af9)['\x72\x65\x70\x6c\x61\x63\x65'](/@desc/gi, _0x3d79e4)[_0x396e90(0x1c4)](/@date/gi, _0x1b66a0)[_0x396e90(0x1c4)](/@time/gi, _0xb01d56)[_0x396e90(0x1c4)](/@pp/gi, '');
                    if (_0x5988e6) {
                        const _0x2bea26 = {};
                        _0x2bea26[_0x396e90(0x1ac)] = _0x114391;
                        const _0x23ae82 = {};
                        _0x23ae82['\x69\x6d\x61\x67\x65'] = _0x2bea26;
                        _0x23ae82['\x63\x61\x70\x74\x69\x6f\x6e'] = _0x1719ab;
                        _0x23ae82[_0x396e90(0x1da)] = [_0x1d30e5];
                        await _0x1376de[_0x396e90(0x1cd)](_0x55fe77, _0x23ae82);
                    } else {
                        const _0x17ffd8 = {};
                        _0x17ffd8[_0x396e90(0x26d)] = _0x1719ab;
                        _0x17ffd8['\x6d\x65\x6e\x74\x69\x6f\x6e\x73'] = [_0x1d30e5];
                        await _0x1376de['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x55fe77, _0x17ffd8);
                    }
                } else if (_0x3d1772[_0x396e90(0x187)] === _0x396e90(0x193) && _0x551d2c) {
                    let _0x200ff7 = global['\x64\x62'][_0x396e90(0x279)]?.[_0x55fe77]?.[_0x396e90(0x20e)] || process['\x65\x6e\x76']['\x47\x4f\x4f\x44\x42\x59\x45\x5f\x4d\x53\x47'] || '\ud83d\udc4b\x20\x40\x75\x73\x65\x72\x20\x6c\x65\x66\x74\x20\x2a\x40\x67\x72\x6f\x75\x70\x2a';
                    const _0x5c500f = _0x200ff7[_0x396e90(0x1b2)]('\x40\x70\x70');
                    const _0x5204c9 = _0x200ff7[_0x396e90(0x1c4)](/@user/gi, '\x40' + _0x22a6c3)['\x72\x65\x70\x6c\x61\x63\x65'](/@group/gi, _0x5a4af9)['\x72\x65\x70\x6c\x61\x63\x65'](/@desc/gi, _0x3d79e4)[_0x396e90(0x1c4)](/@date/gi, _0x1b66a0)[_0x396e90(0x1c4)](/@time/gi, _0xb01d56)[_0x396e90(0x1c4)](/@pp/gi, '');
                    if (_0x5c500f) {
                        const _0x57436b = {};
                        _0x57436b[_0x396e90(0x1ac)] = _0x114391;
                        const _0x17dfe5 = {};
                        _0x17dfe5[_0x396e90(0x27b)] = _0x57436b;
                        _0x17dfe5[_0x396e90(0x1ec)] = _0x5204c9;
                        _0x17dfe5[_0x396e90(0x1da)] = [_0x1d30e5];
                        await _0x1376de[_0x396e90(0x1cd)](_0x55fe77, _0x17dfe5);
                    } else {
                        const _0x4494cc = {};
                        _0x4494cc[_0x396e90(0x26d)] = _0x5204c9;
                        _0x4494cc[_0x396e90(0x1da)] = [_0x1d30e5];
                        await _0x1376de[_0x396e90(0x1cd)](_0x55fe77, _0x4494cc);
                    }
                }
                if (global['\x64\x62'][_0x396e90(0x279)]?.[_0x55fe77]?.['\x65\x76\x65\x6e\x74\x73']) {
                    if (_0x3d1772[_0x396e90(0x187)] === _0x396e90(0x235)) {
                        await _0x1376de[_0x396e90(0x1cd)](_0x55fe77, {
                            '\x74\x65\x78\x74': '\x40' + _0x22a6c3 + '\x20\x68\x61\x73\x20\x62\x65\x65\x6e\x20\x70\x72\x6f\x6d\x6f\x74\x65\x64\x20\x62\x79\x20\x40' + _0x3d1772['\x61\x75\x74\x68\x6f\x72']['\x73\x70\x6c\x69\x74']('\x40')[0x0],
                            '\x6d\x65\x6e\x74\x69\x6f\x6e\x73': [
                                _0x1d30e5,
                                _0x3d1772[_0x396e90(0x1d0)]
                            ]
                        });
                    } else if (_0x3d1772['\x61\x63\x74\x69\x6f\x6e'] === _0x396e90(0x260)) {
                        await _0x1376de[_0x396e90(0x1cd)](_0x55fe77, {
                            '\x74\x65\x78\x74': '\x40' + _0x22a6c3 + '\x20\x68\x61\x73\x20\x62\x65\x65\x6e\x20\x64\x65\x6d\x6f\x74\x65\x64\x20\x62\x79\x20\x40' + _0x3d1772[_0x396e90(0x1d0)]['\x73\x70\x6c\x69\x74']('\x40')[0x0],
                            '\x6d\x65\x6e\x74\x69\x6f\x6e\x73': [
                                _0x1d30e5,
                                _0x3d1772[_0x396e90(0x1d0)]
                            ]
                        });
                    }
                }
            }
        } catch (_0x2203b0) {
            log('\x45\x52\x52\x4f\x52', _0x396e90(0x17e) + _0x2203b0[_0x396e90(0x27d)]);
        }
    };
    _0x1376de['\x65\x76'][_0x516bc8(0x23b)]('\x67\x72\x6f\x75\x70\x2d\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x73\x2e\x75\x70\x64\x61\x74\x65', _0x32afb2);
    _0x1376de['\x65\x76']['\x6f\x6e'](_0x516bc8(0x173), _0x32afb2);
    const _0x34ff8b = async _0x4dc61b => {
        const _0x373ad7 = _0x516bc8;
        try {
            if (!_0x4dc61b?.[0x0] || _0x4dc61b[0x0]['\x73\x74\x61\x74\x75\x73'] !== '\x6f\x66\x66\x65\x72')
                return;
            const _0x5dd8bc = _0x4dc61b[0x0][_0x373ad7(0x22f)];
            const _0x37d1d0 = global['\x64\x62'][_0x373ad7(0x1ea)]?.[_0x373ad7(0x280)] ? _0x373ad7(0x1cb) : global['\x64\x62']['\x73\x65\x74\x74\x69\x6e\x67\x73']?.['\x61\x6e\x74\x69\x63\x61\x6c\x6c'] ? _0x373ad7(0x220) : process[_0x373ad7(0x1f9)][_0x373ad7(0x1fe)]?.['\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65']();
            if (!_0x37d1d0)
                return;
            const _0x3e7922 = _0x37d1d0 === _0x373ad7(0x1cb) ? '\x40' + _0x5dd8bc[_0x373ad7(0x252)]('\x40')[0x0] + _0x373ad7(0x1fb) : '\x40' + _0x5dd8bc[_0x373ad7(0x252)]('\x40')[0x0] + _0x373ad7(0x244);
            const _0x10ab27 = {};
            _0x10ab27[_0x373ad7(0x26d)] = _0x3e7922;
            _0x10ab27[_0x373ad7(0x1da)] = [_0x5dd8bc];
            await _0x1376de[_0x373ad7(0x1cd)](_0x1376de[_0x373ad7(0x250)]['\x69\x64'], _0x10ab27);
            await _0x1376de[_0x373ad7(0x24f)](_0x4dc61b[0x0]['\x69\x64'], _0x5dd8bc);
            if (_0x37d1d0 === '\x62\x6c\x6f\x63\x6b') {
                await delay(0x7d0);
                await _0x1376de[_0x373ad7(0x19b)](_0x5dd8bc, _0x373ad7(0x1cb));
            }
        } catch (_0x11de5d) {
            log(_0x373ad7(0x236), _0x373ad7(0x222) + _0x11de5d[_0x373ad7(0x27d)]);
        }
    };
    _0x1376de['\x65\x76']['\x6f\x66\x66']('\x63\x61\x6c\x6c', _0x34ff8b);
    _0x1376de['\x65\x76']['\x6f\x6e'](_0x516bc8(0x264), _0x34ff8b);
    setInterval(async () => {
        const _0x5457d2 = _0x516bc8;
        try {
            await _0x3da6f8[_0x5457d2(0x26f)](global['\x64\x62']);
        } catch (_0x2978d0) {
            log(_0x5457d2(0x236), '\x44\x42\x20\x53\x61\x76\x65\x3a\x20' + _0x2978d0[_0x5457d2(0x27d)]);
        }
    }, 0x2710);
    setInterval(() => {
        const _0x193ff1 = _0x516bc8;
        const _0xe97620 = Date[_0x193ff1(0x169)]() - 0x2 * 0x18 * 0x3c * 0x3c * 0x3e8;
        let _0xad0d1 = 0x0;
        for (let _0x319ace in _0x3e3b81[_0x193ff1(0x281)]) {
            const _0x92e9b0 = _0x3e3b81['\x63\x68\x61\x74\x73'][_0x319ace]?.['\x6d\x65\x73\x73\x61\x67\x65\x73']?.['\x6c\x61\x73\x74'];
            const _0x217843 = _0x92e9b0?.[_0x193ff1(0x282)]?.[_0x193ff1(0x25e)] * 0x3e8;
            if (_0x217843 && _0x217843 < _0xe97620) {
                delete _0x3e3b81[_0x193ff1(0x281)][_0x319ace];
                _0xad0d1++;
            }
        }
        if (_0xad0d1)
            log('\x49\x4e\x46\x4f', _0x193ff1(0x19d) + _0xad0d1 + '\x20\x69\x6e\x61\x63\x74\x69\x76\x65\x20\x63\x68\x61\x74\x73\x20\x66\x72\x6f\x6d\x20\x73\x74\x6f\x72\x65\x2e');
    }, 0x1e * 0x3c * 0x3e8);
    _0x1376de[_0x516bc8(0x175)] = _0x54fe21 => {
        const _0xb5bcdc = _0x516bc8;
        if (!_0x54fe21)
            return _0x54fe21;
        if (/:\d+@/gi['\x74\x65\x73\x74'](_0x54fe21)) {
            let _0x3544a7 = jidDecode(_0x54fe21) || {};
            return _0x3544a7['\x75\x73\x65\x72'] && _0x3544a7[_0xb5bcdc(0x1a9)] && _0x3544a7[_0xb5bcdc(0x250)] + '\x40' + _0x3544a7[_0xb5bcdc(0x1a9)] || _0x54fe21;
        } else
            return _0x54fe21;
    };
    _0x1376de[_0x516bc8(0x289)] = (_0x4a350d, _0x2ec88b = ![]) => {
        const _0x52fe7a = _0x516bc8;
        id = _0x1376de[_0x52fe7a(0x175)](_0x4a350d);
        _0x2ec88b = _0x1376de[_0x52fe7a(0x1b1)] || _0x2ec88b;
        let _0x3685f7;
        if (id['\x65\x6e\x64\x73\x57\x69\x74\x68']('\x40\x67\x2e\x75\x73'))
            return new Promise(async _0xdfe9ec => {
                const _0x5e5ee7 = _0x52fe7a;
                _0x3685f7 = _0x3e3b81[_0x5e5ee7(0x1e2)][id] || {};
                if (!(_0x3685f7['\x6e\x61\x6d\x65'] || _0x3685f7[_0x5e5ee7(0x18a)]))
                    _0x3685f7 = _0x1376de[_0x5e5ee7(0x283)](id) || {};
                _0xdfe9ec(_0x3685f7[_0x5e5ee7(0x1f6)] || _0x3685f7['\x73\x75\x62\x6a\x65\x63\x74'] || PhoneNumber('\x2b' + id['\x72\x65\x70\x6c\x61\x63\x65'](_0x5e5ee7(0x251), ''))[_0x5e5ee7(0x290)](_0x5e5ee7(0x207)));
            });
        else
            _0x3685f7 = id === '\x30\x40\x73\x2e\x77\x68\x61\x74\x73\x61\x70\x70\x2e\x6e\x65\x74' ? {
                '\x69\x64': id,
                '\x6e\x61\x6d\x65': _0x52fe7a(0x248)
            } : id === _0x1376de[_0x52fe7a(0x175)](_0x1376de[_0x52fe7a(0x250)]['\x69\x64']) ? _0x1376de[_0x52fe7a(0x250)] : _0x3e3b81[_0x52fe7a(0x1e2)][id] || {};
        return (_0x2ec88b ? '' : _0x3685f7[_0x52fe7a(0x1f6)]) || _0x3685f7['\x73\x75\x62\x6a\x65\x63\x74'] || _0x3685f7[_0x52fe7a(0x1bc)] || PhoneNumber('\x2b' + _0x4a350d[_0x52fe7a(0x1c4)](_0x52fe7a(0x251), ''))[_0x52fe7a(0x290)](_0x52fe7a(0x207));
    };
    _0x1376de[_0x516bc8(0x1b9)] = _0x3a22a7 => smsg(_0x1376de, _0x3a22a7, _0x3e3b81);
    _0x1376de[_0x516bc8(0x23a)] = (_0x191e55, _0x4dd64d, _0x1c5936 = '', _0x557122) => _0x1376de[_0x516bc8(0x1cd)](_0x191e55, {
        '\x74\x65\x78\x74': _0x4dd64d,
        ..._0x557122
    }, { '\x71\x75\x6f\x74\x65\x64': _0x1c5936 });
    _0x1376de[_0x516bc8(0x1cf)] = async (_0x2e19a9, _0x494b99, _0x5bad9e = '\x44\x65\x76\x65\x6c\x6f\x70\x65\x72\x20\x42\x6f\x74', _0x342f9a = '', _0x4181ee = {}) => {
        const _0x541bbb = _0x516bc8;
        let _0x11d75b = [];
        for (let _0x6e9f4c of _0x494b99) {
            const _0x508168 = {};
            _0x508168[_0x541bbb(0x28a)] = botname;
            _0x508168[_0x541bbb(0x20b)] = _0x541bbb(0x1d8) + _0x541bbb(0x27a) + (_0x541bbb(0x256) + botname + _0x541bbb(0x1af)) + (_0x541bbb(0x18e) + botname + '\x0a') + '\x4f\x52\x47\x3a\x6e\x75\x6c\x6c\x0a' + _0x541bbb(0x16a) + (_0x541bbb(0x234) + _0x6e9f4c + '\x3a' + _0x6e9f4c + '\x0a') + _0x541bbb(0x242) + (_0x541bbb(0x265) + _0x5bad9e + '\x0a') + (_0x541bbb(0x185) + botname + '\x0a') + _0x541bbb(0x188);
            _0x11d75b['\x70\x75\x73\x68'](_0x508168);
        }
        const _0x5ddf1d = {};
        _0x5ddf1d[_0x541bbb(0x28a)] = _0x11d75b[_0x541bbb(0x1c5)] + _0x541bbb(0x24d);
        _0x5ddf1d[_0x541bbb(0x1e2)] = _0x11d75b;
        const _0x1f6e0d = {
            '\x63\x6f\x6e\x74\x61\x63\x74\x73': _0x5ddf1d,
            ..._0x4181ee
        };
        const _0x8d77b8 = {};
        _0x8d77b8[_0x541bbb(0x257)] = _0x342f9a;
        _0x1376de[_0x541bbb(0x1cd)](_0x2e19a9, _0x1f6e0d, _0x8d77b8);
    };
    _0x1376de['\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x4d\x65\x64\x69\x61\x4d\x65\x73\x73\x61\x67\x65'] = async _0x1bb8b0 => {
        const _0x233ed5 = _0x516bc8;
        let _0x5234f9 = (_0x1bb8b0[_0x233ed5(0x201)] || _0x1bb8b0)[_0x233ed5(0x191)] || '';
        let _0x224c4a = _0x1bb8b0[_0x233ed5(0x271)] ? _0x1bb8b0['\x6d\x74\x79\x70\x65']['\x72\x65\x70\x6c\x61\x63\x65'](/Message/gi, '') : _0x5234f9[_0x233ed5(0x252)]('\x2f')[0x0];
        const _0xa50308 = await downloadContentFromMessage(_0x1bb8b0, _0x224c4a);
        let _0x325976 = Buffer['\x66\x72\x6f\x6d']([]);
        for await (const _0x58ba93 of _0xa50308) {
            _0x325976 = Buffer[_0x233ed5(0x23e)]([
                _0x325976,
                _0x58ba93
            ]);
        }
        return _0x325976;
    };
    _0x1376de[_0x516bc8(0x259)] = async (_0x138f8f, _0x192fad, _0x382475, _0x422ab6 = {}) => {
        const _0x444bf7 = _0x516bc8;
        let _0x5704a1 = Buffer['\x69\x73\x42\x75\x66\x66\x65\x72'](_0x192fad) ? _0x192fad : /^data:.?\/.?;base64,/i[_0x444bf7(0x245)](_0x192fad) ? Buffer[_0x444bf7(0x22f)](_0x192fad['\x73\x70\x6c\x69\x74']`,`[0x1], _0x444bf7(0x1ba)) : /^https?:\/\//[_0x444bf7(0x245)](_0x192fad) ? await await getBuffer(_0x192fad) : fs[_0x444bf7(0x267)](_0x192fad) ? fs[_0x444bf7(0x263)](_0x192fad) : Buffer['\x61\x6c\x6c\x6f\x63'](0x0);
        let _0x1e832e;
        if (_0x422ab6 && (_0x422ab6[_0x444bf7(0x261)] || _0x422ab6[_0x444bf7(0x1d0)])) {
            _0x1e832e = await writeExifImg(_0x5704a1, _0x422ab6);
        } else {
            _0x1e832e = await imageToWebp(_0x5704a1);
        }
        const _0x25f022 = {};
        _0x25f022[_0x444bf7(0x1ac)] = _0x1e832e;
        const _0x1e1f27 = {
            '\x73\x74\x69\x63\x6b\x65\x72': _0x25f022,
            ..._0x422ab6
        };
        const _0x2e1533 = {};
        _0x2e1533[_0x444bf7(0x257)] = _0x382475;
        await _0x1376de[_0x444bf7(0x1cd)](_0x138f8f, _0x1e1f27, _0x2e1533);
        return _0x1e832e;
    };
    _0x1376de[_0x516bc8(0x177)] = async (_0x5b58ac, _0x4dc832, _0x1d0d13, _0x359ba7 = {}) => {
        const _0x488c0a = _0x516bc8;
        let _0x249fd4 = Buffer[_0x488c0a(0x292)](_0x4dc832) ? _0x4dc832 : /^data:.?\/.?;base64,/i[_0x488c0a(0x245)](_0x4dc832) ? Buffer[_0x488c0a(0x22f)](_0x4dc832['\x73\x70\x6c\x69\x74']`,`[0x1], _0x488c0a(0x1ba)) : /^https?:\/\//[_0x488c0a(0x245)](_0x4dc832) ? await await getBuffer(_0x4dc832) : fs['\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63'](_0x4dc832) ? fs[_0x488c0a(0x263)](_0x4dc832) : Buffer['\x61\x6c\x6c\x6f\x63'](0x0);
        let _0xe0d320;
        if (_0x359ba7 && (_0x359ba7[_0x488c0a(0x261)] || _0x359ba7[_0x488c0a(0x1d0)])) {
            _0xe0d320 = await writeExifVid(_0x249fd4, _0x359ba7);
        } else {
            _0xe0d320 = await videoToWebp(_0x249fd4);
        }
        const _0xdb5d32 = {};
        _0xdb5d32['\x75\x72\x6c'] = _0xe0d320;
        const _0x4c1f61 = {
            '\x73\x74\x69\x63\x6b\x65\x72': _0xdb5d32,
            ..._0x359ba7
        };
        const _0x2d20e6 = {};
        _0x2d20e6[_0x488c0a(0x257)] = _0x1d0d13;
        await _0x1376de[_0x488c0a(0x1cd)](_0x5b58ac, _0x4c1f61, _0x2d20e6);
        return _0xe0d320;
    };
    _0x1376de['\x72\x65\x70\x6c\x79'] = (_0x4d4575, _0x31c2f6 = '', _0x544da5, _0x8ca60c) => {
        const _0x19576c = _0x516bc8;
        return Buffer[_0x19576c(0x292)](_0x31c2f6) ? this['\x73\x65\x6e\x64\x46\x69\x6c\x65'](_0x4d4575, _0x31c2f6, _0x19576c(0x1ce), '', _0x544da5, ![], _0x8ca60c) : _0x1376de[_0x19576c(0x1cd)](_0x4d4575, {
            ..._0x8ca60c,
            '\x74\x65\x78\x74': _0x31c2f6
        }, {
            '\x71\x75\x6f\x74\x65\x64': _0x544da5,
            ..._0x8ca60c
        });
    };
    _0x1376de[_0x516bc8(0x1b4)] = async (_0x18084b, _0x47d66a, _0x2c24ab, _0x44737b = {}) => {
        const _0x26f201 = _0x516bc8;
        let {
            ext: _0x45864d,
            mime: _0x197b4b,
            data: _0x481dd3
        } = await _0x1376de[_0x26f201(0x179)](_0x47d66a);
        messageType = _0x197b4b[_0x26f201(0x252)]('\x2f')[0x0];
        pase = messageType[_0x26f201(0x1c4)](_0x26f201(0x1e1), _0x26f201(0x20c)) || messageType;
        const _0x36ab01 = {
            ['' + pase]: _0x481dd3,
            '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0x197b4b,
            ..._0x44737b
        };
        const _0x243b02 = {};
        _0x243b02[_0x26f201(0x257)] = _0x2c24ab;
        return await _0x1376de[_0x26f201(0x1cd)](_0x18084b, _0x36ab01, _0x243b02);
    };
    _0x1376de['\x67\x65\x74\x46\x69\x6c\x65'] = async (_0x1b5f13, _0x289a01) => {
        const _0x5d7684 = _0x516bc8;
        let _0xee813d;
        let _0x2ee52a = Buffer[_0x5d7684(0x292)](_0x1b5f13) ? _0x1b5f13 : /^data:.*?\/.*?;base64,/i[_0x5d7684(0x245)](_0x1b5f13) ? Buffer[_0x5d7684(0x22f)](_0x1b5f13[_0x5d7684(0x252)]('\x2c')[0x1], '\x62\x61\x73\x65\x36\x34') : /^https?:\/\//[_0x5d7684(0x245)](_0x1b5f13) ? await (_0xee813d = await getBuffer(_0x1b5f13)) : fs[_0x5d7684(0x267)](_0x1b5f13) ? (filename = _0x1b5f13, fs[_0x5d7684(0x263)](_0x1b5f13)) : typeof _0x1b5f13 === _0x5d7684(0x1c9) ? _0x1b5f13 : Buffer[_0x5d7684(0x247)](0x0);
        const _0xbef43a = {};
        _0xbef43a[_0x5d7684(0x214)] = _0x5d7684(0x19e);
        _0xbef43a[_0x5d7684(0x262)] = _0x5d7684(0x16c);
        let _0x50f694 = await FileType[_0x5d7684(0x1d9)](_0x2ee52a) || _0xbef43a;
        filename = path[_0x5d7684(0x274)](__dirname, _0x5d7684(0x1db) + new Date()['\x67\x65\x74\x54\x69\x6d\x65']() + '\x2e' + _0x50f694['\x65\x78\x74']);
        if (_0x2ee52a && _0x289a01)
            fs[_0x5d7684(0x28e)][_0x5d7684(0x273)](filename, _0x2ee52a);
        return {
            '\x72\x65\x73': _0xee813d,
            '\x66\x69\x6c\x65\x6e\x61\x6d\x65': filename,
            '\x73\x69\x7a\x65': await getSizeMedia(_0x2ee52a),
            ..._0x50f694,
            '\x64\x61\x74\x61': _0x2ee52a
        };
    };
    _0x1376de[_0x516bc8(0x1ab)] = async (_0x5e71e0, _0x28f27e, _0x4e5ce1 = '', _0x3946e9 = '', _0x28b38e, _0x3e547b = ![], _0x45ac2c = {}) => {
        const _0x2844e0 = _0x516bc8;
        let _0x42a0e9 = await _0x1376de['\x67\x65\x74\x46\x69\x6c\x65'](_0x28f27e, !![]);
        let {
            res: _0x4934ef,
            data: _0x2003cf,
            filename: _0x110e90
        } = _0x42a0e9;
        if (_0x4934ef && _0x4934ef['\x73\x74\x61\x74\x75\x73'] !== 0xc8 || _0x2003cf[_0x2844e0(0x1c5)] <= 0x10000) {
            try {
                throw { '\x6a\x73\x6f\x6e': JSON['\x70\x61\x72\x73\x65'](_0x2003cf[_0x2844e0(0x226)]()) };
            } catch (_0x4a70b1) {
                if (_0x4a70b1[_0x2844e0(0x254)])
                    throw _0x4a70b1[_0x2844e0(0x254)];
            }
        }
        const _0x131db8 = {};
        _0x131db8[_0x2844e0(0x227)] = _0x4e5ce1;
        let _0x230e76 = _0x131db8;
        if (_0x28b38e)
            _0x230e76[_0x2844e0(0x257)] = _0x28b38e;
        if (!_0x42a0e9)
            _0x45ac2c[_0x2844e0(0x23c)] = !![];
        let _0x644185 = '', _0x5dad7b = _0x42a0e9[_0x2844e0(0x214)], _0x3b11ea;
        if (/webp/[_0x2844e0(0x245)](_0x42a0e9[_0x2844e0(0x214)]) || /image/[_0x2844e0(0x245)](_0x42a0e9[_0x2844e0(0x214)]) && _0x45ac2c[_0x2844e0(0x243)])
            _0x644185 = _0x2844e0(0x1b7);
        else if (/image/[_0x2844e0(0x245)](_0x42a0e9['\x6d\x69\x6d\x65']) || /webp/[_0x2844e0(0x245)](_0x42a0e9[_0x2844e0(0x214)]) && _0x45ac2c['\x61\x73\x49\x6d\x61\x67\x65'])
            _0x644185 = _0x2844e0(0x27b);
        else if (/video/[_0x2844e0(0x245)](_0x42a0e9[_0x2844e0(0x214)]))
            _0x644185 = '\x76\x69\x64\x65\x6f';
        else if (/audio/[_0x2844e0(0x245)](_0x42a0e9[_0x2844e0(0x214)]))
            _0x3b11ea = await (_0x3e547b ? toPTT : toAudio)(_0x2003cf, _0x42a0e9[_0x2844e0(0x262)]), _0x2003cf = _0x3b11ea['\x64\x61\x74\x61'], _0x110e90 = _0x3b11ea[_0x2844e0(0x227)], _0x644185 = _0x2844e0(0x237), _0x5dad7b = _0x2844e0(0x24b);
        else
            _0x644185 = _0x2844e0(0x20c);
        if (_0x45ac2c[_0x2844e0(0x23c)])
            _0x644185 = _0x2844e0(0x20c);
        const _0x15c223 = {};
        _0x15c223[_0x2844e0(0x1ac)] = _0x110e90;
        const _0x40a223 = { ..._0x45ac2c };
        _0x40a223[_0x2844e0(0x1ec)] = _0x3946e9;
        _0x40a223[_0x2844e0(0x1a0)] = _0x3e547b;
        _0x40a223[_0x644185] = _0x15c223;
        _0x40a223[_0x2844e0(0x191)] = _0x5dad7b;
        let _0x397382 = _0x40a223;
        let _0x39de28;
        try {
            const _0x806429 = {
                ..._0x230e76,
                ..._0x45ac2c
            };
            _0x39de28 = await _0x1376de[_0x2844e0(0x1cd)](_0x5e71e0, _0x397382, _0x806429);
        } catch (_0x330aac) {
            console[_0x2844e0(0x28c)](_0x330aac);
            _0x39de28 = null;
        } finally {
            const _0x13b491 = { ..._0x397382 };
            _0x13b491[_0x644185] = _0x2003cf;
            const _0x2f5583 = {
                ..._0x230e76,
                ..._0x45ac2c
            };
            if (!_0x39de28)
                _0x39de28 = await _0x1376de[_0x2844e0(0x1cd)](_0x5e71e0, _0x13b491, _0x2f5583);
            return _0x39de28;
        }
    };
    _0x1376de[_0x516bc8(0x1b5)] = async (_0x4d050d, _0x5b1b51, _0x54807d = !![]) => {
        const _0x25be66 = _0x516bc8;
        let _0x2eed8f = _0x4d050d['\x6d'] ? _0x4d050d['\x6d'] : _0x4d050d;
        let _0x4b1226 = (_0x4d050d['\x6d'] || _0x4d050d)[_0x25be66(0x191)] || '';
        let _0x4ee16b = _0x4d050d[_0x25be66(0x271)] ? _0x4d050d[_0x25be66(0x271)][_0x25be66(0x1c4)](/Message/gi, '') : _0x4b1226['\x73\x70\x6c\x69\x74']('\x2f')[0x0];
        const _0x3a4d8e = await downloadContentFromMessage(_0x2eed8f, _0x4ee16b);
        let _0x12bbc = Buffer[_0x25be66(0x22f)]([]);
        for await (const _0x34553c of _0x3a4d8e) {
            _0x12bbc = Buffer[_0x25be66(0x23e)]([
                _0x12bbc,
                _0x34553c
            ]);
        }
        let _0x1c1ec4 = await FileType[_0x25be66(0x1d9)](_0x12bbc);
        trueFileName = _0x54807d ? _0x5b1b51 + '\x2e' + _0x1c1ec4[_0x25be66(0x262)] : _0x5b1b51;
        const _0x553861 = '\x2e\x2f\x74\x6d\x70\x2f';
        if (!fs[_0x25be66(0x267)](_0x553861)) {
            fs['\x6d\x6b\x64\x69\x72\x53\x79\x6e\x63'](_0x553861);
        }
        const _0x41d35c = _0x553861 + '\x2f' + trueFileName;
        await fs[_0x25be66(0x18b)](_0x41d35c, _0x12bbc);
        return _0x41d35c;
    };
    return _0x1376de;
}
async function startBot() {
    const _0x39c00b = _0x324594;
    try {
        let _0x1b5182 = global[_0x39c00b(0x26e)];
        if (!_0x1b5182) {
            log(_0x39c00b(0x236), _0x39c00b(0x217));
            return;
        }
        if (!/^Arch[_~]|^Ednut~/[_0x39c00b(0x245)](_0x1b5182)) {
            log(_0x39c00b(0x236), _0x39c00b(0x1d2) + global[_0x39c00b(0x1d6)]);
            return;
        }
        const _0x4652f8 = _0x1b5182[_0x39c00b(0x1c4)](/^Arch[_~]|^Ednut~/, '');
        const _0x30680d = await axios[_0x39c00b(0x277)](_0x39c00b(0x26b) + _0x4652f8 + _0x39c00b(0x24c));
        const _0x457dca = __dirname + _0x39c00b(0x21e);
        fs[_0x39c00b(0x18b)](_0x457dca, JSON[_0x39c00b(0x1f4)](_0x30680d[_0x39c00b(0x288)]));
        if (global[_0x39c00b(0x17a)]?.['\x65\x76']) {
            global[_0x39c00b(0x17a)]['\x65\x76'][_0x39c00b(0x1fd)]();
            global[_0x39c00b(0x17a)] = null;
        }
        startBotz();
    } catch (_0xd6bb48) {
        log(_0x39c00b(0x236), _0x39c00b(0x23f) + (_0xd6bb48?.['\x73\x74\x61\x63\x6b'] || _0xd6bb48));
    }
}
startBot();
process['\x6f\x6e'](_0x324594(0x23d), function (_0x13cbc0) {
    const _0x4e9a0c = _0x324594;
    const _0x2fff28 = String(_0x13cbc0 || '');
    const _0x51a104 = [
        _0x4e9a0c(0x272),
        '\x53\x6f\x63\x6b\x65\x74\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x74\x69\x6d\x65\x6f\x75\x74',
        _0x4e9a0c(0x22d),
        '\x61\x6c\x72\x65\x61\x64\x79\x2d\x65\x78\x69\x73\x74\x73',
        '\x72\x61\x74\x65\x2d\x6f\x76\x65\x72\x6c\x69\x6d\x69\x74',
        _0x4e9a0c(0x27c),
        _0x4e9a0c(0x209),
        _0x4e9a0c(0x215),
        '\x43\x6c\x6f\x73\x69\x6e\x67\x20\x6f\x70\x65\x6e\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x69\x6e\x20\x66\x61\x76\x6f\x72\x20\x6f\x66\x20\x69\x6e\x63\x6f\x6d\x69\x6e\x67\x20\x70\x72\x65\x6b\x65\x79\x20\x62\x75\x6e\x64\x6c\x65',
        _0x4e9a0c(0x190),
        '\x43\x6c\x6f\x73\x69\x6e\x67\x20\x73\x65\x73\x73\x69\x6f\x6e',
        '\x62\x61\x64\x20\x6d\x61\x63',
        _0x4e9a0c(0x1e8),
        _0x4e9a0c(0x28d),
        _0x4e9a0c(0x198)
    ];
    if (_0x51a104[_0x4e9a0c(0x1ef)](_0x4dd3a2 => _0x2fff28['\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65']()[_0x4e9a0c(0x1b2)](_0x4dd3a2[_0x4e9a0c(0x28f)]()))) {
        return;
    }
    log(_0x4e9a0c(0x236), _0x4e9a0c(0x1e6) + (_0x13cbc0?.[_0x4e9a0c(0x1a4)] || _0x2fff28));
});
const express = require(_0x324594(0x240));
const app = express();
const port = process[_0x324594(0x1f9)][_0x324594(0x21d)] || 0xbb8;
function _0x4fe0(_0x481159, _0x4e7fe8) {
    const _0x3c90de = _0x3c90();
    _0x4fe0 = function (_0x4fe0a5, _0x1fd342) {
        _0x4fe0a5 = _0x4fe0a5 - 0x169;
        let _0x16dd85 = _0x3c90de[_0x4fe0a5];
        if (_0x4fe0['\x6a\x64\x44\x58\x75\x68'] === undefined) {
            var _0x10dccf = function (_0x242fcc) {
                const _0x148541 = '\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
                let _0x43d7bc = '';
                let _0x50981b = '';
                for (let _0x4a9bc6 = 0x0, _0x216443, _0x33dcc6, _0x464591 = 0x0; _0x33dcc6 = _0x242fcc['\x63\x68\x61\x72\x41\x74'](_0x464591++); ~_0x33dcc6 && (_0x216443 = _0x4a9bc6 % 0x4 ? _0x216443 * 0x40 + _0x33dcc6 : _0x33dcc6, _0x4a9bc6++ % 0x4) ? _0x43d7bc += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x216443 >> (-0x2 * _0x4a9bc6 & 0x6)) : 0x0) {
                    _0x33dcc6 = _0x148541['\x69\x6e\x64\x65\x78\x4f\x66'](_0x33dcc6);
                }
                for (let _0x3dd2b6 = 0x0, _0xcd680b = _0x43d7bc['\x6c\x65\x6e\x67\x74\x68']; _0x3dd2b6 < _0xcd680b; _0x3dd2b6++) {
                    _0x50981b += '\x25' + ('\x30\x30' + _0x43d7bc['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x3dd2b6)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
                }
                return decodeURIComponent(_0x50981b);
            };
            _0x4fe0['\x66\x55\x66\x64\x42\x6e'] = _0x10dccf;
            _0x481159 = arguments;
            _0x4fe0['\x6a\x64\x44\x58\x75\x68'] = !![];
        }
        const _0x277547 = _0x3c90de[0x0];
        const _0x4bddbf = _0x4fe0a5 + _0x277547;
        const _0x5a5dd9 = _0x481159[_0x4bddbf];
        if (!_0x5a5dd9) {
            _0x16dd85 = _0x4fe0['\x66\x55\x66\x64\x42\x6e'](_0x16dd85);
            _0x481159[_0x4bddbf] = _0x16dd85;
        } else {
            _0x16dd85 = _0x5a5dd9;
        }
        return _0x16dd85;
    };
    return _0x4fe0(_0x481159, _0x4e7fe8);
}
app[_0x324594(0x277)]('\x2f', (_0x5398f8, _0x2f47d4) => _0x2f47d4['\x73\x65\x6e\x64'](_0x324594(0x17b)));
app[_0x324594(0x224)](port);