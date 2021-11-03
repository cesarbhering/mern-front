import React from 'react';

function ActivityCard() {
  const divStyle = {
    margin: '40px',
    border: '5px solid pink',
    backgroundColor: 'red',
  };
  return (
    <div className="activityCard" style={ divStyle }>
      <h2>Isto é uma Atividade</h2>
      <h3>Descrição</h3>
      <h4>Data: 13/12/2021</h4>
      <select id="status">
        <option value="pending">Pendente</option>
        <option value="ongoing">Em Andamento</option>
        <option value="done">Pronto</option>
      </select>
      <button type="button"> Excluir </button>
      <button type="button"> Editar </button>
    </div>
  );
}

export default ActivityCard;
