const db = require('../database/models');

module.exports = {
    list : (req,res) => {
        db.Genre.findAll()
        .then(genres => {
            
            return res.render('genresList', 
                {genres})

        }) .catch(error => console.log(error))
    },
    detail : (req,res) => {
        db.Genre.findByPk(req.params.id)
        .then(genres => {
            
            return res.render('genresDetail',
                {genres}
            )
        })
        .catch(error => console.log(error))
    }
}