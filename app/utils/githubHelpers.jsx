const axios = require('axios');

//Github
var id = "YOUR_CLIENT_ID",
    sec = "YOUR_SECRET_ID",
    param = "?client_id=" + id + "?client_secret" + sec;

let getUserInfo = (username) => {
    return axios.get('https://api.github.com/users/' + username);
};

function getRepos (username) {
    return axios.get('https://api.github.com/users/' + username + '/repos?per_page=100');
}
function getTotalStars (repos) {
    return repos.data.reduce((prev, curr) => {
        return prev + curr.stargazers_count;
    }, 0);
}

function getPlayersData (player) {
    return getRepos(player.login)
        .then(getTotalStars)
        .then((totalStars) => {
            return {
                followers: player.followers,
                totalStars: totalStars
            };
        });
}

function calculateScores (players) {
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars
    ];
}

let helpers = {
    getPlayersInfo(players) {
        return axios.all(players.map((username) => {
            return getUserInfo(username);
        })).then(function (info){
            return info.map((user) => {
                return user.data;
            });
        });
    },
    battle(players) {
        let playerOneData = getPlayersData(players[0]);
        let playerTwoData = getPlayersData(players[1]);

        return axios.all([playerOneData, playerTwoData])
            .then(calculateScores)
            .catch((err) => {
                console.log("Error in githubHelpers: " + err);
            });
    }
};

module.exports = helpers;
