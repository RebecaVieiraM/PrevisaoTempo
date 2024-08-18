import React, { useState, useEffect } from 'react'; // Importa os hooks do react
import { fetchPrevisoes } from './services/api'; // Importa a api
import Card from './components/CardPrevisoes'; // Importa o componente card
import './previsoes.css'; // Importa o css

const Previsoes = () => {
  const [previsoes, setPrevisoes] = useState([]); // Estado para armazenar todas as previsões
  const [cidadeInput, setCidadeInput] = useState(""); // Estado para armazenar o valor do campo de input
  const [cidadeAtual, setCidadeAtual] = useState(null); // Estado para armazenar a cidade encontrada
  const [mensagem, setMensagem] = useState(""); // Estado para armazenar mensagens de erro ou status
  
  useEffect(() => {
    const carregaPrevisoes = async () => {
      try { 
        const dadosPrevisoes = await fetchPrevisoes();
        setPrevisoes(dadosPrevisoes); // Armazena as previsões no estado
      } catch (error) {
        setMensagem("Erro ao carregar as previsões! Tente novamente mais tarde."); // Mensagem de erro ao falhar a busca
        console.error("Erro de acesso à API: ", error); // Exibe um erro no console
      }
    };

    carregaPrevisoes(); // Carrega as previsões ao montar o componente
  }, []); // Executa a ação de buscar a api somente quando a tela é carregada (somente 1 vez)

  const carregaCidade = () => { // Função chamada ao clicar no botão Buscar
    const cidadeEncontrada = previsoes.find(cit => cit.city.toLowerCase() === cidadeInput.toLowerCase()); // Procura a cidade na lista de previsões, validando se a cidade da api é igual a cidade digitada

    if (cidadeEncontrada) { // Verifica se a cidade foi encontrada. Se cidadeEncontrada não for undefined ou null, a cidade foi encontrada na lista
      setCidadeAtual(cidadeEncontrada); // Atualiza a cidadeAtual com a cidadeEncontrada
      setMensagem(""); // Limpa qualquer mensagem anterior
    } else { // Se não for encontrada nenhuma cidade, executa a ação a seguir
      setCidadeAtual(null); // Define cidadeAtual como null
      setMensagem("Cidade não encontrada. Verifique o nome e tente novamente."); // Mensagem de cidade não encontrada
    }
  };

  return (
    <div className='container-app'>
      <h1>Previsão do Tempo</h1>
      <div className='cidades'>
        <label className='lblCidade' style={{textAlign: 'center'}}>
          Insira a cidade desejada:
          <br />
          <br />
          <input
            className="inpCidade"
            type="text"
            value={cidadeInput} // Controla o valor do input com o estado
            onChange={(e) => setCidadeInput(e.target.value)} // Atualiza o estado do cidadeInput conforme o usuário digita
          />
        </label>
        <button className='btnBuscar' onClick={carregaCidade} style={{color: 'white', borderRadius: '5px', borderColor: 'green', backgroundColor: 'green', padding: '10px'}}>Buscar</button> {/* Botão para buscar a cidade */}
      </div>
      <div className='div-previsao'>
        {mensagem && <p className="mensagem">{mensagem}</p>} {/* Renderiza um p, que exibe mensagem de erro ou status, somente se mensagem não for undefined ou null */}
        <Card cidade={cidadeAtual} /> {/* Renderiza o componente Card enviando na propriedade cidade, a cidade encontrada */}
      </div>
    </div>
  );
};

export default Previsoes; // Exporta o componente Previsões
