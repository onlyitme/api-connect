import React from "react";
import { Link } from 'react-router-dom';

function Register() {
    return(
        <div className='container py-5'>
            <div className="row">
                <div className="col-sm-5 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h3 className='card-title'>Đăng Ký</h3>
                        </div>
                        <div className="card-body">
                            <div className="form-group mb-2">
                                <label htmlFor="name">Họ Tên:</label>
                                <input className="form-control" type="text" name="name" id="name"/>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="email">Email:</label>
                                <input className="form-control" type="email" name="email" id="email"/>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="password">Mật khẩu:</label>
                                <input className="form-control" type="password" name="password" id="password"/>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="password-confirmation">Nhập Lại Mật Khẩu:</label>
                                <input className="form-control" type="password" name="password-confirmation" id="password-confirmation"/>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary me-2">Đăng Ký</button>
                            <Link to="/admin/login" className="btn btn-outline-secondary">Đăng Nhập</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;