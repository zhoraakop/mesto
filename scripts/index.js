const openPopup = document.querySelector('.profile-info__button');
const openAddPopup = document.querySelector('.profile__add-button');
const closePopup = document.querySelector('#popup__close-button');
const closeAddPopup = document.querySelector('#popup-add__close-button');

const editPopup = document.querySelector('#popup-info');
const editAddPopup = document.querySelector('#popup-add');
const inputTitle = document.querySelector('#input-title');
const inputSubtitle = document.querySelector('#input-subtitle');
const profileTitle = document.querySelector('.profile-info__title');
const profileSubtitle = document.querySelector('.profile-info__subtitle');
const popupForm = document.querySelector('.popup__form');
const openAddElement = document.querySelector('.profile__add-button')

openPopup.addEventListener('click', function(){
    editPopup.classList.add('popup_opened');
    inputTitle.value = profileTitle.textContent;
    inputSubtitle.value = profileSubtitle.textContent;
    
});

openAddPopup.addEventListener('click', function(){
    editAddPopup.classList.add('popup_opened');
});

closeAddPopup.addEventListener('click', function(){
    closepopup(editAddPopup)
});

closePopup.addEventListener('click', function(){
    closepopup(editPopup)
});

popupForm.addEventListener('submit', function(text){
    text.preventDefault();
    closepopup(editPopup);
    profileTitle.textContent = inputTitle.value
    profileSubtitle.textContent = inputSubtitle.value;
});


function closepopup(element){
    element.classList.remove('popup_opened');
};


