
var firebaseConfig = {
    apiKey: "AIzaSyB-VXnF3Jh07_Jji8t8LfM2zL4jFNzUIdA",
    authDomain: "kwitter-app-a3150.firebaseapp.com",
    databaseURL: "https://kwitter-app-a3150-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-a3150",
    storageBucket: "kwitter-app-a3150.appspot.com",
    messagingSenderId: "422503172814",
    appId: "1:422503172814:web:11f9589dacd91c8f0f1e9f"
  };
  
  var app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
