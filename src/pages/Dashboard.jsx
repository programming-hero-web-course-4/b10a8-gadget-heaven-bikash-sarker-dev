import { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import DashboardMain from "../components/dashboard/DashboardMain";
import Wishlist from "../components/dashboard/Wishlist";
import { DashboardContext } from "../layout/Root";

const Dashboard = () => {
  const { dashCardWish } = useContext(DashboardContext);

  return (
    <div className="bg-[#f6f6f6] py-24">
      <HelmetProvider>
        <Helmet>
          <title>Dashboard | Gadgets Heaven</title>
        </Helmet>
      </HelmetProvider>
      {dashCardWish ? <DashboardMain /> : <Wishlist />}
    </div>
  );
};

export default Dashboard;
