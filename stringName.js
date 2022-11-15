//task 6

const string = (string) => {
  const indexOfFirstTrim = string.indexOf(' ')
  const indexOfSecondTrim = string.lastIndexOf(' ')
  const firstName =
    string.charAt(0).toUpperCase() +
    string.slice(1, indexOfFirstTrim).toLowerCase()
  const middleName =
    string.charAt(indexOfFirstTrim + 1).toUpperCase() +
    string.slice(indexOfFirstTrim + 2, indexOfSecondTrim).toLowerCase()
  const lastName = string.charAt(indexOfSecondTrim + 1).toUpperCase()

  if (middleName === lastName) {
    return console.log(`${firstName} ${lastName}.`)
  } else {
    return console.log(`${firstName} ${middleName} ${lastName}.`)
  }
}

string('pAtRyK pAwEŁ kOZŁOwski')
string('pAtRyK kOZŁOwski')
