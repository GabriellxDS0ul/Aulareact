import { Link } from "react-router-dom";
export default function EspiritoSanto() {
    return (
        <div>
            <h1>Aula 03 - Estado do Espírito Santo</h1>
            <div className="conteudo">
                <img src="/ES.png" />
<p>
    O Espírito Santo, localizado na Região Sudeste do Brasil, é conhecido por suas belas praias, montanhas e rica diversidade natural. Sua capital, Vitória, é um importante centro econômico e portuário. O estado se destaca na produção de café, rochas ornamentais e na atividade portuária, contribuindo significativamente para a economia brasileira.

</p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div >
        </div>
    );
}