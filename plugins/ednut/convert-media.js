module.exports = [
  {
    command: ["take"],
    alias: ["steal", "stickersteal", "stickertake", "wm"],
    description: "Steal a sticker with custom pack and author",
    category: "Converter",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, args, quoted, mime, fs }) => {
      if (!quoted) return m.reply("Reply to a sticker");
      if (!/webp/.test(mime)) return m.reply("Reply to a sticker only");
      const getRandom = (ext) => {
        return `${Math.floor(Math.random() * 10000)}${ext}`;
      };
      let ahuh = args.join(" ").split("|");
      let satu = ahuh[0] !== "" ? ahuh[0] : m.pushName;
      let dua = typeof ahuh[1] !== "undefined" ? ahuh[1] : ``;
      let { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
      let media = await ednut.downloadAndSaveMediaMessage(quoted);
      let jancok = new Sticker(media, {
        pack: satu,
        author: dua,
        type: StickerTypes.FULL,
        categories: ["🤩", "🎉"],
        id: "12345",
        quality: 70,
        background: "#FFFFFF00",
      });
      let stok = getRandom(".webp");
      let nono = await jancok.toFile(stok);
      let nah = fs.readFileSync(nono);
      await ednut.sendMessage(m.chat, { sticker: nah }, { quoted: m });
      await fs.unlinkSync(stok);
      await fs.unlinkSync(media);
    },
  },
  {
    command: ["toimg"],
    alias: ["toimage", "image"],
    description: "Convert sticker to image",
    category: "Converter",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, quoted, mime, fs, exec }) => {
      if (!quoted) return m.reply("Reply to a sticker");
      if (!/webp/.test(mime)) return m.reply("Reply to a sticker");
      let media = await ednut.downloadAndSaveMediaMessage(quoted);
      let ran = "jjsjsnsu.png";
      exec(`ffmpeg -i ${media} ${ran}`, (err) => {
        fs.unlinkSync(media);
        if (err) return m.reply(err);
        let buffer = fs.readFileSync(ran);
        ednut.sendMessage(m.chat, { image: buffer }, { quoted: m });
        fs.unlinkSync(ran);
      });
    },
  },
  {
    command: ["sticker"],
    alias: ["stik", "s"],
    description: "Create a sticker from image or video",
    category: "Converter",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, args, quoted, mime, fs }) => {
      if (!quoted) return m.reply("Reply to an image or video");
      if (!/image|video/.test(mime)) return m.reply("Reply to an image or video");
      const getRandom = (ext) => {
        return `${Math.floor(Math.random() * 10000)}${ext}`;
      };
      let ahuh = args.join(" ").split("|");
      let satu = ahuh[0] !== "" ? ahuh[0] : global.packname;
      let dua = typeof ahuh[1] !== "undefined" ? ahuh[1] : global.author;
      let { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
      let media = await ednut.downloadAndSaveMediaMessage(quoted);
      let jancok = new Sticker(media, {
        pack: satu,
        author: dua,
        type: StickerTypes.FULL,
        categories: ["🤩", "🎉"],
        id: "12345",
        quality: 70,
        background: "#FFFFFF00",
      });
      let stok = getRandom(".webp");
      let nono = await jancok.toFile(stok);
      let nah = fs.readFileSync(nono);
      await ednut.sendMessage(m.chat, { sticker: nah }, { quoted: m });
      await fs.unlinkSync(stok);
      await fs.unlinkSync(media);
    },
  },
{
  command: ["write"],
  description: "Create a sticker from text",
  category: "Converter",
  ban: true,
  gcban: true,
  execute: async (m, { ednut, text, fs, getRandom }) => {
    if (!text) return m.reply("Please enter some text");
    const text2png = require('text2png');
    await fs.writeFileSync('out.png', text2png(text, {
      font: '100px coolvetica rg',
      localFontPath: '././all/font/coolvetica rg.otf',
      localFontName: 'coolvetica rg',
      color: 'black',
      textAlign: "left",
      lineSpacing: 10,
      strokeColor: "white",
      strokeWidth: 2,
      padding: 20
    }));
    let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
    let media = fs.readFileSync('out.png');
    let jancok = new Sticker(media, {
      pack: global.packname,
      author: global.author,
      type: StickerTypes.FULL,
      categories: ['🤩', '🎉'],
      id: '12345',
      quality: 70,
      background: '#FFFFFF00'
    });
    let stok = getRandom(".webp");
    let nono = await jancok.toFile(stok);
    let nah = fs.readFileSync(nono);
    await ednut.sendMessage(m.chat, { sticker: nah }, { quoted: m });
    await fs.unlinkSync(stok);
    await fs.unlinkSync('out.png');
  },
},
];