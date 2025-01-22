import { Request, Response } from "express";
import { DetalhesPedidosService } from "../../services/Pedido/DetalhesPedidoService";

class DetalhesPedidosController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;

        const detalhesPedidoService = new DetalhesPedidosService();

        const detalhes = await detalhesPedidoService.execute({ id });

        return res.json(detalhes);
    }
}

export { DetalhesPedidosController }