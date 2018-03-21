import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList  from './components/RoomList.js';



// Initialize Firebase
var config = {
  apiKey: "AIzaSyBS3yYPiT9-MJuj2NbsUhvozJ78Grgt9kc",
  authDomain: "bloc-chat-react-1f5db.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-1f5db.firebaseio.com",
  projectId: "bloc-chat-react-1f5db",
  storageBucket: "bloc-chat-react-1f5db.appspot.com",
  messagingSenderId: "764220800865"
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
