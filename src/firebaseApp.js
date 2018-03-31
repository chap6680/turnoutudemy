import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA8ouwUf-dzpJ3rbYd4oZ5V_o4ZwkaCRWE",
    authDomain: "maxmeetup-251d0.firebaseapp.com",
    databaseURL: "https://maxmeetup-251d0.firebaseio.com",
    projectId: "maxmeetup-251d0",
    storageBucket: "maxmeetup-251d0.appspot.com",
    messagingSenderId: "917133124294"
  };

  export const firebaseApp = firebase.initializeApp(config)

  export const eventsRef = firebaseApp.database().ref().child('events')