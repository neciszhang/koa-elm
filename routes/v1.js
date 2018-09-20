var router = require('koa-router')();

router
    .get('/', (ctx, next) => {
        ctx.body = "Hello"
    })
    .get('/a', (ctx, next) => {
        ctx.body = "Hello222"
    });
    
module.exports = router;