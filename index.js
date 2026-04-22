const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const http = require('http');

// Giữ cho Render luôn Live
const PORT = process.env.PORT || 10000;
http.createServer((req, res) => {
  res.write("Bot is alive!");
  res.end();
}).listen(PORT);

client.on('ready', async () => {
  console.log(`${client.user.username} - Đang kích hoạt trạng thái...`);

  // Cách này gửi thẳng dữ liệu lên Discord, không qua bộ lọc của thư viện
  client.user.setPresence({
    activities: [{
      name: 'Visual Studio Code',
      type: 'PLAYING',
      details: 'Editing server.yml',
      state: 'Workspace: vps-rs',
      timestamps: { start: Date.now() },
      assets: {
        // Cấu trúc mp:external là bắt buộc để hiện ảnh từ link ngoài
        large_image: `mp:external/Xp-A/https/raw.githubusercontent.com/Roswin216/trvscode/main/1.png`,
        large_text: 'Visual Studio Code',
        small_image: `mp:external/Yp-B/https/raw.githubusercontent.com/Roswin216/trvscode/main/2.png`,
        small_text: 'Developer'
      }
    }]
  });

  console.log("Đã gửi trạng thái thành công!");
});

client.login(process.env.TOKEN);
