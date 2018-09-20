const CityHandle= require('../controller/v1/cities');
const router = require('koa-router')();

router
    .get('/cities', CityHandle.getCity)
    .get('/a', (ctx, next) => {
        ctx.body = "Hello222"
    });

module.exports = router;