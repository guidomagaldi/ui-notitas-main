let db = require('../database/models')



module.exports = {
    editar: function(req,res) {
        db.notitas.findByPk(req.params.id)
            .then((resultado) => {
                res.render('detail', {resultado:resultado})
            })
        },
        update: function (req,res) {
            db.notitas.update({
                title:req.body.title,
                description:req.body.message
            },{
                where: {
                    id:req.params.id
                }
            })

            res.redirect("/edit/" + req.params.id)
        }

    }
        