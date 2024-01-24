const router = require('express').Router();

//router.get('/', (req, res) => {res.send(`Hello World`); });

//router.post('/', (req, res) => {
    //res.send('Post Request Ready');})//

router.use('/users', require('./users'));

module.exports = router;