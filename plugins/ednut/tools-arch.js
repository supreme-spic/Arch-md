module.exports = [
  {
    command: ["readmore"],
    description: "Hide text using read more",
    category: "Tool",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, text }) => {
      const more = String.fromCharCode(8206);
      const readmore = more.repeat(4001);
      let [l = '', r = ''] = text.split('|');
      await ednut.sendMessage(m.chat, { text: l + readmore + r }, { quoted: m });
    }
  },
  {
  command: ["lyrics"],
  description: "Fetch song lyrics by title",
  category: "Tool",
  ban: true,
  gcban: true,
  execute: async (m, { text, ednut, msg, fetch }) => {
    try {
      // Extract song title from text
      const title = text.trim();
      if (!title) return m.reply("Please provide a song title");

      // Fetch lyrics
      let res = await fetch(`https://api-versevibe.zone.id/versev2/lyrics?title=${encodeURIComponent(title)}&apikey=AbroCodesf9Dg7`);
      let data = await res.json();

      if (!data?.lyrics) return m.reply("_Lyrics not found_");
      m.reply(data.lyrics);

    } catch (e) {
      m.reply("Error fetching lyrics.");
      console.error("Lyrics command error:", e);
    }
  }
},
  {
    command: ["trackip"],
    description: "Track IP address information",
    category: "Tool",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, text, fetch }) => {
      if (!text) return m.reply("Example: 112.90.150.204");

      try {
        let res = await fetch(`https://ipwho.is/${text}`).then(r => r.json());
        if (!res.success) throw new Error(`IP ${text} not found!`);

        const info = `IP: ${res.ip}\nCountry: ${res.country}\nRegion: ${res.region}\nCity: ${res.city}\nLatitude: ${res.latitude}\nLongitude: ${res.longitude}\nISP: ${res.connection?.isp}\nOrg: ${res.connection?.org}\nTimezone: ${res.timezone?.id} (${res.timezone?.current_time})`;

        await ednut.sendMessage(m.chat, {
          location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude }
        }, { ephemeralExpiration: 604800 });

        await new Promise(resolve => setTimeout(resolve, 2000));
        m.reply(info);

      } catch (e) {
        m.reply(`Error: Unable to retrieve data for IP ${text}`);
      }
    }
  },
  {
    command: ["tts"],
    alias: ["say", "gtts"],
    description: "Convert text to speech",
    category: "Converter",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, args, q, googleTTS }) => {
      let text = args.length > 1 ? args.slice(1).join(" ") : q;
      if (!text) return m.reply("Missing text. Usage: .tts [style] [text]. Available styles: male, female, deep, slow, fast, ng, au");

      let voiceLanguage = 'en-US';
      let speed = false;
      const style = args[0]?.toLowerCase();

      switch (style) {
        case "female": voiceLanguage = "en-GB"; break;
        case "deep": voiceLanguage = "en-IN"; break;
        case "slow": speed = true; break;
        case "ng": voiceLanguage = "en-NG"; break;
        case "au": voiceLanguage = "en-AU"; break;
      }

      if (text.length > 200) return m.reply("Text must be under 200 characters.");

      const url = googleTTS.getAudioUrl(text, { lang: voiceLanguage, slow: speed, host: 'https://translate.google.com' });
      await ednut.sendMessage(m.chat, { audio: { url }, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
    }
  },
  {
    command: ["device"],
    alias: ["getdevice", "phone"],
    description: "Detect the device used by a quoted message",
    category: "Tool",
    ban: true,
    gcban: true,
    execute: async (m, { ednut, getDevice }) => {
      if (!m.quoted) return m.reply("Reply to a chat to get device info");
      const device = await getDevice(m.quoted.id);
      await ednut.sendMessage(m.chat, {
        text: `@${m.quoted.sender.split('@')[0]} is using ${device}`,
        contextInfo: { mentionedJid: [m.quoted.sender] }
      }, { quoted: m });
    }
  },
];
