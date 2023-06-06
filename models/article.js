const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Article extends Model {}

Article.init(

{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    text: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    rate: {
        type: DataTypes.INTEGER
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false
    },
 
   category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'id',
        }
    },
    
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        }
    }

},
{   sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'article'
  }
);

module.exports = Article;