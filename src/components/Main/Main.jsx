import EditAvatar from "../Form/EditAvatar/EditAvatar";
import EditProfile from "../Form/EditProfile/EditProfile";
import NewCard from "../Form/NewCard/NewCard";
import Popup from "./Popup/Popup";
import Card from "./Card/Card";
import { useState, useEffect, useContext } from "react";

import api from "../../utils/Api.js";

export default function Main(props) {
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

  const [user, setUser] = useState({
    name: "Joel Miller",
    avatar:
      "https://fotografias.antena3.com/clipping/cmsimages02/2024/05/16/8F77CEFB-88BC-41F2-BFCB-7232ECA93B09/pedro-pascal-como-joel-the-last-2_104.jpg?crop=2160,2160,x583,y0&width=1200&height=1200&optimize=low&format=webply",
    about: "Nini",
  });

  useEffect(() => {
    api
      .getUserData()
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [cards, setCards] = useState([]);
  useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data);
    });
  }, []);

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    await api
      .handleCardLike(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    await api
      .deleteCard(card._id)
      .then((res) => {
        setCards((state) => state.filter((c) => c._id !== card._id));
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
            src={user.avatar}
            alt="Avatar image"
            className="profile__avatar"
          />

          <div className="profile__labels">
            <div className="profile__title">
              <h2 className="profile__name">{user.name}</h2>
              <button
                aria-label="Edit profile"
                className="profile__edit-button"
                type="button"
                onClick={() => handleOpenPopup(editProfilePopup)}
              ></button>
            </div>
            <p className="profile__description">{user.about}</p>
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
            handleOpenPopup={handleOpenPopup}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
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
