//dependencies
const {StringData, StringDecoder} = require ('string_decoder');
const url = require('url');
const routes = require('./routes');
const {notFoundHandler} = require('../handlers/routeHandlers/notFoundHandlers')

const handler = {};

handler.handleReqRes = (req, res )=>  {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toUpperCase();
    const queryString = parsedUrl.query;
    const headerObject = req.headers;

    const requestedProperties ={
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryString,
        headerObject,
    }

    const decoder = new StringDecoder('utf-8');
    let realData = '';
    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath]: notFoundHandler;
    chosenHandler(requestedProperties, (statusCode, payLoad) => {
        statusCode = typeof(statusCode) === 'number'? statusCode : 500;
        payLoad = typeof(payLoad) === 'object'? payLoad : {};

        const payLoadString = JSON.stringify(payLoad);

        //return final response
        res.write(statusCode);
        res.end(payLoadString);
    },
    );
    req.on('data', (buffer)=> {
        realData += decoder.write(buffer);
    });
    req.on('end', ()=> {
        realData += decoder.end();
        console.log(realData);
    res.end('Ello Bilai');
    })
    
};
module.exports = handler;