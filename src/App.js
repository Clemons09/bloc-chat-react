import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';
import User from './components/User.js'


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
      this.state = {
        activeRoom: null,
        user: null
      }
    }

    setUser(user) {
      this.setState({ user: user });
    }

    changeRoom(room) {
      this.setState({activeRoom: room})
    }

    render() {
      return (
        <div className="App">
          <aside align="left" id="sidebar">
            <RoomList firebase={firebase} activeRoom={this.state.activeRoom} changeRoom={this.changeRoom.bind(this)} />
            <User firebase={firebase} setUser={this.setUser.bind(this)} user={this.state.user} />
          </aside>
          <section className="message-list">
            <main>
              <MessageList firebase={firebase} activeRoom={this.state.activeRoom}/>
            </main>
          </section>
        </div>
      );
    }
  }

  export default App;
