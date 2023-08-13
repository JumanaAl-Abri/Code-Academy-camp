let countEven = 0;
let countOdd = 0;
const getLength = (word) => {
    for( let i=0; i<word.length; i++)
    {
        if (word.length % 2 == 0) {
            countEven++;
            console.log(`User is a girl`);

        } else {
            countOdd++;
            console.log(`User is a boy`);
        }
    }
}
getLength('Jumana');