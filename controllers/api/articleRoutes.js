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
      date_created: req.body.date_created,
      category_id: 1,
      user_id: 1
       });
       res.status(200).json(articleData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
  });

  
  // router.get('/article/:id', async (req, res) => {

  //   try{ 
      
  //     const articleData = await Article.findByPk(req.params.id);
    
  //     const article = articleData.get({ plain: true })
  //     res.render('article', article);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  //     });



module.exports = router;