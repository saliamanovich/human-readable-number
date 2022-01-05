module.exports = function toReadable (number) {
   
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

    }
}
   
    if (number.toString().length==3){
        let first_num_length_three = number.toString().split('')[0];
        let second_num_length_three = number.toString().split('')[1];
        
        let third_num_length_three = number.toString().split('')[2];
        let second_third = second_num_length_three+third_num_length_three;
        
        let first = showNumber(+first_num_length_three);
        let second = showNumNew(+second_third);
        if (second==='zero'){
            return `${first} hundred`;
        }
        else {
                    return `${first} hundred ${second}`;

        }
    }  

    else if (number.toString().length==2){
        let second_digit = showNumNew(number);
        return `${second_digit}`;
    }
    else {
        return showNumber(number);
    }

    
    /**/
    function showNumNew(digit_two){
        if (digit_two>20&&digit_two<30){
            let second_number = digit_two.toString().split('').pop();
            let two_number = showNumber(+second_number);
            return `twenty ${two_number}`;
        }
        else if (digit_two>30&&digit_two<40){
            let third_number = digit_two.toString().split('').pop();
            let three_number = showNumber(+third_number);
            return `thirty ${three_number}`;
        }
        else if (digit_two>40&&digit_two<50){
            let fourth_number = digit_two.toString().split('').pop();
            let four_number = showNumber(+fourth_number);
            return `forty ${four_number}`;
        }
        else if (digit_two>50&&digit_two<60){
            let fifth_number = digit_two.toString().split('').pop();
            let five_number = showNumber(+fifth_number);
            return `fifty ${five_number}`;
        }
        else if (digit_two>60&&digit_two<70){
            let sixth_number = digit_two.toString().split('').pop();
            let six_number = showNumber(+sixth_number);
            return `sixty ${six_number}`;
        }
        else if (digit_two>70&&digit_two<80){
            let seventh_number = digit_two.toString().split('').pop();
            let seven_number = showNumber(+seventh_number);
            return `seventy ${seven_number}`;
        }
        else if (digit_two>80&&digit_two<90){
            let eighth_number = digit_two.toString().split('').pop();
            let eight_number = showNumber(+eighth_number);
            return `eighty ${eight_number}`;
        }
        else if (digit_two>90&&digit_two<=99){
            let ninety_number = digit_two.toString().split('').pop();
            let nine_number = showNumber(+ninety_number);
            return `ninety ${nine_number}`;
        }
        else 
        {
            switch (digit_two){
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
                    case 16:
                    return 'sixteen';
                    break;
                    case 17:
                    return 'seventeen';
                    break;
                    case 18:
                    return 'eighteen';
                    break;
                    case 19:
                    return 'nineteen';
                    break;
                    case 20:
                    return 'twenty';
                   break;
                    case 30:
                    return 'thirty';
                    break;
                    case 40:
                    return 'forty';
                    break;
                    case 50:
                    return 'fifty';
                    break;
                    case 60:
                    return 'sixty';
                    break;
                    case 70:
                    return 'seventy';
                    break;
                    case 80:
                    return 'eighty';
                    break;
                    case 90:
                    return 'ninety';
                    break;

    
                    default:
                        //return 'mistake';
        }}
    }
    
}


