import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        <div className="container-fluid text-center">
        <Sparklines height={110} width={160} data={props.data}>
          <SparklinesLine color={props.color}/>
          <SparklinesReferenceLine type="avg"/>
        </Sparklines>
            <p>Average : {Math.round(average(props.data)-273.15)} {props.unit}</p>
        </div>
    );
}
