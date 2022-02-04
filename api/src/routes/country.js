const  express  = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { axios } = require ('axios');
const sequelize = require ('sequelize');
const{ activities,countries,Country_Activities} = require('../db.js');

let server = express();
server.use(express.json());

const data = async() => {
    const arr = await axios.get("https://restcountries.com/v3.1/all");
    return arr.data.results;
}
console.log(data().toJSON);











//   server.get('/print',(req,res) => {
//     const getCountries = async() => {

//         try{
//             const response = await axios.get("https://restcountries.com/v3.1/all");
//             console.log("Esto me devuelve",response);
//             res.send(response.data);

//         }catch(error){
//             console.log(error);
//         };
        
//     };
      
//   });

module.exports=server;