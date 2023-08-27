const getNo = (num1, num2, num3, num4, num5) => {
    let k = 2;
    if (k == 1) {
      console.log(`${num1} , ${num2} ,${num3} , ${num4},${num5} `);
    }else if (k == 2) {
        console.log(`${num2} , ${num1} ,${num5} , ${num4},${num3} `);
    }
     else if (k == 3) {
        console.log(`${num3} , ${num2} ,${num1} , ${num5},${num4} `);
    }
     else if (k == 4) {
        console.log(`${num4} , ${num3} ,${num2} , ${num1},${num5} `);}
        else if (k == 5) {
        console.log(`${num1} , ${num2} ,${num3} , ${num4},${num5} `);}
  };
  console.log(getNo(1,2,3,4,5));