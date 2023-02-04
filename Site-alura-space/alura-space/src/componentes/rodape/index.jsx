import React from 'react'
import styles from './rodape.module.scss'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import instagram from './instagram.svg'

export default function Rodape()
{
  return (
    <footer className={styles.rodape}>
      <ul className={styles.rodape__lista}>
        <li className={styles.rodape__item}>
          <a href="https://www.protocol.com/media-library/elon-musk.jpg?id=29293464&width=1245&height=700&quality=85&coordinates=0%2C67%2C0%2C68" target={'_blank'} rel="noreferrer">
            <img src={facebook} alt="logo do facebook" />
          </a>
        </li>

        <li className={styles.rodape__item}>
          <a href="https://pbs.twimg.com/media/C0cXuJ2WgAE9fAt?format=jpg&name=large" target={'_blank'} rel="noreferrer">
            <img src={twitter} alt="logo do twitter" />
          </a>
        </li>
        
        <li className={styles.rodape__item}>
          <a href="https://pbs.twimg.com/profile_images/1289324739794735104/mQoHcZfq_400x400.jpg" target={'_blank'} rel="noreferrer">
            <img src={instagram} alt="logo do instagram" />
          </a>
        </li>
      </ul>
      <p>Desenvolvido por <a href="https://github.com/gildairmoreira" target={'_blank'} rel="noreferrer"  >Gildair</a>.</p>
    </footer>
  )
}
