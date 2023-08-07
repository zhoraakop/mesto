import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor(popupEl, submitForm){
        super(popupEl);
        this._form = this._popupEl.querySelector('.popup__form');
        this._submitForm = submitForm;
        this._formList = Array.from(document.querySelectorAll('.popup__input'));
        this._button = document.querySelector(popupEl).querySelector('.popup__button');
        this._newButton = this._button.textContent
    } 

    _getInputValues(){
        this._newFormList = {};
        this._formList.forEach((input) => {
            this._newFormList[input.name] = input.value;
        });
        return this._newFormList;

    }

    setEventListeners(){
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
        })
        super.setEventListeners();
    }

    close(){
        super.close();
        this._form.reset();
    }

    renderLoading(isLoading, text) {
        if (isLoading) {
            this._button.textContent = text;
        } else {
            this._button.textContent = this._newButton;
        }
    }
}