import React, { useEffect, useState } from "react";

const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/admin/orders") // Adjust the API URL as needed
            .then(response => response.json())
            .then(data => setOrders(data))
            .catch(error => console.error("Error fetching orders:", error));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Orders</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Order ID</th>
                        <th className="border p-2">Total Quantity</th>
                        <th className="border p-2">Total Price</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Products</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order._id} className="border">
                            <td className="border p-2">{order._id}</td>
                            <td className="border p-2">{order.totalQty}</td>
                            <td className="border p-2">₹{order.totalPrice}</td>
                            <td className="border p-2">{order.status}</td>
                            <td className="border p-2">
                                {order.products.map((item, index) => (
                                    <div key={index}>
                                        {item.productId.name} - {item.quantity} pcs
                                    </div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllOrders;
