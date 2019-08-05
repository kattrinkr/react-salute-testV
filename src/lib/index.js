import React from 'react';
import PropTypes from 'prop-types';

const ReactSalute = ({ name }) => {
  return <h1>Salute {name}!</h1>;
};

ReactSalute.propTypes = {
  name: PropTypes.string.isRequired,
};

ReactSalute.defaultProps = {
  name: 'React',
};

export default ReactSalute;