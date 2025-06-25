module.exports = [
  {
    command: ["deepseek"],
    description: "Ask Deepseek AI deep questions",
    category: "Ai",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, axios }) => {
      try {
        let query = m.text.split(" ").slice(1).join(" ");
        if (!query) return m.reply("Please provide a query");

        let url = `https://bk9.fun/ai/deepseek-r1?q=${encodeURIComponent(query)}`;
        let response = await axios.get(url);
        let content = response.data.BK9.content;

        await ednut.sendMessage(m.chat, { text: content }, { quoted: m });
      } catch (err) {
        global.log("ERROR", `Deepseek command failed: ${err.message || err}`);
        m.reply("An error occurred while contacting Deepseek AI.");
      }
    }
  },
  {
    command: ["gemini-pro"],
    description: "Ask Gemini Pro AI question with text",
    category: "Ai",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, axios }) => {
      try {
        let query = m.text.split(" ").slice(1).join(" ");
        if (!query) return m.reply("Please provide a query");

        let url = `https://bk9.fun/ai/google-thinking?q=${encodeURIComponent(query)}`;
        let response = await axios.get(url);
        let content = response.data.BK9;

        await ednut.sendMessage(m.chat, { text: content }, { quoted: m });
      } catch (err) {
        global.log("ERROR", `Gemini-Pro command failed: ${err.message || err}`);
        m.reply("An error occurred while contacting Gemini Pro AI.");
      }
    }
  }
];