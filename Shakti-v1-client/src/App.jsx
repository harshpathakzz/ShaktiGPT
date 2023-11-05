import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import RequestLoginPage from "./pages/RequestLoginPage";
import SignUpPage from "./pages/SignUpPage";
import LandingPage from "./pages/LandingPage";
import { useSelector } from "react-redux";
import Protected from "./components/Protected";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  console.log(isLoggedIn);

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/request-login" element={<RequestLoginPage />} />

        <Route
          path="/chat"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <ChatPage />
            </Protected>
          }
        />

        <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
      </Routes>
    </>
  );
}

export default App;
