import React from 'react'
import styles from "../styles/Navbar.module.scss"
import {BsInstagram, BsLinkedin} from "react-icons/bs"
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <BsInstagram className={styles.icon}/>
        <BsLinkedin className={styles.icon}/>

      </div>
        

        <Link href="/"><div className={styles.image}>
          <Image src="/amberLogo.png" alt="logo" height={100} width={160}/>
        </div></Link>
        
        <div className={styles.textBox}>
          <Link href="/"><h1>HOME</h1></Link>
          <Link href="/about"><h1>ABOUT</h1></Link>
          <Link href="/contact"><h1>CONTACT</h1></Link>

        </div>

    </div>
  )
}

export default Navbar