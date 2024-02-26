import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
// {
    // !important
//     :#F1FAEE,#C5D8D1,#F4EDEA,#12263A,#262730,#1D1E18,#DADAD9
// }

const Item = ({props}:any) => {
    return (
        <div className="w-full h-[45px]">
            <Link to={'/'} className="">
                <div className="item flex px-3 py-3 gap-3 items-center h-full text-white hover:bg-[#DADAD9]">
                    <div className="text-[18px]">{props.icon}</div>
                    <div className="text-sm">{props.name}</div>
                </div>
            </Link>
        </div>
    );
};

export default Item;
