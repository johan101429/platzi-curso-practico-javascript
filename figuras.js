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


// codigo del circulo

console.group("circulo");
const radioCirculo = parseInt(prompt("ingrese el radio"));
console.log("el radio del circulo es :" + radioCirculo + "cm ");

const diametroCirculo = radioCirculo * 2;
console.log("el diametro del circulo es " + diametroCirculo + "cm ");

const PI = Math.PI;
console.log("el valor de PI es " + PI);

const perimetroCirculo = diametroCirculo * PI;
console.log("el perimetro del circulo es   " + Math.ceil(perimetroCirculo) + "cm ");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("el area del circulo es  " + Math.floor(areaCirculo) + "cm 2");

console.groupEnd();