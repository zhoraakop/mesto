
export class UserInfo{
    constructor(nameProfile, information, profileAvatar){
        this._name = document.querySelector(nameProfile);
        this._information = document.querySelector(information);
        this._profileAvatar = document.querySelector(profileAvatar);
    }

    getUserInfo(){
        return{
            nameProfile : this._name.textContent,
            information : this._information.textContent,
            profileAvatar: this._profileAvatar.src
        }
    }

    setUserInfo({nameProfile, information, profileAvatar}){
        this._name.textContent = nameProfile;
        this._information.textContent = information;
        this._profileAvatar.src = profileAvatar
    }
}