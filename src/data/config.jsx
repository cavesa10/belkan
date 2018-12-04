import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC7F9w8vA8DR31VOnD1kT4_Y1ZwtnOXnLg",
  authDomain: "belkan-12bc4.firebaseapp.com",
  databaseURL: "https://belkan-12bc4.firebaseio.com",
  projectId: "belkan-12bc4",
  storageBucket: "belkan-12bc4.appspot.com",
  messagingSenderId: "292337655920"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth