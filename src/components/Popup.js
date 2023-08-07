

export class Popup{
    constructor(popupEl){
        this._popupEl = document.querySelector(popupEl);
    }

    open(){
        this._popupEl.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close(){
        this._popupEl.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        };
    }

    setEventListeners(){
        const button = document.querySelector(`.${this._popupEl.id}`);
        button.addEventListener('click', () => this.close());
        this._popupEl.addEventListener('mousedown', (e) => {
            if(e.currentTarget === e.target)
                this.close();
        })
    }


}   