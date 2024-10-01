import closeIcon from "../images/close-icon.png";

function ImagePopup(props) {
  return (
    <section
      className={`popup ${props.card ? "popup_opened" : ""}`}
      id="popup-image"
    >
      <div className="popup__container popup__container_image">
        <img
          className="popup__close-icon"
          id="image-close-icon"
          src={closeIcon}
          alt="Ícono para cerrar el formulario"
          onClick={props.onClose}
        />
        {props.card && (
          <div>
            <img className="popup__image" src={props.card.link} alt="imagen" />
            <h2 className="popup__image-title">{props.card.name}</h2>
          </div>
        )}
      </div>
    </section>
  );
}

export default ImagePopup;
