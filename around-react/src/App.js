import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import AddPlacePopup from "./components/AddPlacePopup";
import EditProfilePopup from "./components/EditProfilePopup";
import EditAvatarPopup from "./components/EditAvatarPopup";
import ImagePopup from "./components/ImagePopup";
import AlertPopup from "./components/AlertPopup";
import api from "./utils/api";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import { IsRenderingContext } from "./contexts/IsRenderingContext";

function App() {
  // Popup *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAlertPopupOpen, setIsAlertPopupOpen] = useState(false);
  const [cardSelected, setCardSelected] = useState(null);

  const handlerCardClick = (card) => {
    setCardSelected(card);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAlertPopupOpen(false);
    setCardSelected(null);
    setCardToDelete(null);
  };

  // User *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUser().then((userInfo) => {
      setCurrentUser(userInfo);
    });
  }, []);

  function handleUpdateUser({ name, about }) {
    renderHandler(true);
    api
      .setUserInfo(name, about)
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .finally(() => {
        renderHandler(false);
        closeAllPopups();
      });
  }

  function handleUpdateAvatar({ avatar }) {
    renderHandler(true);
    api
      .updateProfileImage(avatar)
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .finally(() => {
        renderHandler(false);
        closeAllPopups();
      });
  }

  //Cards *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
  const [cards, setCards] = useState([]);
  const [cardToDelete, setCardToDelete] = useState(null);

  useEffect(() => {
    api.getInitialCards().then((cards) => {
      setCards(cards);
    });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  const handleDeleteClick = (card) => {
    setCardToDelete(card);
    setIsAlertPopupOpen(true);
  };

  function handleCardDelete() {
    if (cardToDelete) {
      api
        .deleteCard(cardToDelete._id)
        .then(() => {
          setCards((state) => state.filter((i) => i._id !== cardToDelete._id));
        })
        .finally(() => {
          setCardToDelete(null);
          closeAllPopups();
        });
    }
  }

  function handleAddPlaceSubmit({ name, link }) {
    renderHandler(true);
    api
      .postNewCard(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .finally(() => {
        closeAllPopups();
        renderHandler(false);
      });
  }

  //Rendering *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

  const [isRendering, setIsRendering] = useState(false);

  function renderHandler(isRendering) {
    setIsRendering(isRendering);
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handlerCardClick}
          onCardLike={handleCardLike}
          cards={cards}
          onDeleteClick={handleDeleteClick}
        />
        <Footer />

        <IsRenderingContext.Provider value={isRendering}>
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlaceSubmit={handleAddPlaceSubmit}
          />

          <ImagePopup onClose={closeAllPopups} card={cardSelected} />

          <AlertPopup
            onClose={closeAllPopups}
            isOpen={isAlertPopupOpen}
            onDeleteSubmit={handleCardDelete}
          />
        </IsRenderingContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
