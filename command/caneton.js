const Discord = require("discord.js")
const Command = require("./command")

const prefix = (".")

module.exports = class Caneton extends Command {

    static match(message) {
        if (message.content === prefix + "caneton") {
            return true
        }
    }

    static action(message) {

        var caneton = new Discord.RichEmbed()
            .setTitle("RIP le petit caneton")
            .setDescription("Toutes nos condoléances pour le caneton de <@490943350996729887> :cry:")
            .addField("Pray For The Caneton", ":cry: :cry:")
            .setThumbnail("http://tubesetfonds.t.u.pic.centerblog.net/animal-caneton3.png")
            .setColor("0x000000")
            .setFooter("On pense fort à toi petit caneton... :heart:")

        message.channel.sendEmbed(caneton)
        .then(function(message) {
            message.react("😢")
        })
    }
}