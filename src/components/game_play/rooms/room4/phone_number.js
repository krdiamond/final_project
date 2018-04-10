import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../../actions';
import '../../../../App.css';
import './Room4.css';
import note from '../../../../images/room1/note.png';

class PhoneNumber extends Component {

  state = {
        oldMouseX: 0,
        oldMouseY: 0,
        mouseX: 0,
        mouseY: 0,
        clicked: false,
        x:320,
        y:530,
      };

    phoneNumber = {
      title: 'Phone Number',
      x:0,
      y:10,
      idx:0,
      img: note,
    }

    handleMouseDown = (e) => {
      this.setState({
        oldMouseX: e.clientX,
        oldMouseY: e.clientY,
        clicked: true,
      });
    }

    handleMouseMove = (e) => {
      this.setState({
        mouseX: e.clientX,
        mouseY: e.clientY,
      })
      if(this.state.clicked === true ) {
          this.setState({
          x: this.state.x + e.clientX - this.state.mouseX,
          y: this.state.y + e.clientY - this.state.mouseY,
        })
      }
    }

    handleMouseUp = () => {
      this.setState({clicked: false});
      if(this.state.x > this.props.purseDropZone.right &&
        this.state.x < (this.props.purseDropZone.right + 100) &&
        this.state.y < (this.props.purseDropZone.bottom - 100)){
        console.log("i'm here")
        this.putNoteInPurse()
      }
    }

    putNoteInPurse = () => {
      this.props.addItemToPurse(this.phoneNumber)
      this.props.showAllisonsPhoneNumber(!this.props.showingAllisonsPhoneNumber)
    }


  render() {
    return (
      <div
        id="phone_number"
        style={{left: this.state.x,
                top: this.state.y}}
        onMouseDown={(e)=>this.handleMouseDown(e)}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}>
          PHONE NUMBER
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    purseDropZone: state.purseDropZone,
    findJessicasNote: state.findJessicasNote,
    itemsInPurse: state.itemsInPurse,
    showingAllisonsPhoneNumber: state.showingAllisonsPhoneNumber,
  }
}

export default connect( mapStateToProps, actions)(PhoneNumber);