//task 8

const getUserNumbers = (arrNumber, howManyNumbers) => {
  for (let index = 0; index < howManyNumbers; index++) {
    const number = Number(
      prompt(`Podaj liczbę: ${index + 1}/${howManyNumbers}`)
    )

    if (!number && number !== 0) {
      index--
      alert('Musisz podać liczbę')
      const info = String(
        prompt(
          'Jeśli chcesz przerwać wpisz TAK lub T, jezelni chcesz kontynuować dwolony klawisz'
        )
      )

      if (info === 'T' || info === 'TAK') {
        break
      } else {
        alert('Uwazaj! Wpisujesz dalej')
      }
    } else {
      arrNumber.push(number)
    }
  }
}

const randomizeUserNumber = (userNumbers) => {
  return userNumbers[Math.floor(Math.random() * userNumbers.length)]
}

const main = () => {
  let numbers = []
  let amount = 3
  let randomNumber = null

  if (numbers.length < amount) {
    getUserNumbers(numbers, amount)
    randomNumber = randomizeUserNumber(numbers)
  }

  if (randomNumber !== undefined && numbers.length === amount) {
    alert(`Wylosowana liczba z zakresu ${numbers} to ${randomNumber}`)
  }
}

main()
