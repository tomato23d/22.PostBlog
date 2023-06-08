const router = require('express').Router();
//const Article = require('../models/article');
//const Category = require('../models/category');
const { Article, Category, User } = require('../models');
const sequelize = require('../config/connection');


  //  router.get('/', async (req, res) => {
  //   try{ 
  //    const articleData = await Article.findAll();
  //    const articles = articleData.map((articleData) => {
  //      return articleData.get({plain:true});
  //    });
  //  //  console.log(articles);
  //    res.render("homepage", {articles});
  //   } catch (err){res.status(500).json(err);}
   
  //  })

// /////////////////////////////////////////
   router.get('/', async (req, res) => {
    try{ 
     const articleData = await Article.findAll({
        include: [{model: Category,
                    attributes: ['category_name'],}],
   
     });
     const articles = articleData.map((articleData) => {
       return articleData.get({plain:true});
     });
   
     console.log(articles);
     res.render("homepage", {articles});
    } catch (err){res.status(500).json(err);}
   
   })

////////////////////////////////////////

   router.get('/article/:id', async (req, res) => {

    try{ 
      
      const articleData = await Article.findByPk(req.params.id);
    
      const article = articleData.get({ plain: true })
      res.render('article', article);
    } catch (err) {
      res.status(500).json(err);
    }
      });



      router.get('/add-article', async (req, res) => {

        try{ 
          res.render('add-article');
        } catch (err) {
          res.status(500).json(err);
        }
          });
    

        router.get('/login', async (req, res) => {

            try{ 
              res.render('login');
            } catch (err) {
              res.status(500).json(err);
            }
              });

          router.get('/hellopage', async (req, res) => {

          try{ 
            res.render('hellopage');
                } catch (err) {
                  res.status(500).json(err);
               }
             });


module.exports = router;
