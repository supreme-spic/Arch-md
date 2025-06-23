module.exports = [
  {
    command: ["alive"],
    description: "Check if the bot is alive",
    category: "Info",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, runtime, getQuote }) => {
      if (!global.db.settings.aliveTemplate) return m.reply('No alive message set! Use setalive to set one and get more info.');
      const aliveMsg = global.db.settings.aliveTemplate
        .replace(/#alive/g, runtime(process.uptime()))
        .replace(/#quote/g, await getQuote());
      if (global.db.settings.aliveUrl) {
        ednut.sendMessage(m.chat, {
          [global.db.settings.aliveType]: {
            url: global.db.settings.aliveUrl
          },
          caption: aliveMsg
        });
      } else {
        m.reply(aliveMsg);
      }
    }
  },
  {
    command: ["setalive"],
    description: "Set alive message",
    category: "Owner",
    ban: true,
    gcban: true,
    owner: true,
    execute: async (m, { ednut, text, prefix, isOwner, isGroup }) => {
      if (m.text === `${prefix}setalive`) {
        return m.reply(`Usage: ${prefix}setalive <message>\nExample: ${prefix}setalive #alive for runtime #quote for random quote\nYou can also add an image or video url at the end.`);
      }
      const args = m.text.split(' ').slice(1).join(' ');
      if (!args.trim()) {
        return m.reply(`Please provide a message with ${prefix}setalive #alive for runtime #quote for random quote add image or video url (alternative)`);
      }
      global.db.settings.aliveTemplate = args;
      const urlRegex = /(https?:\/\/[^\s]+)/;
      const urlMatch = global.db.settings.aliveTemplate.match(urlRegex);
      if (urlMatch) {
        const url = urlMatch[0];
        global.db.settings.aliveUrl = url;
        global.db.settings.aliveType = url.toLowerCase().endsWith('.mp4') ? 'video' : 'image';
        global.db.settings.aliveTemplate = global.db.settings.aliveTemplate.replace(url, '');
      } else {
        delete global.db.settings.aliveUrl;
        delete global.db.settings.aliveType;
      }
      m.reply('_Alive message set!_');
    }
  }
]