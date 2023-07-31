export default class Api{
    constructor(options){
        this._url = options.baseUrl;
        this._token = options.token;
    }

    _check(res){
        if(!res.ok){
            return Promise.reject(`Ошибка:${res.status}`);
        }
        return res.json();
    }

    getUserData(){
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: this._token
            }

        }).then(this._check())
    }

    getInitialCards(){
        return fetch(`${this._url}/cards`,{
            headers: {
                authorization: this._token
            }
        }).then(this._check())
    }

    editProfile(){
        return fetch(`${this._url}/users/me`,{
            method: "PATCH",
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: nameProfile,
                about: information
            })
        }).then(this._check())
    }

    postCards(){
        return fetch(`${this._url}/cards`,{
            method: "POST",
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: cardName,
                link: link
            })

        }).then(this._check())
    }
}