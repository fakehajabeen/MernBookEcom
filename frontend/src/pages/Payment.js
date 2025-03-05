import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const orderSummary = JSON.parse(localStorage.getItem("orderSummary"));
const navigate =useNavigate()
    if (!orderSummary) {
        return <div>No order summary found. Please go back and place an order.</div>;
    }
    const handlepay =()=>{
        alert('Order Placed Successfully')
        navigate('/')
    }

    return (
        <div className="max-w-md mx-auto p-4 border rounded shadow-lg mt-5">
            <h2 className="text-2xl font-semibold mb-4">Payment Summary</h2>
            <div className="flex justify-between mb-2">
                <p className="text-lg">Quantity:</p>
                <p className="text-lg font-medium">{orderSummary.totalQty}</p>
            </div>
            <div className="flex justify-between mb-4">
                <p className="text-lg">Total Price:</p>
                <p className="text-lg font-medium">₹{orderSummary.totalPrice}</p>
            </div>
            <button onClick={handlepay} className="bg-blue-600 text-white px-4 py-2 w-full rounded">
                Proceed to Payment
            </button>
        </div>
    );
};

export default Payment;
