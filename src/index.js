module.exports = function toReadable (number) {
    /*switch (number){
        case 1:
            return 'one';
            break;
            case 2:
                return 'two';
                break;
                case 3:
                return 'three';
                break;
                case 4:
                return 'four';
                break;
                case 5:
                return 'five';
                break;
                case 6:
                return 'six';
                break;
                case 7:
                return 'seven';
                break;
                case 8:
                return 'eight';
                break;
                case 9:
                return 'nine';
                break;
                case 0:
                return 'zero';
                break;
                case 10:
                return 'ten';
                break;
                case 11:
                return 'eleven';
                break;
                case 12:
                return 'twelve';
                break;
                case 13:
                return 'thirteen';
                break;
                case 14:
                return 'fourteen';
                break;
                case 15:
                return 'fifteen';
                break;
                case 18:
                return 'eighteen';
                break;
                case 20:
                return 'twenty';
                break;

                default:
                    //return 'mistake';
    }*/
    function showNumber (single_digit) {
        switch (single_digit){
            case 1:
                return 'one';
                break;
                case 2:
                    return 'two';
                    break;
                    case 3:
                    return 'three';
                    break;
                    case 4:
                    return 'four';
                    break;
                    case 5:
                    return 'five';
                    break;
                    case 6:
                    return 'six';
                    break;
                    case 7:
                    return 'seven';
                    break;
                    case 8:
                    return 'eight';
                    break;
                    case 9:
                    return 'nine';
                    break;
                    case 0:
                    return 'zero';
                    break;
                    default:

    }}
    if (number>20&&number<30){
        let second_number = number.toString().split('').pop();
        let two_number = showNumber(+second_number);
        return `twenty ${two_number}`;
    }
    
    
}


