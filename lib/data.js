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
            fs.writeFile(StringData, function(error, fileDescriptor){
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
            fs.ftruncate(fileDescriptor, (error) =>{
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
//delete a file
lib.delete = function(dir, file, callBack){
    fs.unlink(`${lib.basedire}${dir}/${file}.json`,
    (error)=> {
        if(!error){
            console.log('No error for deleting');
        }
        else{
            console.log(`File can't be deleted`);
        }
    });
}
module.exports = lib;