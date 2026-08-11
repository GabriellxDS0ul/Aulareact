import {Link} from "react-router-dom";
export default function Tocantins()
{
    return (
        <div>
            <h1>Aula 03 - Estado de Tocantins</h1>
            <div className="conteudo">
                <img src="/TO.png"/>

                <p>
                Tocantins é um estado localizado na região Norte do Brasil. 
                Sua capital é Palmas, e o estado se destaca por suas belezas naturais, como rios,
                 cachoeiras e áreas do Cerrado. Sua economia é baseada principalmente na agricultura, pecuária e comércio.
                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
        
    );
}