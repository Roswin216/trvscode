const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const http = require('http');

// Xử lý cổng để Render chạy 24/7
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.write("Bot is running!");
  res.end();
}).listen(PORT, '0.0.0.0');

client.on('ready', async () => {
  console.log(`${client.user.username} đang chạy VS Code với ảnh GitHub!`);

  // Dùng lại RichPresence và Application ID của VS Code
  const r = new RichPresence(client)
    .setApplicationId('383226320970055681') // ID xịn của VS Code
    .setType('PLAYING')
    .setName('Visual Studio Code')
    .setDetails('Editing server.yml')
    .setState('Workspace: vps-rs')
    .setStartTimestamp(Date.now())
    // Thư viện sẽ tự động chuyển link ảnh GitHub của bạn thành định dạng Discord hiểu
    .setAssetsLargeImage('https://raw.githubusercontent.com/Roswin216/trvscode/main/1.png')
    .setAssetsLargeText('Visual Studio Code')
    .setAssetsSmallImage('https://raw.githubusercontent.com/Roswin216/trvscode/main/2.png')
    .setAssetsSmallText('Developer');

  client.user.setActivity(r);
});

client.login(process.env.TOKEN);
