import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../../actions';
import '../../../../App.css';
import './Room1.css';
import note from '../../../../images/room1/note.png';

class Note extends Component {

  state = {
        oldMouseX: 0,
        oldMouseY: 0,
        mouseX: 0,
        mouseY: 0,
        clicked: false,
        x:320,
        y:530,
      };

    note = {
      id: 1,
      title: 'note',
      x:0,
      y:10,
      img: note,
      width: 100,
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
      if(this.state.x > 633 && this.state.x < 683 &&
        this.state.y > 0 && this.state.y < 64) {
        this.putNoteInPurse()
      }
    }

    putNoteInPurse = () => {
      this.props.addItemToPurse(this.note)
      this.props.showJessicasNote(!this.props.findJessicasNote)
    }


  render() {
    // console.log("x",this.state.x)
    // console.log("y",this.state.y)
    return (
      <div
        id="jessicas_note"
        style={{left: this.state.x,
                top: this.state.y}}
        onMouseDown={(e)=>this.handleMouseDown(e)}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}>
        <div id="text">
          ---121 Street Lane, Miami Florida Address --- Dear Kelly, I can't believe what you did today during tennis practice. You are the most horrible disgusting person I have ever met. We are not friends anymore. Do not call me -Jessica
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    purseDropZone: state.purseDropZone,
    findJessicasNote: state.findJessicasNote,
    itemsInPurse: state.itemsInPurse
  }
}

export default connect( mapStateToProps, actions)(Note);




// <div id="clearbox"></div>
// <img src={note} alt="Note"/>
