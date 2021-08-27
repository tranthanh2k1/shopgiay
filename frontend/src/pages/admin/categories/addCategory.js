import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const AddCategory = ({ addCategory }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    const onHandleSubmit = (data) => {
        addCategory(data);
        history.push('/admin/categories');
    }

    return (
        <div>
            <h1>Add Category</h1>
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
                    <button type="submit" className="btn btn-primary">Thêm danh mục</button>
                </form>
            </div>
        </div>
    )
}

export default AddCategory
