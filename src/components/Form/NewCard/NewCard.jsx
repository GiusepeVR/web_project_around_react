import { useState } from "react";

export default function NewCard({ onAddCard }) {
  const [placeName, setPlaceName] = useState("");
  const [placeUrl, setPlaceUrl] = useState("");

  const handlePlaceNameChange = (event) => {
    setPlaceName(event.target.value);
  };

  const handlePlaceUrlChange = (event) => {
    setPlaceUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddCard({
      isLiked: false,
      name: placeName,
      link: placeUrl,
    });
  };

  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Title"
          required
          type="text"
          value={placeName}
          onChange={handlePlaceNameChange}
        />
        <span className="popup__error" id="card-name-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="card-link"
          name="link"
          placeholder="Image link"
          required
          type="url"
          value={placeUrl}
          onChange={handlePlaceUrlChange}
        />
        <span className="popup__error" id="card-link-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
