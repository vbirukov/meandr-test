import './style.scss';

window.onload = init;
function init() {
    document.getElementById("theForm").onsubmit = validateForm;
}

function validateForm() {

    let nameInput = isNotEmpty("input_name", "Пожалуйста, введие ваше имя");
    let phoneInput = isNumeric("input_phone", "Пожалуйста, введите корректный номер телефона");
    let emailInput = isValidEmail("input_email", "Пожалуйста, введите корректный адрес электронной почты");
    let textarea = isNotEmpty("input_textarea", "Пожалуйста введите что-нибудь");
    return (nameInput
        && phoneInput
        && emailInput
        && textarea);
}

function isNotEmpty(inputId, errorMsg) {
    var inputElement = document.getElementById(inputId);
    var errorElement = inputElement.nextElementSibling;
    var inputValue = inputElement.value.trim();
    var isValid = (inputValue.length !== 0);  // boolean
    showMessage(isValid, inputElement, errorMsg, errorElement);
    return isValid;
}

function showMessage(isValid, inputElement, errorMsg, errorElement) {
    if (!isValid) {
        if (errorElement !== null) {
            errorElement.classList += ' form_error_show';
            errorElement.innerHTML = errorMsg;
        } else {
            alert(errorMsg);
        }
        if (inputElement !== null) {
            inputElement.focus();
        }
    } else {
        if (errorElement !== null) {
            errorElement.innerHTML = "";
        }
    }
}

function isNumeric(inputId, errorMsg) {
    var inputElement = document.getElementById(inputId);
    var errorElement = inputElement.nextElementSibling;
    var inputValue = inputElement.value.trim();
    var isValid = (inputValue.search(/^[0-9]+$/) !== -1);
    showMessage(isValid, inputElement, errorMsg, errorElement);
    return isValid;
}

function isValidEmail(inputId, errorMsg) {
    var inputElement = document.getElementById(inputId);
    var errorElement = inputElement.nextElementSibling;
    var inputValue = inputElement.value;
    var atPos = inputValue.indexOf("@");
    var dotPos = inputValue.lastIndexOf(".");
    var isValid = (atPos > 0) && (dotPos > atPos + 1) && (inputValue.length > dotPos + 2);
    showMessage(isValid, inputElement, errorMsg, errorElement);
    return isValid;
}