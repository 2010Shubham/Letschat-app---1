function adduser()
{
    user_name = document.getElementById("name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "letschat_room.html";
}