import React from 'react'
import Image from 'next/image'
import styles from "../../styles/About.module.scss"


const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutContainer}>
        <h1>ABOUT ME  </h1>
        <div className={styles.imageWithText}>
          <Image className={styles.image} alt="aaa" src="/profileImage.png" height={500} width={375} />
          <p className={styles.text}>
            I am a lifestyle and fashion photographer who studied “Fashion communication with business studies” at The University of Brighton.<br/><br/>
            Working for a variety of clients within Brighton and Hove, I help brands establish and build their unique brand identity and develop their personal style.<br/><br/>
            Clients include: Woven Store, eleven everything, Studio 50, Dove and Myrtle, Wag and wool.
          </p>
          
        </div>
      </div>
      <footer>
        <small> Contact me via amberlloydphotography@gmail.com</small>
        <small>Instagram @amberloulloyd</small>

      </footer>
        
        
    </div>
  )
}

export default AboutPage