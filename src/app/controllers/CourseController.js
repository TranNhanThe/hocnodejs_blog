const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {
    // /courses/:slug
    // thông tin chi tiết
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
        // .then(course => {
        //     // res.json(course);
        //     res.render('courses/show', { course: mongooseToObject(course) })
        // })
        // .catch(next);
        // cách ở dưới được lưu truyền trên mạng
        Course.findOne({ slug: req.params.slug }).lean()
            .then(course => res.render('courses/show', { course }))
            .catch(next)
    }

    // [GET] /courses/create
    // Thêm
    create(req, res, next) {
        res.render('courses/create')
    }

    // [POST] /courses/store
    // Thêm is saved
    store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/0.jpg`;
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect(`/me/stored/courses`))
            .catch(error => {

            })

    }
    //[GET] /courses/:id/edit
    //lấy dữ liệu ra để sửa
    edit(req, res, next) {
        Course.findById(req.params.id).lean()
            .then(course => res.render('courses/edit', { course }))
            .catch(next);
    }
    //[POST/PUT] /courses/:id/
    //Sửa
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //[Delete] /courses/:id/
    //Delete hard
    //     destroy(req, res, next){
    //         Course.deleteOne({_id: req.params.id})
    //             .then(() => res.redirect('/me/stored/courses'))
    //             .catch(next);
    //    }

    // Delete soft
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //[PATCH] /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[Delete] /courses/:id/force
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

}

module.exports = new CourseController();
