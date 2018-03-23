import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList  from './components/RoomList.js';
import MessageList from './components/MessageList.js';





  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBxshVlcMuweB2kRlg_4BEC0zcjyK1n0jA",
    authDomain: "bloc-chat-react-ec930.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-ec930.firebaseio.com",
    projectId: "bloc-chat-react-ec930",
    storageBucket: "",
    messagingSenderId: "389456100708"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {activeRoom: ""};
    this.activeRoom = this.activeRoom.bind(this);
  }

  activeRoom(room) {
    this.setState({ activeRoom: room })
  }


  render() {
    const showMessages = this.state.activeRoom;
    return (
    <div className="App">
        <h1>{this.state.activeRoom.newRoomName || "Select A Room"}</h1>
        <RoomList firebase = {firebase} activeRoom={this.activeRoom} />
        { showMessages ?
          (<MessageList firebase={firebase} activeRoom={this.state.activeRoom.key}/>)
          : (null)
        }
    </div>
    );
  }
}

export default App;
