
class SiteController {

    //[GET] /news
    index(req, res) {
        res.render('home');//step 4
    }


    //[GET] /search
    search(req, res){
        res.render('search');
    }
}

module.exports = new SiteController;