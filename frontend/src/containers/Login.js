//React
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//Botstrap Style
import Form from "react-bootstrap/Form";

//AWS
import { Auth } from "aws-amplify";

//Internal References
  //.css
    import "./Login.css";
  //libs
    import { useAppContext } from "../libs/contextLib";
    import { onError } from "../libs/errorLib";
    import { useFormFields } from "../libs/hooksLib";
  //components
    import LoaderButton from "../components/LoaderButton";

//Main

export default function Login() {
  const { userHasAuthenticated } = useAppContext();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });

  function validateForm() {
    return filds.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
  
    try {
      await Auth.signIn(fields.email, fields.password);
      userHasAuthenticated(true);
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <LoaderButton
          block
          size="lg"
          type="submit"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Login
        </LoaderButton>
      </Form>
    </div>
  );
}