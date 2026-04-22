const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const http = require('http');

// Tạo server để Render không quét lỗi Port (Tránh lỗi Failed trên Render)
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.write("Bot is running!");
  res.end();
}).listen(PORT, '0.0.0.0');

client.on('ready', async () => {
  console.log(`${client.user.username} đã sẵn sàng với giao diện VS Code mới!`);

  client.user.setActivity({
    name: 'Visual Studio Code',
    type: 'PLAYING',
    details: 'Editing server.yml',
    state: 'Workspace: vps-rs',
    timestamps: { start: Date.now() },
    assets: {
      // Sử dụng link ảnh trực tiếp Thắng vừa gửi
      large_image: 'https://i.ibb.co/nqQg7RkH/1.png', 
      large_text: 'Visual Studio Code',
      small_image: 'https://i.ibb.co/276kcP2L/2.png',
      small_text: 'Developer'
    }
  });
});

client.login(process.env.TOKEN);
