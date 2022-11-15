//task 7

const giveNumbers = () => {
  let moreThen10 = []

  for (let index = 0; index < 3; index++) {
    const number = Number(prompt(`#${index + 1}/3 Podaj liczbę:`))

    if (number > 10) {
      moreThen10.push(number)
    }
  }

  console.log(...moreThen10)
}

giveNumbers()
