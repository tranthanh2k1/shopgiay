const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const User = require('../models/user');

export const signup = (req, res) => {
    const user = new User(req.body);
    // console.log('thông tin', user);
    user.save((error, user) => {
        if (error) {
            return res.status(400).json({
                error: "Không thế đăng kí tài khoản"
            })
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({ user })
    })
}

export const signin = (req, res) => {
    // find the user base on email
    const { email, password } = req.body;
    // console.log('email', email);
    // console.log('password', password);
    User.findOne({ email }, (error, user) => {
        // console.log('user', user);

        if (error || !user) {
            return res.status(400).json({
                error: "User with that email does not exist. Please signup"
            })
        }
        // console.log(user.authenticate(password));
        if (!user.authenticate(password)) {
            return res.status(400).json({
                error: 'Email and password not match'
            })
        }

        const token = jwt.sign({ _id: user._id }, "dsakjdqeldsajdja");

        res.cookie('t', token, { expire: new Date() + 9999 })
        const { _id, name, email, role } = user;
        res.json(
            {
                token, user: { _id, name, email, role }
            }
        )
    })
}

export const signout = (req, res) => {
    res.clearCookie('t');
    res.json({
        message: 'Signout Success'
    })
}
export const requireSignin = expressJwt({
    secret: "dsakjdqeldsajdja",
    algorithms: ["HS256"], // added later
    userProperty: "auth"
});

export const isAuth = (req, res, next) => {
    let user = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!user) {
        return res.status(403).json({
            error: "Access Denied"
        })
    }
    next();
}

export const isAdmin = (req, res, next) => {
    if (req.profile.role == 0) {
        return res.status(403).json({
            error: "Admin resource! Access Denined"
        })
    }
    next();
}