import firebase from "firebase";

export function buildFirebase() {
  var app;
  if (firebase.apps.length === 0) {
    app = firebase.initializeApp({
      apiKey: "AIzaSyADAYC7lX5QVEspv8BUeV2uDqrFle8yQpk",
      authDomain: "studio-trivia-db.firebaseapp.com",
      databaseURL: "https://studio-trivia-db.firebaseio.com",
      projectId: "studio-trivia-db",
      storageBucket: "studio-trivia-db.appspot.com",
      messagingSenderId: "736024037811"
    });
  } else {
    app = firebase.app[0];
  }
  return firebase.database(app);
}

export function getRandomQuestion(questions) {
  var keys = Object.keys(questions);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return questions[keys[randomIndex]];
}
