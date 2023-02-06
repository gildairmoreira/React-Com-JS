import Banner from "componentes/banner/banner";
import Cabecalho from "componentes/Cabecalho";
import Galeria from "componentes/Galeria";
import Menu from "componentes/menu";
import Populares from "componentes/Populares";
import Rodape from "componentes/rodape";
import styles from './PaginaInicial.module.scss'

export default function PaginaInicial()
{
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>

                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>

            <Rodape />
        </>
    )
}

