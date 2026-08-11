import {Link} from "react-router-dom";
export default function Amapa()
{
    return (
        <div>
            <h1>Aula 03 - Estado do Amapá</h1>
            <div className="conteudo">
                <img src="/AP.png"/>

                <p>
                O Amapá é um estado localizado na região Norte do Brasil. 
                Sua capital é Macapá, e o estado se destaca por suas áreas de floresta Amazônica, 
                rios e grande biodiversidade. A economia envolve atividades como agricultura, pesca, mineração e extrativismo.
                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
        
    );
}