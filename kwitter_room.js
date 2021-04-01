//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBg8-YOhdNgLWN6Y8mY-veZYr_vbTP912M",
    authDomain: "let-s-chat-web-app-208b7.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-208b7-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-208b7",
    storageBucket: "let-s-chat-web-app-208b7.appspot.com",
    messagingSenderId: "884595393424",
    appId: "1:884595393424:web:703e6a8f11c32e9d8e2915",
    measurementId: "G-WX0C4YEVEX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  username=localStorage.getItem("user_namekey");
  document.getElementById("username").innerHTML="Welcome " +username + "!";

  function addroom() {
    room_name=document.getElementById("room_name").value;
    localStorage.setItem("roomname_key",room_name);
    firebase.database().ref("/").child(room_name).update({purpose:"room_name"});
    window.location="kwitter_page.html";
  }

  function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        row = "<div class='room_name' id='"+Room_names+"' onclick='redirecttoroomname(this.id)'> #"+Room_names+" </div> <hr>";
        document.getElementById("output").innerHTML += row;
        //End code
      });
    });
  }
  getData();

function redirecttoroomname(thisroom) {
  console.log("right now we are in the room"+thisroom);
  localStorage.setItem("room_namekey",thisroom);
  window.location="kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_namekey");
  localStorage.removeItem("room_namekey");
  window.location="index.html";
}