function areaConversion(unit, input){
    switch(unit){
        case 'm\u00b2':
            return meterSquared(input);
            break;
        case 'ft\u00b2':
            return footSquared(input);
            break;
        case 'acre':
            return convertAcre(input);
            break;
        case 'hectare':
            return convertHectare(input);
            break;
        default:
            break;
    }
}