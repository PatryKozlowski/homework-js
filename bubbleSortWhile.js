const bubbleSortWhile = (array) => {
  const maxNumber = Math.max(...array)
  let swapp = array.indexOf(maxNumber) === array.length
  while (!swapp) {
    swapp = true
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        //swap
        const tmp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = tmp
        swapp = false
      }
    }
  }
  return console.log(array)
}
