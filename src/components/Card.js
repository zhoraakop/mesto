
export class Card {
    constructor(card, template, userId, imagePopup, handleDelete, handleLike){
        this._template = document.querySelector(template).content.querySelector('.element');
        this._imagePopup = imagePopup;
        this._cardName = card.name;
        this._userId = userId;
        this._ownerId = card.owner._id;
        this._linkCard = card.link;
        this._id = card._id
        this._handleDeleteCard = handleDelete;
        this._handleLike = handleLike;
        this._likes = card.likes;
        this._isLiked = false;

    };
    
    createCards(){
        this._cardsEl = this._template.cloneNode(true);
        this._imageCards = this._cardsEl.querySelector('.element__image');
        this._textCards = this._cardsEl.querySelector('.element__title');
        this._imageCards.setAttribute('src', this._linkCard);
        this._imageCards.setAttribute('alt', this._cardName);
        this._textCards.textContent = this._cardName;
        this._likeCounter = this._cardsEl.querySelector('.element__like-counter')
        this._deleteButton = this._cardsEl.querySelector('.element__trash');
        this._likeButton = this._cardsEl.querySelector('.element__like');
        this._cardsEl.dataset.cardId = this._id;
        this._checkLikes();
        this._counterLikes();
        this._showButtonTrash();
        this._setEventListeners();
        return this._cardsEl;
    };
    
    _showButtonTrash(){
        if (!(this._ownerId == this._userId)){
            this._deleteButton.remove();
        }
    }

    _counterLikes(){
        this._likeCounter.textContent = this._likes.length;
    }

    _likeActive(){
        this._likeButton.classList.add('element__like_active')
    }

    _checkLikes() {
        this._likes.forEach((evt) => {
          if (this._userId == evt._id) {
            this._likeActive();
            this._isLiked = true;
          }
        });
    }
    
    _handleLikeCard() {
        this._handleLike(
          this._isLiked,
          this._id,
        );
        this._isLiked = !this._isLiked;
    }
    
    newCounterLikes(count){
        this._likeButton.classList.toggle('element__like_active');
        this._likeCounter.textContent = count;
    }

    _setEventListeners(){
        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteCard();
        });
        this._likeButton.addEventListener('click', (event) => {
            this._handleLikeCard();
        });
        this._imageCards.addEventListener('click', () => {
            this._imagePopup(this._cardName, this._linkCard);
        });
    }

    deleteCard(){
        this._cardsEl.remove();
        this._cardsEl = null;
    };

  
}
