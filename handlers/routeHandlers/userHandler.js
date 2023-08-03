const handler ={};
handler._users = {};
handler._users.post = (requestedProperties, callBack) =>{

};

handler.userHandler = (requestedProperties, callBack) =>{
    const acceptedMethod = ['GET', 'POST', 'PUT', 'DELETE'];
    if(acceptedMethod.indexOf(requestedProperties.method)> -1){
        handler._users[requestedProperties.method](requestedProperties, callBack);
    }
    else {
    callBack(405);
    };
}
    
module.exports = handler;