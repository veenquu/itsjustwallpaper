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
        case "weryfikacja":
            const embed = new Discord.RichEmbed()
                .setTitle("**Weryfikacja**")
                .setColor(0x00CED1)
                .setDescription("Niedługo ktoś z liderówki, zaakceptuje twoje zgłoszenie ! <@&527604678314426424>")
                message.channel.send({embed});
                break;
        case "xyz":
             const embed2 = new Discord.RichEmbed()
                  .setTitle ("fewfewf")
                  message.channel.send({embed2});
                  break;
        default:
            message.channel.sendMessage("Nieprawidlowa komenda!")
    }

});

bot.login(process.env.BOT_TOKEN);
