import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions';
import '../../App.css';
import StartGame from './start_game';
import Television from './television';
import Room1 from './rooms/room1/room1';
import Room2 from './rooms/room2/room2';
import Room3 from './rooms/room3/room3';
import Room4 from './rooms/room4/room4';
import Room5 from './rooms/room5/room5';
import Room6 from './rooms/room6/room6';
import Room7 from './rooms/room7/room7';
import Room8 from './rooms/room8/room8';
import Room9 from './rooms/room9/room9';
import Room10 from './rooms/room10/room10';
import Room11 from './rooms/room11/room11';
import PurseContainer from './purse_container';


class GameContainer extends Component {

  rooms = [
    StartGame,
    Room1,
    Room2,
    Room3,
    Room4,
    Room5,
    Room6,
    Room7,
    Room8,
    Room9,
    Room10,
    Room11
  ];

  // componentDidMount = () => {
  //   setInterval(this.tick, 1000);
  // }
  //
  // tick = () => {
  //   this.props.startTimer(this.props.timer)
  // }

  render() {
    let Room = this.rooms[this.props.currentRoom];
    return (
      <div className="main_container">
        <Room />
        <PurseContainer/>
        <Television/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    currentRoom: state.currentRoom,
    peopleTalkedTO: state.peopleTalkedTO,
    timer: state.timer,
    itemsInPurse: state.itemsInPurse,
  }
}

export default connect( mapStateToProps, actions)(GameContainer);
