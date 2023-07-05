import { Outfit } from 'next/font/google'
import Image from 'next/image'
import styles from './page.module.css'
import SuggestedOutfit from './suggest/outfit'
import SearchBar from './suggest/searchBar'

export default function Home() {
  const tf = require('@tensorflow/tfjs')
  require('dotenv').config()
  const mysql = require('mysql2')
  const connection = mysql.createConnection(process.env.DATABASE_URL)
  console.log('Connected to PlanetScale!')
  connection.end()
  return (
    <>
      <main className={styles.main}>
        <h1>Suggestions</h1>
        <SearchBar />
        <SuggestedOutfit />

      </main>
     
    </>
  )
}
