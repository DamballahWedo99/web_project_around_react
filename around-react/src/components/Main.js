import editProfilePicture from "../images/edit-profile-picture.png";
import editProfileButton from "../images/edit-button.png";
import addCardButton from "../images/cross.svg";
import api from "../utils/api";
import { useEffect, useState } from "react";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userAbout, setUserAbout] = useState("");
  const [userAvatar, setUserAvatar] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUser().then((userData) => {
      setUserName(userData.name);
      setUserAbout(userData.about);
      setUserAvatar(userData.avatar);
    });

    api.getInitialCards().then((cards) => {
      setCards(cards);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div
            className="profile__avatar-container"
            onClick={props.onEditAvatarClick}
          >
            <img className="profile__avatar" src={userAvatar} />
            <div className="profile__avatar-icon">
              <img src={editProfilePicture} alt="Ícono" />
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <h2 className="profile__job">{userAbout}</h2>
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
        {cards.map((card) => (
          <Card card={card} key={card._id} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
