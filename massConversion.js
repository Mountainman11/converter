function massConversion(unit, input){
    switch(unit){
        case 'ton(US)':
            return convertTonUS(input);
            break;
        case 'ton(UK)':
            return convertTonUK(input);
            break;
        case 'oz':
            return convertOz(input);
            break;
        case 'stone':
            return convertStone(input);
            break;
        case 'lb':
            return convertLbF(input);
            break;
        case 'gram':
            return convertGram(input);
            break;
        default:
            break;
    }
}