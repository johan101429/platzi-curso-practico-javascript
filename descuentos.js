// const precioOriginal = 120;
// const descuento = 48;



function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    console.log(precioConDescuento);
    return precioConDescuento;

}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    console.log(priceValue);

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultp = document.getElementById("ResultP");
    resultp.innerText = "el precio con descuento  son : $" + precioConDescuento;

}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });