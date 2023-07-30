//dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
//app object - module scaffold
const app = {};

// app configuaration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

//handle req, res
app.handleReqRes = handleReqRes;

//start server
app.createServer();
