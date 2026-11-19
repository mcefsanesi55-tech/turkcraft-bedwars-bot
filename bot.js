const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'turkcraft.mcsh.io',
  port: 25565,
  username: 'TC_BedWarsBot1',
  version: '1.21.11'
});

bot.on('spawn', () => {
  console.log('TURK CRAFT botu sunucuya bağlandı!');
});

bot.on('end', () => {
  console.log('Bot sunucudan ayrıldı.');
});
