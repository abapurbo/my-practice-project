import React from "react";
import { Link } from "react-router";

export default function Cancelled() {
    return <div>
        <h1>Cancelled your payment system</h1>
        <Link to='/dashboard/myParcels' className="btn btn-secondary text-primary">Pleace Try Agian</Link>
    </div>;
}
