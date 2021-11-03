import React from 'react';
import ActivityCard from './ActivityCard';

function ActivitiesList() {
  const dez = [1, 2, 0]; //Apenas para "pegar o estado"
  return (
    <div>
      <h1>Sua lista de Atividades</h1>
      {dez.map((x, i) => <ActivityCard key={ i } />)}

    </div>
  );
}

export default ActivitiesList;
