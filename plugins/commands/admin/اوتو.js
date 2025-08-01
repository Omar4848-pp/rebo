const config = {
  name: "اوتو",
  aliases: ["rs", "rest", "reboot"],
  permissions: [2],
  isAbsolute: true
};

async function onCall({ message}) {
  await message.reply("♻️ جاري إعادة تشغيل البوت...");
  global.restart();
}

// ⏱️ أوتماتك كل 3 ساعات 
setInterval(() => {
  global.restart(); // إعادة التشغيل الصامت
}, 3 * 60 * 60 * 1000); // 3 ساعات = 10800000 مللي ثانية

export default {
  config,
  onCall
};
