import React from "react";
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/brands/Brands";

export default function Home() {
    return (
        <div>
            <Banner></Banner>
            <div className="py-10">
            <Brands></Brands>
            </div>
        </div>
    )
}
