/** @format */

import React from "react";
import { headerRoutes } from "../../routes/headerRoutes";
import Navigation from "../navigation/Navigation";
import { useLocation } from "react-router-dom";
import { NavigationStyled } from "../navigation/NavigationStyled";
import AuthNav from "../authNav/AuthNav";
import UserMenu from "../usreMenu/UserMenu";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../redux/selectors/contactsSelectors";

const Header = () => {
  const location = useLocation();
  const isAuth = useSelector(getIsAuthenticated);
  return (
    <NavigationStyled>
      <Navigation routes={headerRoutes} prevPathname={location.pathname} />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </NavigationStyled>
  );
};

export default Header;
