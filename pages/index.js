import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Demo</title>
        <meta name="description" content="Demop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeDiv}>
      <h1 className={styles.homeTitle}>Sandwich Shop</h1>
      <p className={styles.homeAbout}>Welcome to our sandwich shop! Here you can register, order our sandwiches, and reorder past favorites!!
        <br/>Use the navigation above to choose what we can help you with today!
      </p>
      </div>
      
    </>
  )
}
