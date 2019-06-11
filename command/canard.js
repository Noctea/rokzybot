const Discord = require("discord.js")
const Command = require("./command")

const prefix = (".")

module.exports = class Canard extends Command {

    static match(message) {
        if (message.content === prefix + "canard") {
            return true
        }
    }

    static action(message) {

        var canard = new Discord.RichEmbed()
            .setTitle("RIP le caneton de <@490943350996729887>")
            .setDescription("Toutes nos condoléances :cry:")
            .addField("Pray For The Caneton", ":cry: :cry: :cry: :cry:")
            .setThumbnail("http://tubesetfonds.t.u.pic.centerblog.net/animal-caneton3.png")
            .setColor("0x000000")
            .setFooter("On pense fort à toi petit caneton...")

        message.channel.sendEmbed(help)
        .then(function(message) {
            message.react(":cry:")
        })
    }
}