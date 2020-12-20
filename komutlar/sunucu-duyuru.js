const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`Yazı Yazman Gerek`)).then(m => m.delete(5000));

     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("#ffd100")
       .setImage("https://cdn.discordapp.com/attachments/756190962220531733/771537315210330122/350kb_1.gif")
       .setTimestamp()
       .setFooter('Loxo', client.user.avatarURL)

       .addField(`**Loxo | Duyuru**`, `**${question}**`)).then(function(message) {

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 2
};

exports.help = {
  name: 'duyuru',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'duyuru <oylamaismi>'
};