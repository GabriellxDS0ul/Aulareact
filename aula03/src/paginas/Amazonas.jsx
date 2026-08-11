import {Link} from "react-router-dom";
export default function Amazonas()
{
    return (
        <div>
            <h1>Aula 03 - Estado do Amazonas</h1>
            <div className="conteudo">
                <img src="/AM.png"/>

                <p>
                O Amazonas é um estado localizado na região Norte do Brasil. Sua capital é Manaus, 
                e o estado se destaca pela grande extensão da Floresta Amazônica e por sua rica biodiversidade. 
                O estado também possui importantes rios e atividades econômicas como o turismo, a indústria e o extrativismo.
                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
        
    );
}