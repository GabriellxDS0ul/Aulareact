import {Link} from "react-router-dom";
export default function Para()
{
    return (
        <div>
            <h1>Aula 03 - Estado do Pará</h1>
            <div className="conteudo">
                <img src="/PA.png"/>

                <p>
                O Pará é um estado localizado na região Norte do Brasil. 
                Sua capital é Belém, e o estado se destaca pela presença da Floresta Amazônica, 
                seus rios e sua grande biodiversidade. Sua economia inclui atividades como mineração, agricultura, 
                pecuária e extrativismo.
                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
        
    );
}