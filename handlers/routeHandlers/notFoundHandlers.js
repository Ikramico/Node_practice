const handler ={};

handler.notFoundhandler = (requestedProperties, callBack) =>{
    callBack(400,{
        message: 'This Url not found'
    },
        );
}
module.exports = handler;