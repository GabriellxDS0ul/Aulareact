import "./App.css";
import Exemplo1 from "./Exemplo1";
import Prova from "./prova";

export default function App() {
  return (
    <div>
      <h1>Aula 02 - Criação de Componentes</h1>
      <div className="card">
        <h3>Chamadas para o Componentes Exemplo1</h3>
        <Exemplo1 numero1={10} numero2={20} />

      </div>

      <div className="card">
        <Prova salario={2000} />
      </div>

    </div>
  )
}

