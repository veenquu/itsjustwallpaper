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
    	let channel = message.channel;

    // next create rich embeds
    	let embed1 = new Discord.RichEmbed({
        	title: 'embed1',
        	description: 'description1',
        	author: {
            	name: 'author1'
        	}
    	});

    	let embed2 = new Discord.RichEmbed({
        	title: 'embed2',
        	description: 'description2',
        	author: {
            	name: 'author2'
        	}
    	});

    // send embed to channel
    	channel.send(embed1)
    	.then(msg => {
        // after the first is sent, send the 2nd (makes sure it's in the correct order)
        	channel.send(embed2);
            break;
        case "xyz":
             const secondembed = new Discord.RichEmbed()
                  .setTitle ("fewfewf")
                  .setDescription("Niedługo ktoś z liderówki, zaakceptuje twoje zgłoszenie ! <@&527604678314426424>")
                  message.channel.send({secondembed});
                  break;
        default:
            message.channel.sendMessage("Nieprawidlowa komenda!")
    }

});

bot.login(process.env.BOT_TOKEN);
