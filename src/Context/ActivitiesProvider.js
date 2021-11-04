import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ActivitiesContext from './ActivitiesContext';

function ActivitiesProvider({ children }) {
  const [data, setData] = useState([]);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    const getActivities = async () => {
      const results = await fetch(
        'http://localhost:3002/Activities',
      ).then((res) => res.json());
      setData(results);
    };
    getActivities();
  }, [rerender]);

  const contextValue = {
    data,
    rerender,
    setRerender,
  };

  return (
    <ActivitiesContext.Provider value={ contextValue }>
      {children}
    </ActivitiesContext.Provider>
  );
}

export default ActivitiesProvider;

ActivitiesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
