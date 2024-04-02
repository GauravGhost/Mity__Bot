const { settings } = require("../../../config/server.config");


const test = async (client, message, user) => {
    if(user.id !== settings.ownerId){
        return;
    }
    console.log(await client.wallet.get());
}

const getWallet = async (client, message, user) => {
    if(user.id !== settings.ownerId){
        return;
    }
    const wallet = await client.wallet.fetch();
    client.whisper.send(user.id, wallet);
}

module.exports = {
    test,
    getWallet,
}