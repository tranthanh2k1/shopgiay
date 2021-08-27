import _ from 'lodash';

import Category from '../models/category';
import Product from '../models/product';

export const categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
            res.status(400).json({
                error: "Không tìm thấy danh mục"
            })
        }
        req.category = category;
        next();
    })
}

export const list = (req, res) => {
    Category.find((err, categories) => {
        if (err) {
            return res.status(400).json({
                error: "Danh mục không tồn tại"
            })
        }
        res.json(categories)
    })
}

export const create = (req, res) => {
    const category = new Category(req.body);
    category.save((err, data) => {
        if (err) {
            return req.status(400).json({
                error: "Không thêm được danh mục"
            })
        }
        res.json(data);
    })
}

export const update = (req, res) => {
    const category = req.category;
    category.name = req.body.name;
    category.save((err, data) => {
        if (err || !category) {
            res.status(400).json({
                error: "Danh mục này không tồn tại"
            })
        }
        res.json({ data })
    })
}

export const read = (req, res) => {
    return res.json(req.category);
}

export const remove = (req, res) => {
    let category = req.category;
    category.remove((err, deletedCategory) => {
        if (err || !category) {
            res.status(400).json({
                error: "Danh mục này không tồn tại"
            })
        }

        res.json({
            deletedCategory,
            message: "Danh mục đã xóa thành công"
        })
    })
}

export const categoryPage = (req, res) => {
    const { categoryId } = req.params;
    console.log(req.params)

    Product.find({ category: categoryId }, (err, data) => {
        if (err) {
            return res.json(
                { message: "Khong tim thay san pham" }
            )
        }
        res.json({ data });
    })
}