import React from 'react'
import { Link } from 'react-router-dom'

const ListProduct = (props) => {
    const onHandleRemove = (id) => {
        props.deleteProduct(id)
    }

    return (
        <div>
            <h1>List Product</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Ảnh</th>
                            <th>Chi tiết sản phẩm</th>
                            <th>Danh mục</th>
                            <th>
                                <Link to="/admin/products/add" className="btn btn-sm btn-success">
                                    Thêm sản phẩm
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.products.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td scope="row">{index}</td>
                                    <td><Link to={`/product/${product._id}`}>{product.name}</Link></td>
                                    <td>{product.price}</td>
                                    <td>
                                        <img src={product.photo} style={{ width: "50px", height: "50px" }} alt="Ảnh sản phẩm" />
                                    </td>
                                    <td>{product.description}</td>
                                    <td>
                                        {props.categories.map((category, index) => <span key={index}>{product.category === category._id ? category.name : ""}</span>
                                        )}
                                    </td>
                                    <td>
                                        <Link to={`/admin/products/edit/${product._id}`} className="btn btn-danger btn-sm">
                                            Edit
                                        </Link>
                                        <button onClick={() => onHandleRemove(product._id)} className="btn btn-info btn-sm ml-2">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListProduct
