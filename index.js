const Discord = require("discord.js")
const bot = new Discord.Client()

const Command = require("./command/command")
const Ping = require("./command/ping")
const Infos = require("./command/infos")
const Help = require("./command/help")
const Staff = require("./command/staff")

bot.on("ready", function() {
    bot.user.setActivity("RokzyBot | .help")
})

bot.login(process.env.TOKEN)

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "🆕-bienvenue").send(`${member}, bienvenue sur le Discord destiné à la communauté de RokZy ! Passe un bon moment ici ! :purple_heart: `)
})

bot.on("message", message => {

    Ping.parse(message)
    Infos.parse(message)
    Help.parse(message)
    Staff.parse(message)
})
