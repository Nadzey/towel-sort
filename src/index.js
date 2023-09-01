module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
      }
      
      return matrix.reduce((result, row, i) => {
        if (i % 2 === 0) {
          result.push(...row);
        } else {
          result.push(...row.reverse());
        }
        return result;
      }, []);
}
