function lengthConversion(unit, input) {
    switch (unit) {
        case 'meter':
            return meterConvert(input);
            break;
        case 'foot':
            return footConvert(input);
            break;
        case 'yard':
            return yardConvert(input);
            break;
        case 'inch':
            return inchConvert(input);
            break;
        case 'mile':
            return mileConvert(input);
            break;
        case 'lightsecond':
            return lightConvert(input);
            break;
        case 'furlong':
            return furlongConvert(input);
            break;
        case 'nm':
            return nMileConvert(input);
            break;
        default:
            break;
    }
};

function meterConvert(input) {
    let converted = [{
            unit: 'meter',
            value: input
        },
        {
            unit: 'foot',
            value: input * 3.28084
        },
        {
            unit: 'yard',
            value: input * 1.0936
        },
        {
            unit: 'inch',
            value: input * 39.370
        },
        {
            unit: 'mile',
            value: input * 0.00062
        },
        {
            unit: 'lightsecond',
            value: input / 299792458
        }, {
            unit: 'furlong',
            value: input * 0.00497096
        },
        {
            unit: 'fathom',
            value: input * 0.546807
        },
        {
            unit: 'league',
            value: input / 5556
        }, {
            unit: 'nautical mile',
            value: input / 1852
        }
    ];
    return converted;
};

function footConvert(input) {
    let converted = [{
            unit: 'meter',
            value: input*0.3048
        },
        {
            unit: 'foot',
            value: input
        },
        {
            unit: 'yard',
            value: input /3
        },
        {
            unit: 'inch',
            value: input *12
        },
        {
            unit: 'mile',
            value: input /5280
        },
        {
            unit: 'lightsecond',
            value: input / 299792458
        }, {
            unit: 'furlong',
            value: input * 0.00497096
        },
        {
            unit: 'fathom',
            value: input * 0.546807
        },
        {
            unit: 'league',
            value: input / 5556
        }, {
            unit: 'nautical mile',
            value: input / 1852
        }
    ];
    return converted;
};


function yardConvert(input) {
    let converted = [{
            unit: 'meter',
            value: input
        },
        {
            unit: 'foot',
            value: input * 3.28084
        },
        {
            unit: 'yard',
            value: input * 1.0936
        },
        {
            unit: 'inch',
            value: input * 39.370
        },
        {
            unit: 'mile',
            value: input * 0.00062
        },
        {
            unit: 'lightsecond',
            value: input / 299792458
        }, {
            unit: 'furlong',
            value: input * 0.00497096
        },
        {
            unit: 'fathom',
            value: input * 0.546807
        },
        {
            unit: 'league',
            value: input / 5556
        }, {
            unit: 'nautical mile',
            value: input / 1852
        }
    ];
    return converted;
};

function inchConvert(input) {
    let converted = [{
            unit: 'meter',
            value: input
        },
        {
            unit: 'foot',
            value: input * 3.28084
        },
        {
            unit: 'yard',
            value: input * 1.0936
        },
        {
            unit: 'inch',
            value: input * 39.370
        },
        {
            unit: 'mile',
            value: input * 0.00062
        },
        {
            unit: 'lightsecond',
            value: input / 299792458
        }, {
            unit: 'furlong',
            value: input * 0.00497096
        },
        {
            unit: 'fathom',
            value: input * 0.546807
        },
        {
            unit: 'league',
            value: input / 5556
        }, {
            unit: 'nautical mile',
            value: input / 1852
        }
    ];
    return converted;
};

function milerConvert(input) {
    let converted = [{
            unit: 'meter',
            value: input
        },
        {
            unit: 'foot',
            value: input * 3.28084
        },
        {
            unit: 'yard',
            value: input * 1.0936
        },
        {
            unit: 'inch',
            value: input * 39.370
        },
        {
            unit: 'mile',
            value: input * 0.00062
        },
        {
            unit: 'lightsecond',
            value: input / 299792458
        }, {
            unit: 'furlong',
            value: input * 0.00497096
        },
        {
            unit: 'fathom',
            value: input * 0.546807
        },
        {
            unit: 'league',
            value: input / 5556
        }, {
            unit: 'nautical mile',
            value: input / 1852
        }
    ];
    return converted;
};

function lightConvert(input) {
    let converted = [{
            unit: 'meter',
            value: input
        },
        {
            unit: 'foot',
            value: input * 3.28084
        },
        {
            unit: 'yard',
            value: input * 1.0936
        },
        {
            unit: 'inch',
            value: input * 39.370
        },
        {
            unit: 'mile',
            value: input * 0.00062
        },
        {
            unit: 'lightsecond',
            value: input / 299792458
        }, {
            unit: 'furlong',
            value: input * 0.00497096
        },
        {
            unit: 'fathom',
            value: input * 0.546807
        },
        {
            unit: 'league',
            value: input / 5556
        }, {
            unit: 'nautical mile',
            value: input / 1852
        }
    ];
    return converted;
};

function furlongConvert(input) {
    let converted = [{
            unit: 'meter',
            value: input
        },
        {
            unit: 'foot',
            value: input * 3.28084
        },
        {
            unit: 'yard',
            value: input * 1.0936
        },
        {
            unit: 'inch',
            value: input * 39.370
        },
        {
            unit: 'mile',
            value: input * 0.00062
        },
        {
            unit: 'lightsecond',
            value: input / 299792458
        }, {
            unit: 'furlong',
            value: input * 0.00497096
        },
        {
            unit: 'fathom',
            value: input * 0.546807
        },
        {
            unit: 'league',
            value: input / 5556
        }, {
            unit: 'nautical mile',
            value: input / 1852
        }
    ];
    return converted;
};

function fathomConvert(input) {
    let converted = [{
            unit: 'meter',
            value: input
        },
        {
            unit: 'foot',
            value: input * 3.28084
        },
        {
            unit: 'yard',
            value: input * 1.0936
        },
        {
            unit: 'inch',
            value: input * 39.370
        },
        {
            unit: 'mile',
            value: input * 0.00062
        },
        {
            unit: 'lightsecond',
            value: input / 299792458
        }, {
            unit: 'furlong',
            value: input * 0.00497096
        },
        {
            unit: 'fathom',
            value: input * 0.546807
        },
        {
            unit: 'league',
            value: input / 5556
        }, {
            unit: 'nautical mile',
            value: input / 1852
        }
    ];
    return converted;
};

function leagueConvert(input) {
    let converted = [{
            unit: 'meter',
            value: input
        },
        {
            unit: 'foot',
            value: input * 3.28084
        },
        {
            unit: 'yard',
            value: input * 1.0936
        },
        {
            unit: 'inch',
            value: input * 39.370
        },
        {
            unit: 'mile',
            value: input * 0.00062
        },
        {
            unit: 'lightsecond',
            value: input / 299792458
        }, {
            unit: 'furlong',
            value: input * 0.00497096
        },
        {
            unit: 'fathom',
            value: input * 0.546807
        },
        {
            unit: 'league',
            value: input / 5556
        }, {
            unit: 'nautical mile',
            value: input / 1852
        }
    ];
    return converted;
};

function nMileConvert(input) {
    let converted = [{
            unit: 'meter',
            value: input
        },
        {
            unit: 'foot',
            value: input * 3.28084
        },
        {
            unit: 'yard',
            value: input * 1.0936
        },
        {
            unit: 'inch',
            value: input * 39.370
        },
        {
            unit: 'mile',
            value: input * 0.00062
        },
        {
            unit: 'lightsecond',
            value: input / 299792458
        }, {
            unit: 'furlong',
            value: input * 0.00497096
        },
        {
            unit: 'fathom',
            value: input * 0.546807
        },
        {
            unit: 'league',
            value: input / 5556
        }, {
            unit: 'nautical mile',
            value: input / 1852
        }
    ];
    return converted;
}