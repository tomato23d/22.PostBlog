const router = require('express').Router();
const { Article, Category, User } = require('../models');
const sequelize = require('../config/connection');

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
   
     res.render("homepage", {articles, loggedIn: req.session.loggedIn});
    } catch (err){res.status(500).json(err);}
   
   })

////////////////////////////////////////

  //  router.get('/article/:id', async (req, res) => {

  //   try{ 
      
  //     const articleData = await Article.findByPk(req.params.id);
    
  //     const article = articleData.get({ plain: true })
  //     res.render('article', article);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  //     });



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

      router.get('/hellopage', async(req, res) => {
        try{
            const categoryData = await Category.findAll(
              { include: [{model: Article,
                attributes: ['title'],}]
              }
            );
            const categories = categoryData.map((categoryData) => {
                return categoryData.get({plain:true});
            });
            console.log(categories);
    
            res.render("hellopage", {categories, loggedIn: req.session.loggedIn});
        } catch (err){res.status(500).json(err);}
    })
    


module.exports = router;
