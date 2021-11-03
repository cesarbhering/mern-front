import React from 'react';
import { Link } from 'react-router-dom';
import ActivityCard from './ActivityCard';

function ActivitiesList() {
  const dez = [1, 2, 0]; // Apenas para "pegar o estado"
  return (
    <div>
      <h1>Sua lista de Atividades</h1>
      <Link to="/InsertActivity">Adicionar Atividade</Link>
      {dez.map((x, i) => <ActivityCard key={ i } />)}

    </div>
  );
}

export default ActivitiesList;
