import {Link} from "react-router-dom";
export default function Acre()
{
    return (
        <div>
            <h1>Aula 03 - Estado do Acre</h1>
            <div className="conteudo">
                <img src="/AC.png"/>

                <p>
                O Acre é um estado localizado na região Norte do Brasil. 
                Sua capital é Rio Branco, e o estado se destaca por suas grandes áreas de floresta Amazônica e pela biodiversidade. 
                Sua economia inclui atividades como agricultura, pecuária e extrativismo.
                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
        
    );
}