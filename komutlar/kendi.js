const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  

.setTitle("Sponsor Bilgileri")
.addField("Kuzey Host - Internet ve Bilişim Hizmetleri","https://kuzey.host")
.addField("Nedir bu Huzey Host","Kuzey Host olarak tüm oyun sunucusu ve diğer projelerinizde her zaman tüm imkanları ile size yardım etmek için hazır.Müşterilerimize hediye ettiğimiz ücretsiz Firewall paneli üzerinden gelen saldırıları görebilir ve takip edebilir, Web Panelli Oyun Sunucusu kiralama konusunda her zaman en uygun fiyat garantisi ile sizlere hizmet vermekteyiz.")
.setImage("https://media.discordapp.net/attachments/737277776993845359/782721930104274984/standard.gif")
.setFooter("Kuzey Host - Internet ve Bilişim Hizmetleri")
.setTimestamp()

message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["Sponsor"], 
    permLevel: 0
  };
  exports.help = {
    name: 'Sponsor'
  }; 
  