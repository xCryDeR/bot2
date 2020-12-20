const Discord = require('discord.js');
const client = new Discord.Client();
const { stripIndents } = require('common-tags');

exports.run = async (client, message) => {
  
  const db = require('quick.db');
  

  
  let args = message.content.split(' ').slice(1);
  const hata = args.slice(0).join(' ');
  if (hata.length < 1) return message.reply('Lütfen Hatayı Bildirin')
 

    message.reply('**Hatanız İletildi**');

    var hataHook = new Discord.WebhookClient("783797242506641468", "MejYwD4FAI52fNvLuKbFE4X5Y0AzZXYw0SH9SA1jJ8GWzde-gDWlZ_PFN5ClmFTMDN4q")
    var embed = new Discord.RichEmbed()
    .setColor("#ffd100")
    .setTitle(`Bende Bir Hata Bulmuşlar`)
    .addField(`Bildiren Kullanıcı`, message.author.tag)
    .addField(`Bildirilen Sunucu`, message.guild.name)
    .addField(`Bildirilen Hata`, hata)
    hataHook.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hata', 'bug', 'bug-bildir'],
  permLevel: 0,
    kategori: "bot",

};

exports.help = {
  name: 'hata-bildir',
  category: "iletisim",
  description: 'Bottaki bir hatayı bildirmenizi sağlar.',
  usage: 'hata-bildir <bulduğunuz hata>',
 
};