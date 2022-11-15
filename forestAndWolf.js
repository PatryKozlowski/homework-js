//task 2

//zmienne dostępne tylko w ciele funkcji - nie są globalne, toworzne dopiero przy uruchomieniu fukncji
//funkcja samowywolujaca się
;(function () {
  let playerHealth = 6
  let wolfHealth = 4
  const maxWolfAttack = 3
  const maxPlayerAttack = 2
  const runAwayChance = 30
  const startGame = 'Idąc lasem spotykasz ogromnego wilka... Co robisz?'
  const move =
    'Jeśli chcesz usciec wpisz [uciekam], jezeli podejmujesz walkę [walka]'
  const question = 'Co wybierasz? uciekam/walka'
  const wordCombat = 'walka'
  const wordRunAway = 'uciekam'
  const successfulEscape = 'Udało Ci sie uciec przed wilkiem - Wygrałeś'
  const escapeFailed = 'Ucieczka nie powiodła sie'
  const angryWolf = 'Rozlościles wilka - wilk atakuje'
  const wolfWin = 'Wilk pokonał Cię'
  const playerWin = 'Wygrałeś wilk pokonany!'
  const dntCheat = 'Nie oszukuj'

  const init = () => {
    drawHealth(playerHealth, wolfHealth)
    say(startGame)
    say(move)

    const choice = action(question).toLowerCase()

    const wordCombatLowerCase = wordCombat.toLowerCase()
    const wordRunAwayLowerCase = wordRunAway.toLowerCase()

    switch (choice) {
      case wordCombatLowerCase:
        combat()
        break

      case wordRunAwayLowerCase:
        runAway(runAwayChance)
        break

      default:
        say(dntCheat)
        break
    }
  }

  const drawPlayerHealth = (player) => {
    let array = []
    for (let index = 0; index < player; index++) {
      array.push('❤️')
    }

    return array
  }

  const drawWolfHealth = (wolf) => {
    let array = []
    for (let index = 0; index < wolf; index++) {
      array.push('🤎')
    }

    return array
  }

  const drawHealth = (player, wolf) => {
    const playerHealth = drawPlayerHealth(player)
    const wolfHealth = drawWolfHealth(wolf)

    if (player > 0) {
      alert(`[👤 - gracz] ${playerHealth}`)
    }

    if (wolf > 0) {
      alert(`[🐺 - wilk] ${wolfHealth}`)
    }
  }

  const say = (text) => {
    alert(text)
  }

  const action = (text) => {
    return prompt(text)
  }

  const probability = (chance) => {
    return Math.floor(Math.random() * 100) <= chance
  }

  const attackValueRandomize = (value) => {
    return Math.floor(Math.random() * (value - 1 + 1) + 1)
  }

  const runAway = (chnace) => {
    const runAwayChance = probability(chnace)

    if (runAwayChance) {
      say(successfulEscape)
    } else {
      say(escapeFailed)
      nextRound()
    }
  }

  const wolfAttack = () => {
    const damage = attackValueRandomize(maxWolfAttack)
    playerHealth = playerHealth - damage
    alert(`Wilk zadał Ci ${damage} obrazen`)

    drawHealth(playerHealth, wolfHealth)
  }

  const nextRound = () => {
    say(angryWolf)
    wolfAttack()
    if (playerHealth <= 0) {
      say(wolfWin)
    } else {
      combat()
    }
  }

  const combat = () => {
    const damage = attackValueRandomize(maxPlayerAttack)
    wolfHealth = wolfHealth - damage
    alert(`Brawo, zadałeś ${damage} obrazen wilkowi`)
    drawHealth(playerHealth, wolfHealth)

    if (wolfHealth <= 0) {
      say(playerWin)
    } else {
      nextRound()
    }
  }

  init()
})()
