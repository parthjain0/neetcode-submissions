class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;
        grid.forEach((row, rowIndex) => {
            row.forEach((value, colIndex) => {
                if (value === '1') {
                    count += 1;
                    this.transform(rowIndex, colIndex, grid);
                }
            });
        });
        return count;
    };

    transform(ri, ci, grid) {
        if ((grid[ri]?.[ci]) !== '1') return;
        grid[ri][ci] = '0';
        this.transform(ri + 1, ci, grid);
        this.transform(ri - 1, ci, grid);
        this.transform(ri, ci + 1, grid);
        this.transform(ri, ci - 1, grid);
    }
}
