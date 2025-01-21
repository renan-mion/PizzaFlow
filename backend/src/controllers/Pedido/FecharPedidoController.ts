import { Request, Response } from "express";
import { FecharPedidoService } from "../../services/Pedido/FecharPedidoService";

class FecharPedidoController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;

        const fecharPedidoService = new FecharPedidoService();

        const pedido = await fecharPedidoService.execute({ id });

        return res.json(pedido);
    }
}

export { FecharPedidoController }