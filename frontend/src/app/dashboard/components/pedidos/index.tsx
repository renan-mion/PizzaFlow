"use client"

import styles from './styles.module.scss';
import { RefreshCw } from 'lucide-react';
import { ModalPedido } from '../modal';
import { Props } from '@/lib/order.type';
import { use } from 'react';
import { OrderContext } from '@/providers/pedido';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function Pedidos({ pedidos }: Props) {
    const { isOpened, onRequestOpen } = use(OrderContext);
    const router = useRouter();

    async function handleDetalhesPedido(id: string) {
        await onRequestOpen(id);
    }

    function handleRefresh() {
        router.refresh();
        toast.success("Pedidos atualizados com sucesso");
    }

    return (
        <main>
            <div className={styles.container}>
                <section className={styles.containerHeader}>
                    <h1>Últimos Pedidos</h1>

                    <button>
                        <RefreshCw onClick={handleRefresh} size={24} color='#3fffa3' />
                    </button>
                </section>

                <section className={styles.listaPedidos}>
                    {pedidos.length === 0 && (
                        <span className={styles.spanSemPedidos}>
                            Nenhum pedido aberto no momento
                        </span>
                    )}
                    {pedidos.map((pedido) => {
                        return (
                            <button onClick={() => handleDetalhesPedido(pedido.id)} 
                            key={pedido.id} className={styles.itemPedido}>
                                <div className={styles.tag}></div>
                                <span>Mesa {pedido.mesa}</span>
                            </button>
                        )
                    })}
                </section>
            </div>

            {isOpened && <ModalPedido />}
        </main>
    )
}