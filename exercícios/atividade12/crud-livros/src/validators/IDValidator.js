const mongoose = require('mongoose');


function validarID(req, res, next) {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) {
return res.status(400).json({ errors: ['ID inválido'] });
}
return next();
}


module.exports = validarID;