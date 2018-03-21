import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList  from './components/RoomList.js';





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




  render() {
    return (
    <div>

        <RoomList firebase={firebase} />
    </div>
    );
  }
}

export default App;
