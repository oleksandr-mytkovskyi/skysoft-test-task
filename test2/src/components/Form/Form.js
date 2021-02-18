import React from 'react';
import {setM, setN, setX} from '../../store/actions/actions-form';
import { connect } from 'react-redux';
import './Form.css';

const Form = ({m, n, x, setM, setN, setX}) => {
  const handleChange = (e) => {
    const elem = e.target.name;
    const value = Number(e.target.value);
    switch(elem) {
      case 'm':
        setM({ m: value, n: n, x: x});
        break;
      case 'n':
        setN({ m: m, n: value, x: x});
        break;
      case 'x':
        setX({ m: m, n: n, x: value});
        break;
      default: break;
    }
  }
  return (
      <form>
       <div className='wrapper-form'>
          <div className='input'>
            <label>Количество рядов: (M)</label>
            <input name="m" required component="input" type="text" onChange={handleChange}/>
          </div>
          <div className='input'>
            <label>Количество колонок: (N)</label>
            <input name="n" required component="input" type="text" onChange={handleChange}/>
          </div>
          <div className='input'>
            <label>Сколько елементов подсветить:? (X)</label>
            <input name="x" required component="input" type="text" onChange={handleChange}/>
          </div>
      </div>
      </form>
    )
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
  setM,
  setN,
  setX
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
