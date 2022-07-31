import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import axios from "axios";
import Header from "./pages/Header/Header";
import AuthForm from "./pages/AuthForm/AuthForm";
import Home from "./pages/Home/Home";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AuthContext from "./context/AuthContext";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  //   useEffect(() => {
  //     async function fetchData() {
  //       const cartResponse = await axios.get(
  //         "https://629f94fc461f8173e4ececc6.mockapi.io/cart"
  //       );
  //       const favoriteResponse = await axios.get(
  //         "https://629f94fc461f8173e4ececc6.mockapi.io/favorites"
  //       );
  //       const itemsResponse = await axios.get(
  //         "https://629f94fc461f8173e4ececc6.mockapi.io/decks"
  //       );

  // 	  setCartItems(cartResponse.data);
  //       setFavoriteItems(favoriteResponse.data);
  //       setItems(itemsResponse.data);
  //     }

  //     fetchData();
  //   }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" exact element={<AuthForm />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/register" exact element={<RegisterPage />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
