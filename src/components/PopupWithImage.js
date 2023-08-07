import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup{
    constructor(popupEl){
        super(popupEl);
        this.popupImageEl = this._popupEl.querySelector('.popup__image-content');
        this.popupTitle = this._popupEl.querySelector('.popup__image-title');
    }
    open({name, link}){
        this.popupImageEl.src = link;
        this.popupImageEl.alt = name;
        this.popupTitle.textContent = name;
        super.open();
    }
}