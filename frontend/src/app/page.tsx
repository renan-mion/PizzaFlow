import styles from './page.module.scss';
import Logo from '/public/Logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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
          <form>
            <input
              type="email"
              required
              name='email'
              placeholder='Digite seu email...'
              className={styles.input}
            />

            <input type="password"
              required
              name='password'
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
