/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/operation/authOperation";
import { FormStyled } from "../registration/FormStyled";

const initialState = { email: "", password: "" };

const Login = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const handlChange = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handlSubmit = async (event) => {
    const { email, password } = state;
    event.preventDefault();

    dispatch(logIn({ email, password }));

    setState({ email: "", password: "" });
  };

  return (
    <FormStyled className="form" onSubmit={handlSubmit}>
      <input
        value={state.email}
        className="form-input"
        type="email"
        name="email"
        placeholder="e-mail"
        onChange={handlChange}
        autoComplete="off"
        required
      />
      <input
        value={state.password}
        className="form-input"
        type="password"
        name="password"
        placeholder="password"
        onChange={handlChange}
        autoComplete="off"
        required
      />
      <button type="submit" className="form-button">
        Sing In
      </button>
    </FormStyled>
  );
};

export default Login;
