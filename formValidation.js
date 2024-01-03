const errorMsg = document.querySelector('.error');
const inputBox = document.querySelector('input');

const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm() {
    let mailInputBox = document.forms['myForm']['mail'].value;
    if(mailInputBox == '' || !(emailRegEx.test(mailInputBox))){
        activateError();
        inputBox.addEventListener('input', deactivateError);
        return false;
    }
    return true;
}

function activateError() {
    errorMsg.classList.remove('hide');
    inputBox.classList.add('input-error-state');
}

function deactivateError() {
    errorMsg.classList.add('hide');
    inputBox.classList.remove('input-error-state');
}