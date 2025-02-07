import { getCookieServer } from "@/lib/cookieServer";
import { Pedidos } from "./components/pedidos";
import { api } from "@/services/api";
import { OrderProps } from "@/lib/order.type";

async function getPedidos(): Promise<OrderProps[] | []> {
    try {
        const token = await getCookieServer();

        const response = await api.get("/listar-pedidos", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data || [];
    }  catch(err) {
        console.log(err);
        return [];
    }
}

export default async function Dashboard() {
    const pedidos = await getPedidos();
    
    return (
        <div>
            <Pedidos pedidos={pedidos} />
        </div>
    )
}