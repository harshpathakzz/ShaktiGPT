import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Chat from "./components/chat";
import { useState } from "react";

function App() {
  const [chat, setChat] = useState([]);
  
  const sendMessage = (message) => {
    setChat((prevChat) => [...prevChat, message]);
  };

  const receiveMessage = (message) =>{
    setChat((prevChat) => [...prevChat, message]);  
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chat" element={<Chat chat={chat} sendMessage={sendMessage} receiveMessage={receiveMessage} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
