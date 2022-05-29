import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      
      <div className={styles.photoContainer}>
        <div className={styles.photoColumn}>
        <div className={styles.photo}>
          <Zoom zoomMargin={300}><Image src="/DSC_8472.jpg" width={458} height={303} alt="photo" quality={100}/></Zoom>
        </div>

          <div className={styles.photo}>
            <Zoom zoomMargin={100}><Image src="/DSC_8490.jpg" width={458} height={641} alt="photo" quality={100}/></Zoom>
          </div>

          <div className={styles.photo}>
            <Zoom zoomMargin={100}><Image src="/DSC_8555.jpg" width={458} height={458} alt="photo" quality={100}/></Zoom>
          </div>

        </div>

        <div className={styles.photoColumn}>
          <div className={styles.photo}>
            <Zoom zoomMargin={100}><Image src="/co.jpg" width={458} height={691} alt="photo" quality={100}/></Zoom>
          </div>

          <div className={styles.photo}>
            <Zoom zoomMargin={100}><Image src="/DSC_7749.jpg" width={458} height={691} alt="photo" quality={100}/></Zoom>
          </div>

        </div>
        <div className={styles.photoColumn}>
          <div className={styles.photo}>
            <Zoom zoomMargin={100}><Image src="/DSC_0064.jpg" width={458} height={641} alt="photo" quality={100}/></Zoom>
          </div>

          <div className={styles.photo}>
            <Zoom zoomMargin={300}><Image src="/DSC_2632.jpg" width={458} height={286} alt="photo" quality={100}/></Zoom>
          </div>

          <div className={styles.photo}>
            <Zoom zoomMargin={300}><Image src="/DSC_2454.jpg" width={458} height={458} alt="photo" quality={100}/></Zoom>
          </div>

        </div>

        


        
      </div>

      <footer>
        <small> Contact me via amberlloydphotography@gmail.com</small>
        <small>Instagram @amberloulloyd</small>

        </footer>
    




      
    </div>
  )
}
