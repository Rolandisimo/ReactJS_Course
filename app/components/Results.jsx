import React, { PropTypes } from 'react';
import styles from '../styles';
import UserDetails from './UserDetails.jsx';
import UserDetailsWrapper from './UserDetailsWrapper.jsx';
import ReactRouter, {Link} from 'react-router';
import MainContainer from './MainContainer.jsx';
import Loading from './Loading.jsx';

const Results = (props) => {
    if (props.isLoading === true) {
        return (
            <Loading />
        );
    }

    var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    var losingIndex = winningIndex === 0 ? 1 : 0;

    function StartOver () {
        return (
            <div className="col-sm-12">
                <Link to="/playerOne">
                    <button type="button" className="btn btn-lg btn-success" style={styles.space}>Start Over</button>
                </Link>
            </div>
        );
    }
    function Results() {
        if (props.scores[0] === props.scores[1]) {
            return (
                <div className="jumbotron col-sm-12 text-center">
                    <h1>It's a Tie!</h1>
                    <StartOver />
                </div>
            );
        }
    }

    return (
        <MainContainer>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Winner">
                    <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Loser">
                    <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
                </UserDetailsWrapper>
            </div>
            <StartOver />
        </MainContainer>
    );
};

Results.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    scores: PropTypes.array.isRequired,
    playersInfo: PropTypes.array.isRequired
};

module.exports = Results;
