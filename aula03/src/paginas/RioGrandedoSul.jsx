import {Link} from "react-router-dom";
export default function RioGrandedoSul()
{
    return (
        <div>
            <h1>Aula 03 - Estado do Rio Grande do Sul</h1>
            <div className="conteudo">
                <img src="/RS.png"/>

                <p>
                O Rio Grande do Sul é um estado localizado na região Sul do Brasil. 
                Sua capital é Porto Alegre, e o estado se destaca por sua cultura, 
                suas tradições e suas belas paisagens. A economia é baseada principalmente na agricultura,
                 pecuária e indústria.
                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>

    );
}