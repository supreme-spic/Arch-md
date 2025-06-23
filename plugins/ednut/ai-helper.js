module.exports = [
  {
    command: ["deepseek"],
    description: "Ask Deepseek AI deep questions",
    category: "Ai",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, axios }) => {
      let query = m.text.split(" ").slice(1).join(" ");
      if (!query) return m.reply("Please provide a query");

      let url = `https://bk9.fun/ai/deepseek-r1?q=${encodeURIComponent(query)}`;
      let response = await axios.get(url);
      let content = response.data.BK9.content;
      await ednut.sendMessage(m.chat, { text: content }, { quoted: m });
    }
  },
  {
    command: ["gemini-pro"],
    description: "Ask Gemini Pro AI question with text",
    category: "Ai",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, axios }) => {
      let query = m.text.split(" ").slice(1).join(" ");
      if (!query) return m.reply("Please provide a query");

      let url = `https://bk9.fun/ai/google-thinking?q=${encodeURIComponent(query)}`;
      let response = await axios.get(url);
      let content = response.data.BK9;
      await ednut.sendMessage(m.chat, { text: content }, { quoted: m });
    }
  }
]