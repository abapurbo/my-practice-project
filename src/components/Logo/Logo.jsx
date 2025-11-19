import React from "react";
import logoimg from '../../assets/logo/logo.png'
export default function Logo() {
    return (
        <div>
            <div className="flex items-end">
                <img src={logoimg} alt="logo" />
                <h1 className="text-3xl font-extrabold -ms-2.5">ZapShift</h1>
            </div>
        </div>
    );
}
