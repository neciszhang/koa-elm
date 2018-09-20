'use strict';
const api = require('koa-router')();
const v1 = require('./v1');

module.exports = app => {
    api.use('/v1', v1.routes());

    app.use(api.routes());
}