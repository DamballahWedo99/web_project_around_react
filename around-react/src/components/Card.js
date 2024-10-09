import trashCan from "../images/trash.svg";
import likeIcon from "../images/corazon-inactivo.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  function handleClick() {
    props.onCardClick(props.card);
  }

  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `elements__trash-can ${
    isOwn ? "elements__trash-can_visible" : "elements__trash-can_hidden"
  }`;

  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `elements__like-icon ${
    isLiked ? "elements__like-icon-active" : { trashCan }
  }`;

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onDeleteClick(props.card);
  }

  return (
    <div className="elements__container">
      <img
        className={cardDeleteButtonClassName}
        src={trashCan}
        alt="Ícono de bote de basura"
        onClick={handleDeleteClick}
      />
      <img
        className="elements__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="elements__info">
        <span className="elements__name">{props.card.name}</span>
        <div className="elements__like-container">
          <img
            className={cardLikeButtonClassName}
            src={likeIcon}
            alt="Ícono de un signo de me gusta"
            onClick={handleLikeClick}
          />
          <p className="elements__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
