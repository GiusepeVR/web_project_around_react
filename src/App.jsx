import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useEffect, useState } from "react";
import api from "./utils/Api.js";
import { CurrentUserContext } from "./contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});

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
      });
    })();
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
      <div className="page">
        <Header />
        {/* <Main setCurrentUser={setCurrentUser} /> */}
        <Main setCurrentUser={setCurrentUser} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
