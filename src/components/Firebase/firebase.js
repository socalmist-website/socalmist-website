import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB1T2rjyfv07jgTPsOmFRiarjAX3md3lQM",
    authDomain: "socalmist-52b6d.firebaseapp.com",
    databaseURL: "https://socalmist-52b6d.firebaseio.com",
    projectId: "socalmist-52b6d",
    storageBucket: "socalmist-52b6d.appspot.com",
    messagingSenderId: "488845003042",
    appId: "1:488845003042:web:0863247baf4ba28fbfbd7b",
    measurementId: "G-VB9XHFWG8L"
  };
class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();
}
export default Firebase;