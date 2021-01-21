//define an object with each word of the note being a key with an arbitrary value, like 'false'
//loop through the magazine array of strings (each word is a separate string)
//if the magazine word is a key in the object then delete key from object
//after looping, if object if empty, then return "Yes"

//OR if magazine word is a key, then change value to 'true'. after loop, return all values in the note object. Search for any value of false. If none, then 'Yes'

const magazine = ["give", "me", "one", "grand", "today", "night"]
const note = ["give", "one", "grand", "today"]
const checkMagazine = (magazine, note) => {
    //create object with each note word being a key
    let noteObj = {}
    for (let i = 0; i < note.length; i++) {
        noteObj[note[i]] = true
    }
    
    for (let j = 0; j < magazine.length; j++) {
        if (noteObj[magazine[j]]) {
            delete noteObj[magazine[j]]
            // console.log(noteObj)
        }
    }

    if (Object.keys(noteObj).length === 0) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}
checkMagazine(magazine, note)