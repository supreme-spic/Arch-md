const isGroupJid = jid => jid.endsWith('@g.us');

module.exports = {
  command: ["vv"],
  alias: ["readviewonce"],
  description: "Resend view-once image/video/audio to yourself or a set private JID",
  category: "Tool",
  async execute(m, { ednut, isMedia, prefix, command }) {
    let target = process.env.VV || m.chat;
    // Prevent using group JID as redirect
    if (process.env.VV && isGroupJid(process.env.VV)) {
      return m.reply("The VV environment variable cannot be a group JID.");
    }

    // Must quote a message
    if (!m.quoted || !m.quoted.mimetype) {
      return m.reply(`Reply to an image, video, or audio with the caption ${prefix + command}`);
    }

    const mime = m.quoted.mimetype;
    const caption = m.quoted.msg?.caption || "";

    try {
      const media = await m.quoted.download();

      if (/image/.test(mime)) {
        await ednut.sendMessage(target, {
          image: media,
          caption
        }, { quoted: m });

      } else if (/video/.test(mime)) {
        await ednut.sendMessage(target, {
          video: media,
          caption
        }, { quoted: m });

      } else if (/audio/.test(mime)) {
        await ednut.sendMessage(target, {
          audio: media,
          mimetype: 'audio/mpeg',
          ptt: true
        }, { quoted: m });

      } else {
        return m.reply(`Unsupported media type. Reply to image, video, or audio.`);
      }

    } catch (err) {
      console.error("VV error:", err);
      m.reply("Failed to process media.");
    }
  }
};