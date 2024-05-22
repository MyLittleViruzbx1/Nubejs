import { Server } from './presentacion/server';


( async() =>{
    main();
})();


function main(){
    const server = new Server();

    server.start();
}