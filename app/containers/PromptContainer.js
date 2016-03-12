const React = require('react'),
    transparentBg = require('../styles').transparentBg,
    PropTypes = React.PropTypes,
    Prompt = require('../components/Prompt.jsx');

let PromptContainer = React.createClass({
    contextTypes: {
        router: PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            username: ''
        };
    },
    handleUpdateUser: function (e) {
        this.setState({
            username: e.target.value
        });
    },
    handleSubmitUser: function (e) {
        e.preventDefault();

        var username = this.state.username;
        this.setState({
            username: ''
        });

        if (this.props.routeParams.playerOne) {
            //go to battle
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            });
        } else {
            this.context.router.push( '/playerTwo/' + this.state.username);
            //go to player two
        }
    },
    render: function () {
        return (
            <div>
                <Prompt
                    onSubmitUser={this.handleSubmitUser}
                    onUpdateUser={this.handleUpdateUser}
                    header={this.props.route.header}
                    username={this.state.username }/>
            </div>
        );
    }
});

module.exports = PromptContainer;
