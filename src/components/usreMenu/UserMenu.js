/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/operation/authOperation";
import { getUserName } from "../../redux/selectors/contactsSelectors";
import { AuthNavStyled } from "../authNav/authNavStyled";

const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <AuthNavStyled>
      <span className="userName">{name}</span>
      <button
        type="button"
        className="logout-button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </AuthNavStyled>
  );
};

export default UserMenu;
