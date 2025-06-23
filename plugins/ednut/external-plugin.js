const fs = require("fs");
const path = require("path");
const axios = require("axios");

module.exports = {
  command: ["install"],
  description: "Install a plugin from raw GitHub URL",
  category: "External",
  owner: true,
  execute: async (m, { text }) => {
    if (!text || !text.startsWith("https://raw.githubusercontent.com/")) {
      return m.reply("Please provide a valid raw GitHub URL.\nExample:\ninstall https://raw.githubusercontent.com/username/repo/branch/path.js");
    }

    try {
      const response = await axios.get(text);
      const filename = text.split("/").pop(); // get last part as filename

      if (!filename.endsWith(".js")) {
        return m.reply("This does not appear to be a valid plugin file.");
      }

      const savePath = path.resolve(__dirname, "../../plugins/ednut/", filename);
      fs.writeFileSync(savePath, response.data, "utf8");

      m.reply(`Plugin *${filename}* installed successfully.`);
    } catch (e) {
      console.error(e);
      m.reply("Failed to install plugin.");
    }
  }
};