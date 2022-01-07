module.exports = (sequelize,dataTypes) => {

    let alias = 'Actor';
  
    let cols = {
        id: {
            type : dataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true,
        },
        created_at : {
            type : dataTypes.DATE,
            defaultValue : null
        },      
        first_name :{
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        last_name :{
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        rating : {
            type : dataTypes.DECIMAL(3,1).UNSIGNED,
            defaultValue : null
        },
        favorite_movie_id : {
          type : dataTypes.INTEGER.UNSIGNED,
          defaultValue : null
        }
    }
  
    let config = {
        tableName : "actors",
        timestamps : true, 
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        deleteAt : false
     }
  
  
    const Actor = sequelize.define(alias,cols,config)
  
    return Actor;
  
  }