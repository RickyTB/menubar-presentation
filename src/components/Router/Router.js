import React from "react";

import {HOME, INFO} from "../../helpers/constants";
import Landing from "../../pages/1Landing";
import Information from "../../pages/2Information";

const routes = {
    [HOME]: Landing,
    [INFO]: Information,
};

const Router = ({currentPage, onPageSelected}) => {
    const Component = routes[currentPage];
    return (
        <Component/>
    );
};

export default Router;