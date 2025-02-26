"use client"

import styles from './page.module.scss';
import Logo from '/public/Logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { loginAction } from './components/LoginAction';
import { Loading } from '@/components/Loading';

import { useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(formData: FormData) {
    setIsLoading(true);
    await loginAction(formData);
    setIsLoading(false);
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
        {isLoading && (
            <div className={styles.loadingContainer}>
              <Loading />
            </div>)}
      </div>
    </main>
  );
}
