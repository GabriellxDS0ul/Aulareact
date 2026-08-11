import {Link} from "react-router-dom";
export default function Parana()
{
    return (
        <div>
            <h1>Aula 03 - Estado do Paraná</h1>
            <div className="conteudo">
                <img src="/PR.png"/>

                <p>
                O Paraná é um estado localizado na região Sul do Brasil. Sua capital é Curitiba, e o estado se destaca por sua
                 diversidade cultural, suas belezas naturais e sua importância na agricultura e na economia brasileira.
                 Entre seus principais pontos turísticos estão as Cataratas do Iguaçu, um dos lugares mais conhecidos do país.

                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>

    );
}