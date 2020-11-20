require('module-alias/register');
require('reflect-metadata');
const config = require('./config.json');
const { SapphireClient } = require('@sapphire/framework');
const { join } = require('path');

class Client extends SapphireClient {

    constructor(options) {
      super(options);

      this.commands.registerPath(join(__dirname, 'commands'));
      this.commands.registerPath(join(__dirname, 'events'));

      this.registerUserDirectories();
	}
}

const client = new Client({
    defaultPrefix: config.prefix,
});
  
client.once('ready', () => {
	console.log('Ready!');
});

client.login(config.token)
    .catch((error) => {
      client.logger.error(error);
});