const  express  = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const  axios  = require ('axios').default;
const sequelize = require ('sequelize');
//const bodyParser = require('body-parser');
const{ activities,countries,Country_Activities} = require('../db.js');

let server = express();
server.use(express.json());
//server.use(express.urlencoded({extended:true}));

// const data = async() => {
//     try{
//     const arr = await axios.get("https://restcountries.com/v3.1/all");
//     return arr.data.results;
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// console.log(data());











//   server.get('/print',(req,res) => {
//     const getCountries = async() => {

//         try{
//             const arr = await axios.get("https://restcountries.com/v3.1/all");
//             //console.log("Esto me devuelve",response);
            

//         }catch(error){
//             console.log(error);
//         };
//         res.send(arr.data.results);
//     };
      
//   });
const req = async () => {
    try{
    let response = await axios.get("https://restcountries.com/v3.1/all");
    console.log(response.data);
}catch(error){console.log(error);}
    
  }
  req() // Calling this will make a get request and log the response.

module.exports=server;