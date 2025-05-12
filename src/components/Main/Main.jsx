import Avatar from "/images/avatar.png";
import EditAvatar from "../Form/EditAvatar/EditAvatar";
import EditProfile from "../Form/EditProfile/EditProfile";
import NewCard from "../Form/NewCard/NewCard";
import ImagePopup from "../ImagePopup/ImagePopup";
import Popup from "./Popup/Popup";
import Card from "./Card/Card";

import { useState } from "react";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

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

  return (
    <main className="content">
      <section className="profile" id="profile">
        <div className="profile__content">
          <div
            className="profile__avatar-container"
            type="button"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          ></div>
          <img src={Avatar} alt="Avatar image" className="profile__avatar" />

          <div className="profile__labels">
            <div className="profile__title">
              <h2 className="profile__name">John Doe</h2>
              <button
                aria-label="Edit profile"
                className="profile__edit-button"
                type="button"
                onClick={() => handleOpenPopup(editProfilePopup)}
              ></button>
            </div>
            <p className="profile__description">Person</p>
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
