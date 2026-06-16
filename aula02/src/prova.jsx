function Prova( {salario}) {
    const salarioBase = 2500;
  
    const gratificacao = salarioBase * 0.08;
    const salarioFinal = salarioBase + gratificacao;
  
    return (
      <div>
        <h2>Exercício 10 - Gratificação por Desempenho</h2>
  
        <p>Salário Base: R$ {salarioBase.toFixed(2)}</p>
        <p>Gratificação: R$ {gratificacao.toFixed(2)}</p>
        <p>Salário Final: R$ {salarioFinal.toFixed(2)}</p>
      </div>
    );
  }
  
  export default Prova;