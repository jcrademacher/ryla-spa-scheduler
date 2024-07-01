import React from "react";
// import { Auth0Features } from "../components/auth0-features";
// import { HeroBanner } from "../components/hero-banner";
// import { PageLayout } from "../components/page-layout";
import {useAuth0} from '@auth0/auth0-react'
import Button from 'react-bootstrap/Button';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    console.log("Login handle");
    
    loginWithRedirect({
      appState: {
        returnTo: "/home",
      },
    });
  };

  return <Button onClick={handleLogin}>Log In</Button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button onClick={() => logout({ logoutParams: { returnTo: "https://ryla7780.org" } })}>
      Log Out
    </Button>
  );
};

export const HomePage = () => (
  <div id="main">
    <LoginButton/>
    <LogoutButton/>
  </div>
);
