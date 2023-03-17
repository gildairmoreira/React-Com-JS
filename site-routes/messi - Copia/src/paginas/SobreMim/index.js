import styles from './SobreMim.module.css'
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.jpg";
import fotoSobreMim from "assets/pesoa-programando.png";

export default function SobreMim() {
    return (
      <PostModelo fotoCapa={fotoCapa} titulo="SobreMim">
        <h3 className={styles.subtitulo}>Olá, eu sou o Gildair!</h3>
        <img
          className={styles.fotoSobreMim}
          src={fotoSobreMim}
          alt="Foto do messi"
        />

        <p className={styles.paragrafo}>
          Minha jornada na programação começou cedo, quando eu costumava
          modificar jogos Android APK para ter vantagem sobre meus adversários.
          No entanto, eu não sabia que estava mexendo em códigos, apenas seguia
          tutoriais e fazia alterações.
        </p>
        <p className={styles.paragrafo}>
          Foi somente após conhecer o curso de Python do Guanabara no YouTube
          que decidi aprofundar meus conhecimentos. Eu vi que programação
          poderia se tornar uma profissão e fiz três módulos do curso. A partir
          daí, comecei a explorar o mercado e descobri que o front-end era a
          área que mais combinava comigo, já que eu gostava de criar sites e
          aplicativos Android.
        </p>
        <p className={styles.paragrafo}>
          Então, comecei a aprender JavaScript, CSS e HTML por meio de cursos
          gratuitos. Quando terminei de estudar as três linguagens, adquiri o
          curso da Alura para aprender React, TypeScript e outros frameworks. E
          após oito meses estudando seis horas por dia, seis dias por semana,
          tenho certeza de que estou pronto para atuar como desenvolvedor no
          mercado.
        </p>
        <p className={styles.paragrafo}>
          Além disso, pretendo fazer faculdade de Ciências da Computação
          futuramente. Também tenho conhecimentos em marketing, como tráfego
          pago e SEO. E também Desde jovem, eu já dava manutenção em
          computadores e, aos poucos, fui descobrindo meu interesse pela área.
        </p>
        <p className={styles.paragrafo}>
          A programação se tornou minha paixão e estou animado(a) para
          compartilhar minhas experiências e conhecimentos com vocês aqui no meu
          blog. Sejam bem-vindos(as)!
        </p>
      </PostModelo>
    );
}