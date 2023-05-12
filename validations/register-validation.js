const { body } = require('express-validator')

const registerValidation =
    [
        body('username')
        .notEmpty()
        .isLength({min: 3, max: 10})
        .withMessage('username alanı Bos olamaz')
        .isAlphanumeric()
		.withMessage('Kullanıcı adı sadece sayı ve harflerden oluşmalıdır.'),

        body('email')
        .isEmail()
        .withMessage('email alanı düzgün olamlı'),

        body('password')
        .isLength({min:6})
        .withMessage('parola uuzn olmalı'),

        body('passwordConformation')
        .custom((value, {req})=>{
            if(value !== req.body.password) {
            throw new Error('sifre eslesmiyo')
        }
        return true
        }),
        body('phone_number')
        .matches(/^\+\d{11,12}$/)
        .withMessage('Numara belirli uzunlukta değil veya basinda "+" yok.')

    ]

module.exports = registerValidation


