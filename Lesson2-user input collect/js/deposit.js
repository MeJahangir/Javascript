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
    

    // ballance total
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const newBalanceTotal = parseFloat(balanceTotalString);


    const currentBalanceTotal = newBalanceTotal + currentDepositTotal;
    balanceTotalElement.innerText = currentBalanceTotal;
    depositField.value = '';

});

//withdrow area
document.getElementById('btn-withdrow').addEventListener('click', function () {
    const withdrowField =document.getElementById('withdrow');
    const withdrowType = withdrowField.value;
    const withdrowTotal = parseFloat(withdrowType);
    // console.log(withdrowTotal);

    const withdrowDisplay = document.getElementById('withdrow-total');
    const withdrowStr = withdrowDisplay.innerText;
    const withdrowShow = parseFloat(withdrowStr)

     // alarm system add
     if (withdrowShow < withdrowTotal) {
        alert('Your balance not avelable');
        return;
     }

    const withdrowTotalAmount = withdrowTotal + withdrowShow;
    withdrowDisplay.innerText = withdrowTotalAmount;
    withdrowField.value = ' ';

    // current balance 
    const balanceElement = document.getElementById('balance-total');
    const balanceStr = balanceElement.innerText;
    const withdrowBalance = parseFloat(balanceStr);
    const updateBalance = withdrowBalance - withdrowTotal;
    balanceElement.innerText = updateBalance;
    

})  


