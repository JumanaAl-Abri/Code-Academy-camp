function alternatePositiveNegative(arr) {
    const result = [];
    let posIndex = 0;
    let negIndex = 0;

    while (posIndex < arr.length && negIndex < arr.length) {
        while (posIndex < arr.length && arr[posIndex] < 0) {
            posIndex++;
        }

        while (negIndex < arr.length && arr[negIndex] >= 0) {
            negIndex++;
        }

        if (posIndex < arr.length) {
            result.push(arr[posIndex]);
            posIndex++;
        }

        if (negIndex < arr.length) {
            result.push(arr[negIndex]);
            negIndex++;
        }
    }

    return result;
}

const inputArray = [4,2,-2,-1,5,0,5,-3,2];
console.log(alternatePositiveNegative(inputArray));
