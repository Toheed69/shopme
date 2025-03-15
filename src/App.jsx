import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Men from "./components/men-wear/Men";
import Electronics from "./components/Electronics/Electronics";
import Home from "./components/home";
import Toprated from "./components/toprated/topRated";
import TopDetail from "./components/toprated/topDetails";
import Kids from "./components/kids/Kids";
import KidsDetail from "./components/toprated/topDetails";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">

        <Navbar handleOrderPopup={handleOrderPopup} />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        <Routes>
          <Route path="/" element={
              <Home />
           
          } />
          <Route path="/kids" element={<Kids handleOrderPopup={handleOrderPopup} />} />
          <Route path="/men-wear" element={<Men handleOrderPopup={handleOrderPopup} />} />
          <Route path="/electronics" element={<Electronics handleOrderPopup={handleOrderPopup} />} />
          <Route path="/top-rated" element={<Toprated handleOrderPopup={handleOrderPopup} />} />
          <Route path="/top-rated/:id" element={<TopDetail handleOrderPopup={handleOrderPopup} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
