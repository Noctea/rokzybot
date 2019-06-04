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
            .addField("Crée le", "Mardi 10 Juillet 2018 à 15h38 (Heure de Paris)")
            .addField("Tu as rejoint le", message.member.joinedAt)
            .addField("Nombres de membres sur le Discord", message.guild.memberCount)
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Info_icon_002.svg/768px-Info_icon_002.svg.png")
            .setColor("0x3333FF")

        message.channel.sendEmbed(infos)
        .then(function(message) {
            message.react("👀")
        })    
    }
}