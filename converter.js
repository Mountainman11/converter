const conversionType = document.getElementById('conversionType');
const inputData = document.getElementById('inputData');
const startingUnits = document.getElementById('startingUnits');
const output = document.getElementById('output');

const speedUnits = ['', 'kph', 'mph', 'm/s', 'kn', 'f/s'];
const temperatureUnits = ['', 'kelvin', '\u2103', '\u2109'];
const pressureUnits = ['', 'Pa', 'bar', 'atm', 'Torr', 'lbf/in\u00b2'];
const volumeUnits = ['', 'm\u00b3', 'ft\u00b3', 'liter', 'gallon', 'pint', 'cup', 'teaspoon', 'tablespoon' ];
const lengthUnits = ['', 'meter', 'foot', 'yard', 'inch', 'mile', 'lightsecond', 'furlong', 'fathom', 'league', 'nm'];
const areaUnits = ['', 'm\u00b2', 'ft\u00b2', 'acre', 'hectare'];
const massUnits = ['', 'ton(US)', 'ton(UK)', 'oz', 'stone', 'lb', 'gram']

let conversion = ''
let input = 0;
let unit = '';
let base = 0;

conversionType.addEventListener('change', setConversionType);
inputData.addEventListener("change", determineConversion);
startingUnits.addEventListener("change", determineConversion);

function setConversionType() {
    conversion = conversionType.value;
    switch (conversion) {
        case 'speed':
            startingUnits.innerHTML = setUnits(speedUnits);
            break;
        case 'temperature':
            startingUnits.innerHTML = setUnits(temperatureUnits);
            break;
        case 'pressure':
            startingUnits.innerHTML = setUnits(pressureUnits);
            break;
        case 'volume':
            startingUnits.innerHTML = setUnits(volumeUnits);
            break;
        case 'length':
            startingUnits.innerHTML = setUnits(lengthUnits);
            break;
        case 'area':
            startingUnits.innerHTML = setUnits(areaUnits);
            break;
        case 'mass':
            startingUnits.innerHTML = setUnits(massUnits);
            break;
        default:
            break;
    }
};

function setUnits(units) {
    let choices = '';
    for (let i = 0; i < units.length; i++) {
        choices += `<option value='${units[i]}'>${units[i]}</option>;\n`;
    }
    return choices;
}

function determineConversion() {
    unit = startingUnits.value;
    input = inputData.value;
    switch (conversion) {
        case 'speed':
            formatOutput(speedConversion(unit, input));
            break;
        case 'temperature':
            formatOutput(temperatureConversion(unit, input));
            break;
        case 'pressure':
            formatOutput(pressureConversion(unit, input));
            break;
        case 'volume':
            formatOutput(volumeConversion(unit, input));
            break;
        case 'length':
            formatOutput(lengthConversion(unit, input));
            break;
        case 'area':
            formatOutput(areaConversion(unit, input));
            break;
        case 'mass':
            formatOutput(massConversion(unit, input));
            break;
        default:
            break;
    }
}

function formatOutput(arr) {
    output.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        output.innerHTML += (`<p><strong>${arr[i].unit}:</strong> ${arr[i].value}</p>`)
    }
}