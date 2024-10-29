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