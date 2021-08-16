/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormStyled } from "./FormStyled";
import { register } from "../../redux/operation/authOperation";

const initialState = { name: "", email: "", password: "" };

const Registration = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const handlChange = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handlSubmit = async (event) => {
    const { name, email, password } = state;
    event.preventDefault();

    dispatch(register({ name, email, password }));

    setState({ name: "", email: "", password: "" });
  };

  return (
    <FormStyled onSubmit={handlSubmit}>
      <input
        value={state.name}
        className="form-input"
        type="text"
        name="name"
        placeholder="name"
        onChange={handlChange}
        required
      />
      <input
        value={state.email}
        className="form-input"
        type="email"
        name="email"
        placeholder="e-mail"
        onChange={handlChange}
        required
      />
      <input
        value={state.password}
        className="form-input"
        type="password"
        name="password"
        placeholder="password"
        onChange={handlChange}
        required
      />
      <button type="submit" className="form-button">
        Register
      </button>
    </FormStyled>
  );
};

export default Registration;
