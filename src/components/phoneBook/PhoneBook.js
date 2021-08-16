/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVisibleContact } from "../../redux/selectors/contactsSelectors";
import { deleteContactOperation } from "../../redux/operation/contactOperation";
import { PhoneBookStyled } from "./PhoneBookStyles";

const PhoneBook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContact);

  return contacts.map((contact) => (
    <PhoneBookStyled key={contact.id}>
      <p className="textContact">{contact.name}</p>
      <p className="textContact">:</p>
      <p className="textContact">{contact.number}</p>
      <button
        type="button"
        className="form-button"
        onClick={() => dispatch(deleteContactOperation(contact.id))}
      >
        Delete
      </button>
    </PhoneBookStyled>
  ));
};

export default PhoneBook;
