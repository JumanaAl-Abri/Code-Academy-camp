function range(a, x, y) {
    for (let i = x; i <= y; i++) {
        if (!a.includes(i)) {
            return false;
        }
    }
    return true;
}
const array = [1, 4, 5, 2, 7, 8, 3];
const x = 2;
const y = 5;

console.log( range(array, x, y));