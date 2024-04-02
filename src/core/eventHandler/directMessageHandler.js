const { settings, DIRECT_MSG_ID } = require("../../config/server.config");
const {idToUsername} = require("../../thirdParty/highrise/idToUsername");


const directMessageHandler = async (user, data, client) =>{
    const messageArray = await client.inbox.get.messages(data.id);
    const lastMessage = messageArray[0];
    const username = await idToUsername(lastMessage.sender_id) || "unknown";
    await client.direct.send(DIRECT_MSG_ID, `@${username} : ${lastMessage.content} \n userId - ${lastMessage.sender_id}`)

    client.direct.send(data.id, "Thank You for your message");
}


module.exports = {
    directMessageHandler
}