const fs = require("fs-extra");
const request = require("request");
const path = require("path");

module.exports = {
  config: {
    name: "owner",
    version: "1.3.0",
    author: "Mᴏʜᴀᴍᴍᴀᴅ Aᴋᴀsʜ",
    role: 0,
    shortDescription: "Owner information with image",
    category: "Information",
    guide: {
      en: "owner"
    }
  },

  onStart: async function ({ api, event }) {
    const ownerText = 
`╭─ 👑 Oᴡɴᴇʀ Iɴғᴏ 👑 ─╮
│ 👤 Nᴀᴍᴇ       : 𝚂𝙺 𝙷𝙰𝙱𝙸𝙱
│ 🧸 Nɪᴄᴋ       : 𝙷𝚊𝚋𝚒𝚋
│ 🎂 Aɢᴇ        : 18+
│ 💘 Rᴇʟᴀᴛɪᴏɴ : Sɪɴɢʟᴇ
│ 🎓 Pʀᴏғᴇssɪᴏɴ : 𝚆𝚘𝚛𝚔𝚎𝚛
│ 📚 Eᴅᴜᴄᴀᴛɪᴏɴ : 𝚂𝚘𝚋 𝚙𝚊𝚜𝚜
│ 🏡 Lᴏᴄᴀᴛɪᴏɴ : 𝐊𝐨𝐥𝐤𝐚𝐭𝐚-𝐇𝐨𝐨𝐠𝐡𝐥𝐲
├─ 🔗 Cᴏɴᴛᴀᴄᴛ ─╮
│ 📘 Facebook  : www.facebook.com/share/1B58uQgP11/ 
│ 💬 Messenger: /m.me/Bhodro.habib 
│ 📞 WhatsApp  : wa.me/+919564045875
╰────────────────╯`;

    const cacheDir = path.join(__dirname, "cache");
    const imgPath = path.join(cacheDir, "owner.jpg");

    if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);

    const imgLink = "https://i.imgur.com/IphuyKF.jpeg";

    const send = () => {
      api.sendMessage(
        {
          body: ownerText,
          attachment: fs.createReadStream(imgPath)
        },
        event.threadID,
        () => fs.unlinkSync(imgPath),
        event.messageID
      );
    };

    request(encodeURI(imgLink))
      .pipe(fs.createWriteStream(imgPath))
      .on("close", send);
  }
};
