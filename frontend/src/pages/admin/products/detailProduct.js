import React, { useState, useEffect } from 'react'
import { useHistory, Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import ProductAPI from '../../api/productsAPI';

const Edit = ({ onEdit }) => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    let history = useHistory();
    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm()
    const onSubmit = async (data) => {
        await onEdit(id, data)
        history.push('/admin/list')
    }

    useEffect(() => { // lấy thông tin chi tiết sản phẩm
        const getProduct = async () => {
            const { data: response } = await ProductAPI.get(id);
            setProduct(response);
            //cái này dùng để duyệt object
            for (const key in response) {
                setValue(key, response[key])
            }
        };
        getProduct()
    }, [])

    return (
        <div>

            <form action="" onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <div className="form-floating mb-3">
                        <input type="text"
                            className={`form-control ${errors.name ? 'border border-danger ' : ''}`}
                            id="product-name"
                            defaultValue={product ? product.name : ''}
                            placeholder="Tên sản phẩm"
                            {...register('name', { required: true })}
                        />
                        <label htmlFor="product-name"> Tên sản phẩm</label>
                        {errors.name && <span className="text-danger">Yêu cầu nhập vào</span>}

                    </div>
                    <div className="form-floating mb-3">
                        <input type="text"
                            className={`form-control ${errors.price ? 'border border-danger ' : ''}`}
                            id="product-price"
                            defaultValue={product ? product.price : ''}
                            placeholder="Giá sản phẩm"
                            {...register('price', { required: true })}
                        />
                        <label htmlFor="product-price"> Giá sản phẩm</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text"
                            className={`form-control ${errors.description ? 'border border-danger ' : ''}`}
                            id="product-description"
                            defaultValue={product ? product.description : ''}
                            placeholder="Giá sản phẩm"
                            {...register('description', { required: true })}
                        />
                        <label htmlFor="product-description"> Mô tả</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="file"
                            className={`form-control ${errors.price ? 'border border-danger ' : ''}`}
                            id="product-image"
                            // defaultValue={product.photo}
                            placeholder="Giá sản phẩm"
                            {...register('image', { required: false })}
                        />

                    </div>
                    {/* <div className="">
                        <label htmlFor="product-price" className="tw-mb-3">Mô tả sản phẩm</label>
                        
                    </div> */}
                    <button className="btn btn-danger">Submit</button>


                </div>
            </form>
        </div>
    )
}

export default Edit
