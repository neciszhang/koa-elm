'use strict';
const Cities= require("../../controller/v1/cities");
const AddressComponent = require("../../prototype/addressCompoent");
const pinyin = require('pinyin');

class CityHandle extends AddressComponent {
    constructor() {
        super();
        //Manual binding methods
        this.getCity = this.getCity.bind(this);
    }
    async getCity(ctx) {
        const type = ctx.query.type;
        let cityInfo;
        // console.log(CityHandle);
        try {
            switch (type) {
                case "guess":
                    // console.log(this);
                    const city = await this.getCityName(ctx);
                    console.log(city);

                    // console.log(CityHandle());
                    // const city = await this.getName();
                    // console.log(city);
                    cityInfo = city;

                    break;
                case "hot":

                    break;
                case "group":

                    break;
                default:

                    return;
            }
            ctx.body = {
                name: '111',
                message: '获取数据失败',
            };;
        } catch (err) {
            ctx.body = {
                name: 'ERROR_DATA',
                message: '获取数据失败',
            };
        }

    }
    /**
     * 获取所在城市拼音名
     * @param {*} ctx 
     */
    async getCityName(ctx) {
        let cityInfo;
        try {
            cityInfo = await this.guessPosition(ctx);
            const pinyinArr = pinyin(cityInfo.city, {
                style: pinyin.STYLE_NORMAL
            });
            let cityName = '';
            pinyinArr.forEach(item => {
                cityName += item[0];
            });
            return cityName;
        } catch {
            console.error('获取IP位置信息失败', err);
            ctx.body = {
                name: 'ERROR_DATA',
                message: '获取数据失败',
            };
            return;
        }
    }
}

module.exports = new CityHandle();