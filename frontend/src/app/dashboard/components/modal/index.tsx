import styles from './styles.module.scss';
import { X } from 'lucide-react';
import { use } from 'react';
import { OrderContext } from '@/providers/pedido';
import { api } from '@/services/api';
import { getCookieClient } from '@/lib/cookieClient';

export function ModalPedido() {
    const { onRequestClose, detalhes } = use(OrderContext);

    async function handleConcluirPedido(id: string) { 
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
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <dialog className={styles.container}>
            <section className={styles.content}>
                <button onClick={onRequestClose} className={styles.botaoVoltar}>
                    <X size={60} color='#FF3f4b' />
                </button>

                <article className={styles.pedido}>
                    <h2>Detalhes do pedido</h2>
                    <span>Mesa: <b>{detalhes[0].pedido.mesa}</b></span>
                    {detalhes.map((item, index) => {
                        return (
                            <section key={item.id} className={styles.item}>
                                <span className={styles.nomeItem}>{index + 1} - {item.produto.nome}</span>
                                <span className={styles.descricaoItem}>{item.produto.descricao}</span>
                            </section>
                        )
                    })}
                </article>

                <button onClick={() => handleConcluirPedido(detalhes[0].pedido.id)} className={styles.botaoConcluir}>Concluir pedido</button>
            </section>
        </dialog >
    )
}