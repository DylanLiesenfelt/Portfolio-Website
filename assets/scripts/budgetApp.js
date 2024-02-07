const incomeInput = document.getElementById("income-input");
const expensesInput = document.getElementById("expenses-input");
const budgetOutput = document. getElementById("budget-output");

function calculate() {
    let income = parseFloat(incomeInput.value);
    let expenses = parseFloat(expensesInput.value);
    let budget = (income - expenses)/30;
    budgetOutput.innerText = '$ ' + budget.toFixed(2);
    console.log(income, expenses, budget)
}