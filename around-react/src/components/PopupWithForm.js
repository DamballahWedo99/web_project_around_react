import closeIcon from "../images/close-icon.png";

function PopupWithForm(props) {
  const buttonText = props.buttonText || "Guardar";

  return (
    <section
      className={`popup ${props.isOpen ? "popup_opened" : ""}`}
      id={`popup-${props.name}`}
    >
      <div className="popup__container">
        <img
          className="popup__close-icon popup__close-icon_profile"
          src={closeIcon}
          alt="Ícono para cerrar el formulario"
          onClick={props.onClose}
        />
        <h2 className="popup__title">{props.title}</h2>
        <form
          className="popup__form"
          id={`popup__form_${props.name}`}
          novalidate
        >
          <fieldset className="popup__info-field">
            {props.children}
            <button className="popup__button" id="submit-profile">
              {buttonText}
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
