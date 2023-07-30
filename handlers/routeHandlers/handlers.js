const handler ={};

handler.sampleHandler = (requestedProperties, callBack) =>{
    callBack(200,{
        message: 'This is a test URL'
    }
        
        )
}
module.exports = handler;