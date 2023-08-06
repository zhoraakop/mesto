

export class UserInfo{
    constructor(nameProfile, information, profileAvatar){
        this._name = document.querySelector(nameProfile);
        this._information = document.querySelector(information);
        this._avatar = document.querySelector(profileAvatar);
    }

    getUserInfo(){
        return{
            nameProfile : this._name.textContent,
            information : this._information.textContent,
            profileAvatar : this._avatar.src
        }
    }

    setUserInfo({nameProfile, information}){
        this._name.textContent = nameProfile;
        this._information.textContent = information;
    }

    changeAvatar(newProfileAvatar){
        this._avatar.src = newProfileAvatar;    
    }

    setUserId(cardId){
        this._id = cardId;
    }
}