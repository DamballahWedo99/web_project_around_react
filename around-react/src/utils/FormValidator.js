class FormValidator {
  constructor(formData, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = formData.inputSelector;
    this._fieldsetSelector = formData.fieldsetSelector;
    this._submitButtonSelector = formData.submitButtonSelector;
    this._inactiveButtonClass = formData.inactiveButtonClass;
    this._inputErrorClass = formData.inputErrorClass;
    this._errorClass = formData.errorClass;
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _checkValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }

  _setEventListener(formElement) {
    const inputList = Array.from(
      formElement.querySelectorAll(this._inputSelector)
    );
    const buttonElement = formElement.querySelector(this._submitButtonSelector);

    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._formSelector));

    formList.forEach((formElement) => {
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });

      const fielsetList = Array.from(
        formElement.querySelectorAll(this._fieldsetSelector)
      );

      fielsetList.forEach((fieldset) => {
        this._setEventListener(fieldset);
      });
    });
  }

  resetValidation() {
    const formList = Array.from(document.querySelectorAll(this._formSelector));

    formList.forEach((formElement) => {
      const inputList = Array.from(
        formElement.querySelectorAll(this._inputSelector)
      );

      const buttonElement = formElement.querySelector(
        this._submitButtonSelector
      );

      inputList.forEach((inputElement) => {
        this._hideInputError(formElement, inputElement);
      });

      this._toggleButtonState(inputList, buttonElement);
    });
  }
}

export default FormValidator;
