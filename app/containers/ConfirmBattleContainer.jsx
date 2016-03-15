const React = require('react'),
    PropTypes = React.PropTypes,
    ConfirmBattle = require('../components/ConfirmBattle.jsx'),
    githubHelpers = require('../utils/githubHelpers.jsx');

const ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: PropTypes.object.isRequired
    },
    getInitialState() {
        return {
            isLoading: true,
            playersInfo: []
        };
    },
    componentDidMount() {
        let query = this.props.location.query;
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then((players) => {
                this.setState({
                    isLoading: false,
                    playersInfo: [
                        players[0],
                        players[1]
                    ]
                });
            })
            .catch((error) => {
                console.warn('Error in getPlayersInfo()' + error);
            });
    },
    handleInitiateBattle() {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        });
    },
    render() {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                onInitiateBattle={this.handleInitiateBattle}
                playersInfo={this.state.playersInfo} />
        );
    }

});

module.exports = ConfirmBattleContainer;
