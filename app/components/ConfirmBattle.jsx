import React, { PropTypes } from 'react';
import MainContainer from './MainContainer.jsx';
import ReactRouter, {Link} from 'react-router';
import UserDetails from './UserDetails.jsx';
import UserDetailsWrapper from './UserDetailsWrapper.jsx';
import styles from '../styles';
import Loading from './Loading.jsx';


const ConfirmBattle = (props) => {
    return props.isLoading
    ?
    <Loading speed={150}/>
    :
    <MainContainer>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
            <UserDetailsWrapper header="Player One">
                <UserDetails info={props.playersInfo[0]}/>
            </UserDetailsWrapper>
            <UserDetailsWrapper header="Player Two">
                <UserDetails info={props.playersInfo[1]}/>
            </UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
          </div>
        </div>
    </MainContainer>
    ;
};

ConfirmBattle.PropTypes = {
    isLoading: PropTypes.object.isRequired,
    onInitiateBattle: PropTypes.func.isRequired,
    playersInfo: PropTypes.array.isRequired
};

module.exports = ConfirmBattle;
