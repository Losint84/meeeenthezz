let { MessageEmbed, Discord } = require("discord.js")
let database = require("croxydb")
let ayarlar = require("../ayarlar.json")
exports.run = async(client, message) => {

let embed = new MessageEmbed().setFooter(`Menthe ♥ Losint`).setAuthor(message.author.username, message.author.avatarURL({dynamic:true})).setColor("RANDOM")

  let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
  const westraben = new Discord.MessageEmbed()
  .setColor("#f6ff00")
  .setDescription(`:x: **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](${ayarlar.sunuculink}) gelebilirsin!`)
   if(karaliste) 
     return message.channel.send(westraben) 
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(embed.setDescription(`Bir Rol Belirtmen Gerek !\nÖrnek: \`${prefix}aboneyrol @Rol\``))
  
  
  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id)
  message.channel.send(embed.setDescription(`Abone yetkilisi başarıyla ${rol} olarak ayarlandı.`))
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aboneyrol'],
  perm: 0
}
exports.help = {
  name: 'abone-yetkili-rol'
}

exports.play = {
  kullanım: 'abone-y-rol @rol',
  açıklama: 'Abone Yetkili Rolünü Ayarlarsınız',
  kategori: 'Abone'
}