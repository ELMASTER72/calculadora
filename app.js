const operador_0 = document.getElementById('operador')
const operador_1 = document.getElementById('operador1') 
const operador_2 = document.getElementById('operador2')
const resultado = document.getElementById('result')


document.addEventListener("keyup", operations)
operador_1.addEventListener("keydown", block)
operador_2.addEventListener("keydown", block)

let invalidChars = ["+","e",];

function block(event) {
  if (invalidChars.includes(event.key)) {
    event.preventDefault()
  }
}


function operations(event) {
    if (event.keyCode === 13 && operador_1.value === "" && operador_2 === "" && operador_0 === "") {
        alert("por favor introduzca valores")
    }
    else if (event.keyCode === 13 && operador_0.value === "") {
        alert("ingrese operador")
    }
    else if(event.keyCode === 13 && operador_0.value !== "+" && operador_0.value !== "-" && operador_0.value !== "*" && operador_0.value !== "/" && operador_0.value !== "%"){
        alert("operdor incorrecto")
    }
    else if(event.keyCode === 13 && operador_0.value === "+"){
        return sumar()
    }
    else if(event.keyCode === 13 && operador_0.value === "-"){
        return restar()
    }
    else if(event.keyCode === 13 && operador_0.value === "*"){
        return multiplicar()
    }
    else if(event.keyCode === 13 && operador_0.value === "/"){
        return dividir()
    }
    else if(event.keyCode === 13 && operador_0.value === "%"){
        return modulo()
    }
}


function sumar() {
        let n1 = Number(operador_1.value);
        let n2 = Number(operador_2.value);
        resultado.textContent ="Su resultado es: " + ((n1) + (n2))
    
}


function restar() {
    let n1 = Number(operador_1.value);
    let n2 = Number(operador_2.value);
    resultado.textContent ="Su resultado es: " + ((n1)-(n2));
}

function multiplicar() {
    let n1 = Number(operador_1.value);
    let n2 = Number(operador_2.value);
    resultado.textContent ="Su resultado es: " +  ((n1) * (n2));
}

function dividir() {
    let n1 = Number(operador_1.value);
    let n2 = Number(operador_2.value);
    resultado.textContent ="Su resultado es: " + ((n1)/(n2)).toFixed(2);
}

function modulo() {
    let n1 = Number(operador_1.value);
    let n2 = Number(operador_2.value);
    resultado.textContent = "Su resultado es: " + ((n1)%(n2));
}

