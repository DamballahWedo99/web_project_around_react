import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "link") {
      setLink(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlaceSubmit({
      name,
      link,
    });
  }

  useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="cards"
      title="Nuevo lugar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label" htmlFor="title">
        <input
          className="popup__input"
          type="text"
          id="title"
          name="name"
          placeholder="Título"
          minLength="2"
          maxLength="30"
          onChange={handleChange}
          value={name}
          required
        />
        <span className="popup__input-error title-error"></span>
      </label>
      <label className="popup__label" htmlFor="image-url">
        <input
          className="popup__input"
          type="url"
          id="image-url"
          name="link"
          placeholder="Link de la imagen"
          onChange={handleChange}
          value={link}
          required
        />
        <span className="popup__input-error image-url-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
