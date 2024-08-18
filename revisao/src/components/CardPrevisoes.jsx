import React from 'react';

const CardPrevisoes = ({ cidade }) => { // cidade é a propriedade que irá receber a cidade encontrada
  if (!cidade) { // Se cidade for null ou undefined, a função será executada
    return <p>Nenhuma previsão disponível para esta cidade.</p>; // Mensagem quando cidade é null ou undefined
  }

  return (   // Será executado somente se cidade não for null ou undefined

    <div className="card-previsao" style={{ border: '1px solid gray', borderRadius: '20px', margin: '10px', padding: '20px', textAlign: 'center', color: 'white', backgroundColor: 'darkblue'}}>
      <h2>{cidade.city || "Cidade desconhecida"}</h2> {/* Exibe o nome da cidade encontrada se não for undefined ou null, senão exibe a mensagem */}
      <p>Temperatura: {cidade.temperature ? `${cidade.temperature}` : "N/A"}</p> {/* Condição ternária que exibe a temperatura da cidade encontrada se não for null ou undefined, se for, exibe N/A */}
      <p>Condições: {cidade.condition || "Indisponível"}</p> {/* Exibe a condição climática da cidade encontrada se não for undefined ou null, senão exibe a mensagem */}
      <img src={cidade.icon} alt="Ícone referente ao clima atual da cidade selecionada" /> {/* Exibe a imagem cidade encontrada */}
    </div>
  );
};

export default CardPrevisoes; // Exporta o componente CardPrevisoes
