import { Request, Response, Router } from "express";
import { getPandaById, getPandaList, updatePanda } from "./persitence";

const pandaRouter = Router();

pandaRouter.get('/', (req: Request, res: Response) => {
    res.json(getPandaList());
});

pandaRouter.get('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    res.json(getPandaById(id));
});

pandaRouter.post('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const payload = req.body;
    console.log(payload);

    updatePanda(id, payload);
    res.json(getPandaById(id));
});

export default pandaRouter;