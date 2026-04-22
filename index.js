const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const http = require('http');

// Giữ Render luôn Live
const PORT = process.env.PORT || 10000;
http.createServer((req, res) => {
  res.write("Bot is alive!");
  res.end();
}).listen(PORT);

client.on('ready', async () => {
  console.log(`${client.user.username} đã sẵn sàng!`);

  client.user.setActivity({
    name: 'Visual Studio Code',
    type: 'PLAYING',
    details: 'Editing server.yml',
    state: 'Workspace: vps-rs',
    timestamps: { start: Date.now() },
    assets: {
      // Dùng link Raw trực tiếp từ GitHub của Thắng
      large_image: 'https://raw.githubusercontent.com/Roswin216/trvscode/main/1.png',
      large_text: 'Visual Studio Code',
      small_image: 'https://raw.githubusercontent.com/Roswin216/trvscode/main/2.png',
      small_text: 'Developer'
    }
  });
});

client.login(process.env.TOKEN);
