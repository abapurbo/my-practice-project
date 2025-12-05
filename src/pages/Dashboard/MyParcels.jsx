import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { data, Link } from "react-router";
import Swal from "sweetalert2";

export default function MyParcels() {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['my-parcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
            return res.data
        }
    })

    // handle delete items
    const handleDeleteItems = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //delete items  
                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });

    }
    const handlePayment = async (parcel) => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName
        }
        const res = await axiosSecure.post('/payment-checkout-session', paymentInfo);

        window.location.assign(res.data.url);
    }
    return <div>
        <div className="overflow-x-auto">
            <h2>All of my parcels : {parcels.length}</h2>
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Payment</th>
                        <th>Delivery Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        parcels.map((parcel, inx) => <tr key={inx}>
                            <th>{inx + 1}</th>
                            <td>{parcel?.parcelName}</td>
                            <td>{parcel?.cost}</td>
                            <td>
                                {
                                    parcel.paymentStatus === 'paid' ?
                                        <span className='text-green-400'>Paid</span>
                                        :
                                        <Link to={`/dashboard/payment/${parcel._id}`} onClick={() => handlePayment(parcel)} className="btn btn-sm btn-secondary  text-primary text-[16px] font-bold">Pay</Link>

                                }

                            </td>
                            <td>Pendding</td>
                            <td className="space-x-3">
                                <button className="btn text-red-500 "><FaEdit /></button>
                                <button onClick={() => handleDeleteItems(parcel._id)} className="btn text-red-500 "><MdDelete /></button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>;
}
