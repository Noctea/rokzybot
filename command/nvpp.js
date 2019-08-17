const Discord = require("discord.js")
const Command = require("./command")

const prefix = (".")

module.exports = class Nvpp extends Command {

    static match(message) {
        if (message.content === prefix + "nvpp") {
            return true
        }
    }

    static action(message) {

        var nvpp = new Discord.RichEmbed()
            .setTitle("LA NOUVELLE PP DU ROKZYBOT !")
            .setDescription("<@490943350996729887> dans toute sa splendeur !")
            .setThumbnail("https://cdn.discordapp.com/attachments/286230717367713792/612355077356912651/rokzychasse2.jpg")
            .setColor("0xFF7B00")
            .setFooter("Abonne toi aux réseaux de rokzyy la blg pour avoir des photos de très bonne qualité comme celle-ci :)")

        message.channel.sendEmbed(nvpp)
        .then(function(message) {
            message.react("😍")
        })
    }
}