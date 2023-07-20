
export class Card {
    constructor(card, template, imagePopup){
        this.template = document.querySelector(template).content.querySelector('.element');
        this._imagePopup = imagePopup;
        this.name = card.name;
        this.link = card.link;
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
            this._imagePopup(this.name, this.link);
        });
    }

    _deleteCard(){
        this.cardsEl.remove();
    };

    _likeCard(event){
        event.target.classList.toggle('element__like_active');
    }

  
}
