const getMaxAndMin = (x, y, z) => {
  if (x > y && x > z) {
    console.log(`${x} is the maximum number`);
  }else if (y > x && y > z) {
    console.log(`${y} is the maximum number`);
  } else if (z > x && z > y) {
    console.log(`${z} is the maximum number`);
  } else {
    console.log("equal Numbers");
  }
};

getMaxAndMin(1,5,3);