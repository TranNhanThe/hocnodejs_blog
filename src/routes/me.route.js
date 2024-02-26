const express = require('express');
const router = express.Router();

// hai cái trên coi trong quy ước của express trên website.

const meController = require('../app/controllers/MeController');


// newsController.index
router.get('/stored/courses', meController.storedCourses);



module.exports = router;
