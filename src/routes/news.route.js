const express = require('express');
const router = express.Router();

// hai cái trên coi trong quy ước của express trên website.

const newsController = require('../app/controllers/NewsController');
const SiteController = require('../app/controllers/SiteController');

// newsController.index
router.get('/:slug', newsController.show);
router.get('/', SiteController.index); //step 3

module.exports = router;
