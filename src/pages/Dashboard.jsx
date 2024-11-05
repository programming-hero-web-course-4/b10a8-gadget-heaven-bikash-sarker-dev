import { useContext } from "react";
import DashboardMain from "../components/dashboard/DashboardMain";
import Wishlist from "../components/dashboard/Wishlist";
import { DashboardContext } from "../layout/Root";

const Dashboard = () => {
  const { dashCardWish } = useContext(DashboardContext);
  console.log(dashCardWish);
  return (
    <div className="bg-[#f6f6f6] py-24">
      {dashCardWish ? <DashboardMain /> : <Wishlist />}
    </div>
  );
};

export default Dashboard;
