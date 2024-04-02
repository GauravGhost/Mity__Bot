const { Highrise } = require("highrise-js-sdk");
const { settings } = require("./config/server.config");

const catchAsync = require("./utils/catchAsync")

const { playerJoinHandler } = require("./core/eventHandler/playerJoinHandler");
const { chatMessageHandler } = require("./core/eventHandler/chatMessageHandler");
const { directMessageHandler } = require("./core/eventHandler/directMessageHandler");

const client = new Highrise({ events: settings.events }, settings.reconnect);

// Emitted when a player joins the room.
client.on('playerJoin', catchAsync(async (user) => playerJoinHandler(user, client)));
client.on('chatMessageCreate', catchAsync(async (user, message) => chatMessageHandler(user, message, client)));
client.on('whisperMessageCreate', catchAsync(async (user, message) => chatMessageHandler(user, message, client)));
client.on('directMessageCreate', catchAsync(async (user, data) => directMessageHandler(user, data, client)));

module.exports = client