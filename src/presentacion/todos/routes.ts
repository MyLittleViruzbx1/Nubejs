import { Router } from "express";
import { todosController } from "./controller";

export class TodoRoutes {

    static get routes(): Router {
    
        const router = Router();
        const todoController = new todosController();

        router.get('/', todoController.getTodos);

        return router;
    }
}