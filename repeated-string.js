// https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
// There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string.
// Example
//s = 'abcac'
//n = 10
// The substring we consider is abcacabcac, the first 10 characters of the infinite string. There are 4 occurrences of a in the substring.

//length of string
//number of a's in the string
//length of infinite string divided by input string
//floor times number of a's
//for the remainder, loop over input string, if letter = a, then increase counter of a's

function repeatedString(s, n) {
    
    let inputCounter = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            inputCounter++
        }
    }
    
    const loops = Math.floor(n / s.length)
    let counter = loops * inputCounter
    // console.log(counter)

    const remainder = n % s.length
    // console.log(remainder)

    for (let i = 0; i < remainder; i++) {
        if (s[i] === 'a') {
            counter++
        }
    }
    console.log(counter)
}
repeatedString('a', 10)
// repeatedString('abca', 100)