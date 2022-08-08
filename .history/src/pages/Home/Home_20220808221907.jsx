import React from "react";
import "./Home.module.scss";
import { useUserContext } from "../../context/userContext";

const Home = () => {
  const { user, logoutUser } = useUserContext();
  
  return (
    <>
      <div>
        <img
          src="https://leonardo.osnova.io/98f586a3-d6c0-8d56-4858-6f2f8bb0ca04/-/preview/800/-/format/webp/"
          alt="Ah shit, here we go again"
        />
      </div>
      <h2>Name : {user.name}</h2>
      <h2>Email : {user.email}</h2>
      <button onClick={logoutUser}>Log out</button>
    </>
  );
};

export default Home;
