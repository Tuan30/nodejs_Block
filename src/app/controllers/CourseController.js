const Courses = require('../models/Courses')
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {

    //[GET] /courses/:slug
    show(req, res, next) {
        Courses.findOne({ slug: req.params.slug })
            .then(courses => {
                res.render('courses/show', { courses: mongooseToObject(courses) })
            })
            .catch(next)
    }

    //[POST] /courses/create
    create(req, res) {
        res.render("courses/create")
    }

    //[GET] /courses/store
    store(req, res, next) {
        const course = new Courses(req.body)
        course.save()
        res.send("COURSES SUCCESSFUL")
            .then(() => res.ridirect("/"))
            .catch(next)
    }
}

module.exports = new CourseController()