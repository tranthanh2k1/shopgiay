import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import firebase from '../../../firebase';

const AddProduct = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [option, setOption] = useState('');
    const [checked, setChecked] = useState(false);
    let history = useHistory();
    // const onHandleChange = (e) => {
    //     const value = e.target.value;
    //     setOption(value)
    // }
    const onHandleSubmit = (data) => {
        const productImage = data.photo[0];
        let storageRef = firebase.storage().ref(`images/${productImage.name}`);
        storageRef.put(productImage).then(function () {
            storageRef.getDownloadURL().then(async (url) => {
                const product = {
                    ...data,
                    shipping: checked,
                    photo: url,
                    category: option
                }
                props.addProduct(product);
                history.push('/admin/products');
            })
        })
    }

    return (
        <div>
            <h1>Add product</h1>
            <div>
                <form action="/admin/products" onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="productName" className="form-label">Tên sản phẩm</label>
                        <input type="text"
                            className={`form-control ${errors.name ? 'border-danger' : ''}`} id="productName"
                            {...register('name', { required: true })}
                        />
                        {errors.name && <span className="text-danger">Bắt buộc phải nhập</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productPrice" className="form-label">Giá sản phẩm</label>
                        <input type="text" className="form-control" id="productPrice" {...register('price')} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productImage" className="form-label">Ảnh sản phẩm</label>
                        <input type="file" className="form-control" id="productImage" {...register('photo')} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productDescription" className="form-label">Chi tiết sản phẩm</label>
                        <input type="text" className="form-control" id="productDescription" {...register('description')} />
                    </div>
                    <div className="form-check ml-2 mb-4">
                        <input className="form-check-input"
                            type="checkbox"
                            defaultChecked={checked}
                            onChange={() => setChecked(!checked)}
                            id="flexCheckDisabled"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDisabled">
                            Shipping
                        </label>
                    </div>
                    <select className="form-select mb-4"
                        aria-label="Default select example"
                        onChange={(e) => {
                            const setSelect = e.target.value;
                            setOption(setSelect);
                        }}>
                        <option>--Chọn danh mục--</option>
                        {props.categories.map((category, index) => (
                            <>
                                <option key={index} value={category._id}>{category.name}</option>
                            </>
                        ))}
                    </select>
                    <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct
