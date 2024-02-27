import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";



const Dbnavbar = ()=>{
    return (
        <>
            <div className="dbNavbar w-full h-[60px] px-4 py-2">
                <div className="w-full h-full flex items-center justify-between">
                    <p className="text-lg font-bold">Dashboard</p>
                    <div className="icons flex gap-2">
                        <Link className="text-lg" to={'/'}>{<IoIosNotifications/>}</Link>
                        <Link className="text-lg" to={'/'}>{<CgProfile/>}</Link>
                        <Link className="text-lg" to={'/'}>{<IoIosSettings/>}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dbnavbar;