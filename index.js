const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const http = require('http');

// Bắt buộc lấy Port do Render tự cấp
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.write("Bot is running!");
  res.end();
}).listen(PORT, '0.0.0.0', () => {
  console.log(`Đã mở cổng ${PORT} để Render không báo lỗi nữa!`);
});

client.on('ready', async () => {
  console.log(`${client.user.username} đang giả lập VS Code!`);

  // Sử dụng RichPresence và Application ID chuẩn của VS Code
  const r = new RichPresence(client)
    .setApplicationId('383226320970055681') // ID hệ thống của VS Code
    .setType('PLAYING')
    .setName('Visual Studio Code')
    .setState('Workspace: vps-rs')
    .setDetails('Editing server.yml')
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('vscode') // Tên logo có sẵn trên hệ thống Discord
    .setAssetsLargeText('Visual Studio Code')
    .setAssetsSmallImage('vscode')
    .setAssetsSmallText('VS Code');

  client.user.setActivity(r);
});

client.login(process.env.TOKEN);
