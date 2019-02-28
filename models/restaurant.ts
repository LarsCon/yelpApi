module.exports = (sequelize, DataTypes)=>{
const Restaurant=sequelize.define('restaurant',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    rating:{
        type: DataTypes.STRING,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false
    },
    delivers:{
        type: DataTypes.STRING,
        allowNull: false
    }
})
return Restaurant
}