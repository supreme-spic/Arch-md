module.exports = [
  {
    command: ["totag"],
    alias: ["hidetag", "ht"],
    description: "Mention all group members with quoted text or media only",
    category: "Group",
    ban: true,
    gcban: true,
    group: true,
    execute: async (m, { ednut, isAdmins, isOwner, isBotAdmins }) => {
      if (!(isAdmins || isOwner)) return m.reply(msg.admin);
      if (!isBotAdmins) return m.reply(msg.botAdmin);

      const metadata = await ednut.groupMetadata(m.chat);
      const members = metadata.participants.map(p => p.id);
      const quoted = m.msg?.contextInfo?.quotedMessage;

      if (!quoted) return m.reply("*Reply to a message (text, image, audio, video, etc.) to tag everyone.*");

      if (quoted.conversation) {
        return ednut.sendMessage(m.chat, {
          text: quoted.conversation,
          mentions: members
        }, { quoted: m });
      }

      if (quoted.imageMessage) {
        const caption = quoted.imageMessage.caption || "";
        const imageUrl = await ednut.downloadAndSaveMediaMessage(quoted.imageMessage);
        return ednut.sendMessage(m.chat, {
          image: { url: imageUrl },
          caption,
          mentions: members
        }, { quoted: m });
      }

      if (quoted.audioMessage) {
        const audioUrl = await ednut.downloadAndSaveMediaMessage(quoted.audioMessage);
        return ednut.sendMessage(m.chat, {
          audio: { url: audioUrl },
          mimetype: "audio/mpeg",
          mentions: members
        }, { quoted: m });
      }

      if (quoted.videoMessage) {
        const caption = quoted.videoMessage.caption || "";
        const videoUrl = await ednut.downloadAndSaveMediaMessage(quoted.videoMessage);
        return ednut.sendMessage(m.chat, {
          video: { url: videoUrl },
          caption,
          mentions: members
        }, { quoted: m });
      }

      if (quoted.stickerMessage) {
        const stickerUrl = await ednut.downloadAndSaveMediaMessage(quoted.stickerMessage);
        return ednut.sendMessage(m.chat, {
          sticker: { url: stickerUrl },
          mentions: members
        }, { quoted: m });
      }

      if (quoted.documentMessage) {
        const docUrl = await ednut.downloadAndSaveMediaMessage(quoted.documentMessage);
        const fileName = quoted.documentMessage.fileName || "file";
        return ednut.sendMessage(m.chat, {
          document: { url: docUrl },
          mimetype: quoted.documentMessage.mimetype || 'application/octet-stream',
          fileName,
          mentions: members
        }, { quoted: m });
      }
      
      return m.reply("Unsupported or unknown message type.");
    }
  },
  {
    command: ["tagadmin"],
    alias: ["listadmin", "admin"],
    description: "Mention all group admins",
    category: "Group",
    ban: true,
    gcban: true,
    group: true,
    execute: async (m, { ednut, isAdmins, isOwner, isBotAdmins }) => {
      const metadata = await ednut.groupMetadata(m.chat);
      const admins = metadata.participants.filter(p => p.admin);
      const mentions = admins.map(a => a.id);
      const list = admins.map((a, i) => `${i + 1}. @${a.id.split('@')[0]}`).join('\n');

      await ednut.sendMessage(
        m.chat,
        {
          text: `Group Admins:\n${list}`,
          mentions
        },
        { quoted: m }
      );
    }
  },

  {
    command: ["revoke"],
    alias: ["resetlink"],
    description: "Reset the group invite link",
    category: "Group",
    ban: true,
    gcban: true,
    group: true,
    execute: async (m, { ednut, isAdmins, isOwner, isBotAdmins }) => {
      if (!(isAdmins || isOwner)) return m.reply(msg.admin);
      if (!isBotAdmins) return m.reply(msg.BotAdmin);

      await ednut.groupRevokeInvite(m.chat);
      m.reply("Group link has been reset successfully.");
    }
  },

  {
    command: ["invite"],
    alias: ["grouplink"],
    description: "Get the current group invite link",
    category: "Group",
    ban: true,
    gcban: true,
    group: true,
    execute: async (m, { ednut, isAdmins, isOwner, isBotAdmins }) => {
      if (!(isAdmins || isOwner)) return m.reply(msg.admin);
      if (!isBotAdmins) return m.reply(msg.BotAdmin);

      const code = await ednut.groupInviteCode(m.chat);
      const link = `https://chat.whatsapp.com/${code}`;

      await ednut.sendMessage(m.chat, { text: link, matchedText: link }, { quoted: m });
    }
  },
{
  command: ["tag"],
  description: "Mention all group members with plain text only",
  category: "Group",
  ban: true,
  gcban: true,
  group: true,
  execute: async (m, { ednut, isAdmins, isOwner, isBotAdmins, text }) => {
    if (!(isAdmins || isOwner)) return m.reply(msg.admin);
    if (!isBotAdmins) return m.reply(msg.botAdmin);

    if (!text) return m.reply("Please provide a message. Example: .tag Hello everyone");

    const metadata = await ednut.groupMetadata(m.chat);
    const members = metadata.participants.map(p => p.id);

    await ednut.sendMessage(m.chat, {
      text,
      mentions: members
    });
    
    // Delete the command message
    await ednut.sendMessage(m.chat, { delete: m.key });
  }
},
  {
  command: ["tagall"],
  description: "Mention everyone in the group",
  category: "Group",
  ban: true,
  gcban: true,
  group: true,
  execute: async (m, { ednut, isAdmins, isOwner, isBotAdmins }) => {
    if (!(isAdmins || isOwner)) return m.reply(msg.admin);
    if (!isBotAdmins) return m.reply(msg.BotAdmin);

    const metadata = await ednut.groupMetadata(m.chat);
    const participants = metadata.participants;
    const members = participants.map(p => p.id);

    // Trim command from the text
    const text = m.text.replace(/^[.,]?(tagall)/i, '').trim() || 'none';
    let message = `Message: ${text}\n\n`;

    for (const mem of participants) {
      message += `@${mem.id.split('@')[0]}\n`;
    }
    
    await ednut.sendMessage(m.chat, { text: message, mentions: members });
        // Delete the command message
    await ednut.sendMessage(m.chat, { delete: m.key });
  }
}
];