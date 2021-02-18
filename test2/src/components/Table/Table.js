import React, { Component } from 'react'
import { Button } from '../Button/Button';
import './Table.css';

export default class Table extends Component {

    renderBtn = (arr) => {
    const res = arr.map((item, i) => {
      const {id, amount, isHover, persent} = item;
      return(
        <Button 
        key={id} 
        id={id} 
        amount={amount} 
        isHover={isHover}
        persent={persent}
        />
      )
    })
    return res;
  }
    render() {
    const arrBtn = this.renderBtn(this.props.data);
    const {handleIncrement, onMouseOver, onMouseOut, n} = this.props;

    const divStyle = {
      display: 'grid',
      gridTemplateColumns: `repeat(${n}, 1fr)`,
      gridGap: '25px',
    }

    return (
        <div style={divStyle}  onClick={handleIncrement} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          {arrBtn}
        </div>
    )
  }
}

