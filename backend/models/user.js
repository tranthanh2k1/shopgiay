// modole crypto để mã hóa mất khẩu
// module uuid để độc nhất vô nhị
// thiết lập schema user: name, email, ...
import mongoose from 'mongoose';
import crypto from 'crypto';
import { v1 as uuidv1 } from 'uuid';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32,
        // unique: true // không đc trùng username
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 32
    },
    hashed_password: {
        type: String,
        required: true
    },
    about: {
        type: String,
        trim: true
    },
    salt: {
        type: String,
    },
    role: {
        type: Number,
        default: 0
    },
    history: {
        type: Array,
        default: []
    }
}, { timestamps: true })

userSchema.virtual('password') // Tạo ra 1 field ảo
    .set(function (password) {
        // this._password = password;
        // console.log('password', password);
        this.salt = uuidv1(); // unique
        // console.log('this.salt', this.salt);
        this.hashed_password = this.encrytPassword(password);
        // console.log('this.hashed_password', this.hashed_password);
    })
    .get(function () {
        return this._password
    })

userSchema.methods = {
    authenticate: function (plainText) {
        // console.log(this.encrytPassword(plainText));
        return this.encrytPassword(plainText) === this.hashed_password;
    },
    encrytPassword: function (password) {
        if (!password) return '';
        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
        } catch (error) {
            return "";
        }
    }
}

module.exports = mongoose.model("User", userSchema);