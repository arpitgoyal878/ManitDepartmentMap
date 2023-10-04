const path = require('path')

const rootDir = require('../util/path')


const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'))
});

// when we use get instead of use in line 4 we search for exact url


module.exports = router;