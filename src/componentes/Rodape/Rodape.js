import "./Rodape.css"

export const Rodape = () => {

    return (
        <footer className="rodape">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank"><img src="/imagens/fb.png" alt=""></img></a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank"><img src="/imagens/tw.png" alt=""></img></a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank"><img src="/imagens/ig.png" alt=""></img></a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt=""></img>
            </section>
            <section>
                <p>Desenvolvido por Alura.</p>
            </section>
        </footer>
    )
}