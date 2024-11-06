import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { DashboardContext } from "../../layout/Root";

const CardDashboard = ({ card, handleRemoveCard, handleAddCard }) => {
  const { dashCardWish } = useContext(DashboardContext);
  const { product_image, product_title, price, description } = card;

  return (
    <div className="md:flex gap-5 items-center bg-t-primary rounded-2xl p-6 my-6">
      <div className="md:w-1/5">
        <img
          className={`w-full rounded-xl object-cover ${
            dashCardWish ? "md:h-[150px] " : "md:h-[200px]"
          } `}
          src={product_image}
          alt=""
        />
      </div>
      <div className="flex justify-between md:w-4/5 mt-5 md:mt-0">
        <div>
          <h3 className="text-2xl font-semibold ">{product_title}</h3>
          <p className="opacity-60 mt-5 mb-4">{description}</p>
          <p className="font-medium opacity-60 mt-2 mb-5">Price: $ {price}</p>
          {dashCardWish ? (
            " "
          ) : (
            <div>
              <button
                onClick={() => handleAddCard(card)}
                className="btn bg-p-primary rounded-3xl px-6 text-t-primary hover:text-p-primary"
              >
                Add To Card <FiShoppingCart className="text-xl" />
              </button>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => handleRemoveCard(card)}
            className="text-4xl text-[red]"
          >
            <IoCloseCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDashboard;
