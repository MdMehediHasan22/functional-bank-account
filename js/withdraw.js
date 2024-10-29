document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldById('withdraw-field');
    if (errorMessage(newWithdrawAmount)) return;
    const previousBalanceAmount = getTextElementValueById('balance-total');
    // Ensure balance doesn't go negative
    if (newWithdrawAmount>previousBalanceAmount) {
        alert('Insufficient balance!');
        return;
    }

    const previousWithdrawTotal = getTextElementValueById('withdraw-total');

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementById('withdraw-total', currentWithdrawTotal);


    const currentBalanceTotal = previousBalanceAmount - newWithdrawAmount;

    setTextElementById('balance-total', currentBalanceTotal);

})