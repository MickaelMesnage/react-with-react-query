import { Request, Response, Router } from "express";
import { createPanda, getPandaById, getPandaList, updatePanda } from "./persitence";

const pandaRouter = Router();

pandaRouter.get('/', (req: Request, res: Response) => {
    res.json(getPandaList());
});

pandaRouter.get('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    res.json(getPandaById(id));
});

pandaRouter.post('/', (req: Request, res: Response) => {
    const payload = req.body;
    createPanda(payload);
    res.json();
});

pandaRouter.put('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const payload = req.body;
    updatePanda(id, payload);
    res.json(getPandaById(id));
});

export default pandaRouter;