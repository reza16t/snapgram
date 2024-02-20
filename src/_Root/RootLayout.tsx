import { Outlet } from "react-router-dom";

import Topbar from "../components/shared/TopBar";
import Bottombar from "../components/shared/BottomBar";
import LeftSidebar from "@/components/shared/LeftSidebar";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex h-full flex-1">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
};

export default RootLayout;
