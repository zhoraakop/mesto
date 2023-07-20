import { Popup } from "./popup.js";

export class PopupWithForm extends Popup{
    constructor(Selector, submitForm){
        super(Selector);
        this._form = this._selector.querySelector('.popup__form');
        this._submitForm = submitForm;
    }

    _getInputValues(){
        this._formList = document.querySelectorAll('.popup__input');
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
}