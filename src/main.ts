import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { imc } from './imc.ts'
import { tableDeMultiplicar } from './multiplicar.ts'





document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
   <div>
    <h1>Calculadora de IMC</h1>
    <label for="peso">Peso (kg):</label>
    <input id="peso" type="number" step="0.1" placeholder="Ej. 70">
    <label for="altura">Altura (m):</label>
    <input id="altura" type="number" step="0.01" placeholder="Ej. 1.75">
    <button id="calcularIMC">Calcular IMC</button>
    <p id="resultadoIMC"></p>
  </div>

  <div>
  <h1>############################</h1>
  <h2> ingrese los numeros de los cuales desea recibir la tabla </h2>
  <label for="tabla">Tabla</label>
  <input id ="tabla" type = "text"  placeholder = "separe cada numero con una coma " >
  <button id="generarTabla">Generar Tabla</button>
  <div id= "resultadoTabla"></div>
  
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


document.getElementById('calcularIMC')!.addEventListener('click', () => {
  const peso = parseFloat((document.getElementById('peso') as HTMLInputElement).value);
  const altura = parseFloat((document.getElementById('altura') as HTMLInputElement).value);

  if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
    document.getElementById('resultadoIMC')!.textContent = "Por favor ingresa valores válidos.";
    return;
  }

  const resultado = imc(peso, altura);
  document.getElementById('resultadoIMC')!.textContent = `El resultado del IMC es: ${resultado.toFixed(2)}`;

});

document.getElementById('generarTabla')!.addEventListener('click', () => {
  const numero = document.getElementById('tabla') as HTMLInputElement;
  const resultadoDiv = document.getElementById('resultadoTabla')!;

  resultadoDiv.innerHTML = "";

  if (!numero.value) {
    resultadoDiv.textContent = "Por favor ingresa valores válidos.";
    return;
  }


  const validFormat = /^(\d+(?:\.\d+)?)(,\d+(?:\.\d+)?)*$/;
  if (!validFormat.test(numero.value)) {
    document.getElementById('resultadoTabla')!.textContent = "Por favor ingresa números separados únicamente por comas.";
    return;
  }

  const tablasHTML = tableDeMultiplicar(numero.value);
    resultadoDiv.innerHTML = tablasHTML;


  

});