//first function
function borrarArea() {
    document.getElementById("base").value = "";
    document.getElementById("altura").value = "";
}

function calcularArea() {
    // Obtener los valores de la base y la altura
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);

    // Calcular el área del triángulo
    var area = (base * altura) / 2;

    //document.write('El área del triángulo es: ' + area+"\n\n"); // Mostrar en el cuerpo de la página
    //document.getElementById('resultado').innerHTML = area; // Mostrar en la página
    //console.log('El área del triángulo es: ' + area); // Mostrar en la consola del navegador
    //alert('El área del triángulo es: ' + area); // Mostrar en una alerta

    document.getElementById('resultado').innerHTML = area; // Mostrar en la página
}


//second function
function calcfibonacci(n) {
    result=fibonacci(n);
    alert("El número de Fibonacci en la posición " + n + " es " + result);
}

function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

function borrarFibonacci() {
    document.getElementById("numeroFibonacci").value = "";
}

//third function
function InvertirNumero(numero) {
    let numeroInvertido = 0;
    while (numero > 0) {
      let digito = numero % 10;
      numeroInvertido = numeroInvertido * 10 + digito;
      numero = Math.floor(numero / 10);
    }
    console.log("el numero invertido es: "+numeroInvertido);
  }

  function BorrarNumeroInvertido() {
    document.getElementById("numeroInvertido").value = "";
}
 
//fourth function
function saludar(nombre) {
     console.log("¡Hola, " + nombre + "!");
    }
  
function borrarSaludar() {
    document.getElementById("nombreUsuario").value="";
}

//fifth
function generarPlacas() {
    document.getElementById("placas").value=Placas();
}

function Placas() {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    let placa = "";
    for (let i = 0; i < 3; i++) {
      placa += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    placa += "-";
    for (let i = 0; i < 3; i++) {
      placa += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }
    return placa;
  }

  function borrarPlacas() {
    document.getElementById("placas").value="";
  }

  //sixth
  function registrar() {
        
        var nombre = document.getElementById("name").value;
        var genero = document.getElementById("gender").value;
        var edad = document.getElementById("age").value;
        var numero = document.getElementById("contact").value;
    
        console.log("Nombre: " + nombre);
        console.log("Género: " + genero);
        console.log("Edad: " + edad);
        console.log("Número: " + numero);
  }

  function borrarRegistro() {
    document.getElementById("name").value="";
    document.getElementById("gender").value="";
    document.getElementById("age").value="";
    document.getElementById("contact").value="";
  }
//seventh
function Dados(){

  let suerte = (Math.random() * 6);
   let dado = parseInt(suerte) + 1;
    let objeto=document.getElementById("dados");
     switch (dado) {
        case 1: 
        objeto.innerHTML="⚀";
        break;
        case 2: 
        objeto.innerHTML="⚁";
        break;
        case 3: 
        objeto.innerHTML="⚂";
        break;
        case 4: 
        objeto.innerHTML="⚃";
        break;
        case 5: 
        objeto.innerHTML="⚄";
        break;
        case 6: 
        objeto.innerHTML="⚅";
        break;
     }
     objeto.style.fontSize = "80px";
} 

//eighth
function imprimirIntervalo(a,b) {
    var A=parseInt(a);
    var B=parseInt(b);
    if (A <= B) {
      console.log(A);
      imprimirIntervalo(A + 1, B);
    }
  }
  
function borrarIntervalo() {
    document.getElementById("inferior").value="";
    document.getElementById("superior").value="";
}  
//nineth
function obtenerRolAleatorio() {
    let roles = document.getElementById("roles").value.split(",");
    let indiceAleatorio = Math.floor(Math.random() * roles.length);
    let rolAleatorio = roles[indiceAleatorio];
    alert("Tu rol aleatorio es: " + rolAleatorio);
  }
function borrarRol() {
    document.getElementById("roles").value="";
} 

//tenth
function calcularPotenciaDeDos(x) {
    x = parseInt(x);
    if (x == 0) {
      return 1;
    } else {
      let resultadoPotencia = 2 * calcularPotenciaDeDos(x - 1);
      document.getElementById("variable").innerHTML = x;
      document.getElementById("resultadoPotencia").innerHTML = resultadoPotencia;
      return resultadoPotencia;
    }
  }
  
  function borrarPotencia() {
    document.getElementById("potencia").value="";
  }

    