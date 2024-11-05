import { useContext } from "react";
import { toast } from "react-toastify";
import { CardContext } from "../../layout/Root";
import CardDashboard from "./CardDashboard";
import DashboardCartTatolSort from "./DashboardCartTatolSort";
import NotAddCard from "./NotAddCard";

const DashboardMain = () => {
  const [gadgets, setGadgets] = useContext(CardContext);

  //   remove function working
  const handleRemoveCard = (card) => {
    let cartRemove = gadgets.filter(
      (gadget) => gadget.product_id !== card.product_id
    );
    toast.error("Your product removed !");
    setGadgets(cartRemove);
  };

  return (
    <div className="max-w-7xl mx-auto ">
      <DashboardCartTatolSort gadgets={gadgets} setGadgets={setGadgets} />
      <div className="mt-10">
        {gadgets?.length === 0 ? (
          <NotAddCard />
        ) : (
          gadgets?.map((card, i) => (
            <CardDashboard
              key={i}
              card={card}
              handleRemoveCard={handleRemoveCard}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default DashboardMain;
