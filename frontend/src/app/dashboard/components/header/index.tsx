"use client"

import Logo from '/public/Logo.png';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { LogOutIcon } from 'lucide-react';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export function Header() {
    const router = useRouter();
    
    async function handleLogOut() {
        deleteCookie("session", { path: "/" });

        router.replace("/");
    }

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">
                    <Image src={Logo} alt='Logo' priority={true} quality={100} className={styles.logo} />
                </Link>

                <nav>
                    <Link href="/dashboard/categoria">Nova Categoria</Link>
                    <Link href="/dashboard/produto">Cardápio</Link>

                    <form action={handleLogOut}>
                        <button type='submit'>
                            <LogOutIcon size={24} color="#FFF"/>
                        </button>
                    </form>
                </nav>
            </div>
        </header>
    )
}