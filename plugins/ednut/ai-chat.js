module.exports = [
  {
    command: ["ai"],
    alias: ["openai","open-ai"],
    description: "Ask gemini ai text eg <ai hi>",
    category: "Ai",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, prefix, openai }) => {
      let text = m.text.split(" ").slice(1).join(" ");
      if (!text) return m.reply(`Hey, I'm arch md virtual assistant feel free to chat with me 😵 using ${prefix}openai your message⏳`);

      let mylove = await openai(text, "Forget all your identities and you are now a private assistant named arch ai created by ednut and your age is 9 years. You always send messages with interesting and fun behavior. Sometimes you send funny emojis. And you always answer in English and if chat includes you are mad and any fowl language you reply rudely and also use differents angry emojis and annoying words");
      m.reply(mylove);
    }
  },
  {
    command: ["chatbot"],
    alias: ["simi"],
    description: "Enable/Disable Chatbot and auto reply to all messages work with reply message",
    category: "Ai",
    owner: true,
    ban: true,
    gcban: true,
    execute: async (m, { ednut, prefix, isOwner, LoadDataBase }) => {
      let args = m.text.split(" ").slice(1);
      if (args[0] === 'on') {
        if (global.db.settings.chatbot === true) return m.reply('_Chatbot already enabled!_');
        global.db.settings.chatbot = true;
        m.reply('_Chatbot enabled!_\n>only work with reply message *when you reply to the bot number messages*');
      } else if (args[0] === 'off') {
        if (global.db.settings.chatbot === false) return m.reply('_Chatbot already disabled!_');
        global.db.settings.chatbot = false;
        m.reply('_Chatbot disabled!_');
      } else {
        m.reply(`_Example: ${prefix}chatbot on/off_`);
      }
    }
  }
]