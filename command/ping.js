const Discord = require("discord.js")
const Command = require("./command")

const prefix = (".")

module.exports = class Ping extends Command {

    static match(message) {
        if (message.content === prefix + "ping") {
            return true
        }
    }

    static action(message) {
        
        var ping = new Discord.RichEmbed()
            .setTitle("Réponse du bot 👌")
            .setFooter("Temps de latence avec le serveur : " + `${message.createdTimestamp - Date.now()}` + "ms")

        message.channel.sendEmbed(ping)
        .then(function(message) {
            message.react("🤖")
        })
    }
}