"use client"

import { getCookieClient } from "@/lib/cookieClient";
import { ItemProps } from "@/lib/order.type";
import { api } from "@/services/api";
import { createContext, ReactNode, useState } from "react";

type OrderContextData = {
    isOpened: boolean,
    onRequestOpen: (id: string) => Promise<void>,
    onRequestClose: () => void;
    detalhes: ItemProps[];
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

    function onRequestClose() {
        setIsOpened(false);
    }

    return (
        <OrderContext.Provider
            value={{
                isOpened,
                onRequestOpen,
                onRequestClose,
                detalhes
            }}>
            {children}
        </OrderContext.Provider>
    )
}
