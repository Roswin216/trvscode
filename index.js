const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const http = require('http');

// Giữ Render luôn xanh (Live) và tránh lỗi Port
const PORT = process.env.PORT || 10000;
http.createServer((req, res) => {
  res.write("Bot is running!");
  res.end();
}).listen(PORT);

client.on('ready', async () => {
  console.log(`${client.user.username} đã sẵn sàng với giao diện VS Code mới!`);

  const r = new RichPresence(client)
    .setApplicationId('383226320970055681') // ID chính thức của VS Code
    .setType('PLAYING')
    .setName('Visual Studio Code')
    .setDetails('Editing server.yml')
    .setState('Workspace: vps-rs')
    .setStartTimestamp(Date.now())
    // Thêm tiền tố mp:external/ để sửa lỗi INVALID_URL
    .setAssetsLargeImage('mp:external/abc/https/i.ibb.co/nqQg7RkH/1.png')
    .setAssetsLargeText('Visual Studio Code')
    .setAssetsSmallImage('mp:external/xyz/https/i.ibb.co/276kcP2L/2.png')
    .setAssetsSmallText('Developer');

  client.user.setActivity(r);
});

client.login(process.env.TOKEN);
