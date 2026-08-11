import {Link} from "react-router-dom";
export default function Roraima()
{
    return (
        <div>
            <h1>Aula 03 - Estado de Roraima</h1>
            <div className="conteudo">
                <img src="/RR.png"/>

                <p>
                Roraima é um estado localizado na região Norte do Brasil. 
                Sua capital é Boa Vista, e o estado se destaca por suas belas paisagens naturais,
                 serras e áreas de floresta Amazônica. Sua economia inclui atividades como agricultura, pecuária,
                  comércio e extrativismo.
                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
        
    );
}