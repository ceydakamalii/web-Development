const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue = '0';//baştaki değer
let firstValue = null;//matematiksel işlerde kullanılcak ilk değer
let operator = null;//hangi matematiksel işlem
let waitingForSecondValue = false;//işlem yapmak için bu değerin true olması lazım.

updateDisplay();

function updateDisplay() {
    display.value = displayValue;//5 oldu display 
}

keys.addEventListener('click', function(e) {
    const element = e.target;

    if (!element.matches('button')) return;//eğer butona tıklamadıysan değişiklik yapma

    if(element.classList.contains('operator')) {//tıklanan elemanın sınıfında operator var ise
        // console.log('operator', element.value);
        handleOperator(element.value);//= olsun
        updateDisplay();
        return;
    }

    if(element.classList.contains('decimal')) {
        inputDecimal();
        updateDisplay();
        return;
    }

    if(element.classList.contains('clear')) {//tıklanan elemanın sınıfında clear var ise
        clear();
        updateDisplay(); 
        return;
    }

    inputNumber(element.value);
    updateDisplay();
});

function handleOperator(nextOperator) {//opartor - de ,waitingForSecondValue false,firstValue ise 455
    //nextOperator ise = bu.
    const value = parseFloat(displayValue);//455 olsun -- // 5 displayvalue 

    if(operator && waitingForSecondValue) {
        operator = nextOperator;
        return;
    }

    if (firstValue === null) {
        firstValue = value;//455 oldu 
    } else if (operator) {
        const result = calculate(firstValue, value, operator);//455,5,-
        //result=450
        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstValue = result;//firstvalue=450
    }

    waitingForSecondValue = true;//artık işlem yapılabilecek 
    operator = nextOperator;// - ye basmıştım opeartor artık - olucak
    // operator artık = bu olcak 
    console.log(displayValue, firstValue, operator, waitingForSecondValue);
    //450,450,=,true
}

function calculate(first, second, operator) {
    if(operator === '+') {
        return first + second;
    } else if (operator === '-') {
        return first - second; //455-5=450
    } else if (operator === '*') {
        return first * second
    } else if (operator === '/') {
        return first / second;
    }
    return second;
}

function inputNumber(num) {//5 e basmış olalım num=5,firstvalue=455 ,operator= -
    if(waitingForSecondValue) {//true
        displayValue = num;// baştaki değer 5 oldu 
        waitingForSecondValue = false;// false oldu bir operatore basmazsak bir işlem olmicak.
    } else {
        displayValue = displayValue === '0'? num: displayValue + num;
    }

    console.log(displayValue, firstValue, operator, waitingForSecondValue);
}

function inputDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
}

function clear() {
    displayValue = '0';
}