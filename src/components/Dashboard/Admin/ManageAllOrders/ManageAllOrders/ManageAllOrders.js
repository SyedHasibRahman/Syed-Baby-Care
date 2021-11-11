import React, { useEffect, useState } from 'react';
import useServices from '../../../../../hooks/useServices';
// import useServices from '../../../hooks/useServices';
import './ManageAllOrders';

const ManageAllOrders = () => {
    const [services] = useServices();
    const [orders, setOrders] = useState([]);
    console.log(services);
    console.log(orders);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    // const detail = orders.detail;
    console.log(orders);
    return (
        <div className="mt-5 MyOrders container">
            <div className="container">
                <div className="row">
                    <div className="row row-cols-1 row-cols-md-4 row-cols-lg-4 g-4">
                        {
                            orders.map(order => <div className="p-2 border border-info"
                                key={ order._id }
                            >
                                <div className="card-group review">
                                    <div className="card text-center">
                                        <img src={ order.img } className="card-img-top" alt="Mom/Dad" />
                                        <div className="card-body">
                                            <h5 className="card-title">{ order.name }</h5>
                                            <p className="card-title">{ order._id }</p>
                                            <p className="card-text"> { order.discription }</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">
                                                <button className="btn-danger">Delete</button>
                                            </small>
                                        </div>
                                    </div>
                                </div>

                            </div>)
                        }

                    </div>
                </div>
            </div>
            <div className="col-md-6">
            </div>

        </div >
    );
};

export default ManageAllOrders;
