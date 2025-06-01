import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "./contexts/CurrentUserContext.js";
import api from "./utils/Api.js";

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "Joel Miller",
    avatar:
      "https://fotografias.antena3.com/clipping/cmsimages02/2024/05/16/8F77CEFB-88BC-41F2-BFCB-7232ECA93B09/pedro-pascal-como-joel-the-last-2_104.jpg?crop=2160,2160,x583,y0&width=1200&height=1200&optimize=low&format=webply",
    about: "Nini",
  });

  useEffect(() => {
    (async () => {
      await api.getUserData().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.updateUserData(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  const handleUpdateUserAvatar = (data) => {
    (async () => {
      await api.updateUserAvatar(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data);
    });
  }, []);

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    await api
      .handleCardLike(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    await api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((error) => console.error(error));
  }

  async function handleAddCard(newCard) {
    await api
      .addCard(newCard)
      .then((addedCard) => {
        setCards([addedCard, ...cards]);
      })
      .catch((error) => console.error(error));
    handleClosePopup();
  }

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateUserAvatar }}
    >
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAddCard={handleAddCard}
          setCurrentUser={setCurrentUser}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
