import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import React from "react";
import styles from "./Favoritos.module.scss";

export default function Favoritos() {
  return (
    <>
      <Banner imagem="favoritos"/>
      <Titulo><h1>Meus Favoritos</h1></Titulo>
      <section className={styles.container}>
        <Card
          id="2"
          titulo="Gato bonifácio"
          capa={"https://thecatapi.com/api/images/get?format=src&type=png"}
        />
      </section>
    </>
  );
}
