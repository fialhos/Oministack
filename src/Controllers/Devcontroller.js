const axios = require('axios');
const Dev = require('../models/dev');
const ParseStrindAsArray = require('../utils/ParseStrinAsArray')

module.exports = {

    async index (request,response) {
        
        const devs = await Dev.find();
        return response.json(devs);
    },
    async update(request,response) {
        
        const {github_username} = request.query;

        let dev = await Dev.findOne({github_username});

        devi = await dev.updateOne({"bio":"TESTANDO"})

        return response.json(devi)
    },

    
   
    async delete (request,response) {
        
        const {github_username} = request.query;

        let dev = await Dev.findOne({github_username});

        devi = await Dev.deleteOne({dev})
       
        return response.json("Operação executada com sucesso")
    },


    async store (request,response) {

        const {github_username,techs,latitude,longitude} = request.body;

        let dev = await Dev.findOne({github_username});

        if(!dev){

            const api_response = await axios.get(`https://api.github.com/users/${github_username}`);

            const {name = login,avatar_url,bio} =  api_response.data;

            const techsArray = ParseStrindAsArray(techs);

            const location ={
                type: 'Point',
                coordinates:[longitude,latitude],
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs:techsArray,    
                location,
            });
        }
        
        return response.json(dev);

    }
};