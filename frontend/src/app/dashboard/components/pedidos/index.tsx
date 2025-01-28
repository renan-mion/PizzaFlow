import { api } from '@/services/api';
import styles from './styles.module.scss';
import { RefreshCw } from 'lucide-react';

export function Pedidos() {
    async function handleGetPedidos() {
        const pedidos = await api.get("/listar-pedidos");

        return pedidos.data;
    }

    return (
        <div className={styles.container}>
            <section className={styles.containerHeader}>
                <h1>Últimos Pedidos</h1>

                <button>
                    <RefreshCw size={24} color='#3fffa3'/>
                </button>
            </section>

            <section className={styles.listaPedidos}>
                <button className={styles.itemPedido}>
                    <div className={styles.tag}></div>
                    <span>Mesa 10</span>
                </button>

                <button className={styles.itemPedido}>
                    <div className={styles.tag}></div>
                    <span>Mesa 20</span>
                </button>
            </section>
        </div>
    ) 
}