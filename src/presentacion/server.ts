
import express from 'express';
import path from 'path';


interface Options {
    port:number;
    public_path?: string
}


export class Server {

    private app = express();
    

    private readonly port: number;
    private readonly publicpath: string
    
    constructor(options: Options) {

        const {port,public_path = 'public'} = options;
        
        this.port = port;
        this.publicpath = public_path;
    }


    async start() {
        // console.log('Servidor corriendo');


// Middlewares

// public Folder

this.app.use(express.static(this.publicpath) );


this.app.get('/api/todos', (req, res) =>{
    res.json([
        {id:1, text:'Buy milk', createdAt: new Date()},
        {id:2, text:'Buy bread', createdAt: null},
        {id:3, text:'Buy sugar', createdAt: new Date()}
    ])
})




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