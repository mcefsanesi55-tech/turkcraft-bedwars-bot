const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'turkcraft.mcsh.io',
  port: 25565,
  username: 'TC_BedWarsBot1',
  version: '1.21.11'
});

bot.once('spawn', () => {
  console.log('Bot TURK CRAFT sunucusuna bağlandı!');

  setTimeout(() => {
    bot.chat('/register Sifre12345 Sifre12345');
  }, 3000);
});

bot.on('end', () => {
  console.log('Bot sunucudan ayrıldı.');
});

bot.on('kicked', (reason) => {
  console.log('Atılma sebebi:', reason);
});

bot.on('error', (err) => {
  console.log('Hata:', err.message);
});
