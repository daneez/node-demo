const logModule = require('./modules/module.js');
const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
    //request.url

    if(request.url.indexOf('mecca')>0){
        response.write("mecca");
        response.end()
    }
    else if(request.url.indexOf('carsales')>0){
        response.write("carsales");
        response.end()
    }
    else if(request.url.indexOf('.css')>0){
        const content = fs.readFileSync('./style.css')
        response.write(content);
        response.end()
    }
        const content = fs.readFileSync('./index.html')
        response.write(content);
        response.end();
}).listen(5666);

logModule.logMessage('server is running on 5666...')