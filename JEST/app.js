findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 24, 24, 24, 24, 20  ]) === 20
findUniq([ 69, 69, 61, 69, 69 ]) === 61
findUniq([ 21, 21, 21, 21, 211 ]) === 211
findUniq([ 270, 2709, 270, 270, 270 ]) === 2709
findUniq([ 666, 666, 0, 666, 666 ]) === 0

function findUniq(arr) {
  // do magic
  return arr.find(item => arr.indexOf(item) === arr.lastIndexOf(item))
}

module.exports = findUniq