import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {dataLoaded, dataError, increment, lightBtn, lightRow} from '../../store/actions/actions';
import { RowSum } from '../RowSum/RowSum';
import { AvrColumn } from '../AvrColumn/AvrColumn';
import Table from '../Table/Table';
import Form from '../Form/Form';
import {createObject, calcRowSum, calcColumnAverage} from '../../function/function';
import './App.css';

const App = ({m, n, x, data, dataLoaded, increment, lightBtn, lightRow}) => {

  useEffect(() => {
    const data = createObject(m, n);
    dataLoaded(data);
  }, [m, n]);


// обробники для Button

 const handleIncrement = (e) => {
    const id = Number(e.target.id);
    const newState = data.map(item => {
      if (id === item.id) {
        return {...item, amount: item.amount + 1}
      } else return item;
    })  
    increment(newState);
  } 
  
  const onMouseOver = (e) => {
    if (!(e.target.classList.contains('btn'))) return; 
    const amount = Number(e.target.innerHTML);
    const light = data.map((item, index) => {
      return {...item, abs: Math.abs(amount - item.amount)}
    });

    light.sort((a, b) => {
      if (a.abs > b.abs) {
        return 1;
      }
      if (a.abs < b.abs) {
        return -1;
      }
      return 0;
    });
    const resArr = light.slice(1, x + 1);
   
    const newState = data.map(item => {
      if (resArr.some(elem => elem.id === item.id)) {
        return {...item, isHover: 1}
      } else return item;
    })
    lightBtn(newState);
  }

  const onMouseOut = (e) => {
    if (!(e.target.classList.contains('btn'))) return; 
    const newState = data.map((item) => {
        return {...item, isHover: 0}
    })
    lightBtn(newState);
  }

// обробники для RowSum

  const onMouseOverRow = (e) => {
    if (!(e.target.classList.contains('res-block'))) return; 
    const idRow = Number(e.target.id);
    const newState = data.map(item => {
      if (idRow === item.idRow) {
        return {...item, isHover: 2}
      } else return item;
    })
    lightRow(newState);
  }
  
  const onMouseOutRow = (e) => {
    if (!(e.target.classList.contains('res-block'))) return; 
    const newState = data.map((item) => {
      return {...item, isHover: 0}
    })
    lightRow(newState);
  }

// render function sum row
  const renderRow = (sumArr) => {
    return sumArr.map((item, index) => {
      return (
        <RowSum 
        id={index} 
        key={index} 
        amount={item} 
        />
      )
    })
  }

// render function avr row
      
    const renderAvr = (arrCol) => {
      return arrCol.map((item, index) => {
        return(
         <AvrColumn
          id={index} 
          key={index} 
          amount={item} 
         />
        )
      })
    }
    
  
    const renderApp = () => {
      const divStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${n+2}, 1fr)`,
        gridGap: '25px',
      }
      
      const avrCol = calcColumnAverage(m, n, data);
      const average = renderAvr(avrCol);
  
      const sumArr = calcRowSum(m, n, data);
      const sum = renderRow(sumArr);
      return(
        <>
        <div className="App" >
            <Table 
              onMouseOut={onMouseOut}  
              onMouseOver={onMouseOver} 
              handleIncrement={handleIncrement} 
              data={data}
              n={n}
            />
            <div className='result' onMouseOver={onMouseOverRow} onMouseOut={onMouseOutRow}>
              {sum}
            </div>
          </div>
          <div className='wrapper'>
            <div className='average' style={divStyle}>
                {average}
          </div>
          </div>
        </>
      )
    }
    const app = renderApp();
    return (
      <>
        <div>
          <Form/>
        </div>
        {x && n && m
        ? app
        : ''
        }
      </>
    );  
  }

const mapStateToProps = (state) => {
  return {
      data: state.data,
      m: state.inputData.m,
      n: state.inputData.n,
      x: state.inputData.x,
}
}
const mapDispatchToProps = {
      dataLoaded,
      dataError,
      increment,
      lightBtn,
      lightRow,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


