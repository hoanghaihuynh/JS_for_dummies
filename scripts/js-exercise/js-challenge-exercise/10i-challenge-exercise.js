let calculation = localStorage.getItem('tempResult') || '';
    console.log(localStorage.getItem('tempResult'));
    //can lam lai
    chooseNumber();

    function updateCalculation(number) {
        calculation += number;
        console.log(calculation);
        chooseNumber();
        localStorage.setItem('tempResult', calculation);
    }
    function chooseNumber() {
        let numberDisplay = document.querySelector('.numberDisplaying');
        numberDisplay.innerHTML = calculation;
    }
