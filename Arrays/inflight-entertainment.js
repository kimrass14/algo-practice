
const inFlight = (movies, flightTime) => {
    for(let i=0; i < movies.length; i++) {
        const remainder = flightTime - movies[i]
        if (movies.indexOf(remainder, i+1)) {
            return console.log([movies[i], remainder])
        }
    }
}
inFlight([1,2,3,4,5,6], 3)