
const firebaseConfig = {
    apiKey: "AIzaSyDWR7zFDvQFYKrxTq1bhxa1Dxwn_1Yo2a4",
    authDomain: "aula93-63eb8.firebaseapp.com",
    databaseURL: "https://aula93-63eb8-default-rtdb.firebaseio.com",
    projectId: "aula93-63eb8",
    storageBucket: "aula93-63eb8.appspot.com",
    messagingSenderId: "37796403908",
    appId: "1:37796403908:web:d4b2e366c710766e7fc791",
    measurementId: "G-3NPB6BQ5WW"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    userName = document.getElementById("userName").value;
    firebase.database().ref("/").child(userName).update({
     purpose  :  "adicionar usuario"
    });
}
