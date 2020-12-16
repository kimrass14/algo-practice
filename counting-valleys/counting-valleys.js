function countingValleys(steps, path) {
    const pathArr = path.split("")
    let currentLevel = 0
    let valleyCount = 0

    for (let i = 0; i < steps; i++) {
        if (pathArr[i] === "U") {
            currentLevel += 1
            if (currentLevel === 0) {
                valleyCount += 1
            }
        } else {
            currentLevel -= 1
        }
    }
    return valleyCount

}
console.log(countingValleys(8, "UDDDUDUU"))