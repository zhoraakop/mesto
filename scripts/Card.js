import { openPopup, popupImage } from "./index.js";

export class Card {
    constructor(name, link, template){
        this.template = document.querySelector(template).content.querySelector('.element');
        this.name = name;
        this.link = link;
        this.section = document.querySelector('.elements');
        this.popupImageEl = document.querySelector('#popup-image').querySelector('.popup__image-content');
        this.popupTitle = document.querySelector('#popup-image').querySelector('.popup__image-title');
    };
    
    createCards(){
        this.cardsEl = this.template.cloneNode(true);
        this._imageCards = this.cardsEl.querySelector('.element__image');
        this._textCards = this.cardsEl.querySelector('.element__title');
        this._imageCards.src = this.link;
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
        this.section.removeChild(this.cardsEl);
    };

    _likeCard(event){
        event.target.classList.toggle('element__like_active');
    }

    _openCard(){
        this.popupImageEl.src = this._imageCards.src;
        this.popupImageEl.alt = this._imageCards.alt;
        this.popupTitle.textContent = this._textCards.textContent;
        openPopup(popupImage);
    }

}
