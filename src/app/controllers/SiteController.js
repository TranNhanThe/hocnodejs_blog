const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    //[GET] /news
    index(req, res, next) {
    //     Course.find({})
    // .then(courses => {
    //     res.json(courses);
    // })
    // .catch(err => {
    //     next(err);
    //     res.status(400).json({ error: 'ERROR!!!' });
    // });
        // res.render('home'); //step 4

    Course.find({})
        .then(courses => {
         res.render('home', {
            courses: mutipleMongooseToObject(courses)
        })})
        .catch(error => next(error));
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
