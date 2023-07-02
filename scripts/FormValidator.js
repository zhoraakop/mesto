export class FormValidator{
  constructor(validators){
    this.validators = validators;
    this.formList = Array.from(document.querySelectorAll(this.validators.formSelector));
  }

  enableValidation(){
    this.formList.forEach((formEl) => {
      this._setEventListeners(formEl, this.validators);
    });
  }

  _setEventListeners(formEl, validators){
    const inputList = Array.from(formEl.querySelectorAll(this.validators.inputSelector));
    const buttonEl = formEl.querySelector(this.validators.submitButtonSelector);
    inputList.forEach((inputEl) => {
      inputEl.addEventListener('input', () => {
        this._checkInputValidity(formEl, inputEl, this.validators);
        this._toggleButtonState(inputList,buttonEl,this.validators);
      });
    });
  };
  _checkInputValidity(formEl, inputEl, validators){
    const errorEl = formEl.querySelector(`.${inputEl.id}-error`);
    
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl, errorEl, this.validators);
    } 
    else {
      this._hideInputError(inputEl, errorEl, this.validators);
    }
  };
    
  _showInputError(inputEl, errorEl, validators){
      inputEl.classList.add(this.validators.inputErrorClass);
      errorEl.textContent = inputEl.validationMessage;
      errorEl.classList.add(this.validators.errorClass);
    };
  
  _hideInputError(inputEl, errorEl, validators){
      inputEl.classList.remove(this.validators.inputErrorClass);
      errorEl.classList.remove(this.validators.errorClass);
      errorEl.textContent = '';
  };
    
  _hasInvalidInput(inputList){
    return inputList.some((inputEl) => {
      return !inputEl.validity.valid;
    });
  };
    
  _toggleButtonState(inputList, buttonEl, validators){
    if (this._hasInvalidInput(inputList)) {
      buttonEl.setAttribute('disabled', true);
      buttonEl.classList.add(this.validators.inactiveButtonClass);
    }   
    else {
      buttonEl.removeAttribute('disabled');
      buttonEl.classList.remove(this.validators.inactiveButtonClass);
    }    
  };
}