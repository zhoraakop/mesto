import { trashPopup } from "../pages/index.js";
import { api } from "../pages/index.js"
export class Card {
    constructor(card, template, userId, imagePopup, handleDelete, handleLike){
        this.template = document.querySelector(template).content.querySelector('.element');
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
        this.cardsEl = this.template.cloneNode(true);
        this._imageCards = this.cardsEl.querySelector('.element__image');
        this._textCards = this.cardsEl.querySelector('.element__title');
        this._imageCards.setAttribute('src', this._linkCard);
        this._imageCards.setAttribute('alt', this._cardName);
        this._textCards.textContent = this._cardName;
        this._likeCounter = this.cardsEl.querySelector('.element__like-counter')
        this._deleteButton = this.cardsEl.querySelector('.element__trash');
        this._likeButton = this.cardsEl.querySelector('.element__like');
        this.cardsEl.dataset.cardId = this._id;
        this._checkLikes();
        this._showButtonTrash();
        this._setEventListeners();
        return this.cardsEl;
    };
    
    _showButtonTrash(){
        if (!(this._ownerId == this._userId)){
            this._deleteButton.remove();
        }
    }

    _like(){
        this._likeButton.classList.add('element__like_active')
    }

    _dislike(){
        this._likeButton.classList.remove('element__like_active')
    }

    _checkLikes() {
        this._likes.forEach((evt) => {
          if (this._userId == evt._id) {
            this._like();
            this._isLiked = true;
          }
    
        });
    }
    
      _handleLikeButton() {
        this._handleLike(
          this._isLiked,
          this._id,
        );
        this._likeButton.classList.toggle('element__like_active');
        this._isLiked = !this._isLiked;
      }

    counterLikes(count){
        this._likeCounter.textContent = count;
    }

    _setEventListeners(){
        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteCard();
        });
        this._likeButton.addEventListener('click', (event) => {
            this._handleLikeButton();
        });
        this._imageCards.addEventListener('click', () => {
            this._imagePopup(this._cardName, this._linkCard);
        });
    }

    deleteCard(){
        this.cardsEl.remove();
        this.cardsEl = null;
    };

    _likeCard(event){
        event.target.classList.toggle('element__like_active');
    }

  
}
