//dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environments = require('./helpers/environmemnt');
const data = require('./lib/data');
const { error } = require('console');
//app object - module scaffold
const app = {};

//write data
data.create('test', 'TestyFile',{name:'Ello', lastName:'Bilai'},
(error)=>{
    console.log(`Error was ${error}`);
}
);
//read data
data.read('test', 'TestyFile',
(error, data)=>{
    console.log(error, data);
}
);
//Update data
data.update('test', 'TestyFile',{name:'Esky', lastName:'Biskyim'},
(error)=>{
    console.log(`Error was ${error}`);
}
);
//delete data
data.delete('test', 'TestyFile', (error)=>{
    console.log(error);
})

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environments.port, () => {
        console.log(`listening to port ${environments.port}`);
    });
};

//handle req, res
app.handleReqRes = handleReqRes;

//start server
app.createServer();
