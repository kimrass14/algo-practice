// const input = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];

// desired output = [
// 	[7, 4, 1],
// 	[8, 5, 2],
// 	[9, 6, 3],
// ];

const input = [
	[5, 1, 9, 11],
	[2, 4, 8, 10],
	[13, 3, 6, 7],
	[15, 14, 12, 16],
];


const swapImage = (matrix) => {
    const L = matrix.length
    //transposing: swapping numbers diagonally, 2-4, 3-7, 6-8
    for (let i=0; i < L; i++) {
        for (let j=i; j < L; j++) {
            const temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    //flip horizontally, from outside inward
    for (let i=0; i < L; i++) {
        for (let j=0; j < L/2; j++) {
            const temp = matrix[i][j]
            matrix[i][j] = matrix[i][L - 1 - j]
            matrix[i][L - 1 - j] = temp
        }
    }
    return console.log(matrix)

}
swapImage(input)