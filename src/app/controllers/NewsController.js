class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news'); //step 4
    }

    //[GET] /news/:slug
    show(req, res) {
        res.send('NEW DETAIL!!!');
    }
}

module.exports = new NewsController();
