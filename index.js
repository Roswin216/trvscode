const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const http = require('http');

// Giữ cho Render luôn chạy 24/7
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.write("Bot is running!");
  res.end();
}).listen(PORT, '0.0.0.0');

client.on('ready', async () => {
  console.log(`${client.user.username} đang chạy VS Code với ảnh từ GitHub cá nhân!`);

  client.user.setActivity({
    name: 'Visual Studio Code',
    type: 'PLAYING',
    details: 'Editing server.yml',
    state: 'Workspace: vps-rs',
    timestamps: { start: Date.now() },
    assets: {
      // 1.png sẽ là logo TRẮNG lớn
      large_image: 'https://raw.githubusercontent.com/Roswin216/trvscode/main/1.png',
      large_text: 'Visual Studio Code',
      // 2.png sẽ là logo XANH nhỏ
      small_image: 'https://raw.githubusercontent.com/Roswin216/trvscode/main/2.png',
      small_text: 'Developer'
    }
  });
});

client.login(process.env.TOKEN);
