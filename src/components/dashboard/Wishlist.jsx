import { useContext } from "react";
import { toast } from "react-toastify";
import { CardContext, WishListContext } from "../../layout/Root";
import CardDashboard from "./CardDashboard";
import NotAddCard from "./NotAddCard";

const Wishlist = () => {
  const { wishlists, setWishlists } = useContext(WishListContext);
  let [gadgets, setGadgets] = useContext(CardContext);

  //   add cart shopping function working
  const handleAddCard = (gadget) => {
    let findValue = gadgets.find(
      (item) => item.product_id === gadget.product_id
    );
    let add = [...gadgets, gadget];
    if (!findValue) {
      setGadgets(add);
      toast.success("Your Product is add card successful ! ");
    } else {
      toast.warn("All ready Add the some Product ");
    }
  };

  //   remove function working
  const handleRemoveCard = (card) => {
    let cartRemove = wishlists.filter(
      (gadget) => gadget.product_id !== card.product_id
    );
    toast.error("Your wishlist removed !");
    setWishlists(cartRemove);
  };
  return (
    <div className="max-w-7xl mx-auto ">
      <h2 className="text-3xl font-bold">WishList : </h2>
      <div>
        {wishlists.length === 0 ? (
          <NotAddCard />
        ) : (
          wishlists.map((wish) => (
            <CardDashboard
              key={wish.product_id}
              card={wish}
              handleRemoveCard={handleRemoveCard}
              handleAddCard={handleAddCard}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
