module.exports = function toReadable (number) {

    function oneNumber(number, isTwo){

        switch (number){
            case 0 : return isTwo ? 'zero' : ''
            case 1 : return 'one'
            case 2 : return 'two'
            case 3 : return 'three'
            case 4 : return 'four'
            case 5 : return 'five'
            case 6 : return 'six'
            case 7 : return 'seven'
            case 8 : return 'eight'
            case 9 : return 'nine'
        }
    }

    function twoNumber(number){
        if(number < 10){
            return oneNumber(number, false)
        }
        if(number < 20){
            switch (number){
                case 10 : return 'ten'
                case 11 : return 'eleven'
                case 12 : return 'twelve'
                case 13 : return 'thirteen'
                case 14 : return 'fourteen'
                case 15 : return 'fifteen'
                case 16 : return 'sixteen'
                case 17 : return 'seventeen'
                case 18 : return 'eighteen'
                case 19 : return 'nineteen'
            }
        }else {
            const valueNumber = Math.floor(number/10)
            switch (valueNumber){
                case 2 : return `twenty ${oneNumber(+String(number)[1], false)}`
                case 3 : return `thirty ${oneNumber(+String(number)[1], false)}`
                case 4 : return `forty ${oneNumber(+String(number)[1], false)}`
                case 5 : return `fifty ${oneNumber(+String(number)[1], false)}`
                case 6 : return `sixty ${oneNumber(+String(number)[1], false)}`
                case 7 : return `seventy ${oneNumber(+String(number)[1], false)}`
                case 8 : return `eighty ${oneNumber(+String(number)[1], false)}`
                case 9 : return `ninety ${oneNumber(+String(number)[1], false)}`
            }
        }
    }

    function threeNumber(number){
        const valueNumber = Math.floor(number/100)
        const remainder = number % 100
        switch (valueNumber){
            case 1 : return `one hundred ${twoNumber(remainder)}`
            case 2 : return `two hundred ${twoNumber(remainder)}`
            case 3 : return `three hundred ${twoNumber(remainder)}`
            case 4 : return `four hundred ${twoNumber(remainder)}`
            case 5 : return `five hundred ${twoNumber(remainder)}`
            case 6 : return `six hundred ${twoNumber(remainder)}`
            case 7 : return `seven hundred ${twoNumber(remainder)}`
            case 8 : return `eight hundred ${twoNumber(remainder)}`
            case 9 : return `nine hundred ${twoNumber(remainder)}`
        }
    }

    switch (String(number).length){
        case 1 : return oneNumber(number, true)
        case 2 : return twoNumber(number).trim()
        case 3 : return threeNumber(number).trim()
    }

}
