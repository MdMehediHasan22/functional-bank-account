document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('please enter valid number');
        return;
    }
  
    
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

   

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceAmountString  = balanceTotalElement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);

    if(newWithdrawAmount>previousBalanceAmount){
        alert('Insuficient Balance');
        return;
    }

    const currentWIthdrawTotal = previousWithdrawTotal+newWithdrawAmount;
    withdrawTotalElement.innerText=currentWIthdrawTotal;

    const currentBalanceTotal =previousBalanceAmount-newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})