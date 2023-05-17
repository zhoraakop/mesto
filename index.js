const openPopup = document.querySelector('.profile-info__button');
const closePopup = document.querySelector('.popup__close-button');
const editPopup = document.querySelector('.popup');

openPopup.addEventListener('click', function(){
    editPopup.classList.add('popup__is-opened');
});

closePopup.addEventListener('click', function(){
    editPopup.classList.remove('popup__is-opened');
})

