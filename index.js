const openPopup = document.querySelector('.profile-info__button');
const closePopup = document.querySelector('.popup__close-button');
const editPopup = document.querySelector('.popup');
const inputTitle = document.querySelector('.input-title');
const inputSubtitle = document.querySelector('.input-subtitle');
const profileTitle = document.querySelector('.profile-info__title');
const profileSubtitle = document.querySelector('.profile-info__subtitle');
const popupForm = document.querySelector('.popup__form');
const elementLike1 = document.querySelector('#element-like-1');
const elementLike2 = document.querySelector('#element-like-2');
const elementLike3 = document.querySelector('#element-like-3');
const elementLike4 = document.querySelector('#element-like-4');
const elementLike5 = document.querySelector('#element-like-5');
const elementLike6 = document.querySelector('#element-like-6');
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
openPopup.addEventListener('click', function(){
    editPopup.classList.add('popup__is-opened');
    
});

closePopup.addEventListener('click', function(){
    editPopup.classList.remove('popup__is-opened');
});

elementLike1.addEventListener('click', function(){
    count1++;
    if(count1 % 2 !== 0){
        active(elementLike1);
    }
    else{
        disabled(elementLike1);
    }
});

elementLike2.addEventListener('click', function(){
    count2++;
    if(count2 % 2 !== 0){
        active(elementLike2);
    }
    else{
        disabled(elementLike2);
    }
});

elementLike3.addEventListener('click', function(){
    count3++;
    if(count3 % 2 !== 0){
        active(elementLike3);
    }
    else{
        disabled(elementLike3);
    }
});

elementLike4.addEventListener('click', function(){
    count4++;
    if(count4 % 2 !== 0){
        active(elementLike4);
    }
    else{
        disabled(elementLike4);
    }
});

elementLike5.addEventListener('click', function(){
    count5++;
    if(count5 % 2 !== 0){
        active(elementLike5);
    }
    else{
        disabled(elementLike5);
    }
});

elementLike6.addEventListener('click', function(){
    count6++;
    if(count6 % 2 !== 0){
        active(elementLike6);
    }
    else{
        disabled(elementLike6);
    }
});


inputTitle.value = profileTitle.textContent;
inputSubtitle.value = profileSubtitle.textContent;

popupForm.addEventListener('submit', function(text){
    text.preventDefault();
    editPopup.classList.remove('popup__is-opened');
    profileTitle.textContent = inputTitle.value
    profileSubtitle.textContent = inputSubtitle.value;
});

function active(like){
    like.classList.add('element__like_active');
}

function disabled(like){
    like.classList.remove('element__like_active');
}

