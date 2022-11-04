const SignatureController = require('../controllers/signature.controller')

const routes = (app)=>{

    app.post('/api/v1/signatures', SignatureController.create)

    app.get('/api/v1/signatures', SignatureController.getAll)

    app.get('/api/v1/signatures/:id', SignatureController.getOne)

    app.put('/api/v1/signatures/:id', SignatureController.update)

    app.delete('/api/v1/signatures/:id', SignatureController.delete)

}

module.exports = routes