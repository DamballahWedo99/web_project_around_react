import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import PopupWithForm from "./components/PopupWithForm";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  };

  return (
    <>
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
      />
      <Footer />

      <PopupWithForm
        name="profile"
        title="Editar perfil"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__label" for="name">
          <input
            className="popup__input"
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            required
            minlength="2"
            maxlength="40"
          />
          <span className="popup__input-error name-error"></span>
        </label>
        <label className="popup__label" for="about">
          <input
            className="popup__input"
            type="text"
            id="about"
            name="about"
            placeholder="Acerca de mí"
            required
            minlength="2"
            maxlength="200"
          />
          <span className="popup__input-error about-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="profile-image"
        title="Cambiar foto de perfil"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__label" for="image-update">
          <input
            className="popup__input"
            type="url"
            id="image-update"
            name="link"
            placeholder="Link de la imagen"
            required
          />
          <span className="popup__input-error image-update-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="cards"
        title="Nuevo lugar"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__label" for="title">
          <input
            className="popup__input"
            type="text"
            id="title"
            name="name"
            placeholder="Título"
            required
            minlength="2"
            maxlength="30"
          />
          <span className="popup__input-error title-error"></span>
        </label>
        <label className="popup__label" for="image-url">
          <input
            className="popup__input"
            type="url"
            id="image-url"
            name="link"
            placeholder="Link de la imagen"
            required
          />
          <span className="popup__input-error image-url-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="delete-warning"
        title="¿Estás seguro?"
        buttonText="Si"
        onClose={closeAllPopups}
      ></PopupWithForm>
    </>
  );
}

export default App;
