import styles from './page.module.scss';
import Logo from '/public/Logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { api } from '@/services/api';
import { redirect } from 'next/navigation';

export default function Home() {
  async function handleLogin(formData: FormData) {
    "use server"

    const email = formData.get("email");
    const senha = formData.get("senha");

    try {
      const response = await api.post('/login', {
        email,
        senha
      });

      if(!response.data.token) {
        return;
      }

      console.log(response.data);
    } catch(err) {
      console.log("Erro");
      console.log(err);
    }

    redirect("/dashboard");
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
          <form action={handleLogin}>
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

            <Link href="/cadastro" className={styles.text}>
              Não possui uma conta? Cadastre-se
            </Link>
          </form>
        </section>
      </div>
    </main>
  );
}
