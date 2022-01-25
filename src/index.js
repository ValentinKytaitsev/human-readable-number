module.exports = function toReadable (number) {

    let readableNumber = ""
    let numberStr = number.toString()
    let numberArr = numberStr.split("")

    function translate1To9(digit) {
        switch (digit) {
            case 1:
                return 'one'
                break;
            case 2:
                return 'two'
                break;
            case 3:
                return 'three'
                break;
            case 4:
                return 'four'
                break;
            case 5:
                return 'five'
                break;
            case 6:
                return 'six'
                break;
            case 7:
                return 'seven'
                break;
            case 8:
                return 'eight'
                break;
            case 9:
                return 'nine'
                break;
        }
    }

    function translate10To19(digit) {
        switch (digit) {
            case 10:
                return 'ten'
                break;
            case 11:
                return 'eleven'
                break;
            case 12:
                return 'twelve'
                break;
            case 13:
                return 'thirteen'
                break;
            case 14:
                return 'fourteen'
                break;
            case 15:
                return 'fifteen'
                break;
            case 16:
                return 'sixteen'
                break;
            case 17:
                return 'seventeen'
                break;
            case 18:
                return 'eighteen'
                break;
            case 19:
                return 'nineteen'
                break;
        }
    }

    function translate20To99First(number1) {
        switch (number1) {
            case 2:
                return 'twenty'
                break;
            case 3:
                return 'thirty'
                break;
            case 4:
                return 'forty'
                break;
            case 5:
                return 'fifty'
                break;
            case 6:
                return 'sixty'
                break;
            case 7:
                return 'seventy'
                break;
            case 8:
                return 'eighty'
                break;
            case 9:
                return 'ninety'
                break;
        }
    }

    function translate20To99(number1, number2) {
        if (number2 !== 0) {
            return translate20To99First(number1) + " " + translate1To9(number2)
        } else {
            return translate20To99First(number1)
        }
    }

    function translate100To999(numberq1, numberq2, numberq3) {
        if (number % 100 === 0) {
            return translate1To9(numberq1) + " " + "hundred"
        } else
            if (numberq2 === 0) {
                return translate1To9(numberq1) + " " + "hundred" + " " + translate1To9(numberq3)
            } else
                if (numberq2 === 1) {
                    return translate1To9(numberq1) + " " + "hundred" + " " + translate10To19(Number("" + numberq2 + numberq3))
                } else {
                    return translate1To9(numberq1) + " " + "hundred" + " " + translate20To99(numberq2, numberq3)
                }
    }

    if (number === 0) {
        return 'zero'
    } else
        if (number >= 1 && number < 10) {
            return readableNumber + translate1To9(Number(numberArr[0]))
        } else
            if (number >= 10 && number < 20) {
                return readableNumber + translate10To19(number)
            } else
                if (number >= 20 && number < 100) {
                    return readableNumber + translate20To99(Number(numberArr[0]), Number(numberArr[1]))
                } else
                    if (number >= 100 && number < 1000) {
                        return readableNumber + translate100To999(Number(numberArr[0]), Number(numberArr[1]), Number(numberArr[2]))
                    }
console.log(toReadable(507))
}
