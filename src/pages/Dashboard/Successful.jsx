import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

export default function Successful() {
  const [searchParams] = useSearchParams()
  const [paymentInfo, setPaymentInfo] = useState({})
  const sessionId = searchParams.get('session_id')
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (sessionId) {
      axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
        .then(res => {
          console.log(res.data)
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId
          })
        })
    }
  }, [sessionId, axiosSecure])




  return <div>
    <h1>Successful</h1>
    <p>Your TransactionId: {paymentInfo.transactionId}</p>
    <p>Your Parcel Tracking id: {paymentInfo.trackingId}</p>

  </div>;
}
