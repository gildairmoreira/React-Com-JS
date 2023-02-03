import './Rodape.css'

const Rodape = () =>
{
    return (
        <footer className="rodape">
            <div>
                <ul>
                    <li className='lista__sociais-item'><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src="/imagens/fb.png" alt="facebook" /></a></li>
                    <li className='lista__sociais-item'><a href="https://www.twitter.com" target='_blank' rel="noreferrer"><img src="/imagens/tw.png" alt="twitter" /></a></li>
                    <li className='lista__sociais-item'><a href="https://www.instagram.com/cristiano/" target='_blank' rel="noreferrer" ><img src="/imagens/ig.png" alt="instagram" /></a></li>
                </ul>
            </div>
            <div><img src="/imagens/logo.png" alt="organo" /></div>
            <div><p>Desenvolvido por Gildair.</p></div>
        </footer>
    )
}

export default Rodape