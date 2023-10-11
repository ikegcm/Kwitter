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
    firebase.initializeApp (firebaseConfig);
     userName=localStorage.getItem("userName");
     roomName=localStorage.getItem("roomName");

     function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomName).push({
            name:userName,
            menssage:msg,
            like:0
      });
      
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;

        console.log(firebaseMessageId);
        console.log(menssageData);
        name = messageData['name'];
        message = messageData['message']
        like = messageData['like'];
        nameWithTag = "<h4>" + name +"<img class='user_tick'  src=tick.png'></h4>";
        messageWithtag = "<h4 class= ' message_4'>" + message + "</h4>";
        likeButton="<button class = 'btn-btn-warning' id= "+firebaseMessageId+" value"+like+"onclick='updatelike(this.id)'>" ;
        spanWithTag = "<snap class='glyphicon glyphicon-thumbs-up'>Like " + like + "</span></button><hr>";


        row = nameWithTag + messageWithtag +likeButton + apanWithTag;
        document.getElementById("output").inerHTML += row;



      } });  }); }
       getData();

       function updateLike(messagingId)
       {
          console.log("botão like pressionado - " + messagingId);
          button_id = messageId;
          likes = document.getElementById(button_id).value;
          updateLike = Number(likes) + 1;
          console.log(updateLikes);

          firebase.database().ref(roomName).child(messageId).update({
            like : updateLikes 
          });
       }
