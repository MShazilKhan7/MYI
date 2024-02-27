import React from "react";
import Sidebar from "./sidebar/sidebar";
import { Outlet } from "react-router-dom";
import Dbnavbar from "./navbar/dbNavbar";

const DashboardLayout = ()=>{
    return(
        <>
            <div className="dashboard-layout flex h-screen w-full">
                <div className="left-content w-[240px] h-full">
                            {/* sidebar  */}
                            <Sidebar/>
                </div>
                <div className="right-content  w-[calc(100%-240px)] h-full">
                        <Dbnavbar/>
                        <Outlet/>
                        {/* navbar */}
                        {/* more conten */}
                </div>
            </div>
        </>
    )
}

export default DashboardLayout;