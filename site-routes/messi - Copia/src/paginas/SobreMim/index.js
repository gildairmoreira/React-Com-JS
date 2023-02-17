import styles from './SobreMim.module.css'
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/messi-592cut.png";

export default function SobreMim() {
    return (
      <PostModelo fotoCapa={fotoCapa} titulo="SobreMim">
        <h3 className={styles.subtitulo}>Sou Lionel Messi</h3>
        <img
          className={styles.fotoSobreMim}
          src={fotoSobreMim}
          alt="Foto do messi"
        />

        <p className={styles.paragrafo}>
          Lionel Messi é considerado por muitos como um dos maiores jogadores de
          futebol de todos os tempos. Nascido em Rosário, Argentina, Messi
          começou a jogar futebol ainda jovem e rapidamente se destacou por suas
          habilidades incríveis em campo.
        </p>
        <p className={styles.paragrafo}>
          Messi jogou a maior parte de sua carreira profissional no Barcelona,
          ​​onde conquistou inúmeros títulos e prêmios individuais, incluindo
          sete Bolas de Ouro da FIFA. Ele também é o artilheiro de todos os
          tempos da La Liga, a liga espanhola de futebol, com mais de 400 gols
          marcados.
        </p>
        <p className={styles.paragrafo}>
          Além de seu sucesso no Barcelona, ​​Messi também teve uma carreira de
          sucesso na seleção argentina, incluindo a conquista da Copa do Mundo
          de 2022. Seus dribles incríveis, chutes precisos e habilidades em
          campo inspiraram uma geração de jogadores de futebol em todo o mundo.
        </p>
        <p className={styles.paragrafo}>
          Fora de campo, Messi é conhecido por seu trabalho de caridade,
          incluindo a criação da Fundação Leo Messi para ajudar crianças em todo
          o mundo. Ele também é um embaixador global da UNICEF e um defensor de
          causas sociais, incluindo a luta contra a pobreza infantil.
        </p>
        <p className={styles.paragrafo}>
          Lionel Messi continua a ser um dos jogadores mais admirados e
          respeitados no mundo do futebol. Sua habilidade em campo e seu caráter
          fora de campo o tornam um modelo a ser seguido por muitos jovens
          atletas em todo o mundo.
        </p>
      </PostModelo>
    );
}