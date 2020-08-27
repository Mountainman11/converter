function speedConversion(unit, input) {
    switch (unit) {
        case 'kph':
            return convertKPH(input);
            break;
        case 'mph':
            return convertMPH(input);
            break;
        case 'm/s':
            return convertMS(input);
            break;
        case 'kn':
            return convertKN(input);
            break;
        case 'f/s':
            return convertFS(input);
            break;
        default:
            break;
    }
}

function convertKPH(input) {
    let converted = [{
            unit: 'kph',
            value: input
        },
        {
            unit: 'mph',
            value: (input / 1.609344)
        },
        {
            unit: 'm/s',
            value: (input / 3.6)
        },
        {
            unit: 'kn',
            value: (input / 1.852)
        },
        {
            unit: 'f/s',
            value: (input / 1.09728)
        }
    ];
    return converted;
};

function convertMPH(input) {
    let converted = [{
            unit: 'kph',
            value: (input * 1.609344)
        },
        {
            unit: 'mph',
            value: (input)
        },
        {
            unit: 'm/s',
            value: (input * 0.44704)
        },
        {
            unit: 'kn',
            value: (input * 0.8689762419006)
        },
        {
            unit: 'f/s',
            value: (input * (1.4 + (.02 / 3)))
        }
    ];
    return converted;
};

function convertMS(input) {
    let converted = [{
            unit: 'kph',
            value: input * 3.6
        },
        {
            unit: 'mph',
            value: (input * 2.236936292054)
        },
        {
            unit: 'm/s',
            value: (input)
        },
        {
            unit: 'kn',
            value: (input * 1.943844492441)
        },
        {
            unit: 'f/s',
            value: (input * 3.280839895013)
        }
    ];
    return converted;
};

function convertKN(input) {
    let converted = [{
            unit: 'kph',
            value: input * 1.852
        },
        {
            unit: 'mph',
            value: (input * (1.150779448024))
        },
        {
            unit: 'm/s',
            value: (input * (.52 + (.04 / 9)))
        },
        {
            unit: 'kn',
            value: (input)
        },
        {
            unit: 'f/s',
            value: (input * 1.687809857101)
        }
    ];
    return converted;
};

function convertFS(input) {
    let converted = [{
            unit: 'kph',
            value: input * 1.09728
        },
        {
            unit: 'mph',
            value: (input * (0.6 + (0.9 / 11)))
        },
        {
            unit: 'm/s',
            value: (input * 0.3048)
        },
        {
            unit: 'kn',
            value: (input * 0.5924838012959)
        },
        {
            unit: 'f/s',
            value: (input)
        }
    ];
    return converted;
};