const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 

let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Menthe Abone Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setColor('RANDOM')
.setDescription(`• \`${ayarlar.prefix}abone @Üye\` Kullanıcıya Abone Rolü Verir.
• \`${ayarlar.prefix}abonelog #Kanal\` Abone Log Kanalını Ayarlar.
• \`${ayarlar.prefix}abone-yetkili-rol @Rol\` Abone Yetkilisini Ayarlar
• \`${ayarlar.prefix}abonerol @Üye\` Abone Rolünü Ayarlar.`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardımabone", "aboneyardım"], 
    permLevel: 0
  };
  exports.help = {
    name: 'abone'
  };