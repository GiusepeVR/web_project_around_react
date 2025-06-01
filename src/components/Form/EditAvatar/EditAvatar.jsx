import { useState, useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext.js";

export default function EditAvatar() {
  const userContext = useContext(CurrentUserContext);

  const { currentUser, handleUpdateUserAvatar } = userContext;

  const [avatar, setAvatar] = useState(currentUser.avatar);

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateUserAvatar({ avatar: avatar });
  };

  return (
    <form
      className="popup__form"
      name="avatar-form"
      id="edit-avatar-form"
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="avatar-link"
          name="link"
          placeholder="Image link"
          required
          type="url"
          value={avatar}
          onChange={handleAvatarChange}
        />
        <span className="popup__error" id="avatar-link-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
