const Discord = require("discord.js");

const PREFIX = "!!"


var bot = new Discord.Client();

bot.on("ready", function() {
    console.log('Bot dziala.');
    bot.user.setStatus('status jakis');
    bot.user.setActivity('!!pomoc', { type: 'PLAYING' });

});

    console.log("Ready")

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;


    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "pomoc":
            const embed = new Discord.RichEmbed()
                .setTitle("📋 **Pomoc**")
                .setColor(0x00CED1)
                .setDescription("Regulamin znajdziesz na kanale: <#541721710425276437> \nInformacje o premiach znajdziesz na kanale: <#541723623530954839> \nCennik: XXX \nPoradnik: XXX \n<@&541720189440360476> <@&541720183807541278>")
                message.channel.send({embed});
                break;
        default:
            message.channel.sendMessage("Nieprawidlowa komenda!")
    }

});

bot.login(process.env.BOT_TOKEN);
