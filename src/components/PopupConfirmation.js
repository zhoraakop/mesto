import { Popup } from "./Popup.js";

export default class PopupConfirmation extends Popup{
    constructor(popupEl, handleSubmit){
        super(popupEl);
        this._handleSubmit = handleSubmit;
        this._form = this._popupEl.querySelector('.popup__form');
    } 

    open(cardId, card){
        super.open();
        this._cardId = cardId;
        this._cardEl = card;
    }

    setEventListeners() {
        this._form.addEventListener('submit', evt => {
            evt.preventDefault();
            this._handleSubmit(this._cardId, this._cardEl);
        });
        super.setEventListeners();
    }
}