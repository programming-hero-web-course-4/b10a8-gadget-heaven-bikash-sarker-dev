import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useLoaderData, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { CardContext } from "../../layout/Root";
import Rating from "./Rating";

const DetailsCard = () => {
  let location = useLocation();
  let [gadgets, setGadgets] = useContext(CardContext);
  let data = useLoaderData();
  let detailsProductId = location.pathname.split("/")[2];

  let detailsFind = data.find(
    (product) => product.product_id === detailsProductId
  );

  const {
    Specification,
    availability,
    category,
    description,
    price,
    product_image,
    product_title,
    rating,
  } = detailsFind;

  //  product adding for card
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

  return (
    <div className="max-w-7xl mx-auto  bg-t-primary rounded-2xl p-6 relative -top-48">
      <div className="md:flex space-x-6 items-stretch">
        <div className="w-2/5">
          <img
            className="rounded-xl h-[490px] w-full"
            src={product_image}
            alt={product_title}
          />
        </div>
        <div className="w-3/5">
          <div>
            <h3 className="text-2xl font-semibold ">{product_title}</h3>
            <p className="font-medium opacity-60 mt-2 mb-5">Price: $ {price}</p>

            {availability ? (
              <span className="border border-[#309C08] bg-[#f0fdf4] py-2 px-4 rounded-3xl text-[#309C08]">
                In Stock
              </span>
            ) : (
              <span className="border border-[#ccc] py-2 px-3 rounded-3xl text-[#475569]">
                Out Stock
              </span>
            )}

            <p className="opacity-60 mt-5 mb-4">{description}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold ">Specification:</h4>
            <ol className="list-decimal ml-6">
              {Specification?.map((config, i) => (
                <li key={i} className="opacity-60 my-1">
                  {config}
                </li>
              ))}
            </ol>
          </div>
          <Rating rating={rating} />
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleAddCard(detailsFind)}
              className="btn bg-p-primary rounded-3xl px-8 text-t-primary hover:text-p-primary"
            >
              Add To Card <FiShoppingCart className="text-xl" />
            </button>
            <button className="btn btn-outline btn-circle ">
              <FaRegHeart className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
