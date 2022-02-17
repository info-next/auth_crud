// const config={
//     production :{
//         DATABASE: process.env.MONGODB_URI
//     },
//     default : {
//         DATABASE: 'mongodb+srv://deep:flywithmemongodb@1@aks.x4g3g.mongodb.net/auth_crud?retryWrites=true&w=majority'
//     }
// }


// exports.get = function get(env){
//     return config[env] || config.default
// }

const mongoose = require('mongoose')

const url = `mongodb+srv://deep:IgpPP7R6EgaGMllk@aks.x4g3g.mongodb.net/auth_crud?retryWrites=true&w=majority`;

mongoose.connect(url,{ useNewUrlParser: true })
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
    mongoose.Promise = global.Promise;
    module.exports = mongoose;