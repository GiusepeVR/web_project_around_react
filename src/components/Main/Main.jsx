import EditAvatar from "../Form/EditAvatar/EditAvatar";
import EditProfile from "../Form/EditProfile/EditProfile";
import NewCard from "../Form/NewCard/NewCard";
import Popup from "./Popup/Popup";
import Card from "./Card/Card";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import api from "../../utils/Api.js";

export default function Main({
  onCardLike,
  onCardDelete,
  cards,
  onAddCard,
  popup,
  onOpenPopup,
  onClosePopup,
  setCurrentUser,
}) {
  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard onAddCard={onAddCard} />,
  };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getUserData()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile" id="profile">
        <div className="profile__content">
          <div
            className="profile__avatar-container"
            type="button"
            onClick={() => onOpenPopup(editAvatarPopup)}
          ></div>
          <img
            src={currentUser.avatar}
            alt="Avatar image"
            className="profile__avatar"
          />

          <div className="profile__labels">
            <div className="profile__title">
              <h2 className="profile__name">{currentUser.name}</h2>
              <button
                aria-label="Edit profile"
                className="profile__edit-button"
                type="button"
                onClick={() => onOpenPopup(editProfilePopup)}
              ></button>
            </div>
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button
          aria-label="Add card"
          className="profile__add-button"
          type="button"
          onClick={() => onOpenPopup(newCardPopup)}
        />
      </section>
      <ul className="cards__list">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onOpenPopup={onOpenPopup}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>
      {popup && (
        <Popup onClosePopup={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
