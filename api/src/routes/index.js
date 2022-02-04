const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { axios } = require ('axios');
const sequelize = require ('sequelize');

const router = Router();
//const activity_Route = require('./activity');
const country_Route = require('./country');
//const{ activities,countries,Country_Activities} = require('../db.js');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//router.use('/activities',activity_Route);
router.use('/countries',country_Route);

module.exports = router;






//  router.get('/country',async(req,res,next) =>   {
//      const name = req.query.name

//      const apiCountries = await result();

//     try{
//         let hay = Country.findAll();

//         if(!hay.length) await Country.bulkCreate(apiCountries);
//     }catch(error)
//     {
//         console.log(error);
//     }
    
//     if(name){
//         try{
//             let char = await Country.findAll({
//                 where: {
//                     name: {
//                         [op.ilike]: '%' + name + '%'
//                     }
//                 }
//             });
//             return res.json(char);
//         }catch(error)
//         {
//             console.log(error);
//         }
//     }
    
// });