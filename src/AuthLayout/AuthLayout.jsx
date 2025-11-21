import React from "react";
import { Outlet } from "react-router";
import Logo from "../components/Logo/Logo";
import authImg from '../assets/authImg/authImage.png'
export default function AuthLayout() {
    return <div>
        <div className="px-10 py-4 container mx-auto">
            <Logo></Logo>
        </div>
         <div className="flex items-center container mx-auto">
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            <div className="flex-1">
               <img src={authImg} alt="authentication-image" />
            </div>
         </div>
    </div>
}
