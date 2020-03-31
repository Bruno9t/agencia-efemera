const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController')

/* GET home page. */
router.get('/',homeController.index)

router.post('/contato',homeController.contato)

router.post('/newsletter',homeController.newsletter)

router.get('/subscribers',homeController.list)

module.exports = router;
