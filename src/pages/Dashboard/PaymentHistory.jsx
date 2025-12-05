import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

export default function PaymentHistory() {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: paymentsHistory = [], } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user?.email}`)
            return res.data
        }
    })


    return (
        <div className="min-h-screen bg-white font-display text-black p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-6">
                    <h1 className="text-3xl font-bold">Payment History</h1>
                </header>

                <main className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="text-xs uppercase border-b">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Parcel Name</th>
                                    <th className="px-6 py-4 font-semibold">Transaction Number</th>
                                    <th className="px-6 py-4 font-semibold">Payment Info</th>
                                    <th className="px-6 py-4 font-semibold">Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {/* Row 1 */}
                                {
                                    paymentsHistory.map((payment, inx) => <tr key={inx} className="border-t">
                                      
                                        <td className="px-6 py-4">{payment?.parcelName}</td>
                                        <td className="px-6 py-4">{payment?.transactionId}</td>
                                        <td className="px-6 py-4">${payment?.amount} ({payment?.paymentStatus})</td>
                                        <td className="px-6 py-4">
                                            <button className="bg-gray-200 px-5 py-2 rounded font-semibold hover:bg-gray-300 transition-colors">
                                                View
                                            </button>
                                        </td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}
