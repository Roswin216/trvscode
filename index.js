const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const http = require('http');

// Giữ cho Render luôn chạy 24/7
const PORT = process.env.PORT || 10000;
http.createServer((req, res) => {
  res.write("Bot is running!");
  res.end();
}).listen(PORT);

client.on('ready', async () => {
  console.log(`${client.user.username} đã sẵn sàng với App ID mới!`);

  client.user.setActivity('Visual Studio Code', {
    type: 'PLAYING',
    applicationId: '1496345858965241988', // ID ứng dụng của Thắng
    details: 'Editing server.yml',
    state: 'Workspace: vps-rs',
    timestamps: { start: Date.now() },
    assets: {
      large_image: 'vsc_large', // Tên ảnh to bạn đã đặt trong Art Assets
      large_text: 'Visual Studio Code',
      small_image: 'vsc_small', // Tên ảnh nhỏ bạn đã đặt trong Art Assets
      small_text: 'Developer'
    }
  });
});

client.login(process.env.TOKEN);
