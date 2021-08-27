import React from 'react'
import { Link } from 'react-router-dom'

const ProductPage = (props) => {
    return (
        <div>
            <h2 className="page-heding">
                <span className="name-page-product">Sản phẩm</span>
            </h2>
            <div className="products">
                {props.products.map((product, index) => (
                    <div className="product-item" key={index}>
                        <div className="product-img">
                            <Link to="">
                                <img src={product.photo} alt="Ảnh sản phẩm" />
                            </Link>
                        </div>
                        <h4 className="product-name">
                            <Link to="">{product.name}</Link>
                        </h4>
                        <div className="product-price-detail">
                            <span className="product-price">{product.price}đ</span>
                            <Link to={`/product/${product._id}`} className="product-detail">Xem chi tiết</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductPage
