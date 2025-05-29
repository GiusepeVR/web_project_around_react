import ImagePopup from "../../ImagePopup/ImagePopup";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

export default function Card(props) {
  const { card, handleOpenPopup, onCardLike, onCardDelete } = props;

  const imageComponent = {
    children: <ImagePopup card={card} />,
  };

  const cardLikeButtonClassName = `card__like-button ${
    card.isLiked ? "card__like-button_is-active" : ""
  }`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  const { currentUser } = useContext(CurrentUserContext);

  return (
    <li className="card">
      <img
        className="card__image"
        src={card.link}
        alt="Landscape"
        onClick={() => handleOpenPopup(imageComponent)}
      />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
        onClick={handleDeleteClick}
      />
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
        />
      </div>
    </li>
  );
}
