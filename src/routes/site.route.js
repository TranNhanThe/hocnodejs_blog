const express = require('express');
const router = express.Router();

// hai cái trên coi trong quy ước của express trên website.

const SiteController = require('../app/controllers/SiteController');

// newsController.index
router.use('/search', SiteController.search)
router.use('/', SiteController.index)//step 3


module.exports = router;