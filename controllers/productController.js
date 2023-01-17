module.exports = {
    detalleProducto : (req, res) => {
        return res.render('productos/detalleProducto');
    },
    listado : (req, res) => {
        return res.render('productos/listado');
    }
}