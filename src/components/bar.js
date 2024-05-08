import React from 'react';
import './bar.css';
import data from '../data.json';

function Bar() {
  const maxValue = Math.max(...data.map(d => d.amount));
  function getRow(amount){
    return Math.round((amount / maxValue) * 10);
  }
  return (
    <div>
      <ul className="barchart">
        { data.map((d, idx) => {
          return (
            <li key={idx}
                style={{
                  gridColumn: idx+1,
                  gridRow: `${10-getRow(d.amount)+1} / ${11}`
                }}
            ></li>
          )
        })}
      </ul>
      <ul className="label">{ data.map((d, idx) => 
        <li key={idx} style={{gridColumn: idx+1, 'textAlign': 'center'}}
        >{d.day}</li>
      )}</ul>
    </div>
  );
}

export default Bar;