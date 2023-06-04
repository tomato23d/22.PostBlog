const Category = require('./category');
const Article = require('./article');
const User = require('./user');

Category.hasMany(Article, {
  foreignKey: 'place_id',
  onDelete: 'CASCADE',
});

User.hasMany(Article, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});



Article.belongsTo(Category, {
  foreignKey: 'category_id',
});

Article.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { Category, Article, User };