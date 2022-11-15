//task 1

const main = () => {
  const base = Number(prompt('Podaj długość boku: '))
  const height = Number(prompt('Podaj wysokość trójkąta'))

  calculateArea(base, height)
}

const calculateArea = (base, height) => {
  if (base <= 0 || height <= 0) {
    alert(
      `${
        base <= 0
          ? 'Oho trójkat o ujemnej podstawie nie istnieje!'
          : 'Oho trójkat o ujemnej wysokości nie instnieje!'
      } Sróbuj jeszcze raz`
    )
    return
  }

  const area = 0.5 * base * height

  if (!area) {
    alert('Ops! Jestes pewien, ze podałes poprawne dane?')
  } else {
    alert(`Pole trójkata o boku ${base} i wysokości ${height} wynosci: ${area}`)
  }
}

main()
