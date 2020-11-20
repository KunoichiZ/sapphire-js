const { Command } = require('@sapphire/framework');

module.exports = class TestCommand extends Command {
    constructor(context) {
        super(context, { 
            aliases: ['t'] 
        });
    }

    run(message) {
		return message.channel.send("test message working!");
	}
}