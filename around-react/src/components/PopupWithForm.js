import { useContext, useEffect } from "react";
import closeIcon from "../images/close-icon.png";
import { IsRenderingContext } from "../contexts/IsRenderingContext";

function PopupWithForm(props) {
  const buttonText = props.buttonText || "Guardar";

  function handleOutsideClickClose(e) {
    if (!e.target.closest(".popup__container")) {
      props.onClose();
    }
  }

  useEffect(() => {
    if (props.isOpen) {
      document.addEventListener("keydown", handleEscClose);
    }
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  });

  function handleEscClose(e) {
    if (e.key === "Escape") {
      props.onClose();
    }
  }

  const isRendering = useContext(IsRenderingContext);

  return (
    <section
      className={`popup ${props.isOpen ? "popup_opened" : ""}`}
      id={`popup-${props.name}`}
      onClick={handleOutsideClickClose}
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
          noValidate
          onSubmit={props.onSubmit}
        >
          <fieldset className="popup__info-field">
            {props.children}
            <button className="popup__button" id="submit-profile">
              {isRendering ? "Guardando..." : buttonText}
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
