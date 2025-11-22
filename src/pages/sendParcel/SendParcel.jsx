import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useLoaderData } from "react-router";

export default function SendParcel() {
    const { user } = useAuth()
    const serviceData = useLoaderData()
    console.log(serviceData)
    const { register, handleSubmit, control } = useForm()

    // submit my sendparcel 
    const handleSendParcel = (data) => {
        console.log(data)
    }

    return <div className="min-h-screen">
        <h1 className="text-4xl text-primary font-extrabold mt-10">Send A Parcel</h1>
        <h3 className="text-2xl text-primary font-semibold mt-5">Enter your parcel details</h3>
        <hr className="mt-4 border-gray-400" />
        <div>

        </div>
    </div>;
}
