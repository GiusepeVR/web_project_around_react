// import { useState } from "react";

import avatar from "/images/avatar.png";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="page">
        <Header></Header>
        <main className="content">
          <section className="popup" id="avatar-popup">
            <div className="popup__container popup__container--avatar">
              <button
                type="submit"
                className="popup__close-button"
                id="user-popup__close-button"
              ></button>
              <form
                name="edit"
                className="popup__form popup__form--avatar"
                id="profile-form"
              >
                <fieldset
                  className="popup__fieldset popup__fieldset--avatar"
                  id="profile-fieldset"
                >
                  <h4 className="popup__title">Cambiar foto de perfil</h4>
                  <input
                    type="url"
                    name="avatar"
                    id="avatar-link"
                    placeholder="Enlace a la imagen"
                    className="popup__input popup__input_avatar-link"
                    value=""
                    required
                    minlength="2"
                    maxlength="400"
                  />
                  <span className="popup__input-error avatar-link-error"></span>
                  <button type="submit" className="popup__button">
                    Guardar
                  </button>
                </fieldset>
              </form>
            </div>
          </section>
          <section className="popup" id="delete-popup">
            <div className="popup__container popup__container--confirmation">
              <button
                type="submit"
                className="popup__close-button"
                id="user-popup__close-button"
              ></button>
              <form name="edit" className="popup__form" id="delete-form">
                <fieldset
                  className="popup__fieldset popup__fieldset--confirmation"
                  id="popup-fieldset"
                >
                  <h4 className="popup__title popup__title--confirmation">
                    ¿Estás seguro/a?
                  </h4>
                  <input
                    className="popup__input popup__input--hidden"
                    type="text"
                    value="true"
                    name="delete"
                  />
                  <button
                    type="submit"
                    className="popup__button popup__button--confirmation"
                  >
                    Sí
                  </button>
                </fieldset>
              </form>
            </div>
          </section>
          <section className="popup" id="user-popup">
            <div className="popup__container">
              <button
                type="submit"
                className="popup__close-button"
                id="user-popup__close-button"
              ></button>
              <form name="edit" className="popup__form" id="profile-form">
                <fieldset className="popup__fieldset" id="profile-fieldset">
                  <h4 className="popup__title">Editar perfil</h4>
                  <input
                    type="text"
                    name="name"
                    id="profile-name"
                    placeholder="Nombre"
                    className="popup__input popup__input_name"
                    value="  "
                    required
                    minlength="2"
                    maxlength="40"
                  />
                  <span className="popup__input-error profile-name-error"></span>
                  <input
                    type="text"
                    name="about"
                    id="profile-about"
                    placeholder="Acerca de mí"
                    className="popup__input popup__input_about"
                    value="  "
                    required
                    minlength="2"
                    maxlength="200"
                  />
                  <span className="popup__input-error profile-about-error"></span>
                  <button type="submit" className="popup__button save-user">
                    Guardar
                  </button>
                </fieldset>
              </form>
            </div>
          </section>
          <section className="popup" id="place-popup">
            <div className="popup__container">
              <button
                type="submit"
                className="popup__close-button"
                id="place-popup__close-button"
              ></button>
              <form name="edit" className="popup__form" id="place-form">
                <fieldset className="popup__fieldset" id="place-fieldset">
                  <h4 className="popup__title">Nuevo lugar</h4>
                  <input
                    type="text"
                    name="title"
                    id="place-name"
                    placeholder="Título"
                    className="popup__input popup__input_place"
                    required
                    minlength="2"
                    maxlength="30"
                  />
                  <span className="popup__input-error place-name-error"></span>
                  <input
                    type="url"
                    name="link"
                    id="place-image-src"
                    placeholder="Enlace a la imagen"
                    className="popup__input popup__input_link"
                    required
                  />
                  <span className="popup__input-error place-image-src-error"></span>
                  <button type="submit" className="popup__button save-place">
                    Guardar
                  </button>
                </fieldset>
              </form>
            </div>
          </section>
          <section className="image-popup" id="image-overlay">
            <div className="image-popup__container">
              <button
                type="submit"
                className="image-popup__close-button"
                id="image-popup__close-button"
              ></button>
              <div className="image-popup__frame">
                <img
                  src="#"
                  alt="Landscape overlay"
                  className="image-popup__img"
                />
                <span className="image-popup__label"></span>
              </div>
            </div>
          </section>
          <section className="profile" id="profile">
            <div className="profile__content">
              <div className="profile__avatar-container"></div>
              <img
                src={avatar}
                alt="Avatar image"
                className="profile__avatar"
              />

              <div className="profile__labels">
                <div className="profile__title">
                  <h2 className="profile__name"></h2>
                  <button className="profile__edit-button"></button>
                </div>
                <p className="profile__description"></p>
              </div>
            </div>
            <button className="profile__add-button"></button>
          </section>
          <section className="photo-grid"></section>
        </main>
        <footer className="footer" id="footer">
          <p className="footer__copyright">&copy; 2021 Around The U.S.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
