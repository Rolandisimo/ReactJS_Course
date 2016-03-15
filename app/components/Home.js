import React, { PropTypes } from 'react';
import ReactRouter, {Link} from 'react-router';
import MainContainer from './MainContainer.jsx';

function Home () {
    return (

        <MainContainer>
            <h1>
                Github Battle
            </h1>
            <p className="lead">
                The fancy battle without weapons
            </p>

            <Link to="/playerOne">
                <button className="btn btn-lg btn-success">
                    Get Started
                </button>
            </Link>
        </MainContainer>
    );
}

module.exports = Home;
