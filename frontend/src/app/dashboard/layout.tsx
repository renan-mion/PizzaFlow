import { Header } from "./components/header";
import { OrderProvider } from "@/providers/pedido";

export default function DashboardLayout({ children }:
    { children: React.ReactNode }
) {
    return (
        <div>
            <Header />
            <OrderProvider>
                {children}
            </OrderProvider>
        </div>
    )
}