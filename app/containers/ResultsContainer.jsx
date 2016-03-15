import React, { PropTypes } from 'react';
import Results from '../components/Results.jsx';
import githubHelpers from '../utils/githubHelpers.jsx';


let ResultsContainer = React.createClass({
    getInitialState() {
        return {
            isLoading: true,
            scores: []
        };
    },
    componentDidMount() {
        githubHelpers.battle(this.props.location.state.playersInfo)
            .then((scores) => {
                this.setState({
                    isLoading: false,
                    scores: scores
                });
            });
    },
    render() {
        return (
            <Results
                isLoading={this.state.isLoading}
                scores={this.state.scores}
                playersInfo={this.props.location.state.playersInfo}/>
        );
    }

});

module.exports = ResultsContainer;
