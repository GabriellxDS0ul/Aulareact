import {Link} from "react-router-dom";
export default function Rondonia()
{
    return (
        <div>
            <h1>Aula 03 - Estado de Rondônia</h1>
            <div className="conteudo">
                <img src="/RO.png"/>

                <p>
                Rondônia é um estado localizado na região Norte do Brasil. 
                Sua capital é Porto Velho, e o estado se destaca pela agricultura, 
                pecuária e pelas áreas de floresta Amazônica. Também possui importantes rios e uma grande diversidade natural.
                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
        
    );
}