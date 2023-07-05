export class FormValidator{
  constructor(validators, form){
    this._validators = validators;
    this._form = form;
    this._formList = Array.from(this._form.querySelectorAll(this._validators.inputSelector));
    this._buttonEl = this._form.querySelector(this._validators.submitButtonSelector);
  }

  enableValidation(){
    
    this._setEventListeners();
  }

  disableButton() {
    this._buttonEl.setAttribute('disabled', true);
    this._buttonEl.classList.add('popup__button_disabled');
  }

  _setEventListeners(){
    this._formList.forEach((inputEl) => {
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
      const errorEl = this._form.querySelector(`.${inputEl.id}-error`);
      inputEl.classList.add(this._validators.inputErrorClass);
      errorEl.textContent = errorMessage;
      errorEl.classList.add(this._validators.errorClass);
    };
  
  _hideInputError(inputEl){
      const errorEl = this._form.querySelector(`.${inputEl.id}-error`);
      
      inputEl.classList.remove(this._validators.inputErrorClass);
      errorEl.classList.remove(this._validators.errorClass);
      errorEl.textContent = '';
  };
    
  _hasInvalidInput(){
    return this._formList.some((inputEl) => {
      return !inputEl.validity.valid;
    });
  };
    
  _toggleButtonState(){
    if (this._hasInvalidInput()) {
      this._buttonEl.setAttribute('disabled', true);
      this._buttonEl.classList.add(this._validators.inactiveButtonClass);
    }   
    else {
      this._buttonEl.removeAttribute('disabled');
      this._buttonEl.classList.remove(this._validators.inactiveButtonClass);
    }    
  };

  resetValidation() {
    this._toggleButtonState();

    this._formList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });

  }
}