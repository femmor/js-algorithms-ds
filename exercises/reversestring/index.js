// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // Solution 1
    // convert the given str to an array
    // use the reverse helper method to reverse the array
    // join the array back into a str with the join method
    return str.split("").reverse().join("");
}

module.exports = reverse;
