const router = require('express').Router();
const bodyParser = require('body-parser')
const item = require('./controller');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/items',  urlencodedParser, item.create);
router.get('/items', item.getAll);
router.patch('/item/:id',  urlencodedParser, item.update);
router.delete('/item/:id', item.delete);


module.exports = router;