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
        case "pomoc"
            .setTitle("thats how")
            .setDescription("mafia works")
            message.channel.send({embed});
            break;
        default:
            message.channel.sendMessage("Nieprawidlowa komenda!")
    }

});

bot.login(process.env.BOT_TOKEN);
