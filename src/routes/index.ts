import { Router, Request, Response } from "express";
import user from "./user";



const routes = Router()

routes.use("/user", user);


routes.use((req: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default routes;
