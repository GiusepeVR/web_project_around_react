class Api {
  constructor(url, headers) {
    this._url = url;
    this._headers = headers;
  }

  _fetchData(endpoint, method, body) {
    return fetch(`${this._url}${endpoint}`, {
      headers: this._headers,
      body: JSON.stringify(body),
      method,
    }).then((res) => res.json());
  }

  getUserData() {
    return this._fetchData("/users/me");
  }

  updateUserData(userInfo) {
    return this._fetchData("/users/me", "PATCH", userInfo);
  }

  updateUserAvatar(userAvatar) {
    return this._fetchData("/users/me/avatar", "PATCH", userAvatar);
  }

  getInitialCards() {
    return this._fetchData("/cards");
  }

  addCard(cardInfo) {
    return this._fetchData("/cards", "POST", cardInfo);
  }

  deleteCard(cardId) {
    return this._fetchData(`/cards/${cardId}`, "DELETE");
  }

  handleCardLike(cardId, isLiked) {
    if (isLiked) {
      return this._fetchData(`/cards/${cardId}/likes`, "DELETE");
    } else {
      return this._fetchData(`/cards/${cardId}/likes`, "PUT");
    }
  }
}

const api = new Api("https://around-api.es.tripleten-services.com/v1", {
  authorization: "e4cbebb7-eb58-4a49-8e2e-9574a704497b",
  "Content-Type": "application/json",
});

export default api;
