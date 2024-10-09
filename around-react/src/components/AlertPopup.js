import PopupWithForm from "./PopupWithForm";

function AlertPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();

    props.onDeleteSubmit();
  }

  return (
    <PopupWithForm
      name="delete-warning"
      title="¿Estás seguro?"
      buttonText="Si"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default AlertPopup;
