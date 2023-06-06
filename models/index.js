const Category = require('./category');
const Article = require('./article');
const User = require('./user');

Category.hasMany(Article, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

User.hasMany(Article, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Article.belongsTo(Category, {
  foreignKey: 'category_id',
});

Article.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { Category, Article, User };