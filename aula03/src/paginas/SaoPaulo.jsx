import {Link} from "react-router-dom";
export default function SaoPaulo()
{
    return (
        <div>
            <h1>Aula 03 - Estado de São Paulo</h1>
            <div className="conteudo">

                <img src="/SP.png"/>

                <p>
                O estado de São Paulo, localizado na Região Sudeste do Brasil,
                 é o mais populoso do país e possui uma das maiores economias da América Latina. Destaca-se pela força da indústria,
                  do comércio, dos serviços e do agronegócio. Além da importância econômica,
                   São Paulo oferece grande diversidade cultural, atrações turísticas e importantes centros de educação e pesquisa,
                    desempenhando um papel fundamental no desenvolvimento do Brasil.

                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>

        </div>

    );
}
