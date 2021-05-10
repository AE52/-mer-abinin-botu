const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Botun olan ${client.user.tag} sunucuya giriş yaptı ve artık aktif Æ52!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kod çalışmıyor') {
    msg.reply('hemen res at');
    }

  if (msg.content.toLowerCase() === prefix +'omerabi_instagram') {
    msg.reply('Ömer reisin instagram hesabı hemen takibe alın : https://www.instagram.com/omerrcolakoglu/?hl=tr');
  }
  if (msg.content.toLowerCase() === prefix +'takım toplan') {
    msg.reply(' **@everyone @here TAKIM TOPLAN !!! https://giphy.com/gifs/trt-network-goal-gol-milli-takm-cO1nSNARXljOn0x8vi ** ');
  }
});

client.login('ODQxMzEzODE0MjYyOTcyNDI2.YJk8jA.QNRsJtCPmqn2aC88nStvSq--DEc');
