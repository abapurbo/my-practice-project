import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from '../../Hooks/useAxiosSecure'
export default function SendParcel() {
    const { user } = useAuth();
    const serviceCenters = useLoaderData();
    const navigate=useNavigate()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, control, reset } = useForm();
    const regionsDuplicate = serviceCenters.map(c => c.region);
    const regions = [...new Set(regionsDuplicate)];

    // real time tack region
    const senderRegion = useWatch({ control, name: 'senderRegion' })
    const receiverRegion = useWatch({ control, name: 'receiverRegion' })
    const districtsByRegion = (region) => {
        const regionsDistrict = serviceCenters.filter(c => c.region === region);
        const district = regionsDistrict.map(d => d.district);
        return district;
    };
    const handleSendParcel = (data) => {
        const isDocument = data.parcelType === 'document';
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        // check a docuemnt type
        let cost = 0;
        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        }
        else {
            if (data.parcelWeight <= 3) {
                cost = isSameDistrict ? 110 : 150
            }
            else {
                const minCharge = isSameDistrict ? 110 : 150;
                const extraWeight = data.parcelWeight - 3;
                const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
                cost = minCharge + extraCharge;
            }
        }
        //if database added parcel info than server site return respons and sweet alert
        data.cost=cost
        Swal.fire({
            title: "Agree with the Cost?",
            text: `You will be charged ${cost} taka!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "I agree!"
        }).then((result) => {
            if (result.isConfirmed) {
                // create a parcel info and added database 
                axiosSecure.post('/parcels', data)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.insertedId) {
                            navigate('/dashboard/myParcels')
                            Swal.fire({
                                title: "Added Successfully in database",
                                text: "Your send parcel info added!",
                                icon: "success"
                            });
                            // reset send parcel data
                            reset()
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })


            }
        });
        console.log('cost', cost)

    };

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-4xl text-primary font-extrabold mt-10">Send A Parcel</h1>
            <h3 className="text-2xl text-primary font-semibold mt-5">Enter your parcel details</h3>
            <hr className="mt-4 border-gray-400" />

            <form onSubmit={handleSubmit(handleSendParcel)} className="mt-4">
                {/* Parcel Type */}
                <div className="space-x-3 mb-6">
                    <label className="label">
                        <input
                            type="radio"
                            {...register("parcelType")}
                            value="document"
                            className="radio radio-accent"
                            defaultChecked
                        />
                        Document
                    </label>

                    <label className="label">
                        <input
                            type="radio"
                            {...register("parcelType")}
                            value="non-document"
                            className="radio radio-accent"
                        />
                        Non-Document
                    </label>
                </div>

                {/* Parcel Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
                    <fieldset className="fieldset">
                        <label className="label text-xl text-primary font-bold">Parcel Name</label>
                        <input
                            type="text"
                            {...register("parcelName")}
                            className="input w-full"
                            placeholder="Parcel Name"
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label text-xl text-primary font-bold">Parcel Weight (KG)</label>
                        <input
                            type="number"
                            {...register("parcelWeight")}
                            className="input w-full"
                            placeholder="Parcel Weight (KG)"
                        />
                    </fieldset>
                </div>

                <hr className="my-6 border-gray-300" />

                {/* Sender & Receiver Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Sender Details */}
                    <fieldset className="fieldset">
                        <h1 className="text-2xl font-semibold text-primary mb-6">Sender Details</h1>
                        <label className="label text-[17px] text-primary font-bold">Sender Name</label>
                        <input
                            type="text"
                            {...register("senderName")}
                            className="input w-full"
                            placeholder="Sender Name"
                        />

                        <label className="label text-[17px] text-primary font-bold">Sender Email</label>
                        <input
                            type="email"
                            {...register("senderEmail")}
                            className="input w-full"
                            value={user?.email}
                            placeholder="Sender Email"
                        />

                        <label className="label text-[17px] text-primary font-bold">Sender Region</label>
                        <select {...register("senderRegion")} className="select w-full">
                            <option disabled selected>
                                Pick a region
                            </option>
                            {
                                regions.map((r, inx) => <option key={inx}>{r}</option>)
                            }
                        </select>

                        <label className="label text-[17px] text-primary font-bold">Sender District</label>
                        <select {...register("senderDistrict")} className="select w-full">
                            <option disabled selected>
                                Pick a district
                            </option>
                            {
                                districtsByRegion(senderRegion).map((d, inx) => <option key={inx}>{d}</option>)
                            }
                        </select>

                        <label className="label text-[17px] text-primary font-bold">Pickup Instructions</label>
                        <textarea
                            {...register("pickupInstructions")}
                            className="textarea w-full"
                            placeholder="Any special instructions"
                        />
                    </fieldset>

                    {/* Receiver Details */}
                    <fieldset className="fieldset">
                        <h1 className="text-2xl font-semibold text-primary mb-6">Receiver Details</h1>
                        <label className="label text-[17px] text-primary font-bold">Receiver Name</label>
                        <input
                            type="text"
                            {...register("receiverName")}
                            className="input w-full"
                            placeholder="Receiver Name"
                        />

                        <label className="label text-[17px] text-primary font-bold">Receiver Email</label>
                        <input
                            type="email"
                            {...register("receiverEmail")}
                            className="input w-full"
                            placeholder="Receiver Email"
                        />

                        <label className="label text-[17px] text-primary font-bold">Receiver Region</label>
                        <select {...register("receiverRegion")} className="select w-full">
                            <option disabled selected>
                                Pick a region
                            </option>
                            {
                                regions.map((r, inx) => <option key={inx}>{r}</option>)
                            }
                        </select>

                        <label className="label text-[17px] text-primary font-bold">Receiver District</label>
                        <select {...register("receiverDistrict")} className="select w-full">
                            <option disabled selected>
                                Pick a district
                            </option>
                            {
                                districtsByRegion(receiverRegion).map((d, inx) => <option key={inx}>{d}</option>)
                            }
                        </select>

                        <label className="label text-[17px] text-primary font-bold">Delivery Instructions</label>
                        <textarea
                            {...register("deliveryInstructions")}
                            className="textarea w-full"
                            placeholder="Any special instructions"
                        />
                    </fieldset>
                </div>

                <button
                    type="submit"
                    className="btn btn-secondary text-primary mt-6 w-full md:w-auto"
                >
                    Proceed to Confirm Booking
                </button>
            </form>
        </div>
    );
}
