/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from "react";

import Link from "next/link";

import Navlink from "../Navlink";

import styles from './styles.module.scss';

export default function Header() {
  const [active, setActive] = useState(false)

  const handleActive = () => {
    setActive(!active)
  }

  return(
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href={'/'}>
          <img className={styles.logo} src='/Logo.png' alt="Logo Atlas Consultoria de RH" />
        </Link>

        <div className={styles.menu}>
          <div
            onClick={handleActive}
            className={!active ? styles.mobileMenu : styles.mobileMenuActive}
          />
        </div>
        
        <div className={active ? styles.mobileMenuOpen : styles.mobileMenuClose}>
          <ul className={styles.navlist}>
            <li>
              <Navlink href={'/'}>Início</Navlink>
            </li>
            <li>
              <Navlink href={'/About'}>Sobre nós</Navlink>
            </li>
            <li>
              <Navlink href={'/ServicesPage'}>Serviços</Navlink>
            </li>
            <li>
              <Navlink href={'/Contact'}>Contatos</Navlink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}