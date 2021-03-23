//solution: https://leetcode.com/problems/valid-sudoku/discuss/476369/Javascript-Solution-(beats-100)-with-explanation-(real-explanations)
const board = [
	['5', '3', '.', '.', '7', '.', '.', '.', '.'],
	['6', '.', '.', '1', '9', '5', '.', '.', '.'],
	['.', '9', '8', '.', '.', '.', '.', '6', '.'],
	['8', '.', '.', '.', '6', '.', '.', '.', '3'],
	['4', '.', '.', '8', '.', '3', '.', '.', '1'],
	['7', '.', '.', '.', '2', '.', '.', '.', '6'],
	['.', '6', '.', '.', '.', '.', '2', '8', '.'],
	['.', '.', '.', '4', '1', '9', '.', '.', '5'],
	['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const sudoku = (board) => {
	
	const columnObj = {};
    let counter = 0
	for (let i = 0; i < board.length; i++) {
        //loop through columns
        const square = board[i][counter]
		if (square > 0 && !(square in columnObj)) {
			columnObj[square] = 1;
		} else if (square in columnObj) {
            return console.log('column false')
        }
        counter++

        //loop through rows
        const rowObj = {};
        for (let j=0; j < 9; j++) {
            const rowSquare = board[i][j]
            if (rowSquare > 0 && !(rowSquare in rowObj)) {
                rowObj[rowSquare] = 1;
            } else if (rowSquare in rowObj) {
                return console.log('row false');
            }
            
            // if ((i === 0 || i === 3 || i === 6) && (j === 0 || j === 3 || j === 6)) {
                
			// 						const array3x3 = [
			// 							board[i][j],
			// 							board[i][j + 1],
			// 							board[i][j + 2],
			// 							board[i + 1][j],
			// 							board[i + 1][j + 1],
			// 							board[i + 1][j + 2],
			// 							board[i + 2][j],
			// 							board[i + 2][j + 1],
			// 							board[i + 2][j + 2],
			// 						];
			// 				console.log('array', array3x3);
                        
            // }
        }
	}

    return console.log('true');
};
sudoku(board);
