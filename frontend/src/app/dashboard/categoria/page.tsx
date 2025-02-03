import styles from './styles.module.scss';
import { Button } from '../components/button/page';
import { api } from '@/services/api';
import { getCookieServer } from '@/lib/cookieServer';
import { redirect } from 'next/navigation';

export default function Categoria() {
    async function handleCadastrarCategoria(formData: FormData) {
        "use server"

        const nome = formData.get("nome");

        const data = {
            nome: nome
        }

        const token = await getCookieServer();
        console.log(token);

        try {
            const response = await api.post("/cadastro-categoria", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log(response.data);
        } catch(err) {
            console.log(err);
            return;
        }

        redirect("/dashboard");
    }

    return (
        <main>
            <div className={styles.container}>
                <h1>Nova Categoria</h1>

                <form action={handleCadastrarCategoria}className={styles.form}>
                    <input type="text"
                        name='nome'
                        placeholder='Nome da categoria, ex: Pizzas'
                        required={true} />

                        <Button nome="Cadastrar"/>
                </form>
            </div>
        </main>
    )
}