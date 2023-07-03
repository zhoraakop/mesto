export class FormValidator{
  constructor(validators, form){
    this.validators = validators;
    this.form = form;
    this.formList = Array.from(document.querySelectorAll(this.validators.inputSelector));
    this.buttonEl = this.form.querySelector(this.validators.submitButtonSelector);
  }

  enableValidation(){
    this.form.addEventListener('submit', (evt) => evt.preventDefault());
    this._setEventListeners();
  }

  disableButton() {
    this.buttonEl.setAttribute('disabled', true);
    this.buttonEl.classList.add('popup__button_disabled');
  }

  _setEventListeners(){
    this.formList.forEach((inputEl) => {
      inputEl.addEventListener('input', () => {
        this._checkInputValidity(inputEl);
        this._toggleButtonState();
      });
    });
  };
  _checkInputValidity(inputEl){
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl, inputEl.validationMessage);
    } 
    else {
      this._hideInputError(inputEl);
    }
  };
  
  _showInputError(inputEl, errorMessage){
      const errorEl = this.form.querySelector(`.${inputEl.id}-error`);
      inputEl.classList.add(this.validators.inputErrorClass);
      errorEl.textContent = errorMessage;
      errorEl.classList.add(this.validators.errorClass);
    };
  
  _hideInputError(inputEl){
      const errorEl = this.form.querySelector(`.${inputEl.id}-error`);
      inputEl.classList.remove(this.validators.inputErrorClass);
      errorEl.classList.remove(this.validators.errorClass);
      errorEl.textContent = '';
  };
    
  _hasInvalidInput(){
    return this.formList.some((inputEl) => {
      return !inputEl.validity.valid;
    });
  };
    
  _toggleButtonState(){
    if (this._hasInvalidInput()) {
      this.buttonEl.setAttribute('disabled', true);
      this.buttonEl.classList.add(this.validators.inactiveButtonClass);
    }   
    else {
      this.buttonEl.removeAttribute('disabled');
      this.buttonEl.classList.remove(this.validators.inactiveButtonClass);
    }    
  };
}