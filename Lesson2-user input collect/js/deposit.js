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

    const currentBalanceTotal = newBalanceTotal + previuseDepositTotal;
    balanceTotalElement.innerText = currentBalanceTotal;

})

// withdrow area 
document.getElementById('btn-withdrow').addEventListener('click', function () {
    const withdrowField = document.getElementById('withdrow');
    const withdrowFieldString = withdrowField.value;
    const withdrow = parseFloat(withdrowFieldString);
    
    const withdrowTotalElement = document.getElementById('withdrow-total');
    const previueWithdrowString = withdrowTotalElement.innerText;
    const previusWithdrowTotal = parseFloat(previueWithdrowString);
    
    const currentWithdrowTotal = previusWithdrowTotal + withdrow;
    withdrowField.innerText = currentWithdrowTotal;

})
