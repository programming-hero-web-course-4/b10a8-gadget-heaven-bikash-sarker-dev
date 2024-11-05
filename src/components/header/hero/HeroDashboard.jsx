import { useContext } from "react";
import { DashboardContext } from "../../../layout/Root";

const HeroDashboard = () => {
  const { setDashCardWish } = useContext(DashboardContext);
  const { dashCardWish } = useContext(DashboardContext);

  const handleCard = () => {
    setDashCardWish(true);
  };

  const handleWishlist = () => {
    setDashCardWish(false);
  };
  return (
    <div className="hero relative bg-p-primary">
      <div className="hero-content text-center">
        <div className="my-12">
          <h1 className="text-5xl font-bold text-t-primary leading-[65px]">
            Dashboard
          </h1>
          <p className="max-w-2xl mx-auto my-3 text-t-primary ">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>

          <div className="mt-8">
            <button
              onClick={handleCard}
              className={`${
                dashCardWish ? "bg-t-primary text-p-primary" : " "
              }  mr-6 py-2 px-8 border border-[#fff] rounded-3xl font-semibold`}
            >
              Card
            </button>
            <button
              onClick={handleWishlist}
              className={`${
                !dashCardWish ? "bg-t-primary text-p-primary" : " "
              }  mr-6 py-2 px-8 border border-[#fff] rounded-3xl font-semibold`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDashboard;
