
//check if a string is a palindrome, 2 ways
//input is string, output is true or false

//Option 1 - with JS functions
const palindrome = (string) => {
    const nonChar = /[\W_]/g
    const updatedString = string.replace(nonChar,'')
    const reverse = updatedString.split('').reverse().join('')
    if(updatedString === reverse) {
        console.log("true")
    } else {
        console.log("false")
    }
}
palindrome('0_0 (: /-\ :) 0–0')

//Option 2- with for loop
const palindrome2 = (string) => {
    const nonChar = /[\W_]/g
    const updatedString = string.replace(nonChar,'')
    const length = updatedString.length

    for(let i = 0; i < length/2; i++) {
        if(updatedString[i] != updatedString[length-1-i]) {
            console.log("false")
        } else {
            console.log('true')
        }
    }
}    
palindrome2('not a palindrome')





//test cases:
// palindrome(“race car”)
//should return true
// palindrome(“not a palindrome”) 
// //should return false
// palindrome(“A man, a plan, a canal. Panama”) 
// //should return true
// palindrome(“never odd or even”) 
// //should return true
// palindrome(“nope”) 
// //should return false
// palindrome(“almostomla”) 
// //should return false
// palindrome(“My age is 0, 0 si ega ym.”) 
// //should return true
// palindrome(“1 eye for of 1 eye.”) 
// //should return false
// palindrome(“0_0 (: /-\ :) 0–0”) 
// //should return true