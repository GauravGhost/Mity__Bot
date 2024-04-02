const emotes = require('../config/json/emotes.json')
module.exports = {
    getRandomEmote: () => {
        return emotes[Math.floor(Math.random() * emotes.length)];
      },

      generatePlayersLength: async (bot) => {
        const players = await bot.room.players.fetch();
        const playersLength = players.length ? players.length : 0;
    
        return playersLength;
      },
}