const Discord = require("discord.js");

const TOKEN = "NTAyODkxMDA1ODM0NTU5NDg4.DqurcA.v2JUal7GHJ7re-cRKqIca5OVYFE"
const PREFIX = "-"


var bot = new Discord.Client();

bot.on("ready", function() {
    console.log('Bot dziala.');
    bot.user.setStatus('status jakis');
    bot.user.setActivity('EvilBot v2 😈', { type: 'PLAYING' });

});

    console.log("Ready")

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;


    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "embed":
            var embed = new Discord.RichEmbed()
                .setTitle("📝 **Regulamin serwera !**")
                .setDescription("**1.** Nie postuj rzeczy **NSFW** poza kanalami NSFW \n**2.** Zakaz reklamowania innych discordów stron www itp. \n**3.** Zakaz wyzywania użytkowników oraz administracji. \n**4.**  Zakaz wklejania podejrzanych linków lub reflinków.")
                .setFooter("Regulamin może być edytowany bez powiadomienia o tym członków Discorda.")
                .setColor(0xff0000);
            message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.sendMessage("Nieprawidlowa komenda!")
    }

});

bot.login(TOKEN);