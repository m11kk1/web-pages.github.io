// Hash function to protect user passwords
function hashPassword(password) {
  var hash = 0;
  if (password.length == 0) {
    return hash;
  }
  for (var i = 0; i < password.length; i++) {
    var char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash;
}

// User database with hashed passwords
var users = [
  { username: "Owner", password: hashPassword("!#¤%&/()=?") },
  { username: "juli#", password: hashPassword("Juli#6978") },
  { username: "Nova", password: hashPassword("nova") },
];

// Login function to validate user input
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  for (var i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == hashPassword(password)) {
      document.getElementById("message").innerHTML = "Login successful!";
      window.location.href = "LoginProcess.html"; // redirect to success page
      return;
    }
  }
  document.getElementById("message").innerHTML = "Invalid username or password.";
}
