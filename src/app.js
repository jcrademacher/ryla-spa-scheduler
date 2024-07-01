import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminPage } from "./pages/admin-page";
import { HomePage } from "./pages/home-page";
import { NotFoundPage } from "./pages/not-found-page";
import { ProfilePage } from "./pages/profile-page";
import { ProtectedPage } from "./pages/protected-page";
import { PublicPage } from "./pages/public-page";
import { CallbackPage } from "./pages/callback-page";
// import { ProtectedRoute } from "./components/auth-guard";
import { PageLoader } from "./components/page-loader";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthGuard } from "./components/auth-guard";

// function Main() {
//   return (
//     <div>
//       logged in
//     </div>
//   )
// }

const Main = () => {
  return (
    <div>
      logged in
    </div>
  )
}

export const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<AuthGuard component={HomePage}/>} />
      <Route path="/callback" element={<CallbackPage/>}/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
