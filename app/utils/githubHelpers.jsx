const axios = require('axios');

//Github
var id = "YOUR_CLIENT_ID",
    sec = "YOUR_SECRET_ID",
    param = "?client_id=" + id + "?client_secret" + sec;

let getUserInfo = (username) => {
    return axios.get('https://api.github.com/users/' + username);
};

let helpers = {
    getPlayersInfo(players) {
        return axios.all(players.map((username) => {
            return getUserInfo(username);
        })).then((info) => {
            return info.map((user) => {
                return user.data;
            });
        });
    }
};

module.exports = helpers;
