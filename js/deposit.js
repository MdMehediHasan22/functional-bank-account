document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = '';
    if(isNaN(newDepositAmount)){
        alert('please enter valid number!!!');
        return;
    }
    
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const newDepositTotal = previousDepositTotal+newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceAmountString  = balanceTotalElement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);
    
    const currentBalanceTotal = previousBalanceAmount+newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})