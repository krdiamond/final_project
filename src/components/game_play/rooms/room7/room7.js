import React, { Component } from 'react';
import {connect} from 'react-redux'
import {goToRoom} from '../../../../actions'
import '../../../../App.css';
import room7 from '../../../../images/room7/room7.jpg';
import './Room7.css';
import redDot from '../../../../images/room1/red_dot.gif';
import * as actions from '../../../../actions';
import PhoneContainer from '../../phone_container';


class Room7 extends Component {

  state = {
    hoverGoToRoom6: false,
    hoverGoToRoom8: false,
  }

  handleGoToRoom = (roomNum) => {
    this.props.goToRoom(roomNum)
  }

  handlehoverEnterGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 6){
      this.setState({
        hoverGoToRoom6: true
      })
    }
    else if (num === 8){
      this.setState({
        hoverGoToRoom8: true
      })
    }
  }

  handlehoverLeaveGoTo = (num) => { //can I do this dynamically somehow??
    if (num === 6){
      this.setState({
        hoverGoToRoom6: false
      })
    }
    else if (num === 8){
      this.setState({
        hoverGoToRoom8: false
      })
    }
  }

  handlePhoneClick = () => {
    this.props.toggleShowPhone(!this.props.showPhone)
  }



  render() {
    return (
      <div className="main_container">
        <img src={room7} alt="Victim's Living Room"/>

          <div id="room7phone" onClick={this.handlePhoneClick} >
          </div> {(this.props.showPhone === true && this.props.isPurseOpened === false)? <PhoneContainer message="0"/>: null}

          <div id="room7_go_to_room_6" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(6)}
            onMouseEnter={(e) => this.handlehoverEnterGoTo(6)}
            onMouseLeave={(e) => this.handlehoverLeaveGoTo(6)}>
            {this.state.hoverGoToRoom6? <div>GO TO ALLISON'S LIVING ROOM</div> : null}
          </div>
          <div id="room7_go_to_room_8" className="traverse_rooms"
            onClick={(e) => this.handleGoToRoom(8)}
            onMouseEnter={(e) => this.handlehoverEnterGoTo(8)}
            onMouseLeave={(e) => this.handlehoverLeaveGoTo(8)}>
            {this.state.hoverGoToRoom8? <div>GO TO ALLISON'S BEDROOM</div> : null}
         </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    showPhone: state.showPhone,
    isPurseOpened: state.isPurseOpened,
  }
}

export default connect( mapStateToProps, actions)(Room7);
