import {Link} from "react-router-dom";
export default function RioJaneiro()
{
    return (
        <div>
            <h1>Aula 03 - Estado do Rio de Janeiro</h1>
            <div className="conteudo">
                <img src="/RJ.png"/>
                <p>
                    O estado do Rio de Janeiro, localizado na Região Sudeste do Brasil,
                     é conhecido por suas belas praias, montanhas e grande importância histórica e cultural.
                      Sua capital, a cidade do Rio de Janeiro, é famosa por pontos turísticos como o Cristo Redentor e o Pão de Açúcar.
                       Além do turismo, o estado se destaca na economia pelos setores de petróleo, serviços, comércio e indústria.

                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>

    );
}