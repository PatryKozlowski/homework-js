//task 4

//funkcja samowyzwalająca, zmienne dostpęne tylko w ciele funkcji (nie są globalne)
;(function () {
  let a
  let b
  let c
  let delta

  const number = () => {
    a = Number(prompt('Podaj a: '))
    b = Number(prompt('Podaj b: '))
    c = Number(prompt('Podaj c: '))
  }

  const calculateDelta = (a, b, c) => {
    return (delta = Math.pow(b, 2) - 4 * a * c)
  }

  const positiveDelta = (b, delta, a) => {
    const x1 = ((-b - Math.sqrt(delta)) / 2) * a
    const x2 = ((-b + Math.sqrt(delta)) / 2) * a
    return console.log(`x = ${x1} | x = ${x2}`)
  }

  const zeroDelta = (b, a) => {
    const x = (-b / 2) * a
    return console.log(`x = ${x}`)
  }

  const init = () => {
    number()
    calculateDelta(a, b, c)
    console.log('Delta wynosi ' + delta)

    if (delta > 0) {
      positiveDelta(b, delta, a)
    } else if (delta === 0) {
      zeroDelta(b, a)
    } else {
      console.log('Brak pierwiastków rzeczywistych')
    }
  }

  init()
})()
