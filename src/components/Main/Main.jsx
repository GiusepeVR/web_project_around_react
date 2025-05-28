import EditAvatar from "../Form/EditAvatar/EditAvatar";
import EditProfile from "../Form/EditProfile/EditProfile";
import NewCard from "../Form/NewCard/NewCard";
import Popup from "./Popup/Popup";
import Card from "./Card/Card";
import { useState, useEffect } from "react";

import api from "../../utils/Api.js";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const [cards, setCards] = useState([]);
  useEffect(() => {
    api.getUserData();
  }, [cards]);

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  return (
    <main className="content">
      <section className="profile" id="profile">
        <div className="profile__content">
          <div
            className="profile__avatar-container"
            type="button"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          ></div>
          <img
            src={CurrentUserContext.avatar}
            alt="Avatar image"
            className="profile__avatar"
          />

          <div className="profile__labels">
            <div className="profile__title">
              <h2 className="profile__name">{CurrentUserContext.name}</h2>
              <button
                aria-label="Edit profile"
                className="profile__edit-button"
                type="button"
                onClick={() => handleOpenPopup(editProfilePopup)}
              ></button>
            </div>
            <p className="profile__description">{CurrentUserContext.about}</p>
          </div>
        </div>
        <button
          aria-label="Add card"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        />
      </section>
      <ul className="cards__list">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            isLiked={card.isLiked}
            handleOpenPopup={handleOpenPopup}
          />
        ))}
      </ul>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
