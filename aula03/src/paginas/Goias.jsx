import {Link} from "react-router-dom";
export default function Goias()
{
    return (
        <div>
            <h1>Aula 03 - Estado de Goiás</h1>
            <div className="conteudo">
                <img src="/GO.png"/>

                <p>
                Goiás é um estado localizado na região Centro-Oeste do Brasil.
                 Sua capital é Goiânia, e o estado se destaca pela agricultura, pecuária e riquezas naturais.
                  Goiás também possui belas paisagens e importantes áreas do Cerrado brasileiro.
                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
        
    );
}