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
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(embed.setDescription(`Bir Kanal Etiketlemen Gerek !\nÖrnek: \`${ayarlar.prefix}abonelog #Kanal\``))
  
  
  database.set(`abonelog.${message.guild.id}`, log.id)
  message.channel.send(embed.setDescription(`Abone kanalı başarıyla ${log} olarak ayarlandı.`))
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-log'],
  perm: 0
}
exports.help = {
  name: 'abonelog'
}

exports.play = {
  kullanım: '!abonelog #kanal',
  açıklama: 'Abone Logunu Ayarlarsınız',
  kategori: 'Abone'
}