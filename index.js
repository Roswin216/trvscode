const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const http = require('http');

// Giữ Render không bị ngắt kết nối
const PORT = process.env.PORT || 10000;
http.createServer((req, res) => {
  res.write("Bot is running!");
  res.end();
}).listen(PORT);

client.on('ready', async () => {
  console.log(`${client.user.username} đã sẵn sàng!`);

  client.user.setActivity('Visual Studio Code', {
    type: 'PLAYING',
    // Đây là ID thật của ứng dụng VS Code trên Discord
    applicationId: '383226320970055681', 
    details: 'Editing server.yml',
    state: 'Workspace: vps-rs',
    timestamps: { start: Date.now() },
    assets: {
      // Dùng tên asset chuẩn của VS Code thay vì link URL
      large_image: 'vscode', 
      large_text: 'Visual Studio Code',
      small_image: 'vscode',
      small_text: 'Editing'
    }
  });
});

client.login(process.env.TOKEN);
