module.exports = function toReadable (number) {
    switch (number){
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
    }
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
    else if (number>30&&number<40){
        let third_number = number.toString().split('').pop();
        let three_number = showNumber(+third_number);
        return `thirty ${three_number}`;
    }
    else if (number>40&&number<50){
        let fourth_number = number.toString().split('').pop();
        let four_number = showNumber(+fourth_number);
        return `forty ${four_number}`;
    }
    else if (number>50&&number<60){
        let fifth_number = number.toString().split('').pop();
        let five_number = showNumber(+fifth_number);
        return `fifty ${five_number}`;
    }
    else if (number>60&&number<70){
        let sixth_number = number.toString().split('').pop();
        let six_number = showNumber(+sixth_number);
        return `sixty ${six_number}`;
    }
    else if (number>70&&number<80){
        let seventh_number = number.toString().split('').pop();
        let seven_number = showNumber(+seventh_number);
        return `seventy ${seven_number}`;
    }
    else if (number>80&&number<90){
        let eighth_number = number.toString().split('').pop();
        let eight_number = showNumber(+eighth_number);
        return `eighty ${eight_number}`;
    }
    else if (number>90&&number<=99){
        let ninety_number = number.toString().split('').pop();
        let nine_number = showNumber(+ninety_number);
        return `ninety ${nine_number}`;
    }
    
    
}


