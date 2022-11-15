//task 3

const avg = () => {
  const a = Number(prompt('Podaj dodatnią liczbę: '))
  const b = Number(prompt('Podaj dodatnią liczbę: '))

  if (a > 0 && b > 0) {
    const avg = (a + b) / 2
    return console.log(`Średnia to ${avg}`)
  }

  if (a < 0 && b < 0) {
    return console.log('Nie podałeś/podałaś ani jednej dodanie liczby!')
  }

  if (a < 0 || b < 0) {
    return console.log(
      `${
        a < 0
          ? `liczba ${a} jest ujemna`
          : b < 0
          ? `Liczba ${b} jest ujemna`
          : ''
      }`
    )
  }
}

avg()
