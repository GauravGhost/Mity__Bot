const { default: axios } = require("axios")
const { HIGHRISE_BASE_URL } = require("../../config/server.config")


module.exports = {
    idToUsername: async(userId) => {
        const url = `${HIGHRISE_BASE_URL}/users/${userId}`;
        const response = (await axios.get(url)).data;
        return response.user.username;
    }
}