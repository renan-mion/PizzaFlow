import styles from './styles.module.scss';
import { X } from 'lucide-react';
import { use } from 'react';
import { OrderContext } from '@/providers/pedido';
import { calcularTotalPedido } from '@/lib/helper';
import Image from 'next/image';

export function ModalPedido() {
    const { onRequestClose, concluirPedido, detalhes } = use(OrderContext);

    async function handleConcluirPedido(id: string) {
        await concluirPedido(id);
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
                    {detalhes.map((item) => {
                        return (
                            <section key={item.id} className={styles.item}>
                                <Image src={item.produto.banner} width={80} height={80} alt="imagem" />
                                <div className={styles.spansItem}>
                                    <span
                                        className={styles.nomeItem}>
                                        Qtd: {item.quantidade} - <b />
                                        {item.produto.nome} - <b />
                                        R$ {(parseFloat(item.produto.preco) * item.quantidade).toFixed(2)}
                                    </span>
                                    <span
                                        className={styles.descricaoItem}>
                                        {item.produto.descricao}
                                    </span>
                                </div>

                            </section>
                        )
                    })}
                    <span>Valor Total: R$ {calcularTotalPedido(detalhes).toFixed(2)}</span>
                </article>

                <button onClick={() => handleConcluirPedido(detalhes[0].pedido.id)} className={styles.botaoConcluir}>Concluir pedido</button>
            </section>
        </dialog >
    )
}