let admin = (req, res, next) => {
    if(req.user.role === 0) {
        return res.send('Usuario no autorizado para crear nuevas marcas.')
    }
    next();
}

module.exports = { admin }