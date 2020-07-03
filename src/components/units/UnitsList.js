//map over unit cards
import React, { useState, useEffect } from 'react';
import UnitCard from './UnitCard';

function UnitList(props) {
  // const [blockState, setBlockState] = useState(blockData);
  // const [activitiesState, setActivitiesState] = useState([]);

  // useEffect(() => { 
  //   request
  //     .get('https://mytimemapper.herokuapp.com/api/v1/activities')
  //     .then(res => setActivitiesState(res.body));

  // }, []);

  return (

    <section>
      <h1>My Units</h1>
      <div>
        {props.unitsState.map((unit) => 
          <UnitCard unit={unit.title} key={unit.idunit}  title={unit.title} />)}
      </div>
    </section>
  )
}

export default UnitList;