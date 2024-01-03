const errorMsg = document.querySelector('.error');
const inputBox = document.querySelector('input');
const mainContent = document.querySelector('main');
const successSection = document.querySelector('section');
const successSectionBtn = document.querySelector('section button');
const emailText = document.querySelector('.email');

successSectionBtn.addEventListener('click', ()=> {
    mainContent.style.display = 'flex';
    successSection.style.display = 'none';
})

const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(event) {
    //take the current value of the input box
    let mailInputBox = document.forms['myForm']['mail'].value;
    //check if input box value empty or not valid formatted
    if(mailInputBox == '' || !(emailRegEx.test(mailInputBox))){
        activateError();
        inputBox.addEventListener('input', deactivateError);
    }else {
        mainContent.style.display = 'none';
        successSection.style.display = 'block';
        emailText.innerText = mailInputBox;
    }
    return false;
}

function activateError() {
    errorMsg.classList.remove('hide');
    inputBox.classList.add('input-error-state')
    // trigger animation to repeat every time 
    inputBox.style.animation = 'none';
    setTimeout(() => {
      inputBox.style.animation = 'horizontal-shake 0.4s ease';
    }, 0);
}

function deactivateError() {
    errorMsg.classList.add('hide');
    inputBox.classList.remove('input-error-state');
}

