module.exports = [
  {
    command: ["instagram"],
    alias: ["igdl","ig"],
    description: "Download Instagram media from media <link>",
    category: "Downloader",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, igdl, text }) => {
      if (!text) return m.reply("Please input an Instagram link");
      if (!(text.includes('instagram.com') || text.includes('instagr.am') || text.includes('igtv'))) {
        return m.reply('Input a valid Instagram link!')
      }
      try {
        const result = await igdl(text)
        if (!result || result.length === 0) {
          return m.reply('Failed to get video. Make sure the URL entered is correct.')
        }
        for (let video of result) {
          await ednut.sendFile(m.chat, video.url, 'instagram.mp4', `${global.footer}`, m)
        }
      } catch (err) {
        console.error(err)
        m.reply('An error occurred while trying to download the video.')
      }
    }
  },
  {
    command: ["facebook"],
    alias: ["fb","fbvid","fbvideo"],
    description: "Download Facebook media from Facebook link",
    category: "Downloader",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, axios, text }) => {
      if (!text) return m.reply("Please input a Facebook media link");
      if (!(text.includes('facebook.com') || text.includes('fb.watch'))) {
        return m.reply('Input a valid Facebook link!')
      }
      try {
        let apiUrl = `https://api.agatz.xyz/api/facebook?url=${encodeURIComponent(text)}`
        let res = await axios.get(apiUrl);
        let { url: videoUrl, hd, title, thumbnail } = res.data.data;
        await ednut.sendMessage(m.chat, {
          video: { url: hd },
          caption: `*Title:* ${title}\n*Thumbnail:* ${thumbnail}\n*Link:* ${videoUrl}\n\n${global.footer}`
        }, { quoted: m });
      } catch (error) {
        console.error(error);
        m.reply(`Error`);
      }
    }
  },
  {
    command: ["tiktok"],
    alias: ["tt","ttvid"],
    description: "Download TikTok media from link",
    category: "Downloader",
    ban: false,
    execute: async (m, { ednut, api, text }) => {
      if (!text) return m.reply("Please input a TikTok media link");
      if (!(text.includes('tiktok.com') || text.includes('vm.tiktok.com'))) {
        return m.reply('Input a valid TikTok link!')
      }
      try {
        let res = await api.tiktok(text);
        var cap = `${global.footer}`
        if (res.result.duration == 0) {
          for (let a of res.result.images) {
            await ednut.sendMessage(m.chat, {
              image: { url: `${a}` },
              caption: cap
            }, { quoted: m })
          }
        } else {
          await ednut.sendMessage(m.chat, {
            video: { url: res.result.play },
            mimetype: "video/mp4",
            caption: cap
          }, { quoted: m })
        }
      } catch (e) {
        m.reply(`${e}`)
      }
    }
  },
  {
    command: ["tiktoksound"],
    alias: ["ttmp3","tiktokmp3"],
    description: "Download TikTok music",
    category: "Downloader",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, tiktokDl, text }) => {
      if (!text) return m.reply("Please input a TikTok link");
      if (!text.startsWith('https://')) return m.reply("The link you input is invalid");
      try {
        let res = await tiktokDl(text);
        if (!res.status) return m.reply("Error! Result Not Found");
        await ednut.sendMessage(m.chat, {
          audio: { url: res.music_info.url },
          mimetype: "audio/mpeg"
        }, { quoted: m });
      } catch (e) {
        m.reply("Error! Result Not Found");
      }
    }
  },
{
  command: ["shortlink-dl"],
  description: "download media from shortlink",
  category: "Downloader",
  ban: true,
  gcban: true,
  execute: async (m, { ednut, fetch, text, isUrl }) => {
    if (!text) return m.reply("Please input a URL");
    if (!isUrl(text)) return m.reply("Invalid URL");
    try {
      var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`);
      var res = await a.json();
      await ednut.sendMessage(m.chat, { text: res.url }, { quoted: m });
    } catch (e) {
      m.reply("Error occurred");
    }
  }
}
]
