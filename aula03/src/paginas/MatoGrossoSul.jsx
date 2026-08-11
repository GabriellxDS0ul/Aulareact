import {Link} from "react-router-dom";
export default function MatoGrossoSul()
{
    return (
        <div>
            <h1>Aula 03 - Estado do Mato Grosso do Sul</h1>
            <div className="conteudo">
                <img src="/MS.png"/>
                <p>
                Mato Grosso do Sul é um estado localizado na região Centro-Oeste do Brasil.
                 Sua capital é Campo Grande, e o estado se destaca pela agricultura, pecuária e turismo.
                  Também possui importantes áreas do Pantanal e do Cerrado, com grande diversidade de animais e plantas.
                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    );
}