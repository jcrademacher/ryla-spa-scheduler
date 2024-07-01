import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import { PageLoader } from "./page-loader";

import { Route } from 'react-router-dom';

// export const ProtectedRoute = ({ element, ...args }) => {
//     // console.log("Testing");
//     return (<Route
//         component={withAuthenticationRequired(element, {})}
//         {...args}
//     />)
// };

export const AuthGuard = ({ component }) => {
    const Component = withAuthenticationRequired(component,{});

    return <Component />;
};