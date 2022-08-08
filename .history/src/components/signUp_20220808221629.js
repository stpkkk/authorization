import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { Form, Button, Card } from "react-bootstrap";

const SignUp = ({ toggleIndex, index }) => {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };
  return (
	//onSubmit={onSubmit} вешаем на 
    <Card.Body>
      <h2 className="text-center mb-4">Sign Up</h2>
      <Form onSubmit={onSubmit}> 
        <Form.Group className="mb-3" id="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Name" ref={nameRef} required />
        </Form.Group>

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
          className="text-center"
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

export default SignUp;
