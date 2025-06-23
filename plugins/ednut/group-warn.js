const fs = require("fs");
const path = require("path");

// Path to your warn JSON database
const warnPath = path.join(__dirname, "../../all/database/warn.json");

// Read warn data
const readWarns = () => {
  try {
    return JSON.parse(fs.readFileSync(warnPath, "utf-8"));
  } catch {
    return {};
  }
};

// Save warn data
const saveWarns = (data) => {
  fs.writeFileSync(warnPath, JSON.stringify(data, null, 2));
};

module.exports = [
  {
    command: ["warn"],
    alias: [],
    description: "Warn a user in group chat",
    category: "Group",
    ban: true,
    gcban: true,
    group: true,
    execute: async (m, { ednut, isAdmins, isOwner, isBotAdmins, text, sleep }) => {
      if (!(isAdmins || isOwner)) return m.reply(msg.admin);
      if (!isBotAdmins) return m.reply(msg.BotAdmin);

      const war = global.warn; // max allowed warns
      const who = m.mentionedJid[0] || m.quoted?.sender;
      if (!who) return m.reply("Tag or reply to someone to warn.");

      const warns = readWarns();
      if (!warns[who]) warns[who] = 0;

      let reason = text
        ?.replace(/@\d+/g, "")
        ?.replace(/[^a-zA-Z0-9\s.,?!-]/g, "")
        ?.trim() || "No reason";

      if (warns[who] < war) {
        warns[who] += 1;
        saveWarns(warns);

        await ednut.sendMessage(m.chat, {
          text: `WARNING\n\nUser: @${who.split("@")[0]}\nWarning: ${warns[who]}/${war}\nReason: ${reason}`,
          mentions: [who],
        });

        await ednut.sendMessage(m.chat, { delete: m.key });

        if (warns[who] >= war) {
          await ednut.sendMessage(m.chat, {
            text: `@${who.split("@")[0]} has reached *${war}* warnings and will be removed.`,
            mentions: [who],
          });

          await sleep(3000);
          await ednut.groupParticipantsUpdate(m.chat, [who], "remove");

          // ✅ Delete the user's warn record
          delete warns[who];
          saveWarns(warns);
        }
      }
    },
  },
  {
    command: ["delwarn"],
    alias: [],
    description: "Reduce warning count of a user",
    category: "Group",
    ban: true,
    gcban: true,
    group: true,
    execute: async (m, { ednut, isAdmins, isOwner, isBotAdmins }) => {
      if (!(isAdmins || isOwner)) return m.reply(msg.admin);
      if (!isBotAdmins) return m.reply(msg.BotAdmin);

      const who = m.mentionedJid[0] || m.quoted?.sender;
      if (!who) return m.reply("Tag or reply to someone to reduce warning.");

      const warns = readWarns();
      if (!warns[who]) return m.reply("User has no warnings.");

      if (warns[who] > 0) {
        warns[who] -= 1;
        saveWarns(warns);
        await ednut.sendMessage(m.chat, {
          text: `Warning Removed\nUser: @${who.split("@")[0]}\nTotal Warnings: ${warns[who]}`,
          mentions: [who],
        });
      } else {
        m.reply("User has no warnings.");
      }
    },
  },
  {
    command: ["resetwarn"],
    alias: [],
    description: "Reset warning count for a user",
    category: "Group",
    ban: true,
    gcban: true,
    group: true,
    execute: async (m, { ednut, isAdmins, isOwner, isBotAdmins, text }) => {
      if (!(isAdmins || isOwner)) return m.reply(msg.admin);
      if (!isBotAdmins) return m.reply(msg.BotAdmin);

      const who =
        m.mentionedJid[0] ||
        m.quoted?.sender ||
        (text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false);
      if (!who) return m.reply("Tag, reply or provide number to reset warning.");

      const warns = readWarns();
      warns[who] = 0;
      saveWarns(warns);

      await ednut.sendMessage(m.chat, {
        text: `Warning for @${who.split("@")[0]} has been reset.`,
        mentions: [who],
      });
    },
  },
];