import { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const [name, setName] = useState();
  const [description, setDescription] = useState();

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "about") {
      setDescription(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Editar perfil"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label" htmlFor="name">
        <input
          className="popup__input"
          type="text"
          id="name"
          name="name"
          placeholder="Nombre"
          required
          minLength="2"
          maxLength="40"
          value={name}
          onChange={handleChange}
        />
        <span className="popup__input-error name-error"></span>
      </label>
      <label className="popup__label" htmlFor="about">
        <input
          className="popup__input"
          type="text"
          id="about"
          name="about"
          placeholder="Acerca de mí"
          required
          minLength="2"
          maxLength="200"
          value={description}
          onChange={handleChange}
        />
        <span className="popup__input-error about-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
