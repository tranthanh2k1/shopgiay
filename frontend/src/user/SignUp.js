import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { signUp } from '../auth'

const SignUp = () => {
    const { register, handleSubmit } = useForm();

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const onSubmit = (data, e) => {
        signUp(data)
            .then(dataUser => {
                if (dataUser.error) {
                    setError(dataUser.error);
                } else {
                    e.target.reset();
                    setError("");
                    setSuccess(true);
                }
            })
    }
    const showError = () => {
        return <div className="alert alert-danger" style={{ display: error ? "block" : "none" }}>
            {error}
        </div>
    }
    const showSucces = () => {
        return <div className="alert alert-info" style={{ display: success ? "block" : "none" }}>
            Bạn đã tạo tài khoản thành công. Click để <Link to="/signin">đăng nhập</Link>
        </div>
    }
    const signUpForm = () => {
        return (
            <form className="container mt-3 mb-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 mr-5">
                    <label htmlFor="name" className="form-label">Họ và tên</label>
                    <input type="text"
                        className="form-control"
                        id="name"
                        {...register('name')}
                    />
                </div>
                <div className="mb-3 mr-5">
                    <label htmlFor="email" className="form-label">Email của bạn</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        {...register('email')}
                    />
                </div>
                <div className="mb-3 mr-5">
                    <label htmlFor="password" className="form-label">Mật khẩu</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        suggested="current-password"
                        {...register('password')}
                    />
                </div>
                <button className="btn btn-primary">Đăng kí</button>
            </form >
        )
    }

    return (
        <div className="container mt-3 mb-3">
            {showError()}
            {showSucces()}
            {signUpForm()}
        </div>
    )
}

export default SignUp
