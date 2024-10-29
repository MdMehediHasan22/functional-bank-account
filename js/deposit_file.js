

document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount = getInputFieldById('deposit-field');
    const previousDepositTotal = getTextElementValueById('deposit-total');
     
    const newDepositTotal = previousDepositTotal+newDepositAmount;
    setTextElementById('deposit-total',newDepositTotal);

    const previousBalanceAmount = getTextElementValueById('balance-total');
    const currentBalanceTotal = previousBalanceAmount + newDepositAmount;
    setTextElementById('balance-total',currentBalanceTotal);


})

