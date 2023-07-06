import { openPopup, popupImage, popupImageEl, popupTitle } from "./index.js";

export class Card {
    constructor(name, link, template){
        this.template = document.querySelector(template).content.querySelector('.element');
        this.name = name;
        this.link = link;
    };
    
    createCards(){
        this.cardsEl = this.template.cloneNode(true);
        this._imageCards = this.cardsEl.querySelector('.element__image');
        this._textCards = this.cardsEl.querySelector('.element__title');
        this._imageCards.src = this.link;
        this._imageCards.alt = this.name;
        this._textCards.textContent = this.name;
        this._deleteButton = this.cardsEl.querySelector('.element__trash');
        this._likeButton = this.cardsEl.querySelector('.element__like');
        this._setEventListeners();
        return this.cardsEl;
    };
    
    _setEventListeners(){
        this._deleteButton.addEventListener('click', () => {
            this._deleteCard();
        });
        this._likeButton.addEventListener('click', (event) => {
            this._likeCard(event);
        });
        this._imageCards.addEventListener('click', () => {
            this._openCard();
        });
    }

    _deleteCard(){
        this.cardsEl.remove();
    };

    _likeCard(event){
        event.target.classList.toggle('element__like_active');
    }

    _openCard(){
        popupImageEl.src = this._imageCards.src;
        popupImageEl.alt = this._imageCards.alt;
        popupTitle.textContent = this._textCards.textContent;
        openPopup(popupImage);
    }
  
}
