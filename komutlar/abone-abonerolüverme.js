let Discord = require("discord.js")
let database = require("croxydb")
let ayarlar = require("../ayarlar.json")
exports.run = async(client, message) => {

  let embed = new MessageEmbed().setFooter(`Menthe ♥ Losint`).setAuthor(message.author.username, message.author.avatarURL({dynamic:true})).setColor("RANDOM")
  
//KARA LİSTE
  let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
  const westraben = new Discord.MessageEmbed()
  .setColor("#f6ff00")
  .setDescription(`:x: **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](${sunuculinki}) gelebilirsin!`)
  if(karaliste) 
  return message.channel.send(westraben) 

//TANIMLAMALAR
let aboneyetkilisi = await database.fetch(`aboneyetkilisi.${message.guild.id}`)
let abonelog = await database.fetch(`abonelog.${message.guild.id}`)
let abonerol = await database.fetch(`abonerol.${message.guild.id}`)
let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

  //AYARLANMAMIŞ VS.
  if(!abonerol) return message.channel.send(embed.setDescription(`Dikkat !\nAbone Rolü Ayarlanmamış !`))
  if(!abonelog) return message.channel.send(embed.setDescription(`Dikkat !\nAbone Log Kanalı Ayarlanmamış !`))
  if(!aboneyetkilisi) return message.channel.send(embed.setDescription(`Dikkat !\nAbone Yetkilisi Rolü Ayarlanmamış !`))
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send(embed.setDescription(`Dikkat !\nBu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin !`))
  if(!message.mentions.users.first()) return message.channel.send(embed.setDescription(`Dikkat !\nBir Üye Etiketlemelisin !`))
  

  await(abonekisi.roles.add(abonerol))
  
  const embed2 = new Discord.MessageEmbed()
  .setAuthor()
  .setDescription(`• Abone Rolü Veren Yetkili: ${message.author.tag}`)
  .setDescription(`• Abone Rolünü Alan Kullanıcı: ${user}`)
  .setColor(`RANDOM`)
  .setFooter(`Menthe ♥ Losint`)
  message.guild.channels.cache.get(abonelog).send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  perm: 0
}
exports.help = {
  name: 'a'
}

exports.play = {
  kullanım: '!abone-rol @üye',
  açıklama: 'Abone Rol Ver',
  kategori: 'Abone'
}
