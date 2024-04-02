const { settings } = require('../../config/settings.config')

const playerJoinHandler = (user, client) => {
    console.log(`[playerJoin]: ${user.username}(${user.id}) Joined the room`);
    console.log(user);
    client.message.send(`@${user.username} welcome to ${settings.roomName} 🥰`)
}

module.exports = {
    playerJoinHandler
}