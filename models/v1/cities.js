const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    data: {}
});

citySchema.statics.cityGuess = function (name) {
    return new Promise(async (resolve,reject)=>{
        const firstWord=nama.substr(0,1).toUpperCase();
        try{
            const city = await this.findOne();
            
        }catch(err){
            reject({
                name:"ERROR_DATA",
                message:"查找数据失败"
            });
            console.log(err);
        }
    });
}

const Cities = mongoose.model("Cities", citySchema);

modules.export = Cities;