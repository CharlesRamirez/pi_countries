const { DataTypes , Sequelize } = require ('sequelize');

module.exports = (sequelize)  => {

    sequelize.define('activity' ,{

        id:{ 
            type: DataTypes.STRING,
                  allowNull: false,
                  primaryKey: true
        },

        name:{ 
            type: DataTypes.STRING,
                  //allowNull: false,
        },
        dificult:{ 
            type: DataTypes.INTEGER,
            validate:{
                      min:1,
                      max:5
                  }
        },
        duration:{
            type: DataTypes.INTEGER,
                  allowNull:true,
        },
        season:{
            type: DataTypes.ENUM('spring','summer','winter','autumn','primavera','verano','otoño','invierno'),
                  allowNull:true,
        }



    },{timestamps:false});
};