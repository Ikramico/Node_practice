const { error } = require('console');
const fs = require('fs');
const path = require('path');
const lib = {};

lib.basedire = path.join(__dirname, '/../.data/');
//Create a file
lib.create = function(dir, file, data, callback){
    fs.open(`${lib.basedire}${dir}/${file}.json`, 'wx',
    function(error, fileDescriptor){
        if(!error && fileDescriptor){
            //covert to string
            const StringData = JSON.stringify(data);
            //write file data
            fs.writeFile(fileDescriptor, StringData, function(error, fileDescriptor){
                if(!error){
                     fs.close(fileDescriptor,
                     (error) => {
                        if(error) {
                            callback(`Error in file closing`);
                        }
                        else{
                            callback('No error Occured');
                        }
                    }
                    );
                }
                else{
                    callback('Failed!')
                }
            })
        }
        else {
            callback(`This file exist`);
        }
    });
};
//Read a file
lib.read = function(dir, file, callBack){
    fs.readFile(`${lib.basedire}${dir}/${file}.json`,'utf-8',
    (error, data) =>{
        callBack(error, data);
    }
    )
}
//Update a file
lib.update = function(dir, file, data, callback){
    fs.open(`${lib.basedire}${dir}/${file}.json`, 'rs+',
    function(error, fileDescriptor){
        if(!error && fileDescriptor){
            //covert to string
            const StringData = JSON.stringify(data);
            //update
            fs.truncate(fileDescriptor, (error) =>{
                if(!error){
                    fs.writeFile(fileDescriptor, StringData, function(error, fileDescriptor){
                if(!error){
                     fs.close(fileDescriptor,
                     (error) => {
                        if(error) {
                            callback(`Error in file closing`);
                        }
                        else{
                            callback('No error Occured');
                        }
                    }
                    );
                }
                else{
                    callback('Failed to overwrite!')
                }
            });
                }
                else{
                    console.log('Error for truncating');
                }
            })
            //write file data
            
        }
        else {
            callback(`This file exist`);
        }
    });
};
module.exports = lib;