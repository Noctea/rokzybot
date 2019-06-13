class Command {
    constructor(client,
        {
            name = null,
            description = "Aucune description détecté.",
            category = "Membres",
            usage = "Aucune utilisation détecté.",
            enabled = true,
            guildOnly = false,
            aliases = new Array(),
            permLevel = "Membres"
        }
    )   {
        this.client = client;
        this.conf = { enable, guildOnly, aliases, permLevel };
        this.help = { name, description, category, usage };
    }
}

module.exports = Command;