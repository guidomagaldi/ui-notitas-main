var path = require('path')
let db = require ('../database/models')

module.exports = {
    inicio: (req,res) => {
        // db.sequelize.query("SELECT * FROM notitas")
        db.notitas.findAll({
            where: {
                status: 1
              }
        })
        .then((resultado) => {
            return res.render('index', {
                resultado:resultado
            })
            
        })
        // res.render('index')
    },
    create: (req,res)=>{
        db.notitas.create({
            title:req.body.title,
            description:req.body.description,
            status: 1,
            // prioridades:req.body.prioridades
        })
           return res.redirect('/')
        },
    delete:function(req,res){
        db.notitas.destroy({
            where: {
                id: req.params.id
              }
        })
        res.redirect('/')
    }

    }


 
