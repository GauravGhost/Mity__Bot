const dotenv = require('dotenv')
dotenv.config();

module.exports = {
    ROOM_ID: process.env.ROOM_ID,
    TOKEN_ID: process.env.TOKEN_ID,

    settings: {
        prefix: process.env.PREFIX,
        botName: process.env.BOT_NAME, 
        owerName: process.env.OWNER_NAME, 
        ownerId: process.env.OWNER_ID, 
        botId: process.env.BOT_ID,
        developers: ['Gyanendra Kumar'],
        events: ['ready', 'playerJoin', 'playerLeave', 'messages'],
        roomName: process.env.ROOM_NAME,
        coordinates: {
            x: 14.5,
            y: 9,
            z: 5.5,
            facing: 'FrontRight'
        },
        reconnect: 5,
        reactionName: 'wave'
      }
}