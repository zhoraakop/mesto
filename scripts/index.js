const openPopup = document.querySelector('.profile-info__button');
const closePopup = document.querySelector('.popup__close-button');
const editPopup = document.querySelector('.popup');
const inputTitle = document.querySelector('#input-title');
const inputSubtitle = document.querySelector('#input-subtitle');
const profileTitle = document.querySelector('.profile-info__title');
const profileSubtitle = document.querySelector('.profile-info__subtitle');
const popupForm = document.querySelector('.popup__form');

openPopup.addEventListener('click', function(){
    editPopup.classList.add('popup_opened');
    inputTitle.value = profileTitle.textContent;
    inputSubtitle.value = profileSubtitle.textContent;
    
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


