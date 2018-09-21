const CityHandle= require('../controller/v1/cities');
const router = require('koa-router')();

router
    .get('/cities', CityHandle.getCity)
    .get('/a', (ctx, next) => {
        // console.log(ctx.req.ip);
        console.log(ctx.request.ip);
        console.log(ctx.socket.remoteAddress);
        console.log(ctx.get("x-forwarded-for"));
        ctx.body = "Hello222"
    });

module.exports = router;