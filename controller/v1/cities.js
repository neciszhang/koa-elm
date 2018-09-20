const AddressComponent=require("../../prototype/addressCompoent");

class CityHandle extends AddressComponent{
    constructor(){
        super();       
    }
    async getCity(ctx){
        const type=ctx.query.type;
        let cityInfo;
        ctx.body = {
            name: 'ERROR_DATA',
            message: '获取数据失败',
        };

        try{
            switch(type){
                case "guess":

                break;
                case "hot":

                break;
                case "group":

                break;
                default:
                
                return;
            }
            ctx.body=cityInfo;
        }catch(err){
            ctx.body= {
                name: 'ERROR_DATA',
				message: '获取数据失败',
            };
        }

    }
}

module.exports=new CityHandle();