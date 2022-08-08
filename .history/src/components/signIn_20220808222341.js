import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { Form, Button, Card } from "react-bootstrap";

const SignIn = ({ toggleIndex, index }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };
  return (
    <Card.Body>
      <h2 className="text-center mb-4">Sign In</h2>
          onSubmit={onSubmit}
      <Form >
	  onSubmit={onSubmit}

        <Form.Group className="mb-3" id="email">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={emailRef}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" id="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </Form.Group>

        <div
          className="text-center mb-4"
          style={{ cursor: "pointer" }}
          onClick={forgotPasswordHandler}
        >
          Forgot password?
        </div>

        <div
          className="text-center mb-4 mt-4"
          style={{ cursor: "pointer" }}
          onClick={toggleIndex}
        >
          {!index ? "New user? Click here " : "Already have an account?"}
        </div>

        <Button
          className="w-100 text-center mt-3"
          variant="primary"
          type="submit"
        >
          {!index ? "Sign In" : "Sign Up"}
        </Button>
      </Form>
    </Card.Body>
  );
};

export default SignIn;
