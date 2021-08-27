import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ProductAPI from '../../api/productAPI';

const DetailProduct = () => {
    const [products, setProducts] = useState({});
    const { reset } = useForm();
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await ProductAPI.get(id);
                setProducts(data);
                reset(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProduct();
    }, [])

    const themGioHang = () => {

    }

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                <div className="preview-pic tab-content" >
                                    <div className="tab-pane active" id="pic-1"><img src={products.photo} alt="pic" /></div>
                                    <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" alt="pic" /></div>
                                    <div className="tab-pane" id="pic-3"><img src={products.photo} alt="anh" /></div>
                                    <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" alt="pic" /></div>
                                    <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" alt="pic" /></div>
                                </div>
                                <ul className="preview-thumbnail nav nav-tabs">
                                    <li className="active"><a href data-target="#pic-1" data-toggle="tab"><img src={products.photo} alt="anh" /></a></li>
                                    <li><a href data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" alt="pic" /></a></li>
                                    <li><a href data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" alt="pic" /></a></li>
                                    <li><a href data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" alt="pic" /></a></li>
                                    <li><a href data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" alt="pic" /></a></li>
                                </ul>

                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{products.name}</h3>
                                <div className="rating">
                                    <div className="stars">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <span className="review-no">41 reviews</span>
                                </div>
                                <p className="product-description">{products.description}</p>
                                <h4 className="price">current price: <span>{products.price}đ</span></h4>
                                <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                                <h5 className="sizes">sizes:
                        <span className="size" data-toggle="tooltip" title="small">s</span>
                                    <span className="size" data-toggle="tooltip" title="medium">m</span>
                                    <span className="size" data-toggle="tooltip" title="large">l</span>
                                    <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                                </h5>
                                <h5 className="colors">colors:
                        <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                                    <span className="color green"></span>
                                    <span className="color blue"></span>
                                </h5>
                                <div className="action">
                                    <button className="add-to-cart btn btn-default" onClick={themGioHang} type="button">add to cart</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailProduct
