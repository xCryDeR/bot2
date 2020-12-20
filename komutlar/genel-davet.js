const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`${client.user.username} Davet Menüsü `)
        .setDescription(`<a:postbox:767542386719981568> **Botun Davet Linki İçin** [TIKLA](https://discord.com/oauth2/authorize?client_id=781806248537489408&scope=bot&permissions=805314622) \n <a:postbox:767542386719981568> **Destek Sunucusu İçin** [TIKLA](https://discord.gg/FYj28qu37E) \n <a:postbox:767542386719981568> **Web Sitemizi Ziyaret etmek İçin** [Bakımda](Bakım!)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix} Davet Sistemi Kullandı`, message.author.avatarURL)
    .setColor(`#ffd100`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};