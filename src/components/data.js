import _ from 'lodash';
import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        <Sparklines height={110} width={160} data={props.data}>
          <SparklinesLine color={props.color}/>
          <SparklinesReferenceLine type="avg"/>
          <div>
            <p>Average : {average(props.data)} {props.unit}</p>
          </div>
        </Sparklines>
    );
}
