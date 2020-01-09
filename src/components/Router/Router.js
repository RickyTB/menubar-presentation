import React from "react";

import {AJAX, HOME, INFO, RESOURCES, USAGE} from "../../helpers/constants";
import Landing from "../../pages/1Landing";
import Information from "../../pages/2Information";
import Usage from "../../pages/3Usage";
import Ajax from "../../pages/4Ajax";
import Resources from "../../pages/5Resources";

const routes = {
    [HOME]: Landing,
    [INFO]: Information,
    [USAGE]: Usage,
    [AJAX]: Ajax,
    [RESOURCES]: Resources,
};

const Router = ({currentPage, onPageSelected}) => {
    const Component = routes[currentPage];
    return (
        <Component/>
    );
};

export default Router;