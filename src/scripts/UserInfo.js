
export class UserInfo{
    constructor(name, information){
        this._name = document.querySelector(name);
        this._information = document.querySelector(information);
    }

    getUserInfo(){
        return{
            name : this._name.textContent,
            information : this._information.textContent,
        }
    }

    setUserInfo({name, information}){
        this._name.textContent = name;
        this._information.textContent = information;

    }
}