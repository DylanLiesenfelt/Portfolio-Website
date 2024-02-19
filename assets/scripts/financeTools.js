// Daily Adjusted Budget Calculator
const DAB_Income = document.getElementById("DAB-income");
const DAB_Expenses = document.getElementById("DAB-expenses");
const DAB_Output = document. getElementById("DAB-output");

function dailyAdjustedBudget() {
    let income = parseFloat(DAB_Income.value);
    let expenses = parseFloat(DAB_Expenses.value);
    let budget = (income - expenses)/30;
    DAB_Output.innerText = '$ ' + budget.toFixed(2);
    con
}

//Monthly Payment Calculator
const MP_Principal = document.getElementById("MP-principal");
const MP_Rate = document.getElementById("MP-rate");
const MP_Months = document.getElementById("MP-months");
const MP_Output = document.getElementById("MP-output");


function monthlyPayment() {
    let principal = MP_Principal.value;
    let rate = MP_Rate.value / 100 / 12;
    let months = MP_Months.value;
    let output = principal * (rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    MP_Output.innerText = "$" + output.toFixed(2);
}

//Compound interest = p(1 + (r/n))^(nt)
const COMP_PRINCIPAL = document.getElementById('COMP-principal');
const COMP_TERM = document.getElementById('COMP-term');
const COMP_RATE = document.getElementById('COMP-rate');
const COMP_OUTPUT = document.getElementById('COMP-output');

function compoundAnnually() {
    let principal = COMP_PRINCIPAL.value;
    let rate = COMP_RATE.value / 100;
    let time = COMP_TERM.value;
    let compound = 1;

    let amount = principal * (Math.pow((1+(rate/compound)),(compound * time)));
    COMP_OUTPUT.innerText = "$" + amount.toFixed(2);
}

function compoundSemi() {
    let principal = COMP_PRINCIPAL.value;
    let rate = COMP_RATE.value / 100;
    let time = COMP_TERM.value;
    let compound = 2;

    let amount = principal * (Math.pow((1+(rate/compound)),(compound * time)));
    COMP_OUTPUT.innerText = "$" + amount.toFixed(2);
}

function compoundQuarterly() {
    let principal = COMP_PRINCIPAL.value;
    let rate = COMP_RATE.value / 100;
    let time = COMP_TERM.value;
    let compound = 4;

    let amount = principal * (Math.pow((1+(rate/compound)),(compound * time)));
    COMP_OUTPUT.innerText = "$" + amount.toFixed(2);
}

function compoundMonthly() {
    let principal = COMP_PRINCIPAL.value;
    let rate = COMP_RATE.value / 100;
    let time = COMP_TERM.value;
    let compound = 12;

    let amount = principal * (Math.pow((1+(rate/compound)),(compound * time)));
    COMP_OUTPUT.innerText = "$" + amount.toFixed(2);
}

function compoundDaily() {
    let principal = COMP_PRINCIPAL.value;
    let rate = COMP_RATE.value / 100;
    let time = COMP_TERM.value;
    let compound = 365;

    let amount = principal * (Math.pow((1+(rate/compound)),(compound * time)));
    COMP_OUTPUT.innerText = "$" + amount.toFixed(2);
}

function compoundContinously() {
    let principal = COMP_PRINCIPAL.value;
    let rate = COMP_RATE.value / 100;
    let time = COMP_TERM.value;
    let compound = 2.718281828;

    let amount = principal * (Math.pow(compound,(rate * time)));
    COMP_OUTPUT.innerText = "$" + amount.toFixed(2);
}


//Rule of 72 = 72/r aprox how long it will take to double an investment

/*
credit card payment calc 
N = -(1/30) * (ln (1 + (b/p)(1-(1+i)^30))) / (ln (1+i))
ln = nat log
b = balance
p = monthly payment
i = daily interest = apr/365
n= time itn takes to pay off
*/