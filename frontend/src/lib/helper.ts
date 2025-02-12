import { ItemProps } from "./order.type";

export function calcularTotalPedido(detalhes: ItemProps[]) {
    return detalhes.reduce((total, item) => {
        const itemTotal = parseFloat(item.produto.preco) * item.quantidade;
        return total + itemTotal;
    }, 0)
}