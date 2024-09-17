let cant_caract=document.getElementById('cantidad');
let boton = document.getElementById('generar');
let boton_borrar= document.getElementById('borrar');
let clave= document.getElementById('contrasena');
let texto ='texto';
const cadenaCaracteres ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()+[]{}|;:',.<>/"; 
function generar(){

    let numeroDigitado= parseInt (cant_caract.value);
    console.log(numeroDigitado);

    if (numeroDigitado < 8) {

        alert('Clave muy debil, debe contener al menos 8 caracteres');
        return;

    }

    let password = '';

    for (let i = 0; i < numeroDigitado; i++) {
    
        let catacterAleatorio = cadenaCaracteres[Math.floor (Math.random() * cadenaCaracteres.length)]; 

        password +=catacterAleatorio;
        
    }

    clave.value=password;

    let ClaveValida = verificarClave(password);
    comprobar(ClaveValida);
}

function verificarClave(password){ 

    const Mayuscula = /[A-Z]/.test( password);
    const Especial= /[^A-Za-z0-9]/.test( password);

    return Especial && Mayuscula; 
}

function comprobar (ClaveValida){

    if ( ClaveValida) {
        alert ('contraseña contiene caracteres y mayusculas');
    } else {
        alert ('contraseña no contiene caracteres y mayusculas');
        
    }
}

function borrar (){

    cant_caract.value = '';
    clave.value = '';

}

