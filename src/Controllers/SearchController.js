const Dev = require('../models/dev');
const ParseStrindAsArray = require('../utils/ParseStrinAsArray')

module.exports={

    async index(request,response){

        
        const{latitude,longitude,techs} = request.query;

        const techsArray = ParseStrindAsArray(techs);

        const Devs = await Dev.find({
            techs:{
                $in:techsArray
            },
            location:{
                $near:{
                    $geometry:{
                        type:'Point',
                        coordinates:[longitude,latitude],
                    },
                    $maxDistance:10000,
                },
            },
        })

        return response.json({Devs});

    }
    
}