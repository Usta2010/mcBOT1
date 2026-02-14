const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot Aktif!'));
app.listen(3000);

function createBot() {
  const bot = mineflayer.createBot({
    host: 'emerald.magmanode.com',
    port: 26273,
    username: 'Bot_Agalar',
    // version kısmını sildik, böylece otomatik algılar
  });

  bot.on('spawn', () => {
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 10000);
  });

  bot.on('end', () => setTimeout(createBot, 5000));
  bot.on('error', (err) => console.log('Hata oluştu, tekrar deneniyor...'));
}

createBot();
