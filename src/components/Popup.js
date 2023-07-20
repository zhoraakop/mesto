import { addFormValidator } from "../pages/index.js";

export class Popup{
    constructor(Selector){
        this._check = Selector;
        this._selector = document.querySelector(Selector);
    }

    open(){
        this._selector.classList.add('popup_opened');
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    }

    close(){
        this._selector.classList.remove('popup_opened');
        document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
    }

    

    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close();
        };
    }

    setEventListeners(){
        const button = document.querySelector(`.${this._selector.id}`);
        button.addEventListener('click', () => this.close());
        this._selector.addEventListener('mousedown', (e) => {
            if(e.currentTarget === e.target)
                this.close();
        })
    }


}   