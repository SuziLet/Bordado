document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "admin" && password === "1234") {
        window.location.href = "../home/home.html"; 
    } else {
        document.getElementById('errorMessage').textContent = "Usuario o contraseña incorrectos.";
    }
});