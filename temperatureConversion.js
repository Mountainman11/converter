function temperatureConversion(unit, input) {
    switch (unit) {
        case 'kelvin':
            return convertKelvin(input);
            break;
        case '\u2103':
            return convertC(input);
            break;
        case '\u2109':
            return convertF(input);
            break;
        default:
            break;
    }
}

function convertKelvin(input) {
    if (input < 0) {
        alert('Cannot go below Absolute 0!')
    } else {
        let converted = [{
                unit: 'Kelvin',
                value: `${input} Kelvin`
            },
            {
                unit: 'Celcius',
                value: `${input-273.15}\u2103`
            },
            {
                unit: 'Farenheit',
                value: `${((input - 273.15) * 9/5)+32}\u2109`
            }
        ];
        return converted;
    };
};

function convertC(input) {
    if (input < -273.15) {
        alert('Cannot go below Absolute 0!')
    } else {
        let converted = [{
                unit: 'Kelvin',
                value: Number(input) + 273.15 + ' Kelvin'
            },
            {
                unit: 'Celcius',
                value: `${input}\u2103`
            },
            {
                unit: 'Farenheit',
                value: `${(input *9/5) +32}\u2109`
            }
        ];
        return converted;
    };
};

function convertF(input) {
    if (input < -459.67) {
        alert('Cannot go below Absolute 0!')
    } else {
        let converted = [{
                unit: 'Kelvin',
                value: `${((input-32)*5/9)+273.15} Kelvin`
            },
            {
                unit: 'Celcius',
                value: `${(input-32)*5/9}\u2103`
            },
            {
                unit: 'Farenheit',
                value: `${(input)}\u2109`
            }
        ];
        return converted;
    };
};