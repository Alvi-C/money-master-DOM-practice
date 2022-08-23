
// all button
const calculateBtn = document.getElementById('btn-calculate');
const saveButton = document.getElementById('btn-save');

calculateBtn.addEventListener('click', function () {
    // income
    const myIncome = document.getElementById('total-income').value;
    // expense
    const foodExpense = document.getElementById('food-expense').value;
    const rentExpense = document.getElementById('rent-expense').value;
    const clothExpense = document.getElementById('cloth-expense').value;

    // total expense and balance
    const totalExpense = document.getElementById('total-expense');
    // const totalExpenseElement = totalExpense.innerText;
    const balanceAmount = document.getElementById('balance');
    // const balanceAmountElement = balanceAmount.innerText;

    const sumOfExpenses = parseInt(foodExpense) + parseInt(rentExpense) + parseInt(clothExpense);
    totalExpense.innerText = sumOfExpenses;

    const balance = parseInt(myIncome) - sumOfExpenses;
    balanceAmount.innerText = balance;
})

saveButton.addEventListener('click', function () {
    // percentage
    const parcentage = document.getElementById('input-percent').value;

    // saving amount
    const savingAmount = document.getElementById('saving-amount');
    // const savingValueElement = savingAmount.innerText;

    // remaining amount
    const remainingBalance = document.getElementById('rem-balance');
    // const remainingBalanceElemnt = remainingBalance.innerText;

    // income
    const balanceAmount = document.getElementById('balance');
    const balanceAmountElement = balanceAmount.innerText;

    // calculation
    const parcentageValue = parseInt(parcentage) / 100;
    const savingValue = parseInt(balanceAmountElement) * parcentageValue;
    savingAmount.innerText = savingValue;

    const remainingBal = parseInt(balanceAmountElement) - savingValue;
    remainingBalance.innerText = remainingBal;
})