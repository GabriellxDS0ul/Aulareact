import {Link} from "react-router-dom";
export default function MinasGerais()
{
    return (
        <div>
            <h1>Aula 03 - Estado de Minas Gerais</h1>
            <div className="conteudo">
                <img src="/MG.png"/>
                <p>
                    Minas Gerais, localizado na Região Sudeste do Brasil, é conhecido por sua rica história, cultura e tradições. 
                    O estado se destaca pela produção de café, minério de ferro e produtos agrícolas, 
                    além de possuir importantes cidades históricas, como Ouro Preto e Tiradentes. Sua capital, Belo Horizonte,
                    é um importante centro econômico, cultural e gastronômico do país.

                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    );
}