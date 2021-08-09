let database = require("croxydb")
let { MessageEmbed, Discord } = require("discord.js")
let ayarlar = require("../ayarlar.json")
exports.run = async(client, message) => {

 let embed = new MessageEmbed().setFooter(`Menthe ♥ Losint`).setAuthor(message.author.username, message.author.avatarURL({dynamic:true})).setColor("RANDOM")

  let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
  const westraben = new Discord.MessageEmbed()
  .setColor("#f6ff00")
  .setDescription(`:x: **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](${ayarlar.sunuculink}) gelebilirsin!`)
   if(karaliste) 
     return message.channel.send(westraben) 
       if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(embed.setDescription(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin :x:`))
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(embed.setDescription(`Bir Rol Belirlemen Gerek !\nÖrnek: \`${ayarlar.prefix}abonerol @Rol\``))
  
  
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(embed.setDescription(`Abone rolü başarıyla ${rol} olarak ayarlandı.`))
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-rol'],
  perm: 0
}
exports.help = {
  name: 'abonerol'
}

exports.play = {
  kullanım: 'abonerol @rol',
  açıklama: 'Abone Rolünü Ayarlarsınız',
  kategori: 'Abone'
}