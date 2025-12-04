function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let errorText = document.getElementById("error");

    if (user === "admin" && pass === "1234") {
        window.location.href = "inventario.html";
    } else {
        errorText.textContent = "Usuario o contraseña incorrectos";
    }
}
