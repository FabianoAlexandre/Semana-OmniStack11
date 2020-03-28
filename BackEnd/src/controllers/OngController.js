const crypto = require('crypto');

const OngController = require('../database/connection');

const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
           //const params = request.quiry

// Forma estruturada    
    //const data = request.body;

//Forma Desestruturada - Evita que o usuario insira dados fora dos necessarios.
    const {name, email, whatsap, city, uf} = request.body;

    //criando o id com pacote crypto.
const id = crypto.randomBytes(4).toString('HEX');
    //console.log(data);

await connection('ongs').insert({
    id,
    name,
    email,
    whatsap,
    city,
    uf,
})

    return response.json({ id });
    }

};