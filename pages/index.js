import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react'
import Form from '../components/Form'

export default function Home() {

  const { data: session, status } = useSession()
  return (
    <div className={styles.container}>
      {session ? (
      <p>You are logged in!</p> 
      ): (
      <p>
        You are not logged in 😞 <a href='/api/auth/signin'>Login</a>
        </p>
        )}
    </div>
  )
}
