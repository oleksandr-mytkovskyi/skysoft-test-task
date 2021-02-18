const periodicIterator = function (array, time) {
   for(let i = 0; i < array.length; i++) {
       setTimeout(() => {
           console.log(array[i]);
       }, (i + 1) * time);
   }
  };
  periodicIterator([1,2,3], 100);
