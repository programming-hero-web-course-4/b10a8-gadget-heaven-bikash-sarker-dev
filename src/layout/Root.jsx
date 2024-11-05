import { createContext, useState } from "react";

import { Outlet } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export const CardContext = createContext();
export const DashboardContext = createContext();
export const WishListContext = createContext(true);

const Root = () => {
  const [gadgets, setGadgets] = useState([]);
  const [wishlists, setWishlists] = useState([]);
  const [dashCardWish, setDashCardWish] = useState(true);

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <CardContext.Provider value={[gadgets, setGadgets]}>
        <WishListContext.Provider value={{ wishlists, setWishlists }}>
          <DashboardContext.Provider value={{ dashCardWish, setDashCardWish }}>
            <Header />
            <Outlet />
            <Footer />
          </DashboardContext.Provider>
        </WishListContext.Provider>
      </CardContext.Provider>
    </div>
  );
};

export default Root;
