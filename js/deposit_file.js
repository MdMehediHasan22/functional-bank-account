function getInputFieldById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputValue;
}

function getTextElementValueById(elementById){
     const element = document.getElementById(elementById);
     const elementValueString = element.innerText;
     const elementValue = parseFloat(elementValueString);
     return elementValue;
}

function setTextElementById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount = getInputFieldById('deposit-field');
    const previousDepositTotal = getTextElementValueById('deposit-total');
     
    const newDepositTotal = previousDepositTotal+newDepositAmount;
    setTextElementById('deposit-total',newDepositTotal);

    const previousBalanceAmount = getTextElementValueById('balance-total');
    const currentBalanceTotal = previousBalanceAmount + newDepositAmount;
    setTextElementById('balance-total',currentBalanceTotal);


})

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementById('withdraw-total',currentWithdrawTotal);

    const previousBalanceAmount = getTextElementValueById('balance-total');
    const currentBalanceTotal = previousBalanceAmount-newWithdrawAmount;
    setTextElementById('balance-total',currentBalanceTotal);

})