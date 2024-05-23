
import express, { Router } from 'express';
import path from 'path';


interface Options {
    port:number;
    public_path?: string;
    routes: Router;
}


export class Server {

    private app = express();
    private readonly port: number;
    private readonly publicpath: string;
    private readonly routes: Router;
    
    constructor(options: Options) {

        const {port, routes, public_path = 'public'} = options;
        
        this.port = port;
        this.publicpath = public_path;
        this.routes = routes;
    }


    async start() {
        // console.log('Servidor corriendo');


// Middlewares

// public Folder

this.app.use(express.static(this.publicpath) );



        // Routes
        this.app.use(this.routes);



        //SPA
        this.app.get('*', (req, res) =>{
            const indexPath = path.join(__dirname + `../../../${this.publicpath}/index.html`);
            res.sendFile(indexPath);

        });



        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto: 3000');
        })
    }
}