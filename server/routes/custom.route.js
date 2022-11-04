const CustomController = require('../controllers/custom.controller')

const routes = (app)=>{

    app.post('/api/v1/customs', CustomController.create)

    app.get('/api/v1/customs', CustomController.getAll)

    app.get('/api/v1/customs/:id', CustomController.getOne)

    app.put('/api/v1/customs/:id', CustomController.update)

    app.delete('/api/v1/customs/:id', CustomController.delete)

}

module.exports = routes