const data = require('../../lib/data');

const handler ={};
handler._users = {};
handler._users.post = (requestedProperties, callBack) =>{
    const firstName = typeof(requestedProperties.body.firstName) === 
    'string' && requestedProperties.body.firstName.trim().length > 0
     ? requestedProperties.body.firstName : false;

     const lastName = typeof(requestedProperties.body.lastName) === 
    'string' && requestedProperties.body.lastName.trim().length > 0
     ? requestedProperties.body.lastName : false;

     const phone = typeof(requestedProperties.body.phone) === 
    'string' && requestedProperties.body.phone.trim().length == 11
     ? requestedProperties.body.phone : false;

     const password = typeof(requestedProperties.body.password) === 
    'string' && requestedProperties.body.password.trim().length > 7
     ? requestedProperties.body.password : false;

     const toAgree = typeof(requestedProperties.body.toAgree) === 
    'boolean' && requestedProperties.body.toAgree.trim().length > 0
     ? requestedProperties.body.toAgree : false;

     if(firstName && lastName && phone && password && toAgree){

     }
     else{
        callBack(400);
     }
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