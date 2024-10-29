document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementById('withdraw-total',currentWithdrawTotal);

    const previousBalanceAmount = getTextElementValueById('balance-total');
    const currentBalanceTotal = previousBalanceAmount-newWithdrawAmount;
    setTextElementById('balance-total',currentBalanceTotal);

})