// import { useEffect, useState } from "react";
import { TbChartCandleFilled } from "react-icons/tb";
import Modal from "./Modal";

const DashboardCartTatolSort = ({ gadgets, setGadgets }) => {
  let total = 0;
  let totalMoneySum = gadgets.forEach((taka) => {
    total = taka.price + total;
  });
  let totalMoney = Math.round(total);

  //   shopping card sorting working
  const handleCardShoppingSorting = () => {
    let descendingOrder = [...gadgets].sort(
      (des1, des2) => des2.price - des1.price
    );
    setGadgets(descendingOrder);
  };

  //   purchase function working
  const handlePurchase = () => {
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <div className="md:flex justify-between">
      <h2 className="text-3xl font-bold">Card</h2>
      <div className="sm:flex items-center space-y-4 sm:space-y-0  gap-4 text-center">
        <span className="text-xl font-bold">Total cost: $ {totalMoney}</span>
        <button
          onClick={handleCardShoppingSorting}
          className="border border-p-primary w-full sm:w-auto py-2 px-6 font-semibold text-lg text-p-primary rounded-full flex items-center justify-center"
        >
          Sort by Price <TbChartCandleFilled className="text-xl ml-2" />
        </button>
        <button
          onClick={handlePurchase}
          className={`border bg-p-primary py-2 px-6 text-lg w-full sm:w-auto text-t-primary rounded-full ${
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
