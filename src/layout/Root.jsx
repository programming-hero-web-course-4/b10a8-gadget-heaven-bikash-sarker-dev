import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
export const CardContext = createContext();

const Root = () => {
  const [gadgets, setGadgets] = useState([]);
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
        <Header />
        <Outlet />
        <Footer />
      </CardContext.Provider>
    </div>
  );
};

export default Root;
