//when unit card is clicked
//open as modal
import React from 'react';
import PropTypes from 'prop-types';

const UnitDetail = (props) => {

  return ( 

    <div className='unit-detail'>
      <h1>Unit Detail</h1>
      <h5>{props.game}</h5>
      <h3>{props.title}</h3>
      <p>{props.faction}</p>
  <p>Painted? - {props.painted}</p>
    </div>

  );
};
UnitDetail.propTypes = {
  game: PropTypes.string,
  title: PropTypes.string,
  faction: PropTypes.string,
  painted: PropTypes.bool
};
export default UnitDetail;