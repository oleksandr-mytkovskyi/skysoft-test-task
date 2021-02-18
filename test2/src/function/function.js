function calcRowSum(m, n, state) {
  const rowSum = new Array(m).fill(0).map((item, rowIndex) => { 
    return state.reduce((sum, elem, i) => {
       if ((i >= rowIndex * n) && (i < (rowIndex + 1) * n)) {
         return sum + elem.amount;
       }
       return sum;
     }, 0)
   });
   return rowSum;
  }

function calcColumnAverage(m, n, state) {
      const columnAverage = Array(n).fill(0).map((item, columnIndex) => {
      let sum = 0;
      for (let i = columnIndex; i <= n * m - 1; i += n) {
        sum += typeof state[i] === 'undefined' ? 0 : state[i].amount;
      }
      return Math.floor(sum / m);
    });
    return columnAverage;
}

function createObject(m, n) {
    const numberObj = m * n;
    let arr = [];
    for (let i = 0; i < numberObj; i++ ) {
      arr.push({
        id: i,
        amount: Math.floor(Math.random() * (999 - 100 + 1)) + 100,
        isHover: 0,
      })
    }
    const tmpArr = calcRowSum(m, n, arr);
    let rowSumAllArr = [];
    for (let i = 0; i < arr.length; i++) {
      rowSumAllArr.push(tmpArr[Math.floor(i/n)] );
    }
    const newArr = arr.map((item, index) => {
        return {
          ...item,
          persent: Math.trunc((item.amount / rowSumAllArr[index]) * 10000) / 100,
          idRow: Math.floor(index/n),
        } 
    })
    return newArr;
  } 

export {calcRowSum, calcColumnAverage, createObject}