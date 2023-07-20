import { Popup } from "./popup.js";

export class PopupWithImage extends Popup{
    constructor(selector){
        super(selector);
        this.popupImageEl = this._selector.querySelector('.popup__image-content');
        this.popupTitle = this._selector.querySelector('.popup__image-title');
    }
    open({name, link}){
        this.popupImageEl.src = link;
        this.popupImageEl.alt = name;
        this.popupTitle.textContent = name;
        super.open();
    }
}