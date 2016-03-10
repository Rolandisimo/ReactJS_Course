var React = require('react'),
    transparentBg = require('../styles').transparentBg,
    PropTypes = React.PropTypes;

var PromptContainer = React.createClass({
    contextTypes: {
        router: PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            username: ''
        };
    },
    onUpdateUser: function (e) {
        this.setState({
            username: e.target.value
        });
    },
    onSubmitUser: function (e) {
        e.preventDefault();

        var username = this.state.username;
        this.setState({
            username: ''
        });

        console.log(this);
        if (this.props.routeParams.playerOne) {
            //go to battle
            console.log(this.context);
        } else {
            console.log(this.context);
            //go to player two
        }
    },
    render: function () {
        return (
            <div className="row">
                <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
                    <h1>{this.props.route.header}</h1>
                    <div className="col-sm-12">
                        <form onSubmit={this.onSubmitUser}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={this.onUpdateUser}
                                    value={this.state.username }
                                    placeholder="Enter Github username..." />
                            </div>
                            <div className="form-group col-sm-4 col-sm-offset-4">
                                <button
                                    type="submit"
                                    className="btn btn-block btn-success"
                                >
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PromptContainer;
