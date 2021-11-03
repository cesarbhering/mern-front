import React/* , { useState, useEffect } */ from 'react';
import PropTypes from 'prop-types';
import ActivitiesContext from './ActivitiesContext';

function ActivitiesProvider({ children }) {
  const contextValue = {
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
