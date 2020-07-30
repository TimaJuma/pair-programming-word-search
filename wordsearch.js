// function accept 2D array of letters an if passed word is found vertically or horizontally
const wordSearch = (letters, word) => {

    // create 2 array with words vertically and horizontally combining letters
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''));

    if (horizontalJoin.includes(word) || verticalJoin.includes(word)) {
        return true;
    } else {
        return false
    }
}


// helper function to transpose 2D array
const transpose = (letters) => {
    const rows = letters.length;
    const cols = letters[0].length;
    const grid = [];

    for (let j = 0; j < cols; j++) {
        grid[j] = Array(rows);
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[j][i] = letters[i][j];
        }
    }
    return grid;
};

module.exports = wordSearch;