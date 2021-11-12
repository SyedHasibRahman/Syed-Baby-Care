import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useServices from '../../../../../hooks/useServices';
// import useServices from '../../../hooks/useServices';
import './ManageAllOrders';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    const [status, setStatus] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    // Status 
    const handleOnBlur = e => {
        setStatus(e.target.value);
    }
    const handleStatus = (e) => {
        const id = { status }
        fetch('http://localhost:5000/orders/status', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(id)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        e.preventDefault()
    }
    console.log(status);
    // Delete a products
    const handleDelete = id => {


    }

    // -------------Delete Confirmation  
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
                                                <button onClick={ () => handleDelete(order._id) } className="btn-danger">Delete</button>
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
