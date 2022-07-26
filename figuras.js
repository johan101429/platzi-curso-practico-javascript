// codigo del cuadrado
console.group("cuadrados");
/*const ladoCuadrado = prompt("ingrese datos del cuadrado");
console.log("los lados del cuadrado miden :" + ladoCuadrado + "cm");*/

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perimetro del cuadrado es:" + perimetroCuadrado + "cm");

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado * ladoCuadrado;
}
//console.log("el area cuadrada es:" + areaCuadrado + "cm2");
console.groupEnd();

// codigo del triangulo

console.group("triangulos");
/*const ladoTriangulo1 = parseInt(prompt("ingrese lado 1"));
const ladoTriangulo2 = parseInt(prompt("ingrese lado 2"));
const baseTriangulo = parseInt(prompt("ingrese base"));

console.log("los lados del triangulo miden :" + ladoTriangulo1 + "cm," + ladoTriangulo2 + "cm," + baseTriangulo + "cm");*/

/*const alturaTriangulo = prompt("ingrese altura");
console.log("la altura del triangulo es de :" + alturaTriangulo + "cm2");*/

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es:" + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
//console.log("el area del triangulo  es:" + areaTriangulo + "cm2");

console.groupEnd();


// codigo del circulo

console.group("circulo");
/*const radioCirculo = parseInt(prompt("ingrese el radio"));
console.log("el radio del circulo es :" + radioCirculo + "cm ");*/

function diametroCirculo(radioCirculo) {
    return radioCirculo * 2;
}
/*diametroCirculo = radioCirculo * 2;
console.log("el diametro del circulo es " + diametroCirculo + "cm ");*/

/*const PI = Math.PI;
console.log("el valor de PI es " + PI);*/

function perimetroCirculo(diametroCirculo) {
    return diametroCirculo * Math.PI;
}
/*perimetroCirculo = diametroCirculo * PI;
console.log("el perimetro del circulo es   " + Math.ceil(perimetroCirculo) + "cm ");*/

function areaCirculo(radioCirculo) {
    return (radioCirculo * radioCirculo) * Math.floor(Math.PI);
}
/*areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("el area del circulo es  " + Math.floor(areaCirculo) + "cm 2");*/

console.groupEnd();