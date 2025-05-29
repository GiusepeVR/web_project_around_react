import { useState, useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext.js";

export default function EditProfile() {
  // const currentUser = useContext(CurrentUserContext);
  // const [name, setName] = useState(currentUser.name);
  // const [description, setDescription] = useState(currentUser.about);
  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };
  // const handleDescriptionChange = (event) => {
  //   setDescription(event.target.value);
  // };
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateUser } = userContext;

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateUser({ name, about: description });
    console.log("lul");
  };

  return (
    <form
      className="popup__form"
      name="profile-form"
      id="edit-profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_profile-name"
          id="profile-name"
          maxLength="30"
          minLength="1"
          name="profile-name"
          placeholder="Name"
          required
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="profile-name-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_about"
          id="profile-about"
          name="profile-about"
          placeholder="About me"
          required
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup__error" id="profile-about-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
