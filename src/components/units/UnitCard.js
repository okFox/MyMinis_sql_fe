import React from 'react';
import PropTypes from 'prop-types';

const UnitCard = (props) => {

  return ( 

    <div className='unit-card'>
      <h5>{props.game}</h5>
      <h3>{props.title}</h3>
    </div>

  );
};
UnitCard.propTypes = {
  game: PropTypes.string,
  title: PropTypes.string
};
export default UnitCard;
