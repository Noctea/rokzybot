module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run() {
        await this.client.wait(1000);

        this.client.appInfo = await this.client.fetchApplication();
        setInterval(async () => {
            this.client.appInfo = await this.client.fetchApplication();
        }, 60000);

        this.client.user.setActivity("RokZyBot | .help");

        this.client.logger.log(`RokZyBot est prêt à gérer ${this.client.use.size} personnes !`, "ready"
        );
    }
}