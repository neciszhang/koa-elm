const Koa = require('koa');
const session = require('koa-session');
const serve = require('koa-static');
const chalk = require('chalk');
const history = require('koa-history-api-fallback');
const config = require('./config/default');
const router = require('./routes/index');
// import router from './routes/index.js'
const log = console.log;



const app = new Koa();
app.keys = ['some secret hurr'];
// app.proxy = true;

const CONFIG = {
    key: config.session.name + ':' + config.session.secret,
    /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: config.session.maxAge,
    overwrite: true,
    /** (boolean) can overwrite or not (default true) */
    httpOnly: config.session.httpOnly,
    /** (boolean) httpOnly or not (default true) */
    signed: true,
    /** (boolean) signed or not (default true) */
    rolling: false,
    /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false,
    /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
}
app.use(session(CONFIG, app));
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Authorization,X-Requested-With,Content-Type,Accept');
    ctx.set('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS');
    ctx.set('X-Powered-By', 'necis@tzjjtech.cn');
    await next();
});

// log(router);
router(app);
// app.use(router())

app.use(history());
app.use(serve(__dirname + '/public'));

app.listen(config.port, () => {
    log(chalk.green(`成功监听端口:${config.port}`));
});