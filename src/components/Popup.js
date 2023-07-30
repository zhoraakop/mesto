

export class Popup{
    constructor(Selector){
        this._selector = document.querySelector(Selector);
    }

    open(){
        this._selector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close(){
        this._selector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    

    _handleEscClose = (evt) => {
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