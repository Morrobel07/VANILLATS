const productos:{[nombre:string]:number} = {
    "salami": 20,
    "queso" : 30,
    "manzana": 5,
    "pimienta" :13

}

for(let clave in productos) {
    // console.log(clave +":"+productos[clave]);
    console.log(`el producto(${clave})tiene un valor de: ${productos[clave]}, y el descuento del 15% es : ${productos[clave]* 0.15}`)
}