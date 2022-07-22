// codigo del cuadrado
console.group("cuadrados");
const ladoCuadrado = prompt("ingrese datos del cuadrado");
console.log("los lados del cuadrado miden :" + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es:" + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el area cuadrada es:" + areaCuadrado + "cm2");
console.groupEnd();

// codigo del triangulo

console.group("triangulos");
const ladoTriangulo1 = parseInt(prompt("ingrese lado 1"));
const ladoTriangulo2 = parseInt(prompt("ingrese lado 2"));
const baseTriangulo = parseInt(prompt("ingrese base"));

console.log("los lados del triangulo miden :" + ladoTriangulo1 + "cm," + ladoTriangulo2 + "cm," + baseTriangulo + "cm");

const alturaTriangulo = prompt("ingrese altura");
console.log("la altura del triangulo es de :" + alturaTriangulo + "cm2");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es:" + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("el area del triangulo  es:" + areaTriangulo + "cm2");

console.groupEnd();