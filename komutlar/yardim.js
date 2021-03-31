const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
let prefix = ayarlar.prefix
exports.run = async(client , message, args) =>{
    const lunex = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Yardım Komutları`)
    .setDescription(`
    ${prefix}c  = *Botun Cesaret Komutlarını Gösterir* 
    ${prefix}d  = *Botun Doğruluk Komutlarını Gösterir*
    ${prefix}18 = *Botun +18 Komutlarını Gösterir*
    ${prefix}p  = *Soruyu Pas Geçer* 
    ${prefix}u  = *Uyarı Komutlarını Gösterir*
    `)
    .setThumbnail(`${message.author.avatarURL()}`)

    message.channel.send(lunex)
}

exports.conf ={
    "aliases": ["yardim" , "help" , "dc" , "y" ],
    "permLevel": "0"
}

exports.help = {
    "name": "yardım",
    "description": "yardım",
    "usage": ".yardim"
}