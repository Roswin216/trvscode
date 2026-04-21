const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const http = require('http');

// Bắt buộc lấy Port do Render tự cấp, nếu test ở máy thì dùng 3000
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.write("Bot is running!");
  res.end();
}).listen(PORT, '0.0.0.0', () => {
  console.log(`Đã mở cổng ${PORT} để Render không báo lỗi nữa!`);
});

client.on('ready', async () => {
  console.log(`${client.user.username} đang giả lập VS Code!`);

  client.user.setActivity('Visual Studio Code', {
    type: 'PLAYING',
    details: 'Editing server.yml',
    state: 'Workspace: vps-rs',
    timestamps: { start: Date.now() },
    assets: {
      large_image: 'mp:external/3Y9X-0D-V0pXoUv6704C88LgYwY/https/raw.githubusercontent.com/visualstudio/brand/master/icons/vscode/vscode.png',
      large_text: 'Visual Studio Code',
      small_image: 'mp:external/3Y9X-0D-V0pXoUv6704C88LgYwY/https/raw.githubusercontent.com/visualstudio/brand/master/icons/vscode/vscode.png',
      small_text: 'VS Code'
    }
  });
});

client.login(process.env.TOKEN);
