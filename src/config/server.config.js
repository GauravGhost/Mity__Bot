const { eventTypeMap } = require('highrise-js-sdk')
const dotenv = require('dotenv')

dotenv.config();

const {
    SessionMetadata,
    ChatEvent,
    MessageEvent,
    UserJoinedEvent,
    UserLeftEvent
} = eventTypeMap;

module.exports = {
    ROOM_ID: process.env.ROOM_ID,
    TOKEN_ID: process.env.TOKEN_ID,
    HIGHRISE_BASE_URL: process.env.HIGHRISE_BASE_URL,
    DIRECT_MSG_ID: process.env.DIRECT_MSG_ID,

    settings: {
        prefix: process.env.PREFIX,
        botName: process.env.BOT_NAME,
        owerName: process.env.OWNER_NAME,
        ownerId: process.env.OWNER_ID,
        botId: process.env.BOT_ID,
        developers: ['Gyanendra Kumar'],
        events: [
            SessionMetadata,
            ChatEvent,
            MessageEvent,
            UserJoinedEvent,
            UserLeftEvent
        ],
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