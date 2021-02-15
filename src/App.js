import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./footer/Footer";
import MainRouter from "./MainRouter";

const App = () => (
  <BrowserRouter>
    <div>
      <MainRouter />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
