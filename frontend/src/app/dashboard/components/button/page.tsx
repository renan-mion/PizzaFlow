"use client"

import styles from './styles.module.css';
import { useFormStatus } from 'react-dom';

interface Props {
    nome: string
}

export function Button({ nome }: Props) {
    const { pending } = useFormStatus();

    return (
        <button type='submit'
            disabled={pending}
            className={styles.button}>
            {pending ? "Carregando" : nome }
        </button>
    )
}