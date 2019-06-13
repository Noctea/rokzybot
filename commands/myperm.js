const Command = require("../modules/Commad.js");

class MyPerm extends Command {
    constructor(client) {
        super(client, {
            name: "myperm",
            description: "Affiche votre niveau de permission.",
            usage: "myperm",
            guildOnly: true
        });
    }

    run(message, args, level) {
        const perm = this.client.config.permLevels.find(1 => 1.level === level).name;
    message.reply(`Ton niveau de permission est : ${level} - ${perm}`);
    }
}

module.exports = MyPerm;