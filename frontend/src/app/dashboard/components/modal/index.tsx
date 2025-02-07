import styles from './styles.module.scss';
import { X } from 'lucide-react';
import { use } from 'react';
import { OrderContext } from '@/providers/pedido';

export function ModalPedido() {
    const { onRequestClose, detalhes } = use(OrderContext);

    console.log(detalhes);

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

                <button className={styles.botaoConcluir}>Concluir pedido</button>
            </section>
        </dialog >
    )
}