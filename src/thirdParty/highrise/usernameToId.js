const { default: axios } = require("axios")
const { HIGHRISE_BASE_URL } = require("../../config/server.config")


module.exports = {
    idToUsername: async(username) => {
        const url = `${HIGHRISE_BASE_URL}/users/?username=${username}`;
        const response = (await axios.get(url)).data;
        return response.users[0].user_id;
    }
}