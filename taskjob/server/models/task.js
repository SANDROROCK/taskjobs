const moongoose = require ('mongoose');
const Schema = moongoose.Schema;


let Task = new Schema(
    {
        titulo:{
            type:String,
            required: true,
        },
        concluido:{
            type:Boolean,
            default:false,
        },
        detalhes:{
                type:String,
        },
        dataCreate:{
            type:Date,
            default:Date.now(),
        },
        dataConclusap:{
            type:Date,

        },
        relebrar:{
            type:Date,
        }
    }
);

module.exports = moongoose.model('Task',Task);
