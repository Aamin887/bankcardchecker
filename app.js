function getNextCheckDigit(number){
    const digits = String(number).split('').map(Number);

    let sum = 0;
    let double = false;

    for(let i = digits.length -1; i >= 0; i--){
        let digit = digits[i];

        if(double){
            digit *= 2;
            if(digit > 9){
                digit -= 9;
            }
        }

        sum += digit;
        double = ! double;
    }

    const nextCheckDigit = (sum * 9) % 10 == 0 ? true : false;
    return nextCheckDigit;
}




const btn = document.querySelector('#checkBtn')
const cardInfo = document.querySelector('.card-type')

// add a click event to button
btn.addEventListener('click', () => {
    const input = document.querySelector('#cardNumber')
    const msgEl = document.querySelector('.msg');
    let msg;

    const userInput = getNumber();

    if(userInput === ''){
        msg = `card number is not a valid number`
        msgEl.textContent  = msg
        return 
    }



    if(isNaN(userInput)){
        alert('Enter a number')
    }

    const checkNum = getNextCheckDigit(userInput)

    // tell if number is valid
    if(checkNum){
        msg = `${userInput} is a valid number`
        cardInfo.innerText = `card issuers is ${cardType(userInput)}`
    }else{
        msg = `${userInput} is not a valid number`
    }

    // render to UI
    msgEl.textContent = msg
    
    // reset input values
    input.value = ''
    input.focus();

})


function cardType(number){
    const firstNumber = +number[0]
    switch(firstNumber){
        case 3:
            return 'American express';
            break;
        case  4:
            return 'Visa'
            break;
        case 5:
            return 'MasterCard'
            break;
        case 6:
            return 'Discover'
            break;
        default:
            return 'not avalible';
    }
}


function getNumber(){
    const inputEl = document.querySelector('#cardNumber');
    const inputValue = inputEl.value.trim();

    return inputValue
}



/* function getCheckNumber(number){
    let checkSum = number.slice(number.length - 1, number.length)

    const doubleDigits = [] 

    for(let i = number.length - 1; i >=0; i--){
        if(i % 2 == 0){
            doubleDigits.push(+number[i] * 2)
        }else{
            doubleDigits.push(+number[i])
        }
    }

    let shortenArr = [];

    for(let i = 0; i < doubleDigits.length -1; i++){
        if(doubleDigits[i] > 9){
            let shortDigit = +doubleDigits[i] - 9;
            shortenArr.push(shortDigit)
        }else{
            shortenArr.push(+doubleDigits[i])
        }
    }

    let sum = 0 

    for(let digit of shortenArr){
        sum += digit
    }



    console.log(checkSum)
    console.log(shortenArr)
    console.log(sum)

    // lsum technologies and consultation
    if(sum % 10 === 0){
        return true
    }else{
        return false
    }


// }

// 4071 - visa
// 5701 - mastercard


// console.log(getCheckNumber('378282246310005'))
// console.log(getCheckNumber(''))
 console.log(getCheckNumber('4539677908016808'))*/