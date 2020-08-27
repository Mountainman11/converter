function pressureConversion(unit, input) {
    switch (unit) {
        case 'Pa':
            return convertPa(input);
            break;
        case 'bar':
            return convertBar(input);
            break;
        case 'atm':
            return convertAtm(input);
            break;
        case 'Torr':
            return convertTorr(input);
            break;
        case 'lbf/in\u00b2':
            return convertLbF(input);
            break;
        default:
            break;
    }
};

function convertPa(input) {
    let converted = [{
            unit: 'Pa',
            value: input
        },
        {
            unit: 'bar',
            value: input / 100000
        },
        {
            unit: 'atm',
            value: input / 101325
        },
        {
            unit: 'Torr',
            value: input / 133
        },
        {
            unit: 'lbf/in\u00b2',
            value: input / 6895
        }
    ];
    return converted;
};

function convertBar(input) {
    let converted = [{
            unit: 'Pa',
            value: input * 100000
        },
        {
            unit: 'Bar',
            value: input
        },
        {
            unit: 'atm',
            value: input / 1.013
        },
        {
            unit: 'Torr',
            value: input * 750
        },
        {
            unit: 'lbf/in\u00b2',
            value: input * 14.504
        }
    ];
    return converted;
};

function convertAtm(input) {
    let converted = [{
            unit: 'Pa',
            value: input * 101325
        },
        {
            unit: 'Bar',
            value: input * 1.013
        },
        {
            unit: 'atm',
            value: input
        },
        {
            unit: 'Torr',
            value: input * 760
        },
        {
            unit: 'lbf/in\u00b2',
            value: input * 14.696
        }
    ];
    return converted;
};

function convertTorr(input) {
    let converted = [{
            unit: 'Pa',
            value: input * 133
        },
        {
            unit: 'Bar',
            value: input / 750
        },
        {
            unit: 'atm',
            value: input * 760
        },
        {
            unit: 'Torr',
            value: input
        },
        {
            unit: 'lbf/in\u00b2',
            value: input / 51.715
        }
    ];
    return converted;
};

function convertLbF(input) {
    let converted = [{
            unit: 'Pa',
            value: input / 6895
        },
        {
            unit: 'Bar',
            value: input / 14.504
        },
        {
            unit: 'atm',
            value: input / 14.696
        },
        {
            unit: 'Torr',
            value: input * 51.715
        },
        {
            unit: 'lbf/in\u00b2',
            value: input
        }
    ];
    return converted;
};