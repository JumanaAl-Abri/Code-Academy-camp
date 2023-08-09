const getTotal = (num1, num2, num3) => {
  if (num1 + num2 == 9) {
    console.log(`${num1} + ${num2} = 9 `);
  }else if (num2 + num3 == 9) {
    console.log(`${num2} + ${num3} = 9 `);
  }
   else if (num1 + num3 == 9) {
    console.log(`${num1} + ${num3} = 9 `);
  }
   else {
    console.log("No numbers equal 9");
  }
};
getTotal(5,6,3);