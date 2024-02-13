const BUDGET_TAB = document.getElementById('budget-tab');
const BUDGET_CALCULATOR = document.getElementById('DAB-calculator');

const MONTHLY_TAB = document.getElementById('monthly-payment-tab');
const MONTHLY_CALCULATOR = document.getElementById('monthly-calculator');

const COMPOUND_TAB = document.getElementById('compound-tab');
const COMPOUND_CALCULATOR = document.getElementById('compound-calculator')

const RULE72_TAB = document.getElementById('rule72-tab');

const CREDIT_CARD_TAB = document.getElementById('credit-card-tab');


function selectBudget() {
    BUDGET_TAB.style.backgroundColor = "rgb(36, 36, 36)";
    BUDGET_TAB.style.outline = 'none';
    BUDGET_CALCULATOR.style.visibility = 'visible';

    MONTHLY_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    MONTHLY_TAB.style.outline = "1px solid gray ";
    MONTHLY_CALCULATOR.style.visibility = 'hidden';
    
    COMPOUND_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    COMPOUND_TAB.style.outline = "1px solid gray ";
    COMPOUND_CALCULATOR.style.visibility = 'hidden';

    RULE72_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    RULE72_TAB.style.outline = "1px solid gray ";
    
    CREDIT_CARD_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    CREDIT_CARD_TAB.style.outline = "1px solid gray ";

    console.log('click')
}

function selectMonthly() {
    BUDGET_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    BUDGET_TAB.style.outline = '1px solid gray';
    BUDGET_CALCULATOR.style.visibility = 'hidden';

    MONTHLY_TAB.style.backgroundColor = "rgb(36, 36, 36)";
    MONTHLY_TAB.style.outline = "none";
    MONTHLY_CALCULATOR.style.visibility = 'visible';

    
    COMPOUND_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    COMPOUND_TAB.style.outline = "1px solid gray ";
    COMPOUND_CALCULATOR.style.visibility = 'hidden';

    RULE72_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    RULE72_TAB.style.outline = "1px solid gray ";
    
    CREDIT_CARD_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    CREDIT_CARD_TAB.style.outline = "1px solid gray ";
}

function selectCompound() {
    BUDGET_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    BUDGET_TAB.style.outline = '1px solid gray';
    BUDGET_CALCULATOR.style.visibility = 'hidden';
    
    MONTHLY_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    MONTHLY_TAB.style.outline = "1px solid gray ";
    MONTHLY_CALCULATOR.style.visibility = 'hidden';

    COMPOUND_TAB.style.backgroundColor = "rgb(36, 36, 36)";
    COMPOUND_TAB.style.outline = "none";
    COMPOUND_CALCULATOR.style.visibility = 'visible';

    RULE72_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    RULE72_TAB.style.outline = "1px solid gray ";
    
    CREDIT_CARD_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    CREDIT_CARD_TAB.style.outline = "1px solid gray ";
}

function selectRule72() {
    BUDGET_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    BUDGET_TAB.style.outline = '1px solid gray';
    BUDGET_CALCULATOR.style.visibility = 'hidden';
    
    MONTHLY_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    MONTHLY_TAB.style.outline = "1px solid gray ";
    MONTHLY_CALCULATOR.style.visibility = 'hidden';

    COMPOUND_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    COMPOUND_TAB.style.outline = "1px solid gray ";
    COMPOUND_CALCULATOR.style.visibility = 'hidden';

    RULE72_TAB.style.backgroundColor = "rgb(36, 36, 36)";
    RULE72_TAB.style.outline = "none";
    
    CREDIT_CARD_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    CREDIT_CARD_TAB.style.outline = "1px solid gray ";
}

function selectCreditCard() {
    BUDGET_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    BUDGET_TAB.style.outline = '1px solid gray';
    BUDGET_CALCULATOR.style.visibility = 'hidden';
    
    MONTHLY_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    MONTHLY_TAB.style.outline = "1px solid gray ";
    MONTHLY_CALCULATOR.style.visibility = 'hidden';

    COMPOUND_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    COMPOUND_TAB.style.outline = "1px solid gray ";
    COMPOUND_CALCULATOR.style.visibility = 'hidden';

    RULE72_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    RULE72_TAB.style.outline = "1px solid gray ";

    CREDIT_CARD_TAB.style.backgroundColor = "rgb(36, 36, 36)";
    CREDIT_CARD_TAB.style.outline = "none";
    
}