/** @format */

import React from "react";
import { DivFindContact } from "./FindContactStyles";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "../../redux/actions/contactsAction";

const FindContact = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const onHandleChange = (event) => {
    const query = event.target.value;
    dispatch(filterContacts(query));
  };

  return (
    <DivFindContact>
      <input
        type="text"
        value={filter}
        name="filter"
        autoComplete="off"
        className="form-input"
        onChange={onHandleChange}
      />
    </DivFindContact>
  );
};

export default FindContact;
