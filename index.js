const Discord = require("discord.js");

const PREFIX = "-"


var bot = new Discord.Client();

bot.on("ready", function() {
    console.log('Bot dziala.');
    bot.user.setStatus('status jakis');
    bot.user.setActivity('Evil Bot v2 😈', { type: 'PLAYING' });

});

    console.log("Ready")

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;


    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "pomoc":
            message.channel.sendMessage("Wszystkie moje komendy! \n !!boy - Dostajesz range **Chłopak**");
            break;
        case "embed":
            var embed = new Discord.RichEmbed()
                .setTitle("🔨 **Już Niedługo !**")
                .setDescription("Więcej informacji na kanale #wazne-info")
                .setColor(0xff0000);
            message.channel.sendEmbed(embed);
            break;
        case "boy":
            a
        default:
            message.channel.sendMessage("Nieprawidlowa komenda!")
    }
        let 

});

bot.login(process.env.BOT_TOKEN);
