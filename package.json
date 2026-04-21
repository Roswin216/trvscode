const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.tag} đang giả lập VS Code!`);
  
  const r = new RichPresence(client)
    .setApplicationId('383226320970055681') // ID mặc định của VS Code
    .setType('PLAYING')
    .setState('Workspace: vps-rs [Codespaces]') // Dòng dưới
    .setDetails('Editing server.yml') // Dòng trên
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('vscode')
    .setAssetsLargeText('Visual Studio Code');

  client.user.setActivity(r);
});

// Sử dụng biến môi trường để bảo mật Token
client.login(process.env.TOKEN);
