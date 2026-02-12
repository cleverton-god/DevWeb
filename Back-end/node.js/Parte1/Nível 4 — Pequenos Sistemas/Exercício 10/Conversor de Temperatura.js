const readlineSync = require('readline-sync');

const celsiusInput = readlineSync.question('Digite a temperatura em Celsius: ');

const celsius = parseFloat(celsiusInput.replace(',', '.')); 

if (isNaN(celsius)) {
    console.log("Por favor, insira um número válido.");
} else {
    const fahrenheit = (celsius * 1.8) + 32;

    const kelvin = celsius + 273.15;

    console.log('-----------------------------');
    console.log(`Resultado para: ${celsius.toFixed(2)}°C`);
    console.log(`Fahrenheit: ${fahrenheit.toFixed(2)}°F`);
    console.log(`Kelvin: ${kelvin.toFixed(2)}K`);
    console.log('-----------------------------');
}
