import React, { useEffect, useState } from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import firebase from '../../../firebase';
import ProductAPI from '../../../api/productAPI';

const EditProduct = (props) => {
    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm();

    const [isSubmit, setIsSubmit] = useState(false);
    const [option, setOption] = useState('');
    let history = useHistory();
    const { id } = useParams();
    const onHandleChange = (e) => {
        console.log('e', e.target.value)
        const value = e.target.value;
        setOption(value)
    }
    const [products, setProducts] = useState({});
    const [checked, setChecked] = useState(products.shipping == true ? true : false);
    console.log('products', products)
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await ProductAPI.get(id);
                setProducts(data);
                // for (const key in data) {
                //     setValue(key, data[key])
                // }
                reset(data);
            } catch (error) {
                console.log(error);
            }
        };
        getProduct();
    }, [])
    const onHandleSubmit = (data) => {
        console.log('data', data)
        const productImage = data.photo[0];
        console.log('productImage', productImage)
        let storageRef = firebase.storage().ref(`images/${productImage.name}`);
        storageRef.put(productImage).then(function () {
            storageRef.getDownloadURL().then(async (url) => {
                const product = {
                    ...data,
                    shipping: checked,
                    photo: url,
                    category: option
                }
                props.editProduct(product, id);
                history.push('/admin/products');
                if (product) {
                    setIsSubmit(true);
                    <Redirect to="/admin/products" />
                }
            })
        })
    }

    return (
        <div>
            <h1>Edit Product</h1>
            <div>
                <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="productName" className="form-label">Tên sản phẩm</label>
                        <input type="text"
                            className={`form-control ${errors.name ? 'border-danger' : ''}`}
                            id="productName"
                            defaultValue={products ? products.name : ''}
                            {...register('name', { required: true })}
                        />
                        {errors.name && <span className="text-danger">Bắt buộc phải nhập</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productPrice" className="form-label">Giá sản phẩm</label>
                        <input type="text"
                            className="form-control"
                            id="productPrice"
                            {...register('price')} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productImage" className="form-label">Ảnh sản phẩm</label>
                        <img style={{ width: "100px", height: "100px" }} src={products.photo} alt="Ảnh sản phẩm" />
                        <input type="file"
                            className="form-control mt-3"
                            id="productImage" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productDescription" className="form-label">Chi tiết sản phẩm</label>
                        <input type="text" className="form-control"
                            id="productDescription"
                            defaultValue={products ? products.description : ''}
                            {...register('description')} />
                    </div>
                    <div className="form-check ml-2 mb-4">
                        <input className="form-check-input"
                            type="checkbox"
                            defaultChecked={products.shipping}
                            onChange={() => setChecked(checked)}
                            id="flexCheckDisabled"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDisabled">
                            Shipping
                            </label>
                    </div>
                    <select onInput={onHandleChange} className="form-select mb-4" aria-label="Default select example">
                        {props.categories.map((category, index) => (
                            <option key={index} value={category._id}>{category.name}</option>
                        ))}
                    </select>
                    <button type="submit" className="btn btn-primary">Sửa sản phẩm</button>
                </form>
            </div>
        </div >
    )
}

export default EditProduct
