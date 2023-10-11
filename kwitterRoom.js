
var firebaseConfig = {
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
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot
     roomNames = childKey;
     


         });}

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot)
     { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData();





function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
