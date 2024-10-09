import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const newAvatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const avatarValue = newAvatarRef.current.value;

    props.onUpdateAvatar({
      avatar: avatarValue,
    });
  }

  React.useEffect(() => {
    if (props.isOpen && newAvatarRef.current) {
      newAvatarRef.current.value = "";
    }
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="profile-image"
      title="Cambiar foto de perfil"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label" htmlFor="image-update">
        <input
          className="popup__input"
          type="url"
          id="image-update"
          name="link"
          placeholder="Link de la imagen"
          required
          ref={newAvatarRef}
        />
        <span className="popup__input-error image-update-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
