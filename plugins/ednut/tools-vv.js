const isGroupJid = jid => jid.endsWith('@g.us');

module.exports = {
  command: ["vv"],
  alias: ["readviewonce"],
  description: "Resend view-once image/video/audio to yourself or a set private JID",
  category: "Tool",
  async execute(m, { ednut, prefix, command, botNumber }) {
    // Determine target JID:
    // 1. env VV if set and not group,
    // 2. botNumber,
    // 3. fallback to current chat
    let target;

    if (process.env.VV && !isGroupJid(process.env.VV)) {
      target = process.env.VV;
    } else if (botNumber) {
      target = botNumber;
    } else {
      target = m.chat;
    }

    if (process.env.VV && isGroupJid(process.env.VV)) {
      await m.reply("The VV environment variable cannot be a group JID. Using bot number instead.");
    }

    if (!m.quoted || !m.quoted.mimetype) {
      await m.reply(`Reply to an image, video, or audio with the caption ${prefix + command}`);
      return;
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
          mimetype: mime || 'audio/mpeg',
          ptt: true
        }, { quoted: m });

      } else {
        await m.reply(`Unsupported media type. Reply to image, video, or audio.`);
        return;
      }

    } catch (err) {
      if (global.log) global.log("ERROR", `vv plugin: ${err.message || err}`);
      await m.reply("Failed to process media.");
    }
  }
};