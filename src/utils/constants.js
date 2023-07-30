const buttonOpenEditProfilePopup = document.querySelector('.profile-info__button');
const buttonOpenAddCardPopup = document.querySelector('.profile__add-button');
const buttonTrash = document.querySelector('.element__trash')
const buttonAvatar = document.querySelector('.profile__avatar-button');
const inputsValue = {
    name: document.querySelector('#name'),
    information: document.querySelector('#information')
};

const formEditProfile = document.querySelector('#form');
const formAddCard = document.querySelector('#form-add');
const formAvatar = document.querySelector('#form-avatar');


export{ formAvatar, buttonAvatar, buttonTrash, buttonOpenEditProfilePopup, buttonOpenAddCardPopup, inputsValue, formEditProfile, formAddCard};