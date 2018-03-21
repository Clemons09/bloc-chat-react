import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCShHGo2Uqyj_Yi_-AJLu30BtV3NwGJqcA",
  authDomain: "bloc-chat-react-85989.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-85989.firebaseio.com",
  projectId: "bloc-chat-react-85989",
  storageBucket: "bloc-chat-react-85989.appspot.com",
  messagingSenderId: "988488989620"
};
var fire = firebase.initializeApp(config);
export default fire;
