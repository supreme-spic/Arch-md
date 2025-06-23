module.exports = [
{
    command: ["mediafire"],
    alias: ["mf"],
    description: "Download media fire content from with <url>",
    category: "Downloader",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, fetch, text }) => {
      if (!text) return m.reply("Please input a MediaFire link");
      if (!text.startsWith("https://")) return m.reply("Please input a valid MediaFire link");
      try {
        let api = await fetch(`https://api.agatz.xyz/api/mediafire?url=${text}`);
        let res = await api.json();
        let data = res.data[0];
        let caption = `*MediaFire Downloader* -\n_Name: ${data.nama}_\n_Size: ${data.size}_\n_Extension: ${data.mime}_\n_Link: ${data.link}_`;
        await ednut.sendMessage(m.chat, { document: { url: data.link }, mimetype: data.mime, fileName: data.nama, caption: caption }, { quoted: m });
      } catch (error) {
        console.log(error);
        m.reply(error);
      }
    }
  },
{
  command: ["gitclone"],
  description: "Clone a GitHub repository from url",
  category: "Downloader",
  ban: true,
  gcban: true,
  execute: async (m, { ednut, args }) => {
    if (!args[0]) return m.reply("input a github repo url");
    let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
    if (!regex.test(args[0])) return m.reply("Link you input is invalid");
    const fetcher = require('node-fetch');
    try {
      let [, user, repo] = args[0].match(regex) || [];
      repo = repo.replace(/.git$/, '');
      let url = `https://api.github.com/repos/${user}/${repo}/zipball`;
      let filename = (await fetcher(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
      ednut.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}` }, { quoted: m });
    } catch (e) {
      await m.reply(`Error! Repository not found`);
    }
  }
}
]