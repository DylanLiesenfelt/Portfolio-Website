const BUDGET_TAB = document.getElementById('budget-tab');
const MONTHLY_TAB = document.getAnimations('monthly-payment-tab');
const COMPOUND_TAB = document.getElementById('compound-tab');
const RULE72_TAB = document.getElementById('rule72-tab');
const CREDIT_CARD_TAB = document.getElementById('credit-card-tab');

function selectBudget() {
    BUDGET_TAB.style.backgroundColor = "rgb(36, 36, 36)";
    BUDGET_TAB.style.outline = 'none';

    MONTHLY_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    MONTHLY_TAB.style.outline = "1px solid gray ";
    
    COMPOUND_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    COMPOUND_TAB.style.outline = "1px solid gray ";

    RULE72_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    RULE72_TAB.style.outline = "1px solid gray ";
    
    CREDIT_CARD_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    CREDIT_CARD_TAB.style.outline = "1px solid gray ";
}

function selectMonthly() {
    BUDGET_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    BUDGET_TAB.style.outline = '1px solid gray';

    MONTHLY_TAB.style.backgroundColor = "rgb(36, 36, 36)";
    MONTHLY_TAB.style.outline = "none";
    
    COMPOUND_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    COMPOUND_TAB.style.outline = "1px solid gray ";

    RULE72_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    RULE72_TAB.style.outline = "1px solid gray ";
    
    CREDIT_CARD_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    CREDIT_CARD_TAB.style.outline = "1px solid gray ";
}

function selectCompund() {
    BUDGET_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    BUDGET_TAB.style.outline = '1px solid gray';
    
    MONTHLY_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    MONTHLY_TAB.style.outline = "1px solid gray ";

    COMPOUND_TAB.style.backgroundColor = "rgb(36, 36, 36)";
    COMPOUND_TAB.style.outline = "none";

    RULE72_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    RULE72_TAB.style.outline = "1px solid gray ";
    
    CREDIT_CARD_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    CREDIT_CARD_TAB.style.outline = "1px solid gray ";
}

function selectRule72() {
    BUDGET_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    BUDGET_TAB.style.outline = '1px solid gray';
    
    MONTHLY_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    MONTHLY_TAB.style.outline = "1px solid gray ";

    COMPOUND_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    COMPOUND_TAB.style.outline = "1px solid gray ";

    RULE72_TAB.style.backgroundColor = "rgb(36, 36, 36)";
    RULE72_TAB.style.outline = "none";
    
    CREDIT_CARD_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    CREDIT_CARD_TAB.style.outline = "1px solid gray ";
}

function selectCreditCard() {
    BUDGET_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    BUDGET_TAB.style.outline = '1px solid gray';
    
    MONTHLY_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    MONTHLY_TAB.style.outline = "1px solid gray ";

    COMPOUND_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    COMPOUND_TAB.style.outline = "1px solid gray ";

    RULE72_TAB.style.backgroundColor = "rgb(70, 70, 70)";
    RULE72_TAB.style.outline = "1px solid gray ";

    CREDIT_CARD_TAB.style.backgroundColor = "rgb(36, 36, 36)";
    CREDIT_CARD_TAB.style.outline = "none";
    
}