/* eslint-disable jsx-a11y/alt-text */
import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/messi-rosto1.png";

import React from "react";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Humanos!</h1>

        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou um fã incondicional de
          Lionel Messi, o jogador de futebol argentino. Aqui compartilho meu
          conhecimento e paixão por esse ídolo do esporte. Espero que você possa
          aprender algo novo sobre ele e sua incrível carreira. Vamos juntos
          celebrar a genialidade de Messi!
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          src={circuloColorido}
          aria-hidden={true}
          className={styles.circuloColorido}
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        />
        <img  src={minhaFoto} aria-hidden={true} className={styles.minhaFoto} />
      </div>
    </div>
  );
}
