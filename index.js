const Discord = require("discord.js");

const PREFIX = "drift!"


var bot = new Discord.Client();

bot.on("ready", function() {
    console.log('Bot dziala.');
    bot.user.setStatus('status jakis');
    bot.user.setActivity('drift!pomoc', { type: 'PLAYING' });

});

    console.log("Ready")

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;


    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "pomoc":
            message.channel.sendMessage("Wszystkie moje komendy! \n Już niedługo !**");
            break;
        case "xxxx":
            const embed = new Discord.RichEmbed()
                .setTitle("**Handlingi**")
                .setColor(0x00CED1)
                .setDescription("Tutaj możecie wrzucać swoje handlingi z formułką \n ```Nazwa: \n Autor: \n Stopień zaawansowania \n Maksymalna prędkość samochodu:```")
                message.channel.send({embed});
                break;
        default:
            message.channel.sendMessage("Nieprawidlowa komenda!")
    }

});

bot.login(process.env.BOT_TOKEN);
