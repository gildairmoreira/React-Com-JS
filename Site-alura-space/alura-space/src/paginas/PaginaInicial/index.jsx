import Banner from "../../componentes/banner/banner";
import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/menu";
import Rodape from "../../componentes/rodape";
import styles from './PaginaInicial.module.scss'

export default function PaginaInicial()
{
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner/>
                </section>
            </main>
            <Rodape/>
        </>
    )
}

