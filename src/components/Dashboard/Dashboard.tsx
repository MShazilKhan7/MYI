import React from "react";
import Sidebar from "./sidebar/sidebar";
import { Outlet } from "react-router-dom";


const DashboardLayout = ()=>{
    return(
        <>
            {/* sidebar */}
            <Sidebar/>
            <Outlet/>
        </>
    )
}

export default DashboardLayout;