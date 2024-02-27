import React from "react";
import Item from "./sidebarItem/item";
import { MdDashboard } from "react-icons/md";
import {  FaPaperPlane } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";


interface data{
    name: string;
    icon: any;
}

let allItems:data[] = [{
    name: "Dashboard",
    icon: <MdDashboard/>
},
{
    name: "Campaigns",
    icon: <FaPaperPlane/>
},
{
    name: "Statistics",
    icon: <GoGraph/>
},
{
    name: "Audience",
    icon: <FaPeopleGroup/>
}
,
{
    name:"Education",
    icon:<MdCastForEducation/>
}


]

const Sidebar = ()=>{
    return(
        
        <div className="sidebar h-screen w-[240px] bg-[#082A4D] ">
            <div className="items flex flex-col ">
                {/* sidebar items here */}
                <div className="main-heading w-full h-[60px] px-4 py-2 flex items-center justify-center mb-3">
                    <h2 className="text-[28px] text-white tracking-[10px] font-bold">MYI</h2>
                </div>
                {allItems.map((item,index)=>{
                    return <Item key={index} props={item}/>
                })}
            </div>
        </div>  

    )
}

export default Sidebar;