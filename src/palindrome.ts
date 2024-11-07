import * as promptsync from "prompt-sync";


const prompt =  promptsync();

const nombre: string = prompt("por favor ingresa tu nombre para verficar si es un palindrome: ")

nombre.toLowerCase().replace(/\s+/g, '');

const reversed = nombre.split('').reverse().join('');

if(nombre == reversed){
    console.log("tienes un palindorme");

} else{
    console.log("tu nombre no es palindrome);");
}





