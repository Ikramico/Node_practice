
const crypto = require('node:crypto');
const utility = {};
utility.parseJSON = (JsonString) =>{
    let output;
    try{
        output = JSON.parse(JsonString);
    }
    catch{
        output = {};
    }
    return output;
}

utility.hash = (str) => {
    
}
module.exports = utility;