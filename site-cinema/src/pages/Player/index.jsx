import Banner from "components/Banner";
import Titulo from "components/Titulo";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Player.module.scss";
import NaoEncontrada from "pages/NaoEncontrada";

export default function Player() {
  const [video, setVideo] = useState();
  const parametros = useParams();

     useEffect(() => {
        fetch(`https://my-json-server.typicode.com/gildairmoreira/cinetag-api/videos?id=${parametros.id}`)
            .then((resposta) => resposta.json())
            .then((dados) => {
                setVideo(...dados)
            })
    }, [parametros.id])

    if (!video) {
        return <NaoEncontrada />
    }
    

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}
