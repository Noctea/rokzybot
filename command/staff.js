const Discord = require("discord.js")
const Command = require("./command")

const prefix = (".")

module.exports = class Staff extends Command {

    static match(message) {
        if (message.content === prefix + "staff") {
            return true
        }
    }

    static action(message) {

        message.channel.send("<@&530730102762373123>")

        var staff = new Discord.RichEmbed()
            .setTitle("Demande de STAFF :")
            .setDescription("Un membre du <@&530730102762373123> te contactera dès que possible.")
            .setThumbnail("https://www.fbcm.org/templates/yootheme/cache/staff-261c5a35.png")
            .setColor("0xBF00FF")
            .setFooter(`Demande de ${message.author.username}`)

        message.channel.sendEmbed(staff)
        .then(function(message) {
            message.react("✅")
        })
    }
}