
//import * as  promptSync from 'prompt-sync';

//const prompt = promptSync();
//console.log("################################################################");
//console.log("ingrese los numeros de cuales desea recibir la tabla de 1 al 10 ");
//let tabla = prompt("NOTA: separe cada numero con un espacio: ")





//console.log(arrayTabla)



export function tableDeMultiplicar(tabla: string): string {

    const arrayTabla: number[] = tabla.split(",").map(Number);
    let resultado = "";
    if (arrayTabla.length >= 4 && arrayTabla.length <= 10) {

        arrayTabla.forEach(element => {

            resultado += `<h3>Tabla de ${element}</h3>`;

            for (let i = 1; i <= 10; i++) {
                resultado += `<li>${element} x ${i} = ${element * i}</li>`;


            }
            resultado += `</ul><br>`;

        });
    } else {

        resultado = "Error. debe ingresar una cantidad minima de 4 numeros y un maximo de 10 "
    }
    return resultado;

}