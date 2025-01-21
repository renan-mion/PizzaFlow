import { Request, Response } from "express";
import { AdicionarItemService } from "../../services/Item/AdicionarItemService";

class AdicionarItemController {
    async handle(req: Request, res: Response) {
        const { quantidade, id_pedido, id_produto } = req.body;

        const adicionarItemService = new AdicionarItemService();

        const item = await adicionarItemService.execute({ quantidade, id_pedido, id_produto });

        return res.json(item);
    }
}

export { AdicionarItemController }