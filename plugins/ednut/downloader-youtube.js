module.exports = [
  {
    command: ["yta"],
    alias: ["ytmp3","ytaudio"],
    description: "Download YouTube video from link as MP3",
    category: "Downloader",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, ytdl, text }) => {
      if (!text) return m.reply("Please provide a YouTube video link");
      if (!text.startsWith("https://")) return m.reply("Please input a valid YouTube link");
      try {
        var anu = await ytdl.ytmp3(text);
        if (anu.status) {
          let urlMp3 = anu.download.url;
          await ednut.sendMessage(m.chat, { audio: { url: urlMp3 }, mimetype: "audio/mpeg" }, { quoted: m });
        } else {
          return m.reply("Error! Result Not Found");
        }
      } catch (error) {
        m.reply("An error occurred while downloading the MP3 file.");
        console.error(error);
      }
    }
  },
  {
    command: ["ytv"],
    alias: ["ytmp4","ytvideo"],
    description: "Download YouTube video as MP4 from link",
    category: "Downloader",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, ytdl, text }) => {
      if (!text) return m.reply("Please provide a YouTube video link");
      if (!text.startsWith("https://")) return m.reply("Please input a valid YouTube link");
      try {
        var anu = await ytdl.ytmp4(text);
        if (anu.status) {
          let urlMp4 = anu.download.url;
          await ednut.sendMessage(m.chat, { video: { url: urlMp4 }, mimetype: "video/mp4" }, { quoted: m });
        } else {
          return m.reply("Error! Result Not Found");
        }
      } catch (error) {
        m.reply("An error occurred while downloading the MP4 file.");
        console.error(error);
      }
    }
  },
  {
    command: ["play"],
    alias: ["ytplay","ytmusic"],
    description: "Play a song from YouTube",
    category: "Downloader",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, ytdl, yts, text }) => {
      if (!text) return m.reply("Please provide a song name");
      try {
        let ytsSearch = await yts(text);
        const res = await ytsSearch.all[0];
        var anu = await ytdl.ytmp3(res.url);
        if (anu.status) {
          let urlMp3 = anu.download.url;
          await ednut.sendMessage(m.chat, { audio: { url: urlMp3 }, mimetype: "audio/mpeg" }, { quoted: m });
        } else {
          return m.reply("Error! Result Not Found");
        }
      } catch (error) {
        m.reply("An error occurred while playing the song.");
        console.error(error);
      }
    }
  },
  {
    command: ["video"],
    description: "Download a video from YouTube",
    category: "Downloader",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, ytdl, yts, text }) => {
      if (!text) return m.reply("Please provide a video name");
      try {
        let ytsSearch = await yts(text);
        const res = await ytsSearch.all[0];
        var anu = await ytdl.ytmp4(res.url);
        if (anu.status) {
          let urlMp4 = anu.download.url;
          await ednut.sendMessage(m.chat, { video: { url: urlMp4 }, ptv: false, mimetype: "video/mp4" }, { quoted: m });
        } else {
          return m.reply("Error! Result Not Found");
        }
      } catch (error) {
        m.reply("An error occurred while downloading the video.");
        console.error(error);
      }
    }
  }
]