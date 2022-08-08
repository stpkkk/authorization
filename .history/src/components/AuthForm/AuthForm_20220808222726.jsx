import React, { useState } from "react";
import { Card } from "react-bootstrap";

import SignIn from "../signIn";
import SignUp from "../signUp";

const AuthForm = () => {
  const [authIndex, setAuthIndex] = useState(false);
  const toggleAuthIndex = () => {
    setAuthIndex((prevState) => !prevState);
  };
  

  return (
    <>
      <div className="container">
        
      </div>
      <Card className="bg-dark">
	  {!authIndex ? <SignIn toggleIndex={toggleAuthIndex} index={authIndex}/> : <SignUp toggleIndex={toggleAuthIndex} index={authIndex}/>}
	  
      </Card>
    </>
  );
};

export default AuthForm;
