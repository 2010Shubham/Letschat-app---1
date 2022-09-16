
var firebaseConfig = {
    apiKey: "AIzaSyB-VXnF3Jh07_Jji8t8LfM2zL4jFNzUIdA",
    authDomain: "kwitter-app-a3150.firebaseapp.com",
    databaseURL: "https://kwitter-app-a3150-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-a3150",
    storageBucket: "kwitter-app-a3150.appspot.com",
    messagingSenderId: "422503172814",
    appId: "1:422503172814:web:11f9589dacd91c8f0f1e9f"
  };
  
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name;

  function addRoom(){
      room_name = document.getElementById("room_textinput").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "letschat_page.html"
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      row = "<div class = 'room_name' id ="+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "letschat_page.html";
}



