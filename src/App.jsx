import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppContext } from "./context/Context";
import Home from "./pages/Home";
import Result from "./pages/Result";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/result/:q" element={<Result />}></Route>
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
