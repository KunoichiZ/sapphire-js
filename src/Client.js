import 'reflect-metadata';
import { TOKEN, PREFIX } from '#root/config';
import { SapphireClient } from '@sapphire/framework';

class Client extends SapphireClient {

    constructor(options) {
      super(options);

      this.registerUserDirectories();
	}
}

const client = new Client({
    defaultPrefix: PREFIX,
});
  
client.once('ready', () => {
	console.log('Ready!');
});

client.login(TOKEN)
    .catch((error) => {
      client.logger.error(error);
});