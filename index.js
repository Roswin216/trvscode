const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const http = require('http');

// Giữ Render chạy 24/7
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.write("Bot is running!");
  res.end();
}).listen(PORT, '0.0.0.0');

client.on('ready', async () => {
  console.log(`${client.user.username} đang chạy VS Code với ảnh GitHub!`);

  const r = new RichPresence(client)
    .setApplicationId('383226320970055681') 
    .setType('PLAYING')
    .setName('Visual Studio Code')
    .setDetails('Editing server.yml')
    .setState('Workspace: vps-rs')
    .setStartTimestamp(Date.now())
    // Thêm định dạng mp:external để tránh lỗi INVALID_URL
    .setAssetsLargeImage('mp:external/abc/https/raw.githubusercontent.com/Roswin216/trvscode/main/1.png')
    .setAssetsLargeText('Visual Studio Code')
    .setAssetsSmallImage('mp:external/xyz/https/raw.githubusercontent.com/Roswin216/trvscode/main/2.png')
    .setAssetsSmallText('Developer');

  client.user.setActivity(r);
});

client.login(process.env.TOKEN);
