import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import PopupWithForm from "./components/PopupWithForm";
import ImagePopup from "./components/ImagePopup";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [cardSelected, setCardSelected] = useState(null);

  const handlerCardClick = (card) => {
    setCardSelected(card);
  };

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
    setCardSelected(null);
  };

  return (
    <>
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onCardClick={handlerCardClick}
      />
      <Footer />

      <PopupWithForm
        name="profile"
        title="Editar perfil"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__label" htmlFor="name">
          <input
            className="popup__input"
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__input-error name-error"></span>
        </label>
        <label className="popup__label" htmlFor="about">
          <input
            className="popup__input"
            type="text"
            id="about"
            name="about"
            placeholder="Acerca de mí"
            required
            minLength="2"
            maxLength="200"
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
        <label className="popup__label" htmlFor="image-update">
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
        <label className="popup__label" htmlFor="title">
          <input
            className="popup__input"
            type="text"
            id="title"
            name="name"
            placeholder="Título"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="popup__input-error title-error"></span>
        </label>
        <label className="popup__label" htmlFor="image-url">
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

      <ImagePopup onClose={closeAllPopups} card={cardSelected} />

      {/* <PopupWithForm
        name="delete-warning"
        title="¿Estás seguro?"
        buttonText="Si"
        onClose={closeAllPopups}
      ></PopupWithForm> */}
    </>
  );
}

export default App;
