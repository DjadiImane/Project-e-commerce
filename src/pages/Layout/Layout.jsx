import { Outlet } from "react-router-dom";

import react from'react'
import BarFin from "../../components/BarFin/BarFin";
import Barseule from "../../components/Barseule/Barseule";
import Search from "../../components/Search/Search";



const Layout = ({ children }) => {
  return (
    <>
      <Barseule />
      <Search/>
      <div>
        {children}
      </div>
      <BarFin/>
    </>
  );
};

export default Layout;

