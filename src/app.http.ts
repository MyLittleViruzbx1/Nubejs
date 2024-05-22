import fs from 'fs';
import http from 'http';

const server = http.createServer((req, res) =>{

    // console.log(req.url);

    // res.writeHead(200,{'Content-Type': 'text/html'});
    // res.write('<h1>Hola Mundo!<h1/>');
        // res.end();

    // const data = {name: 'Wilson Doe', age: 30, Departamento: 'Guatemala'};
    // res.writeHead(200, {'Content-type': 'applicacion/json'});
    // res.end(JSON.stringify(data) );


    console.log(req.url);
    if(req.url === '/') {
        const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
        res.writeHead(200,{'Content-Type' : 'text/html'})
        res.end(htmlFile);
        return;
    }

    //Express, Fastify, => Nest.js

    if(req.url?.endsWith('.js') ){
        res.writeHead(200,{'Content-Type': 'application/javascript'});
    }else if(req.url?.endsWith('.css')){
        res.writeHead(200,{'Content-Type': 'text/css'});
    }

    const responseContent = fs.readFileSync(`./public${ req.url}`, 'utf-8');
    res.end( responseContent );

});

server.listen(3000, () => {
    console.log('Servidor corriendo en el puerto: 3000')
})