import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppContext } from "./context/Context";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Result from "./pages/Result";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/result/:query" element={<Result />}></Route>
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
