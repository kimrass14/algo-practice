
const topScores = (unorderedScores, highestPossibleScores) => {
    const scoreCounts = new Array(highestPossibleScores + 1).fill(0)

    //increase value by 1 in new array at the index that equals the score
    for (let i=0; i < unorderedScores.length; i++) {
        scoreCounts[unorderedScores[i]] += 1
    }

    const sortedScores = []

    //for each index where value is greater than 0, push index number as a value into sortedScores array
    for (let j = 1; j < 101; j++) {
        if (scoreCounts[j] > 0) {
            for (let k = 1; k <= scoreCounts[j]; k++)
            sortedScores.push(j)
        }
    }
    return console.log(sortedScores)
}
topScores([37, 91, 89, 41, 65, 91, 53], 100);