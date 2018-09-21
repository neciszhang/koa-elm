const AddressComponent = require("../../prototype/addressCompoent");

class CityHandle extends AddressComponent {
    constructor() {
        super();
    }
    async getCity(ctx) {
        const type = ctx.query.type;
        let cityInfo;

        try {
            switch (type) {
                case "guess":
                // console.log(1);
                    const city = await this.getCityName(ctx);
                    console.log(city);

                    break;
                case "hot":

                    break;
                case "group":

                    break;
                default:

                    return;
            }
            ctx.body = cityInfo;
        } catch (err) {
            console.log(2);
            ctx.body = {
                name: 'ERROR_DATA',
                message: '获取数据失败',
            };
        }

    }
    async getCityName(ctx){
        console.log(3);
        let cityInfo;
        try{
            cityInfo=await this.guessPosition(ctx);
        }catch{
            console.error('获取IP位置信息失败', err);
            ctx.body = {
                name: 'ERROR_DATA',
                message: '获取数据失败',
            };
            return;
        }
        return cityInfo;
    }
}

module.exports = new CityHandle();