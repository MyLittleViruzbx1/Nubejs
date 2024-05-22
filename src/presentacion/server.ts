
import express from 'express';
export class Server {

    private app = express()

    async start() {
        // console.log('Servidor corriendo');


// Middlewares

// public Folder

this.app.use(express.static('public'));


        this.app.listen(3000, () => {
            console.log('Servidor corriendo en el puerto: 3000');
        })
    }
}