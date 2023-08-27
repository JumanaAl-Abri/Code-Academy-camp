function counting(S) {
    let count = 0;

    for (let i = 0; i < S.length; i++) {
        let lower = 0;
        let upper = 0;

        for (let x = i; x < S.length; x++) {
            if (S[x] >= 'a' && S[x] <= 'z') {
                lower++;
            } else {
                upper++;
            }

            if (lower === upper) {
                count++;
            }
        }
    }

    return count;
}
console.log(counting("WomensDAY")); //4
