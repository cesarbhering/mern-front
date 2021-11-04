import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ActivitiesContext from '../Context/ActivitiesContext';
import { deleteActivityToAPI } from '../Utils/useAPI';

function handleDelete(id) {
  deleteActivityToAPI(id);
}

function ActivityCard(props) {
  const divStyle = {
    margin: '40px',
    border: '5px solid pink',
    backgroundColor: 'red',
  };
  const {
    data: { name, description, status, date, _id },
  } = props;
  const { setRerender, rerender } = useContext(ActivitiesContext);
  return (
    <div className="activityCard" style={ divStyle }>
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h4>{status}</h4>
      <h5>
        {/* https://stackoverflow.com/questions/38549256/how-to-convert-isostring-to-date-format-dd-mm-yyyy-using-javascript */}
        {`Criada em: ${date
          .toString()
          .match(/([^T]+)/)[0]
          .split('-')
          .reverse()
          .join('/')}`}
      </h5>
      <select id="status" onChange={ () => null }>
        <option value="Pendente">Pendente</option>
        <option value="Em Andamento">Em Andamento</option>
        <option value="Pronto">Pronto</option>
      </select>
      <button
        type="button"
        onClick={ () => {
          handleDelete(_id);
          setRerender(!rerender);
        } }
      >
        {' '}
        Excluir
        {' '}
      </button>
      <button type="button"> Editar </button>
    </div>
  );
}

export default ActivityCard;

ActivityCard.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};
