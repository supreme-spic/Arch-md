module.exports = [
  {
    command: ["img"],
    alias: ["Pinterest"],
    description: "Download Pinterest images from query you can also use the command number that you want eg 10",
    category: "Downloader",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, pinterest, text }) => {
      if (!text) return m.reply(`please provide a query`);
      let [query, count] = text.split(' ');
      let imgCount = 3;
      if (text.indexOf(' ') !== -1) {
        const lastWord = text.split(' ').pop();
        if (!isNaN(lastWord) && lastWord.trim() !== '') {
          imgCount = parseInt(lastWord);
          query = text.substring(0, text.lastIndexOf(' '));
        } else {
          query = text;
        }
      } else {
        query = text;
      }
      try {
        const results = await pinterest(query);
        if (results.length === 0) return m.reply(`No results found for *${query}*. Try another search term.`);
        const imagesToSend = Math.min(results.length, imgCount);
        for (let i = 0; i < imagesToSend; i++) {
          const result = results[i];
          const caption = `${global.footer}`;
          await ednut.sendMessage(m.chat, { image: { url: result.image }, caption: caption }, { quoted: m });
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      } catch {
        m.reply('An error occurred while fetching Pinterest media. Please try again later.');
      }
    }
  },
  {
  command: ["pindl"],
  description: "Download media from Pinterest via url",
  category: "Downloader",
  ban: true,
  gcban: true,
  execute: async (m, { ednut, pinDL , lookup, text}) => {
    try {
      if (!text) return m.reply(`Enter URL\n\nExample: ${prefix}pindl https://pin.it/xxxxxxx`)
      const res = await pinDL(m.text)
      for (let result of res.data) {
        const mime = lookup(result.url)
        await ednut.sendMessage(m.chat, { [mime.split('/')[0]]: { url: result.url }, caption: `${global.footer}` }, { quoted: m })
      }
    } catch (error) {
      console.error(error)
      m.reply(`Failed to download. Please try again later...`)
    }
  }
},
]