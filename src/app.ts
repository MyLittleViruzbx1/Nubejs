import { env } from 'process';
import { evns } from './config/envs';
import { Server } from './presentacion/server';
import { AppRoutes } from './presentacion/routes';


( async() =>{
    main();
})();


function main(){

    const server = new Server({

        
        port: evns.PORT,
        public_path:evns.PUBLIC_PATH,
        routes: AppRoutes.routes,
    });
        server.start();
}