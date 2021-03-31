const Discord = require("discord.js");
const { Database } = require("wio.db");
const  db  = new Database("database.json");
const pythonic = [
    "Ailen kız arkadaşından nefret ederse onu terk eder misin?",
    "Söylediğiniz veya yaptığınız bir şeyi silmek için zamanda geriye gidebilseydiniz, bu ne olurdu?",
    "En büyük pişmanlığın nedir?",
    "Telefonunuzdaki en utanç verici fotoğraf hangisidir?",
    "En garip alışkanlığın nedir?",
    "Google’da aradığınız en son şey neydi?",
    "İçki İçiyormusun?",
    "Sigara İçiyormusun?",
    "Daha Önce Sevmediğin Birine Seni Seviyorum Dedin mi?",
    "Hiç asansörde yellenmek zorunda kaldın mı?",
    "Bir parçası olduğun en utanç verici durum neydi?",
    "Hayatta yaptığın en büyük kötülük nedir?",
    "Anne babana söylediğin en büyük yalan nedir?",
    "Hiç asansörde yellenmek zorunda kaldın mı?",
    "Sana kendini ne güvensiz hissettirir?",
    "Şimdiye dek yaşadığınız en garip rüyayı açıklayabilir misiniz?",
    "En büyük pişmanlığın nedir?",
    "Seni en çok üzen hatıra ne hakkındaydı?",
    "Bir başkasından etkilenerek yaptığın en çılgınca şey neydi?",
    "En son ne zaman, nerede ve neden ağladın?",
    "Bilmediğin bir kalabalığın önünde yaptığın en aptalca şey nedir?",
    "En Mutlu Olduğun An Nezamandı Ve Neden?",
    "Sana yanlış yapan birinden hiç intikam aldın mı aldıysan ne yaptın?",
    "Tanınmak için yaptığın en aptalca şey neydi?",
    "Zeka ve güzellik arasında bir seçim yapmak zorunda kalsan neyi seçerdin?",
    "Hayatın film olsa seni kim oynardı?",
    "Dünyada herhangi bir yerde yaşayabilsen nerede yaşardın?",
    "Küçükken en sevdiğin çizgi film hangisiydi?",
    "Zeki mi olmayı tercih edersin yoksa mutlu olmayı mı ve neden?",
    "Para diye bir şey olmasa ne yapmak isterdin?",
    "Bir günlüğüne görünmez olsan ne yapardın?",
    "En çok kimi kıskanıyorsun?",
    "Issız bir adada mahsur kalsan kimin yanında olmasını isterdin?",
    "Kıvırcık saçlar mı yoksa düz saçlar mı?",
    "Senden daha kısa biriyle çıkar mısın?",
    "Sevgilin ve en iyi dostun göle düşse önce hangisini kurtarırsın?",
    "Eğer görünmez olsaydın kimi sıkı sıkı takip ederdin?",
    "Hiç hipnotize edildin mi?",
    "Daha önce sana verilmiş en kötü hediye nedir?",
    "Kaç kere evden gizlice sıvıştın?",
    "Dilini burnuna değdirebilir misin?",
    "Hayatının en iyi günü hangisiydi?",
    "Herhangi bir sporla uğraşıyor musun?",
    "Günlük tutuyor musun?",
    "Birine şimdiye kadar yaptığınız en fena eşek şakası nedir?",
    "Hiç birinin arabasına kustun mu?",    
    "Bisiklete binmeyi ne zaman öğrendin?",
    "Hiç uykunda yürüdün mü?",
    "Hiç bir şeyi kırıp da başka birini suçladığın oldu mu?",
    "Hiç eve birilerini gizlice soktun mu?",
    "Seninle ilgili en garip şey ne? Bununla gurur duyuyor musun?",
    "En çok kimden nefret ediyorsun?",
    "Daha önce kaç sevgilin oldu?",
    "Hiç terk edildin mi?",
];


exports.run = async(client , message, args) =>{
    
    let pythonicdev = pythonic[Math.floor(Math.random() * pythonic.length)]; 
    const skybow = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`*${pythonicdev}*`)
    .setDescription(`*lütfen doğruluk sorusunu cevaplayınız*`)
    .setAuthor(`${message.author.tag}`)
    .setThumbnail(`${message.author.avatarURL()}`)

    message.channel.send(skybow)
}

exports.conf ={
    "aliases": ["doğruluk", "dogruluk" , "doğru" , "d"],
    "permLevel": "0"
}

exports.help = {
    "name": "doğruluk",
    "description": "doğruluk",
    "usage": ".doğruluk"
}