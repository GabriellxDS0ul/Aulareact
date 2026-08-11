import {Link} from "react-router-dom";
export default function MatoGrosso()
{
    return (
        <div>
            <h1>Aula 03 - Estado do Mato Grosso</h1>
            <div className="conteudo">
                <img src="/MT.png"/>

                <p>
                Mato Grosso é um estado localizado na região Centro-Oeste do Brasil.
                 Sua capital é Cuiabá, e o estado se destaca pela agricultura, pecuária e grande diversidade natural. 
                 O território também abriga parte do Pantanal, um dos principais biomas brasileiros.
                 </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
        
    );
}