import styles from '../page.module.scss';
import Logo from '/public/Logo.png';
import Image from "next/image";
import Link from "next/link";
import { redirect } from 'next/navigation';
import { api } from '@/services/api';


export default function Cadastro() {

    async function handleCadastro(formData: FormData) {
        "use server"

        const nome = formData.get("nome");
        const email = formData.get("email");
        const senha = formData.get("senha");

        try {
            await api.post('/cadastro', 
                {
                    nome,
                    email,
                    senha
                }
            )
        } catch(err) {
            console.log("Erro");
            console.log(err);
        }

        redirect('/');
    }

    return (
        <main className={styles.main}>
            <div className={styles.containerCenter}>
                <Image
                    src={Logo}
                    alt='Logo do app'
                    width={600}
                    height={200}
                    className={styles.logo}
                />

                <section className={styles.login}>
                    <form action={handleCadastro}>
                        <input
                            type="name"
                            required
                            name='nome'
                            placeholder='Digite seu nome...'
                            className={styles.input}
                        />

                        <input
                            type="email"
                            required
                            name='email'
                            placeholder='Digite seu email...'
                            className={styles.input}
                        />

                        <input type="password"
                            required
                            name='senha'
                            placeholder='**********'
                            className={styles.input}
                        />

                        <button type='submit' className={styles.button}>Acessar</button>

                        <Link href="/" className={styles.text}>
                            Já uma conta? faça o login
                        </Link>
                    </form>
                </section>
            </div>
        </main>
    )
}