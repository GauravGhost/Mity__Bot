module.exports = {
    settings: {
        prefix: '!', // the prefix for commands example, /help
        botName: 'Mity__Bot', // this is your bot name, it has to be the same in game
        owerName: 'Mity__', // change this to the owner name
        ownerId: '6381a0292223d4cb6d1c0ab9', // change this with the owner of the bot ID
        botId: '6439210487716c47344b2b2a', // change this with your bot ID, you can get the bot id once you start the bot.
        developers: ['Gyanendra Kumar'], // you can add as many as you want
        events: ['ready', 'playerJoin', 'playerLeave', 'messages'],
        roomName: 'Home', // change this to your room name
        // change this to where you want the bot to teleport on start
        coordinates: {
            x: 14.5,
            y: 9,
            z: 5.5,
            facing: 'FrontRight'
        },
        reconnect: 5,
        reactionName: 'wave' // the reaction you want to use to kick players, 'wink', 'wave, 'heart', 'clap', 'thumbsup'
      }
}