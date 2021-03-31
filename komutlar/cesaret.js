const Discord = require("discord.js");
const pythonic2= [
    "10 kere zıpla ve 10 şınav çek",,
    "Yaşlı bir kadın ya da yaşlı bir adam gibi davran",
    "Ses Odasında Ben Malım Diye Bağır",
    "En Son DM'ni Aç",
    "En Son Whatsapp'tan Gelen Mesajı Oku",
    "En DÜşük Notunu Söyle",
    "En Son Konuştuğun Kızla Konuşmanı Göster",
    "Kaç CM?",
    "Kedi gibi miyavla",
    "En sevdiğin şarkıyı söyle",
    "Aldığın son mesajı sesli bir şekilde oku.",
    "Kameranı Aç",
    "Anlık Fotoğraf At",
    "E-Postanı Söyle",
    "Listendeki Bir Sunucudan Çık",
    "Alfabeyi 30 saniyede geriye doğru söyle",
    "1 dakika tavuk gibi davran",
    "En sevdiğin şarkıyı söyle",
    "Seslide Elanur Bela Söyle",
    "İnstagram Hesabını Söyle",
    "Google Geçmişini Göster",
    "Youtube Geçmişini Göster",
    "Sevgilini Ara"
    ];

exports.run = async(client , message, args) =>{
    let skybowdev = pythonic2[Math.floor(Math.random() * pythonic2.length)]; 
    const lunexdev = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`*${skybowdev}*`)
    .setDescription(`*lütfen cesaret sorusunu cevaplayınız*`)
    .setAuthor(`${message.author.tag}`)
    .setThumbnail(`${message.author.avatarURL()}`)

    message.channel.send(lunexdev)
}

exports.conf ={
    "aliases": ["cesaret" , "c"],
    "permLevel": "0"
}

exports.help = {
    "name": "cesaret",
    "description": "cesaret komutu",
    "usage": ".cesaret"
}