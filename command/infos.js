const Discord = require("discord.js")
const Command = require("./command")

const prefix = (".")

module.exports = class Infos extends Command {

    static match(message) {
        if (message.content === prefix + "infos") {
            return true
        }
    }

    static action(message) {

        var infos = new Discord.RichEmbed()
            .setDescription("Informations sur le Discord :")
            .addField("Nom du Discord", message.guild.name)
            .addField("Crée le", "Mercredi 27 Février 2019 à 14h21 (Heure de Paris)")
            .addField("Tu as rejoint le", message.member.joinedAt)
            .addField("Nombres de membres sur le Discord", message.guild.memberCount)
            .setThumbnail("https://cdn.pixabay.com/photo/2016/06/26/23/32/information-1481584_960_720.png")
            .setColor("0x3333FF")

        message.channel.sendEmbed(infos)
        .then(function(message) {
            message.react("👀")
        })    
    }
}