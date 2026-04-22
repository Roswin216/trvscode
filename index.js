const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const http = require('http');

// 1. SỬA LỖI TIMED OUT TRÊN RENDER
// Render cần một server phản hồi để biết bot vẫn đang sống
const PORT = process.env.PORT || 10000; 
http.createServer((req, res) => {
  res.write("Bot is alive!");
  res.end();
}).listen(PORT, '0.0.0.0', () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});

client.on('ready', async () => {
  console.log(`${client.user.username} đã sẵn sàng!`);

  // 2. SỬA LỖI DẤU CHẤM HỎI & INVALID_URL
  // Chúng ta gửi object trực tiếp để bypass bộ lọc của thư viện
  client.user.setActivity({
    name: 'Visual Studio Code',
    type: 'PLAYING',
    details: 'Editing server.yml',
    state: 'Workspace: vps-rs',
    timestamps: { start: Date.now() },
    assets: {
      // Thêm tiền tố mp:external/... để Discord chấp nhận link ngoài
      large_image: 'mp:external/abc/https/i.ibb.co/nqQg7RkH/1.png',
      large_text: 'Visual Studio Code',
      small_image: 'mp:external/xyz/https/i.ibb.co/276kcP2L/2.png',
      small_text: 'Developer'
    }
  });
});

client.login(process.env.TOKEN);
