const config = {
    defaultSettings: {
        prefix: ".",
        modLogChannel: "dev-rokzybot",
        modRole: "Modérateurs Stream",
        adminRole: "Administrateurs",
        systemNotice: true
    },
    permLevels: [
        { level: 0, name: "Membres", check: () => true},
        {
            level: 1,
            name: "Modérateurs Steram",
            check: message => {
                try {
                    const modRole = message.guild.role.find(r => r.name.toLowerCase() === message.settings.modRole.toLowerCase()
                    );
                    if (modRole && message.member.roles.has(modRole.id)) return true;
                } catch(e) {
                    return false;
                }
            }  
        },
        {
            level: 2,
            name: "Administrateurs",
            check: message => {
                try {
                    const adminRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.adminRole.toLowerCase()
                    );
                    if (adminRole && message.member.roles.has(adminRole.id)) return true;
                } catch(e) {
                    return false;
                }
            }
        },
        {
            level: 3,
            name: "Noctea",
            check: message => message.client.appInfo.owner.id === message.author.id
        }

    ]
};

module.exports = config;