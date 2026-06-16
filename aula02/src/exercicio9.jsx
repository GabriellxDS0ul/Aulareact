function Exercicio9(props) {
    const comissao = props.vendas * 0.06;
    const salarioFinal = props.salario + comissao;
  
    return (
      <div>
        <h2>Exercício 9 - Comissão de Vendas</h2>
  
        <p>Salário Base: R$ {props.salario.toFixed(2)}</p>
        <p>Total de Vendas: R$ {props.vendas.toFixed(2)}</p>
        <p>Comissão (6%): R$ {comissao.toFixed(2)}</p>
        <p>Salário Final: R$ {salarioFinal.toFixed(2)}</p>
      </div>
    );
  }
  
  export default Exercicio9;