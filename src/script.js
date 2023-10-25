findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

function findUniq(arr) {
  // do magic
  return arr.find(item => arr.indexOf(item) === arr.lastIndexOf(item))
}
