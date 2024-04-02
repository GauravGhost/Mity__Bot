const { settings } = require('../../config/server.config')
const { getRandomEmote } = require('../../utils/utils');
const { test, getWallet } = require('./commandHandler/modCommandHandler');

const chatMessageHandler = async (user, message, client) => {
  // console.log(`(chat): [${user.username}]: ${message}`);
  const prefix = settings.prefix;
  const command = message.startsWith(prefix) ? message.slice(prefix.length).split(' ')[0] : '';

  switch (command) {
    /**
     * @command ping
     * @description To check the status of server.
     */
    case 'ping':
      await ping(client);
      break;

    /**
     * @command emote
     * @description For Emote
     */
    case 'emote':
      await emote(client);
      break;

    /**
     * @comand walk
     * @description walking
     */
    case 'walk':
      await teleport(client, message, user);
      break;

    /**
     * @command tele
     * @description For teleportation of user or itself on designated place.
     */
    case 'tele':
      await teleportUser(client, message, user);
      break;

    /**
     * --------------------------------------------
     * @description MOD COMMAND
     * --------------------------------------------
     */

    /**
     * @command test
     * 
     */
    case 'test':
      await test(client, message, user);
      break;

    case 'getwallet':
      await getWallet(client, message, user);
      break;
  }
}

// EMOTE MESSAGE COMMAND - emote
const emote = async (client) => {
  const players = await client.room.players.fetch();
  const randomEmote = getRandomEmote();

  players.forEach(async (player) => {
    const playerId = player[0].id;
    await client.player.emote(playerId, randomEmote);
  });
}

// PING MESSAGE COMMAND - ping
const ping = async (client) => {
  const latency = await client.ping.get();
  client.message.send(`The bot latency is: ${latency}ms`)
}

const teleport = async (client, message, user) => {
  client.move.walk(1, 0, 1, settings.coordinates.facing);
}

// TELEPORTATION COMMAND - tele
const teleportUser = async (client, message, user) => {
  const messageArray = message.split(' ');

  if (messageArray.length == 1) {
    await client.player.teleport(user.id, 1, 0, 1);

  } else if (messageArray.length == 2) {
    const mod = await client.player.permissions.get(user.id);
    if (!mod.moderator) {
      return;
    }

    const username = messageArray[1].slice(1);
    const id = await client.room.players.cache.id(username) || user.id;
    await client.player.teleport(id, 1, 0, 1);
  }
}



module.exports = {
  chatMessageHandler
}