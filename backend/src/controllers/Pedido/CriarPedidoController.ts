import { Request, Response } from "express";
import { CriarPedidoService } from "../../services/Pedido/CriarPedidoService";

class CriarPedidoController {
    async handle(req: Request, res: Response) {
        const { mesa, nome } = req.body;

        const criarPedidoService = new CriarPedidoService();

        const pedido = await criarPedidoService.execute({ mesa, nome });

        return res.json(pedido);
    }
}

export { CriarPedidoController }