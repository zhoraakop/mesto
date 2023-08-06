export class Api{
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

        }).then(res => this._check(res))
    }

    getInitialCards(){
        return fetch(`${this._url}/cards`,{
            headers: {
                authorization: this._token
            }
        }).then(res => this._check(res))
    }

    editProfile({nameProfile, information}){
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
        }).then(res => this._check(res))
    }

    postCards({cardName, linkCard}){
        return fetch(`${this._url}/cards`,{
            method: "POST",
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: cardName,
                link: linkCard
            })

        }).then(res => this._check(res))
    }

    editAvatar({newProfileAvatar}){
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: newProfileAvatar,
            })
            
        })
        .then(res => this._check(res))
    }

    deleteCard(cardId){
        return fetch(`${this._url}/cards/${cardId}`, {
            method: "DELETE",
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
        }).then(res => this._check(res))
    }

    likeAdd(cardId){
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
        }).then(res => this._check(res))

    }

    likeRemove(cardId){
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
        }).then(res => this._check(res))

    }
}