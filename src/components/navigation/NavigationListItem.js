/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../redux/selectors/contactsSelectors";

const NavigationListItem = ({
  path,
  exact,
  name,
  url = "",
  prevPathname = "",
  isPrived,
  restricted,
}) => {
  const isAuth = useSelector(getIsAuthenticated);

  return (
    <>
      {!isPrived && !restricted && (
        <li className="navigationItem">
          <NavLink
            className="navigationLink"
            activeClassName="activNavigationLink"
            to={{ pathname: url + path, state: { from: prevPathname } }}
            exact={exact}
          >
            {name}
          </NavLink>
        </li>
      )}
      {isPrived && !restricted && isAuth && (
        <li className="navigationItem">
          <NavLink
            className="navigationLink"
            activeClassName="activNavigationLink"
            to={{ pathname: url + path, state: { from: prevPathname } }}
            exact={exact}
          >
            {name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationListItem;
