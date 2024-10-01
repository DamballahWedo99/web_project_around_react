import trashCan from "../images/trash.svg";
import likeIcon from "../images/corazon-inactivo.svg";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <div className="elements__container">
      <img
        className="elements__trash-can"
        src={trashCan}
        alt="Ícono de un bote de basura"
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
            className="elements__like-icon"
            src={likeIcon}
            alt="Ícono de un signo de me gusta"
          />
          <p className="elements__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
