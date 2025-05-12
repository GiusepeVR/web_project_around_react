import ImagePopup from "../../ImagePopup/ImagePopup";

export default function Card(props) {
  const { card, handleOpenPopup } = props;

  const imageComponent = {
    children: <ImagePopup card={card} />,
  };
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
      />
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={`card__like-button ${
            card.isLiked ? "card__like-button_active" : ""
          }`}
        />
      </div>
    </li>
  );
}
