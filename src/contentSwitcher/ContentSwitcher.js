/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { getIsAuthenticated } from "../redux/selectors/contactsSelectors";
import PriverRoutes from "../routes/PriverRoutes";
import PublicRoutes from "../routes/PublicRoutes";

const ContentSwitcher = ({ routes }) => {
  const isAuth = useSelector(getIsAuthenticated);

  return (
    <Switch>
      {routes.map((route) =>
        route.isPrived ? (
          <PriverRoutes {...route} key={route.path} isAuth={isAuth} />
        ) : (
          <PublicRoutes {...route} key={route.path} isAuth={isAuth} />
        )
      )}
    </Switch>
  );
};

export default ContentSwitcher;
