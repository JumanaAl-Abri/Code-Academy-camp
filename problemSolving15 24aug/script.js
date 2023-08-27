function NonRepeating(s) {
    const charFrequency = new Map();

    // Count the frequency of each character
    for (const char of s) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }

    // Find the first non-repeating character
    for (const char of s) {
        if (charFrequency.get(char) === 1) {
            return char;
        }
    }

    return "no non-repeating character is found";

console.log(NonRepeating("leetcode")); 
}
