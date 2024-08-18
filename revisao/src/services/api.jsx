export const fetchPrevisoes = async() => {

  const response = await fetch('./previsao.json');
  const data = await response.json();
  return data;
};