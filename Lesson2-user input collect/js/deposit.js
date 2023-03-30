//deposit area first
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('input-field');
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previuseDepositString = depositTotalElement.innerText;
    const previuseDepositTotal = parseFloat(previuseDepositString);
    
    const currentDepositTotal = previuseDepositTotal + newDeposit;
    depositTotalElement.innerText = currentDepositTotal;

})
