module.exports = [
  {
    command: ["mediafire"],
    alias: ["mf"],
    description: "Download MediaFire file from a link",
    category: "Downloader",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, fetch, text }) => {
      try {
        if (!text) return m.reply("Please input a MediaFire link.");
        if (!text.startsWith("https://")) return m.reply("Please input a valid MediaFire link.");

        let api = await fetch(`https://api.agatz.xyz/api/mediafire?url=${text}`);
        let res = await api.json();
        let data = res.data[0];

        if (!data?.link) return m.reply("Failed to retrieve MediaFire content.");

        let caption = `*MediaFire Downloader*\n\n*Name:* ${data.nama}\n*Size:* ${data.size}\n*Type:* ${data.mime}\n\nDownloading...`;

        await ednut.sendMessage(
          m.chat,
          {
            document: { url: data.link },
            mimetype: data.mime,
            fileName: data.nama,
            caption
          },
          { quoted: m }
        );
      } catch (error) {
        global.log("ERROR", `mediafire command failed: ${error.message || error}`);
        m.reply("Failed to download MediaFire file.");
      }
    }
  },

  {
    command: ["gitclone"],
    description: "Clone a GitHub repository from URL",
    category: "Downloader",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, args }) => {
      try {
        if (!args[0]) return m.reply("Input a GitHub repository URL.");
        const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
        if (!regex.test(args[0])) return m.reply("Invalid GitHub URL.");

        const fetch = require("node-fetch");

        let [, user, repo] = args[0].match(regex);
        repo = repo.replace(/.git$/, "");
        let url = `https://api.github.com/repos/${user}/${repo}/zipball`;

        let head = await fetch(url, { method: "HEAD" });
        if (!head.ok) throw "Repository not found or inaccessible";

        let filenameMatch = head.headers.get("content-disposition")?.match(/attachment; filename=(.*)/);
        if (!filenameMatch) throw "Could not determine filename";
        let filename = filenameMatch[1];

        await ednut.sendMessage(
          m.chat,
          {
            document: { url },
            mimetype: "application/zip",
            fileName: filename
          },
          { quoted: m }
        );
      } catch (error) {
        global.log("ERROR", `gitclone command failed: ${error.message || error}`);
        m.reply("Failed to clone GitHub repository.");
      }
    }
  }
];