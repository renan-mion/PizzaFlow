export interface OrderProps {
    id: string,
    mesa: number,
    status: boolean,
    rascunho: boolean,
    nome: string | null
}

export interface ProductProps {
    id: string,
    nome: string,
    preco: string,
    descricao: string,
    banner: string
    fk_Id_Categoria: string
}

export interface Props {
    pedidos: OrderProps[]
}

export interface ItemProps {
    id: string,
    quantidade: number,
    fk_Id_Pedido: string,
    fk_Id_Produto: string,
    produto: ProductProps,
    pedido: OrderProps
}
