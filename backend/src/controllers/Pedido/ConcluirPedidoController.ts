import { Request, Response } from "express";
import { ConcluirPedidoService } from "../../services/Pedido/ConcluirPedidoService";

class ConcluirPedidoController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const concluirPedidoService = new ConcluirPedidoService();

        const pedido = await concluirPedidoService.execute({ id });

        return res.json(pedido);
    }
}

export { ConcluirPedidoController }