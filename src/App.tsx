import { Route, Routes } from "react-router-dom";

import "./App.css";

import SignInPage from "./pages/SignIn";
import HomePage from "./pages/home";
import SignUpPage from "./pages/SignUp";

import useAuth from "./hooks/useAuth";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/home" element={<HomePage />} />
        </>
      ) : (
        <>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </>
      )}
      ;
    </Routes>
  );
}

export default App;
