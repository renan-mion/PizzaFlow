import { Request, Response } from "express";
import { RemoverItemService } from "../../services/Item/RemoverItemService";

class RemoverItemController {
    async handle(req: Request, res: Response) {
        const id_item = req.query.id_item as string;

        const removerItemService = new RemoverItemService();

        const item = await removerItemService.execute({ id_item });

        return res.json(item);
    }
}

export { RemoverItemController }