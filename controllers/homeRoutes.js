const router = require('express').Router();
const Article = require('../models/article');
const sequelize = require('../config/connection');


   router.get('/', async (req, res) => {
    try{ 
     const articleData = await Article.findAll()
     const articles = articleData.map((articleData) => {
       return articleData.get({plain:true});
     });
   
     console.log(articles);
     res.render("homepage", {articles});
    } catch (err){res.status(500).json(err);}
   
   })


   router.get('/article/:id', async (req, res) => {

    try{ 
      
      const articleData = await Article.findByPk(req.params.id);
    
      const article = articleData.get({ plain: true })
      res.render('article', article);
    } catch (err) {
      res.status(500).json(err);
    }
      });


  
    router.post('/', async (req, res) => {
      try { 
          const articleData = await Article.create({
          title: req.body.title,
          text: req.body.text,
          rate: null,
          date_created: "2023-06-05",
          category_id: 1,
          user_id: 1
           });
    
           const articlesData = await Article.findAll()
           const articles = articlesData.map((articleData) => {
           return articleData.get({plain:true});
         });
         res.render("homepage", {articles});
        
        
        //res.status(200).json(projectData)
      } catch (err) {
        res.status(400).json(err);
      }
      });
    

module.exports = router;
