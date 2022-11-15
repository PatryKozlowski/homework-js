//task 5

const reversString = (string) => {
  const reversedString = string.split('').reverse().join('')
  const palindrome = string === reversedString
  return console.log(
    `${palindrome ? 'Słowo jest palindromem' : 'Słowo nie jest palindromem'}`
  )
}

reversString('kajak')
reversString('patryk')
reversString('radar')
