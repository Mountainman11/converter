const conversionType = document.getElementById('conversionType');
const inputData = document.getElementById('inputData');
const startingUnits = document.getElementById('startingUnits');
const output = document.getElementById('output');

const speedUnits = ['','Kph', 'Mph', 'm/s', 'kn', 'f/s'];
const temperatureUnits = ['','kelvin', '\u2103', '\u2109'];
const pressureUnits = ['','Pa', 'bar', 'at', 'atm', 'Torr', 'lbf/in2'];
const volumeUnits = ['','m\u00b3', 'ft\u00b3', 'liter', 'gallon', 'pint', 'cord'];
const lengthUnits = ['','meter', 'feet', 'yard', 'inches', 'miles', 'lightyear'];
const areaUnits = ['','m\u00b2', 'ft\u00b2', 'acre', 'hectare'];
const massUnits = ['','ton(US)', 'ton(UK)', 'oz', 'stone', 'lb', 'gram']

let conversion = ''
let input = 0;
let unit = '';
let base=0;

conversionType.addEventListener('change', setConversionType);
inputData.addEventListener("change", function(){input=inputData.value})
startingUnits.addEventListener("change", determineConversion)

function setConversionType(){
    conversion = conversionType.value;
    switch(conversion){
        case 'speed':
            startingUnits.innerHTML=setUnits(speedUnits);
            break;
        case 'temperature':
            startingUnits.innerHTML=setUnits(temperatureUnits);
            break;
        case 'pressure':
            startingUnits.innerHTML=setUnits(pressureUnits);
            break;
        case 'volume':
            startingUnits.innerHTML=setUnits(volumeUnits);
            break;
        case 'length':
            startingUnits.innerHTML=setUnits(lengthUnits);
            break;
        case 'area':
            startingUnits.innerHTML=setUnits(areaUnits);
            break;
        case 'mass':
            startingUnits.innerHTML=setUnits(massUnits);
            break;
    }
};

function setUnits(units){
    let choices = '';
    for(let i = 0; i < units.length; i++){
        choices += `<option value='${units[i]}'>${units[i]}</option>;\n`;
    } return choices;
}

function determineConversion(){
    unit = startingUnits.value;
    switch(conversion){
        case 'speed':
            speedConvertToBase();
            output.innerHTML=(`<strong>Kph</strong> ${base}
<strong>Mph</strong> ${base * 0.621371}
<strong>m/s</strong> ${base * 0.277778}
<strong>kn</strong> ${base * 0.539957}
<strong>f/s</strong> ${base * 0.911344}`)
    }
}

function speedConvertToBase(){
    switch(unit){
        case 'Kph':
            base = Number(input);
        case 'Mph':
            base = Number(input) * 1.609344;
        case 'm/s':
            base = Number(input) * 3.6;
        case 'kn':
            base = Number(input) * 1.85;
        case 'f/s':
            base = Number(input) * 1.09728;
    }   
}