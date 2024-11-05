import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Success from "../../assets/images/success.png";
import { CardContext } from "../../layout/Root";

const Modal = ({ totalMoney }) => {
  const navigate = useNavigate();
  const [gadgets, setGadgets] = useContext(CardContext);

  const handleModalCloseAndPurchase = () => {
    document.getElementById("my_modal_1").close();
    setGadgets([]);
    navigate("/");
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box text-center flex flex-col items-center max-w-96">
        <img src={Success} alt="" />
        <h3 className="font-bold text-xl mt-3">Payment Successfully</h3>
        <div className="divider"></div>
        <p className="opacity-70">Thanks for purchasing</p>
        <p className="opacity-70 mt-1">Total: $ {totalMoney}</p>
        <div className="mt-4 w-full">
          <button
            onClick={handleModalCloseAndPurchase}
            className="btn btn-block "
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
