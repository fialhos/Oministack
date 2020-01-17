const { Router } = require('express');
const DevController = require('./controllers/Devcontroller')
const SearchController = require('./controllers/SearchController')
const routes = Router();

routes.get('/devs',DevController.index);
routes.put('/devs',DevController.update);
routes.post('/devs',DevController.store);
routes.delete('/devs',DevController.delete);


routes.get('/search',SearchController.index);
module.exports = routes;
