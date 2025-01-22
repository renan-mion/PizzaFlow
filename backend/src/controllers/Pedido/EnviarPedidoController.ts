import { Request, Response } from "express";
import { EnviarPedidoService } from "../../services/Pedido/EnviarPedidoService";

class EnviarPedidoController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const enviarPedidoService = new EnviarPedidoService();

        const pedido = await enviarPedidoService.execute({ id });

        return res.json(pedido);
    }
}

export { EnviarPedidoController }