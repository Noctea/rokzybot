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

        message.channel.send("<@&585627955162513435>")

        var staff = new Discord.RichEmbed()
            .setTitle("Demande de STAFF :")
            .setDescription("Un membre du <@&585627955162513435> te contactera dès que possible.")
            .setThumbnail("https://radixcloud.com/wp-content/uploads/2015/08/featured_staff.png")
            .setColor("0xBF00FF")
            .setFooter(`Demande de ${message.author.username}`)

        message.channel.sendEmbed(staff)
        .then(function(message) {
            message.react("✅")
        })
    }
}