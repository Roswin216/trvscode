const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const http = require('http');

// Server giữ bot sống trên Render
const PORT = process.env.PORT || 10000;
http.createServer((req, res) => { res.write("Bot is alive!"); res.end(); }).listen(PORT);

client.on('ready', async () => {
  console.log(`${client.user.username} đang treo 24/7...`);

  client.user.setActivity('Visual Studio Code', {
    type: 'PLAYING',
    applicationId: '1496345858965241988', // ID của Thắng
    details: 'Editing server.yml',
    // Giả lập dòng chữ Codespaces giống trong ảnh bạn gửi
    state: 'Workspace: vps-rs [Codespaces: genial capybara]', 
    timestamps: { start: Date.now() },
    assets: {
      large_image: 'vsc_large', // Tên ảnh đã lưu trong Graphic Resources
      large_text: 'Visual Studio Code',
      small_image: 'vsc_small',
      small_text: 'Developer'
    }
  });
});

client.login(process.env.TOKEN);
