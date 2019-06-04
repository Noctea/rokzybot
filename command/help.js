const Discord = require("discord.js")
const Command = require("./command")

const prefix = (".")

module.exports = class Help extends Command {

    static match(message) {
        if (message.content === prefix + "help") {
            return true
        }
    }

    static action(message) {

        var help = new Discord.RichEmbed()
            .setTitle("Aide :")
            .setDescription("Commandes Disponible avec <@517662031026061314>")
            .addField(".help", "Affiche cette page")
            .addField(".staff", "Mentionne le Staff (ne pas spam sous peine de bannissement)")
            .addField(".infos", "Affiche les informations du serveur Discord")
            .setThumbnail("http://portaildoc-veto.vetagro-sup.fr/wp-content/uploads/2018/05/brain.png")
            .setColor("0xFF9933")
            .setFooter("Le BOT est encore en développement ; d'autres commandes seront bientôt disponible.")

        message.channel.sendEmbed(help)
        .then(function(message) {
            message.react("👌")
        })
    }
}