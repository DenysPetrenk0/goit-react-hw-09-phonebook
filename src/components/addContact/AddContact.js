/** @format */
import React, { useEffect, useState } from "react";
import { AddContactStyled } from "./AddContactStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  addContactOperation,
  getContactOperation,
} from "../../redux/operation/contactOperation";
import { getContacts } from "../../redux/selectors/contactsSelectors";

const initialState = { name: "", number: "" };

const AddContact = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  useEffect(() => {
    dispatch(getContactOperation());
  }, [dispatch]);

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    const { name, number } = state;
    event.preventDefault();
    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContactOperation({ name, number }));
      setState({ name: "", number: "" });
    }
  };

  return (
    <AddContactStyled onSubmit={onSubmit}>
      <input
        value={state.name}
        type="text"
        name="name"
        autoComplete="off"
        placeholder="Name"
        className="form-input"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={onHandleChange}
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <input
        value={state.number}
        type="tel"
        name="number"
        autoComplete="off"
        placeholder="Number"
        className="form-input"
        onChange={onHandleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <button type="submit" className="form-button">
        Add Contact
      </button>
    </AddContactStyled>
  );
};

export default AddContact;
