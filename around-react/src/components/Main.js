import editProfilePicture from "../images/edit-profile-picture.png";
import editProfileButton from "../images/edit-button.png";
import addCardButton from "../images/cross.svg";
import { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div
            className="profile__avatar-container"
            onClick={props.onEditAvatarClick}
          >
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="imagen de usuario"
            />
            <div className="profile__avatar-icon">
              <img src={editProfilePicture} alt="Ícono" />
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <h2 className="profile__job">{currentUser.about}</h2>
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

      <section className="elements">
        {props.cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onDeleteClick={props.onDeleteClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
