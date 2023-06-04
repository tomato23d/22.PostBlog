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


//    router.get('/project/:id', async (req, res) => {

//     try{ 
      
//       const projectData = await Project.findByPk(req.params.id);
//       //console.log(projectData)
//       const project = projectData.get({ plain: true })
//       res.render('project', project);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//       });

module.exports = router;
