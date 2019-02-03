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
            message.channel.sendMessage("Wszystkie moje komendy! \n Już niedługo !**");
            break;
        case "regulamin":
            const embed = new Discord.RichEmbed()
                .setTitle("📋 **Regulamin**")
                .setColor(0x00CED1)
                .setDescription("**1.** Zachowanie: \n **1.1** Musisz być uprzejmy dla klienta i dla kolegów z pracy \n **2.** Wypłaty: \n **2.1** Aby otrzymać wypłatę muszisz conajmniej spędzić 30 minut na duty. \n **30 minut:** 200$ \n **60 minut** 500$ \n **Akcja:** Gwarantowane 250$ \n **3.** Reklamowanie: \n **3.1** Nie możesz reklamować discordów lub stron www bez pozwolenia.")
                .setFooter("Regulamin może się w każdej chwili zmienić")
                message.channel.send({embed});
                break;
        case "xxxx":
            const otherEmbed = new Discord.RichEmbed()
                .setTitle("XX")
                .setColor(0x00CED1)
                .setDescription("XDXD")
                message.channel.send({otherEmbed});
                break;
        default:
            message.channel.sendMessage("Nieprawidlowa komenda!")
    }

});

bot.login(process.env.BOT_TOKEN);
