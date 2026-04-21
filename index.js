const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`${client.user.username} đang giả lập VS Code!`);

  client.user.setActivity('Visual Studio Code', {
    type: 'PLAYING',
    details: 'Editing server.yml',
    state: 'Workspace: vps-rs',
    timestamps: { start: Date.now() },
    assets: {
      large_image: '904944834241613865',
      large_text: 'Visual Studio Code',
      small_image: '904944834241613865',
      small_text: 'VS Code'
    }
  });
});

client.login(process.env.TOKEN);
