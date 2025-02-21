const malkhor = ['alim', 'redouan', 'tamim', 'alim', 'tamim', 'russel', 'russel'];
function dupliCate(array){
  let uniquarray = []
  for (const item of array)
  {
    if (uniquarray.includes(item)===false) {
      uniquarray.push(item);
    }
  }

  return uniquarray;
}
const result = dupliCate(malkhor);
console.log(result);
