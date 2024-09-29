import profilePicture from "../images/avatar-profile-picture.jpg";
import editProfilePicture from "../images/edit-profile-picture.png";
import editProfileButton from "../images/edit-button.png";
import addCardButton from "../images/cross.svg";

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={profilePicture} />
            <div className="profile__avatar-icon">
              <img src={editProfilePicture} alt="Ícono" />
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Jacques Cousteau</h1>
            <h2 className="profile__job">Explorador</h2>
            <img
              className="profile__edit-button"
              src={editProfileButton}
              alt="boton para la edición del perfil"
            />
          </div>
          <div className="profile__add-button-container">
            <img
              className="profile__add-button"
              src={addCardButton}
              alt="ícono para añadir"
            />
          </div>
        </div>
      </section>

      <section className="popup" id="popup-profile">
        <div className="popup__container">
          <img
            className="popup__close-icon popup__close-icon_profile"
            src=""
            alt="Ícono para cerrar el formulario"
          />
          <h2 className="popup__title">Editar perfil</h2>
          <form className="popup__form" id="popup__form_profile" novalidate>
            <fieldset className="popup__info-field">
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
              <button
                className="popup__button popup__button_profile"
                id="submit-profile"
              >
                Guardar
              </button>
            </fieldset>
          </form>
        </div>
      </section>

      <section className="popup" id="popup-profile-image">
        <div className="popup__container">
          <img
            className="popup__close-icon popup__close-icon_profile"
            src=""
            alt="Ícono para cerrar el formulario"
          />
          <h2 className="popup__title">Cambiar foto de perfil</h2>
          <form
            className="popup__form"
            id="popup__form_profile-picture"
            novalidate
          >
            <fieldset className="popup__info-field">
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
              <button
                className="popup__button popup__button_profile"
                id="submit-profile"
              >
                Guardar
              </button>
            </fieldset>
          </form>
        </div>
      </section>

      <section className="popup" id="popup-cards">
        <div className="popup__container">
          <img
            className="popup__close-icon popup__close-icon_cards"
            src=""
            alt="Ícono para cerrar el formulario"
          />
          <h2 className="popup__title">Nuevo lugar</h2>
          <form className="popup__form" id="popup__form_cards" novalidate>
            <fieldset className="popup__info-field">
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
              <button
                className="popup__button popup__button_cards"
                id="submit-card"
              >
                Guardar
              </button>
            </fieldset>
          </form>
        </div>
      </section>

      <section className="popup" id="popup-image">
        <div className="popup__container popup__container_image">
          <img
            className="popup__close-icon"
            id="image-close-icon"
            src=""
            alt="Ícono para cerrar el formulario"
          />
          <img className="popup__image" src="" alt="imagen" />
          <h2 className="popup__image-title">título</h2>
        </div>
      </section>

      <section className="popup" id="popup-delete-warning">
        <div className="popup__container">
          <img
            className="popup__close-icon popup__close-icon_cards"
            src=""
            alt="Ícono para cerrar el formulario"
          />
          <h2 className="popup__title popup__title_delete-handler">
            ¿Estás seguro?
          </h2>
          <button
            className="popup__button popup__button_delete-handler"
            id="delete-card"
          >
            Sí
          </button>
        </div>
      </section>

      <section className="elements"></section>
    </main>
  );
}

export default Main;
