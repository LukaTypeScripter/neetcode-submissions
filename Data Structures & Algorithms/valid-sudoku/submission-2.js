class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
    // check if there is an duplicate in row
    for (let row of board) {
        if (!this.isValidGroup(row)) return false;
    }
        // check if there is no duplicates in columns
        for(let columnIdx = 0;columnIdx < 9;columnIdx++) {
            let column = [];
             for(let rowIdx = 0;rowIdx < 9;rowIdx++) {
                const rowValue = board[rowIdx][columnIdx];
                column.push(rowValue)
            if (!this.isValidGroup(column)) return false;
            }
        }
            // check if there is no duplicates in row
            for(let columnIdx = 0;columnIdx < 9;columnIdx++) {
            let row = [];
             for(let rowIdx = 0;rowIdx < 9;rowIdx++) {
                const rowValue = board[columnIdx][rowIdx];
                row.push(rowValue)
            if (!this.isValidGroup(row)) return false;
            }
        }

        // check if there is no duplicates in 3x3
        for(let square = 0; square < 9; square++) {
                let box = [];
               for(let i = 0;i < 3;i++) {
                  for(let j = 0;j < 3;j++) {
                        let row = Math.floor(square / 3) * 3 + i;
                        let col = (square % 3) * 3 + j;
                        box.push(board[row][col])
                        if (!this.isValidGroup(box)) return false;
                }
               }
        }
        return true;
    }

        isValidGroup = (group) => {
        const seen = new Set();
        for (let num of group) {
            if (num !== '.') {
                if (seen.has(num)) return false;
                seen.add(num);
            }
        }
        return true;
    };
}
