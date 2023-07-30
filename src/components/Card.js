import { trashPopup } from "../pages/index.js";
export class Card {
    constructor(card, template, imagePopup){
        this.template = document.querySelector(template).content.querySelector('.element');
        this._imagePopup = imagePopup;
        this.cardName = card.cardName;
        this.link = card.link;
    };
    
    createCards(){
        this.cardsEl = this.template.cloneNode(true);
        this._imageCards = this.cardsEl.querySelector('.element__image');
        this._textCards = this.cardsEl.querySelector('.element__title');
        this._imageCards.src = this.link;
        this._imageCards.alt = this.cardName;
        this._textCards.textContent = this.cardName;
        this._deleteButton = this.cardsEl.querySelector('.element__trash');
        this._likeButton = this.cardsEl.querySelector('.element__like');
        this._setEventListeners();
        return this.cardsEl;
    };
    
    _setEventListeners(){
        this._deleteButton.addEventListener('click', () => {
            trashPopup.open();
            const _trash = document.querySelector('#popup__button-trash');
            _trash.addEventListener('click', (evt) =>{
                this._deleteCard();
                trashPopup.close();
            })
            trashPopup.setEventListeners();
        });
        this._likeButton.addEventListener('click', (event) => {
            this._likeCard(event);
        });
        this._imageCards.addEventListener('click', () => {
            this._imagePopup(this.cardName, this.link);
        });
    }

    _deleteCard(){
        this.cardsEl.remove();
    };

    _likeCard(event){
        event.target.classList.toggle('element__like_active');
    }

  
}
