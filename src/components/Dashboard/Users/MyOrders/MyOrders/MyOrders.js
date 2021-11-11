import React, { useEffect, useState } from 'react';
import useServices from '../../../hooks/useServices';
// import useServices from '../../../hooks/useServices';
import './MyOrders.css';

const MyOrders = () => {
    const [services] = useServices();
    const [orders, setOrders] = useState([]);
    console.log(services);
    console.log(orders);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    return (
        <div className="mt-5 MyOrders container">
            <div className="col-md-6 p-4 ">
                {
                    orders.map(order => <div className="p-2 border border-info"
                        key={ order._id }
                    >
                        <div className="row">
                            <div className="col-md-2">
                                <p className="pt-4">  { order.date }</p>
                            </div>
                            <div className="col-md-2">
                                <img className=" " src={ order.img } alt="" />
                            </div>
                            <div className="col-md-6">
                                <h6 className="pt-4">{ order.title }</h6>
                            </div>
                            <div className="col-md-1">
                                <h5 className="pt-4">${ order.price }</h5>
                            </div>

                        </div>

                        {/* <h3>{order.title}</h3> */ }

                    </div>)
                }
            </div>
            <div className="col-md-6">
            </div>

        </div>
    );
};

export default MyOrders;