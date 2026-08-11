import {Link} from "react-router-dom";
export default function DistritoFederal()
{
    return (
        <div>
            <h1>Aula 03 - Distrito Federal</h1>
            <div className="conteudo">
                <img src="/DF.png"/>

                <p>
                O Distrito Federal está localizado na região Centro-Oeste do Brasil e tem como capital Brasília,
                 que também é a capital do país. Destaca-se por sua importância política e administrativa, 
                 além de possuir diversos monumentos e áreas verdes.
                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
        
    );
}