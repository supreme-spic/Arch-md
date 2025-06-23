module.exports = [
  {
    command: ["ssweb"],
    alias: ["ss"],
    description: "Take a screenshot of a website",
    category: "Converter",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, text }) => {
      if (!text) return m.reply("Enter a URL");
      if (!text.startsWith("https://")) return m.reply("Please input a valid link");
      const { screenshotV2 } = require('getscreenshot.js');
      var data = await screenshotV2(text);
      await ednut.sendMessage(m.chat, { image: data, mimetype: "image/png" }, { quoted: m });
    }
  },
  {
    command: ["url"],
    alias: ["tourl"],
    description: "Upload media to URL",
    category: "Converter",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, quoted, uploadImage }) => {
      let q = m.quoted ? m.quoted : m;
      let mime = (q.msg || q).mimetype || '';
      if (!mime) return m.reply('No media found');
      let media = await q.download();
      let link = await uploadImage(media);
      let caption = `${link}`;
      m.reply(caption);
    }
  },
  {
    command: ["shorturl"],
    alias: ["shortlink"], 
    description: "Shorten a URL",
    category: "Converter",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, text, axios }) => {
      if (!text) return m.reply("Enter a URL");
      if (!text.startsWith("https://")) return m.reply("Please input a valid link");
      let res = await axios.get('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(text));
      var link = `${res.data.toString()}`;
      return m.reply(link);
    }
  }
]