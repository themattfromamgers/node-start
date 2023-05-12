const {body,validationResult} = require('express-validator')

exports.getRegister = (req,res)=>{


    res.render('register', {
        err: null
    })
}

exports.postRegister = (req,res)=>{

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        console.log(errors.array()[0].msg)
        return res.send('islem tamamlandı')
    }

    res.redirect('/')
}


exports.getLogin = ()=>{
}

exports.postLogin = ()=>{  
}

exports.logout = ()=>{
}



