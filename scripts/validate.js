const validators = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__error_visible',
  };
  
  const checkInputValidity = (formEl, inputEl, validators) => {
    const errorEl = formEl.querySelector(`.${inputEl.id}-error`);
  
    if (!inputEl.validity.valid) {
      showInputError(inputEl, errorEl, validators);
    } 
    else {
      hideInputError(inputEl, errorEl, validators);
    }
  };
  
  const showInputError = (inputEl, errorEl, validators) => {
    inputEl.classList.add(validators.inputErrorClass);
    errorEl.textContent = inputEl.validationMessage;
    errorEl.classList.add(validators.errorClass);
  };

  const hideInputError = (inputEl, errorEl, validators) => {
    inputEl.classList.remove(validators.inputErrorClass);
    errorEl.classList.remove(validators.errorClass);
    errorEl.textContent = '';
  };
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputEl) => {
      return !inputEl.validity.valid;
    });
  };
  
  const toggleButtonState = (inputList, buttonEl, validators) => {
    if (hasInvalidInput(inputList)) {
      buttonEl.setAttribute('disabled', true);
      buttonEl.classList.add(validators.inactiveButtonClass);
    }   
    else {
      buttonEl.removeAttribute('disabled');
      buttonEl.classList.remove(validators.inactiveButtonClass);
    }
    
  };
  
  const setEventListeners = (formEl, validators) => {
    const inputList = Array.from(formEl.querySelectorAll(validators.inputSelector));
    const buttonEl = formEl.querySelector(validators.submitButtonSelector);
    inputList.forEach((inputEl) => {
      inputEl.addEventListener('input', () => {
        checkInputValidity(formEl, inputEl, validators);
        toggleButtonState(inputList,buttonEl,validators);
      });
    });
  };
  
  const enableValidation = (validators) => {
    const formList = Array.from(document.querySelectorAll(validators.formSelector));
    formList.forEach((formEl) => {
      setEventListeners(formEl, validators);
    });
  };
  
  

  enableValidation(validators);