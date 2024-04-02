const { Highrise } = require("highrise-js-sdk");
const { settings } = require("./config/server.config");
const { playerJoinHandler } = require("./core/eventHandler/playerJoinHandler");
const { chatMessageHandler } = require("./core/eventHandler/chatMessageHandler");

const client = new Highrise({ events: settings.events }, settings.reconnect);

// Emitted when a player joins the room.
client.on('playerJoin', (user) => playerJoinHandler(user, client));
client.on('chatMessageCreate', async (user, message) => chatMessageHandler(user, message, client));

module.exports = client