module.exports = [
  {
    command: ["yta"],
    alias: ["ytmp3", "ytaudio"],
    description: "Download YouTube video as MP3",
    category: "Downloader",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, ytdl, text }) => {
      if (!text) return m.reply("Please provide a YouTube video link.");
      if (!text.startsWith("https://")) return m.reply("Invalid YouTube link.");

      try {
        const res = await ytdl.ytmp3(text);
        if (res?.status) {
          await ednut.sendMessage(m.chat, {
            audio: { url: res.download.url },
            mimetype: "audio/mpeg"
          }, { quoted: m });
        } else {
          m.reply("❌ Failed to fetch MP3 download.");
        }
      } catch (err) {
        global.log("ERROR", `yta command: ${err.message || err}`);
        m.reply("An error occurred while downloading the MP3.");
      }
    }
  },

  {
    command: ["ytv"],
    alias: ["ytmp4", "ytvideo"],
    description: "Download YouTube video as MP4",
    category: "Downloader",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, ytdl, text }) => {
      if (!text) return m.reply("Please provide a YouTube video link.");
      if (!text.startsWith("https://")) return m.reply("Invalid YouTube link.");

      try {
        const res = await ytdl.ytmp4(text);
        if (res?.status) {
          await ednut.sendMessage(m.chat, {
            video: { url: res.download.url },
            mimetype: "video/mp4"
          }, { quoted: m });
        } else {
          m.reply("❌ Failed to fetch MP4 download.");
        }
      } catch (err) {
        global.log("ERROR", `ytv command: ${err.message || err}`);
        m.reply("An error occurred while downloading the video.");
      }
    }
  },

  {
    command: ["play"],
    alias: ["ytplay", "ytmusic"],
    description: "Search and play song from YouTube",
    category: "Downloader",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, ytdl, yts, text }) => {
      if (!text) return m.reply("Please provide a song name.");

      try {
        const search = await yts(text);
        const result = search.all?.[0];
        if (!result) return m.reply("No results found.");

        const res = await ytdl.ytmp3(result.url);
        if (res?.status) {
          await ednut.sendMessage(m.chat, {
            audio: { url: res.download.url },
            mimetype: "audio/mpeg"
          }, { quoted: m });
        } else {
          m.reply("❌ MP3 download failed.");
        }
      } catch (err) {
        global.log("ERROR", `play command: ${err.message || err}`);
        m.reply("An error occurred while playing the song.");
      }
    }
  },

  {
    command: ["video"],
    description: "Search and download YouTube video",
    category: "Downloader",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, ytdl, yts, text }) => {
      if (!text) return m.reply("Please provide a video name.");

      try {
        const search = await yts(text);
        const result = search.all?.[0];
        if (!result) return m.reply("No video found.");

        const res = await ytdl.ytmp4(result.url);
        if (res?.status) {
          await ednut.sendMessage(m.chat, {
            video: { url: res.download.url },
            mimetype: "video/mp4"
          }, { quoted: m });
        } else {
          m.reply("❌ Video download failed.");
        }
      } catch (err) {
        global.log("ERROR", `video command: ${err.message || err}`);
        m.reply("An error occurred while downloading the video.");
      }
    }
  }
];