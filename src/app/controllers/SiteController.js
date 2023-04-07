const Courses = require('../models/Courses')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {

    //[GET] /home
    index(req, res, next) {

        Courses.find({})
            .then(courses => {
                res.render('home', { courses: mutipleMongooseToObject(courses) })
            })
            .catch(next)
        // res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController