import React from "react";
import "./Home.module.scss";
import { useUserContext } from "../../context/userContext";
import { Button } from "react-bootstrap";

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

      <h2>Name: {user.displayName}</h2>
      <h2>Email: {user.email}</h2>
      <Button onClick={logoutUser}>Log out</Button>
    </>
  );
};

export default Home;
