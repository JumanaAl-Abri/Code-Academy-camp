function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.slice(left + 1, right);
}

function longestPalindromicSubstring(s) {
    if (!s || s.length === 0) {
        return "";
    }

    let longest = "";

    for (let i = 0; i < s.length; i++) {
        const oddPalindromic = expandAroundCenter(s, i, i);
        const evenPalindromic = expandAroundCenter(s, i, i + 1);

        if (oddPalindromic.length > longest.length) {
            longest = oddPalindromic;
        }

        if (evenPalindromic.length > longest.length) {
            longest = evenPalindromic;
        }
    }

    return longest;
}

// Example usage
const inputString = "babad";
const result = longestPalindromicSubstring(inputString);
console.log(result); // Output: "bab" or "aba"
