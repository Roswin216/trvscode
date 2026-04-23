const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const http = require('http');

// Server siêu nhẹ để Render/Cron-job không bao giờ ngủ
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot Online 24/7');
}).listen(process.env.PORT || 10000);

client.on('ready', async () => {
  console.log(`Đã kết nối: ${client.user.tag}`);

  // Thiết lập trạng thái giống 100% ảnh bạn muốn
  client.user.setActivity('Visual Studio Code', {
    type: 'PLAYING',
    applicationId: '1496345858965241988', // ID của Thắng
    details: 'Editing server.yml',
    state: 'Workspace: vps-rs [Codespaces: genial capybara]',
    timestamps: { start: Date.now() },
    assets: {
      large_image: 'to',  // Nhớ đổi tên trên Web thành "to"
      large_text: 'Visual Studio Code',
      small_image: 'nho', // Nhớ đổi tên trên Web thành "nho"
      small_text: 'Developer'
    }
  });
});

// Tự động kết nối lại nếu bị rớt mạng
client.on('error', console.error);

client.login(process.env.TOKEN);
