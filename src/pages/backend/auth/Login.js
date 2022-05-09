import React from "react";

import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-sm-5 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h3 className='card-title'>Đăng Nhập</h3>
                        </div>
                        <div className="card-body">
                            <div className="form-group mb-2">
                                <label htmlFor="email">Email:</label>
                                <input className="form-control" type="email" name="email" id="email"/>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="email">Password:</label>
                                <input className="form-control" type="password" name="password" id="email"/>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary me-2">Đăng Nhập</button>
                            <Link to="/admin/register" className="btn btn-outline-secondary">Đăng Ký</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;