const router = require('express').Router();
const Article = require('../../models/article');
//const sequelize = require('../../config/connection');



router.post('/', async (req, res) => {
  try { 
    console.log(Article);
      const articleData = await Article.create({
      title: req.body.title,
      text: req.body.text,
      rate: null,
      date_created: "2023-06-05",
      category_id: 1,
      user_id: 1
       });
       res.status(200).json(articleData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
  });


module.exports = router;