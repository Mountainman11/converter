function volumeConversion(unit, input){
    switch(unit){
        case 'm\u00b3':
            return convertMeter(input);
            break;
        case 'ft\u00b3':
            return  convertFoot(input);
            break;
        case 'liter':
            return convertLiter(input);
            break;
        case 'gallon':
            return convertGallon(input);
            break;
        case 'pint':
            return converPint(input);
            break;
        case 'cup':
            return convertCup(input);
            break;
        case 'teaspoon':
            return convertTeaspoon(input);
            break;
        case 'tablespoon':
            return convertTablespoon(input);
            break;
        default:
            break;
    }
}