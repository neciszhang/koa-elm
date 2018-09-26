'use strict';
const axios = require('axios');

const BaseCompoent = require('./baseCompoent');
class AddressComponet extends BaseCompoent {
    constructor() {
        super();
        this.tencentKey = "QZUBZ-I2U36-GV3SS-MI72X-6RZ2E-R2FV4";

    }
    //根据ip获取定位地址
    async guessPosition(ctx) {
        return new Promise(async (resolve, reject) => {
            let ip = ctx.request.ip;
            const ipArr = ip.split(":");
            ip = ipArr[ipArr.length - 1];
            if (process.env.NODE_ENV == 'development') {
                ip = "210.13.90.250";
            }
            try {
                let result = await axios({
                    method: 'get',
                    url: 'https://apis.map.qq.com/ws/location/v1/ip',
                    params: {
                        ip: ip,
                        key: this.tencentKey,
                    },
                });
                if (result.data.status == 0) {
                    const cityInfo = {
                        lat: result.data.result.location.lat,
                        lng: result.data.result.location.lng,
                        city: result.data.result.ad_info.city
                    }
                    cityInfo.city = cityInfo.city.replace(/市$/, "");
                    resolve(cityInfo);
                } else {
                    console.log('定位失败', result)
                    reject('定位失败');
                }
            } catch (err) {
                reject(err);
            }

        })
    }
}

module.exports = AddressComponet;