import { useContext, useEffect, useRef } from "react";
import closeIcon from "../images/close-icon.png";
import { IsRenderingContext } from "../contexts/IsRenderingContext";
import FormValidator from "../utils/FormValidator";

function PopupWithForm(props) {
  const buttonText = props.buttonText || "Guardar";
  const isRendering = useContext(IsRenderingContext);
  const formRef = useRef(null);

  const formSettings = {
    inputSelector: ".popup__input",
    fieldsetSelector: ".popup__info-field",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__input-error_active",
  };

  useEffect(() => {
    if (props.isOpen) {
      const validator = new FormValidator(formSettings, ".popup__form");
      validator.enableValidation();

      return () => {
        validator.resetValidation();
      };
    }
  });

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
          noValidate
          onSubmit={props.onSubmit}
          ref={formRef}
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
