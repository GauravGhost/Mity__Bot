const { TOKEN_ID, ROOM_ID } = require("./config/server.config");
const bot = require("./client");
const {settings} = require('./config/settings.config');
const { generatePlayersLength } = require("./utils/utils");

bot.on('ready', async (client) => {
    console.log(`${settings.botName}(${client}) is now online in ${settings.roomName} with ${await generatePlayersLength(bot)} players.`);
    await bot.player.teleport(client, settings.coordinates.x, settings.coordinates.y, settings.coordinates.z);
  });

// Event emitted when an error occurs within the package.
bot.on('error', (error) => {
    console.error('Error occurred:', error);
    bot.reconnect(token, room);
  });

bot.login(TOKEN_ID, ROOM_ID);