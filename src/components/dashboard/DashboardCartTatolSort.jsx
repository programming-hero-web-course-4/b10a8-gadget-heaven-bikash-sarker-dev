import { TbChartCandleFilled } from "react-icons/tb";
import Modal from "./Modal";

const DashboardCartTatolSort = ({ gadgets, setGadgets }) => {
  //   total money sum working
  let total = 0;
  let totalMoneySum = gadgets.forEach((taka) => {
    total = taka.price + total;
  });
  let totalMoney = Math.round(total);

  //   shopping card sorting working

  const handleCardShoppingSorting = () => {
    setGadgets(
      gadgets.sort((gadget1, gadget2) => gadget2.price - gadget1.price)
    );
  };

  //   purchase function working
  const handlePurchase = () => {
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">Card</h2>
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold">Total cost: $ {totalMoney}</span>
        <button
          onClick={() => handleCardShoppingSorting()}
          className="border border-p-primary py-2 px-6 font-semibold text-lg text-p-primary rounded-full flex items-center"
        >
          Sort by Price <TbChartCandleFilled className="text-xl ml-2" />
        </button>
        <button
          onClick={handlePurchase}
          className={`border bg-p-primary py-2 px-6 text-lg text-t-primary rounded-full ${
            gadgets.length === 0 ? "btn btn-disabled" : ""
          } `}
        >
          Purchase
        </button>
      </div>
      <Modal totalMoney={totalMoney} />
    </div>
  );
};

export default DashboardCartTatolSort;
