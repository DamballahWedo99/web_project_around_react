import profilePicture from "../images/avatar-profile-picture.jpg";
import editProfilePicture from "../images/edit-profile-picture.png";
import editProfileButton from "../images/edit-button.png";
import addCardButton from "../images/cross.svg";

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div
            className="profile__avatar-container"
            onClick={props.onEditAvatarClick}
          >
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
              onClick={props.onEditProfileClick}
            />
          </div>
          <div
            className="profile__add-button-container"
            onClick={props.onAddPlaceClick}
          >
            <img
              className="profile__add-button"
              src={addCardButton}
              alt="ícono para añadir"
            />
          </div>
        </div>
      </section>

      {/* <section className="popup" id="popup-image">
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
      </section> */}

      <section className="elements"></section>
    </main>
  );
}

export default Main;
