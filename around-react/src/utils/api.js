class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this.ownerId = options.ownerId;
  }

  _request(url, options) {
    return fetch(url, {
      ...options,
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.log(err));
  }

  getUser() {
    return this._request(`${this._baseUrl}/users/me`);
  }

  setUserInfo() {
    return this._request(`${this._baseUrl}/users/me`).then((userData) => {
      document.querySelector(".profile__name").textContent = userData.name;
      document.querySelector(".profile__job").textContent = userData.about;
      document.querySelector(".profile__avatar").src = userData.avatar;
    });
  }

  modUserInfo(name, about) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      body: JSON.stringify({ name, about }),
    });
  }

  getInitialCards() {
    return this._request(`${this._baseUrl}/cards`);
  }

  postNewCard(name, link) {
    return this._request(`${this._baseUrl}/cards`, {
      method: "POST",
      body: JSON.stringify({ name, link }),
    });
  }

  deleteCard(cardId) {
    return this._request(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
    });
  }

  addLike(cardId) {
    return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
    });
  }

  removeLike(cardId) {
    return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
    });
  }

  updateProfileImage(avatar) {
    return this._request(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      body: JSON.stringify({ avatar }),
    }).then((data) => {
      document.querySelector(".profile__avatar").src = data;
    });
  }
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web-es-cohort-16",
  headers: {
    authorization: "ff5c5ea1-be6d-4f42-92ea-6e38d8c2cd85",
    "Content-Type": "application/json",
  },
});
