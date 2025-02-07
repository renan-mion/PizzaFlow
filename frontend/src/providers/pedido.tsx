"use client"

import { getCookieClient } from "@/lib/cookieClient";
import { ItemProps } from "@/lib/order.type";
import { api } from "@/services/api";
import { createContext, ReactNode, useState } from "react";
import { toast } from "sonner";

type OrderContextData = {
    isOpened: boolean,
    onRequestOpen: (id: string) => Promise<void>,
    onRequestClose: () => void;
    detalhes: ItemProps[];
    concluirPedido: (id: string) => Promise<void>;
}

type OrderProviderProps = {
    children: ReactNode
}

export const OrderContext = createContext({} as OrderContextData);

export function OrderProvider({ children }: OrderProviderProps) {
    const [isOpened, setIsOpened] = useState(false);
    const [detalhes, setDetalhes] = useState<ItemProps[]>([]);

    async function onRequestOpen(id: string) {
        const token = await getCookieClient();

        const response = await api.get(`/detalhes-pedido`, {
            params: {
                id: id
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        setDetalhes(response.data);

        setIsOpened(true);
    }

    async function onRequestClose() {
        setIsOpened(false);
    }

    async function concluirPedido(id: string) {
        try {
            const token = await getCookieClient();

            await api.put("/concluir-pedido", {
                id: id
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            onRequestClose();

            toast.success("Pedido concluído com sucesso");
        } catch (err) {
            console.log(err);
            toast.error("Erro ao concluir pedido")
            return;
        }
    }

    return (
        <OrderContext.Provider
            value={{
                isOpened,
                onRequestOpen,
                onRequestClose,
                detalhes,
                concluirPedido
            }}>
            {children}
        </OrderContext.Provider>
    )
}
