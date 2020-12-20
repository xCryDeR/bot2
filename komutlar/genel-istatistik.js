const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
require('moment-duration-format');
exports.run = async(cclient, message, args) => {

let cembed = new Discord.RichEmbed()
.setAuthor(cclient.user.username, cclient.user.avatarURL)
.setTimestamp()
.addField("Bot Verileri", `Toplam Sunucu **|** **${cclient.guilds.size}** \nToplam Kullanıcı **|** **${cclient.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \nToplam kanal **|** **${cclient.channels.size}**`)
.setThumbnail("https://cdn.discordapp.com/attachments/746864175032172611/771540910894743572/standard.gif")
.addField("Yapımcılar", `<@342931940388634624> **|** ** Zümbük#0027** \n<@277421406978048000>  **|** ** crydêR;#1337**`)
.addField("Gecikmeler", `Bot Pingi **|** **${cclient.ping}** \nMesaj Gecikmesi **|** **${new Date().getTime() - message.createdTimestamp}**`)
.setImage("https://cdn.discordapp.com/attachments/737277776993845359/782721930104274984/standard.gif")
.setColor("#FC56C2")
message.channel.send(cembed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['istatistik','yapımcım'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'botbilgi',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };
