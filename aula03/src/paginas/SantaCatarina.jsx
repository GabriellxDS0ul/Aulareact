import {Link} from "react-router-dom";
export default function SantaCatarina()
{
    return (
        <div>
            <h1>Aula 03 - Estado do Rio Grande do Sul</h1>
            <div className="conteudo">
                <img src="/SC.png"/>

                <p>
                Santa Catarina é um estado localizado na região Sul do Brasil. 
                Sua capital é Florianópolis, e o estado se destaca por suas belas praias,
                 serras e diversidade cultural. Sua economia é bastante desenvolvida, com destaque para a indústria,
                  agricultura, turismo e comércio.
                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>

    );
}