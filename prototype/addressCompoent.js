const axios = require('axios');

const BaseCompoent = require('./baseCompoent');
class AddressComponet extends BaseCompoent {
    constructor() {
        super();
        this.tencentKey = "QZUBZ-I2U36-GV3SS-MI72X-6RZ2E-R2FV4";

    }
    async guessPosition(ctx) {
        return new Promise(async (resolve, reject) => {
            let ip = ctx.request.ip;
            const ipArr = ip.split(":");
            ip = ipArr[ipArr.length - 1];
            if (process.env.NODE_ENV == 'development') {
                ip = "210.13.90.250";
            }
            let result =await axios({
                method: 'get',
                url: 'https://apis.map.qq.com/ws/location/v1/ip',
                params: {
                    ip: ip,
                    key: this.tencentKey,
                },
            });
            console.log(result);

        })
    }
}

module.exports = AddressComponet;