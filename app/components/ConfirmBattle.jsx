import React, { PropTypes } from 'react';
import {transparentBg, space} from '../styles';
import ReactRouter, {Link} from 'react-router';

function puke (object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>;
}

const ConfirmBattle = (props) => {
    return props.isLoading
    ?
    <p>Loading...</p>
    :
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
            <div className="col-sm-6">
                <p className="lead">Player 1</p>
                {puke(props.playersInfo[0])}
            </div>
            <div className="col-sm-6">
                <p className="lead">Player 2</p>
                {puke(props.playersInfo[1])}
            </div>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
            // TODO: Implement routing
          <div className='col-sm-12' style={space}>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
          </div>
          <div className='col-sm-12' style={space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
          </div>
        </div>
      </div>
    ;
};

ConfirmBattle.PropTypes = {
    isLoading: PropTypes.object.isRequired,
    onInitiateBattle: PropTypes.func.isRequired,
    playersInfo: PropTypes.array.isRequired
};

module.exports = ConfirmBattle;