
let intentos = 3;
let usuaraio;
let contrasenia;
while (true) {
    usuaraio = prompt('Ingrese su nombre de usuario');
    if (usuaraio.length < 5) {
        alert('Por favor ingrese un usuario con más de 6 caracteres');
    } else if (usuaraio.length > 18) {
        alert('Por favor ingrese un usuario con menos de 18 caracteres');
    } else {
        alert('usuario creado correctamente');
        break;
    }
}
while (true) {
    contrasenia = prompt('Ingrese su contraseña');
    if (contrasenia.length < 8) {
        alert('La contraseña debe tener más de 8 caracteres');
    } else if (contrasenia.length > 18) {
        alert('Por favor ingrese un usuario con menos de 18 caracteres');
    } else {
        alert('Contraseña  creada correctamente');
        alert('Ya puedes ingresar a tu cuenta')
        break;
    }
}
while (intentos > 0) {
    let verificacionUsuario = prompt('Ingrese su nmbre de usario para verificar');
    let verificacionContrasenia = prompt('Ingrese su contraseña para verificar');
    if (verificacionUsuario === usuaraio && verificacionContrasenia === contrasenia) {
        alert('Acceso Concedidio');
        break;
    } else {
        intentos--;
        alert('Usuario o contraseña uncorrectos. Intentos restantes:  ${intentos}');
    }
    if (intentosDisponibles === 0) {
        alert('Acceso denegado. No tiene más intentos');
    }
}  