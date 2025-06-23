module.exports = [
  {
    command: ["owner"],
    description: "Get owner contact",
    category: "Info",
    ban: true,
    gcban: true,
    execute: async (m, { ednut }) => {
      await ednut.sendContact(m.chat, [global.owner], `${global.ownername}`)
    }
  },
  // ... rest of the code
  {
    command: ["repo"],
    alias: ["repository"],
    description: "Get repository information",
    category: "Info",
    ban: true,
    gcban: true,
    execute: async (m, { axios, reply4 }) => {
      try {
        const response = await axios.get(`https://api.github.com/repos/Ednut001/Arch-Md`);
        if (response.status === 200) {
          const repoData = response.data;
          const formattedInfo = `*Repository Name :* ${repoData.name}\n*Description :* ${repoData.description}\n*Owner :* ${repoData.owner.login}\n*Stars :* ${repoData.stargazers_count}\n*Forks :* ${repoData.forks_count}\n*session :* ${global.scan}\n\n*URL :* ${repoData.html_url}\n`;
          reply4(formattedInfo);
        } else {
          await m.reply(`Unable to fetch repository information`);
        }
      } catch (error) {
        console.error(error);
        await m.reply(`Repository currently not available`);
      }
    }
  }
]