const Discord = require("discord.js");

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
                .setTitle("📋 **Regulamin Discorda !**")
                .setFooter("Regulamin może być edytowany bez powiadomienia o tym członków Discorda.")
                .setDescription("**1.** Nie postuj rzeczy NSFW poza kanalami NSFW \n **2.** Zakaz reklamowania innych discordów stron www itp. \n **3.** Zakaz wyzywania użytkowników oraz administracji. \n **4.** Zakaz wklejania podejrzanych linków lub reflinków. \n **5.** Earrape, krzyczenie, skakanie po kanałach głosowych jest zabronione \n **6.** Gdy widzisz że ktoś łamie regulamin to oznacz @ADMIN ")
                .setColor(0xff0000);
            message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.sendMessage("Nieprawidlowa komenda!")
    }

});

bot.login(process.env.BOT_TOKEN);
