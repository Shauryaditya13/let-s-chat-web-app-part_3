function adduser() {
    username= document.getElementById("user_name").value;
    localStorage.setItem("user_namekey",username);
    window.location="kwitter_room.html";

}