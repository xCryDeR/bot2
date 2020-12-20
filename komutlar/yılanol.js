1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
//---Bu Kod komutlar klasörüne atılacaktır.
//###CodeMareFi tarafından hazırlanmıştır - - - Ekleyen //###Sadista

const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Artık Yılan Oldun!!!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
    .setURL('https://discord.gg')
        .setImage(`https://cdn.discordapp.com/attachments/769263387392868412/769612945842765874/ylam.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'yılanol',
  description: 'kralol',
  usage: 'kralol'
};