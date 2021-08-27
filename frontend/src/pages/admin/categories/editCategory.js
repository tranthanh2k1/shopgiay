import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CategoryAPI from '../../../api/categoryAPI';

const EditCategory = ({ editCategory }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    let history = useHistory();
    const { id } = useParams();
    const [categories, setCategories] = useState({});
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await CategoryAPI.get(id);
                setCategories(data);
                reset(data);
            } catch (error) {
                console.log(error);
            }
        };
        getCategory();
    }, []);
    const onHandleSubmit = (data) => {
        editCategory(data, id);
        history.push('/admin/categories');
    }
    return (
        <div>
            <h1>Edit Category</h1>
            <div>
                <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="categoryName" className="form-label">Tên danh mục</label>
                        <input type="text"
                            className={`form-control ${errors.name ? 'border-danger' : ''}`} id="categoryName"
                            {...register('name', { required: true })}
                        />
                        {errors.name && <span className="text-danger">Bắt buộc phải nhập</span>}
                    </div>
                    <button type="submit" className="btn btn-primary">Sửa danh mục</button>
                </form>
            </div>
        </div>
    )
}

export default EditCategory
